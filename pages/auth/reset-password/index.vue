<template>
  <div class="auth_form_wrapper">
    <!-- Start:: Form Title -->
    <h2 class="form_title">{{ $t('TITLES.resetPassword') }}</h2>
    <!-- End:: Form Title -->

    <!-- Start:: Form -->
    <form @submit.prevent="validateFormInputs">
      <div class="row justify-content-center">
        <!-- Start:: Password Input -->
        <base-input
          type="password"
          :placeholder="$t('FORMS.Placeholders.password')"
          v-model="data.password"
        />
        <!-- End:: Password Input -->

        <!-- Start:: Confirm Password Input -->
        <base-input
          type="password"
          :placeholder="$t('FORMS.Placeholders.confirmPassword')"
          v-model="data.confirmPassword"
        />
        <!-- End:: Confirm Password Input -->
      </div>

      <div class="btn_wrapper mb-3">
        <base-button
          :btnText="$t('BUTTONS.save')"
          :isLoading="isWaitingRequest"
        />
      </div>

      <!-- Start:: Auth Route Wrapper -->
      <div class="auth_route_wrapper">
        <nuxt-link
          :to="localePath('/auth/register')"
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
import {mapActions, mapGetters} from "vuex";
// End:: Importing Vuex Helpers

export default {
  name: 'ResetPassword',

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: 'Reset Password',
    }
  },

  data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Request Data
      data: {
        password: null,
        confirmPassword: null,
      },
      // End:: Request Data
    }
  },

  computed: {
    // Start:: Vuex Get Authed User Data
    ...mapGetters({
      authedUserData: "auth/authedUserData",
    }),
    // End:: Vuex Get Authed User Data

    // Start:: Slice Phone Number To Remove Phonecode
    phoneNumberWithoutPhoneCode() {
      let phoneCode = this.$cookies.get("outfit_user_phonecode").toString();
      let phoneNumber = this.authedUserData.phone.toString();
      return phoneNumber.slice(phoneCode.length, phoneNumber.length);
    },
    // End:: Slice Phone Number To Remove Phonecode
  },

  methods: {
    // Start:: Vuex Set Authed User Data
    ...mapActions({
      deleteAuthedUserData: "auth/deleteAuthedUserData",
    }),
    // End:: Vuex Set Authed User Data

    // Start:: Validate Form
    validateFormInputs() {
      if (!this.data.password) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.password'),
        })
        return;
      } else if (this.data.password.length < 6) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.passwordLength'),
        })
        return;
      } else if (!this.data.confirmPassword) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.confirmPassword'),
        })
        return;
      } else if (this.data.confirmPassword.length < 6) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.confirmPasswordLength'),
        })
        return;
      } else if (this.data.password != this.data.confirmPassword) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.notEqualPasswords'),
        })
        return;
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
      REQUEST_DATA.append('country_id', this.$cookies.get('outfit_user_country_id'));
      REQUEST_DATA.append('phone', parseInt(this.phoneNumberWithoutPhoneCode));
      REQUEST_DATA.append('code', this.$cookies.get('outfit_website_user_verification_code'));
      REQUEST_DATA.append('password', this.data.password);
      // Start:: Append Request Data

      try {
        await this.$axiosRequest({
          method: 'POST',
          url: 'forgot_password',
          data: REQUEST_DATA,
        });
        this.isWaitingRequest = false;
        // Start:: Delete Cached Data From Previous Step
        this.deleteAuthedUserData({phone: true, verificationCode: true});
        this.$cookies.remove('outfit_user_phonecode');
        this.$cookies.remove('outfit_user_country_id');
        // End:: Delete Cached Data From Previous Step

        this.$izitoast.success({
          message: this.$t('MESSAGES.codeSentSuccessfully'),
        });

        this.$router.replace("/auth/login");
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
