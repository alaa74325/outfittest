<template>
    <div class="auth_form_wrapper">
    <!-- Start:: Form Title -->
    <h2 class="form_title">{{ $t('TITLES.passwordReset') }}</h2>
    <h4 class="form_subtitle">{{ $t('TITLES.enterYourPhoneNumber') }}</h4>
    <!-- End:: Form Title -->

    <!-- Start:: Form -->
    <form @submit.prevent="validateFormInputs">
      <div class="row justify-content-center">
        <!-- Start Phone -->
        <base-country-flag-phone-input
          @changeKey="phonecodeChanged"
          :placeholder="$t('FORMS.Placeholders.phone')"
          :preSelectedPhoneCode="data.phoneCode"
          v-model="data.phone"
        />
        <!-- End Phone -->
      </div>

      <div class="btn_wrapper mb-3">
        <base-button
          :btnText="$t('BUTTONS.send')"
          :isLoading="isWaitingRequest"
        />
      </div>

      <!-- Start:: Auth Route Wrapper -->
      <div class="auth_route_wrapper">
        <nuxt-link
          to="/auth/register"
          v-html="$t('BUTTONS.registerRoute')"
        ></nuxt-link>
      </div>
      <!-- End:: Auth Route Wrapper -->
    </form>
    <!-- End:: Form -->
  </div>
</template>

<script>
// Start:: Importing Vuex Helpers
import {mapActions} from 'vuex';
// End:: Importing Vuex Helpers

export default {
  name: "PhoneToResetPasswprd",

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: 'Phone To Recive Verification Code',
    }
  },

    data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Request Data
      data: {
        phoneCode: null,
        phone: null,
      },
      // End:: Request Data
    }
  },

  methods: {
    // Start:: Change Selected Phonecode
    phonecodeChanged(data) {
      this.data.phoneCode = data;
    },
    // End:: Change Selected Phonecode

    // Start:: Vuex Set Authed User Data
    ...mapActions({
      setAuthedUserData: "auth/setAuthedUserData",
    }),
    // End:: Vuex Set Authed User Data

    // Start:: Validate Form
    validateFormInputs() {
      if (!this.data.phone) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.phone'),
        })
        return
      } else {
        this.submitForm();
      }
    },
    // End:: Validate Form

    // Start:: Submit Form
    async submitForm() {
      this.isWaitingRequest = true;

      // Start:: Append Request Data
      const REQUEST_DATA = new FormData();
      REQUEST_DATA.append('country_id', this.data.phoneCode.id);
      REQUEST_DATA.append('phone', this.data.phone);
      // Start:: Append Request Data

      try {
        let res = await this.$axiosRequest({
          method: 'POST',
          url: 'forgot_password',
          data: REQUEST_DATA,
        });

        this.isWaitingRequest = false;
        // Start:: Cache Authed User Data
        this.$cookies.set("outfit_user_phonecode", this.data.phoneCode.key);
        this.$cookies.set("outfit_user_country_id", this.data.phoneCode.id);
        this.setAuthedUserData({
          phone: this.data.phoneCode.key+this.data.phone,
          verificationCode: res.data.data.code,
        });
        // End:: Cache Authed User Data
        this.$izitoast.success({
          message: this.$t('MESSAGES.codeSentSuccessfully'),
        });

        this.$router.replace("/auth/verification-code/verify-contact-method");
      } catch(err) {
        this.isWaitingRequest = false;
        this.$izitoast.error({
          message: err.response.data.message,
        });
      }
    },
    // End:: Submit Form
  },
}
</script>
