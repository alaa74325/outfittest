<template>
  <div class="auth_form_wrapper">
    <!-- Start:: Form Title -->
    <h2 class="form_title">{{ $t('TITLES.createAccount') }}</h2>
    <!-- End:: Form Title -->

    <!-- Start:: Form -->
    <form @submit.prevent="validateFormInputs">
      <div class="row justify-content-center">
        <!-- Start:: Name Input -->
        <base-input
          type="text"
          :placeholder="$t('FORMS.Placeholders.fullName')"
          v-model="data.name"
        />
        <!-- End:: Name Input -->

        <!-- Start:: Email Input -->
        <base-input
          type="email"
          :placeholder="$t('FORMS.Placeholders.email')"
          v-model="data.email"
        />
        <!-- End:: Email Input -->

        <!-- Start Phone Input -->
        <base-country-flag-phone-input
          @changeKey="phonecodeChanged"
          :placeholder="$t('FORMS.Placeholders.phone')"
          :preSelectedPhoneCode="data.phoneCode"
          v-model="data.phone"
        />
        <!-- End Phone Input -->

        <!-- Start:: Password Input -->
        <base-input
          type="password"
          :placeholder="$t('FORMS.Placeholders.password')"
          v-model="data.password"
        />
        <!-- End:: Password Input -->
      </div>

      <div class="btn_wrapper mb-3">
        <base-button
          :btnText="$t('BUTTONS.register')"
          :isLoading="isWaitingRequest"
        />
      </div>

      <!-- Start:: Auth Route Wrapper -->
      <div class="auth_route_wrapper">
        <nuxt-link
          to="/auth/login"
          v-html="$t('BUTTONS.loginRoute')"
        ></nuxt-link>
      </div>
      <!-- End:: Auth Route Wrapper -->
    </form>
    <!-- End:: Form -->
  </div>
</template>

<script>
// Start:: Importing Vuex Helpers
import {mapActions} from "vuex";
// End:: Importing Vuex Helpers
import AuthServices from "~/services/AuthServices";

export default {
  name: 'Register',

  transition: {
    name: 'fadeInUp',
    mode: 'out-in',
  },

  head() {
    return {
      title: 'Register',
    }
  },

  data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Request Data
      data: {
        name: null,
        email: null,
        phoneCode: null,
        phone: null,
        password: null,
      },
      // End:: Request Data
    }
  },

  methods: {
    // Start:: Vuex Set Authed User Data
    ...mapActions({
      setAuthedUserData: "auth/setAuthedUserData",
    }),
    // End:: Vuex Set Authed User Data

    // Start:: Change Selected Phonecode
    phonecodeChanged(data) {
      this.data.phoneCode = data
    },
    // End:: Change Selected Phonecode

    // Start:: Validate Form
    validateFormInputs() {
      if (!this.data.name) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.name'),
        })
        return
      } else if (!this.data.email) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.email'),
        })
        return
      } else if (!this.data.phone) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.phone'),
        })
        return
      } else if (!this.data.password) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.password'),
        })
        return
      } else if (this.data.password.length < 6) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.passwordLength'),
        })
        return
      } else {
        this.submitForm()
      }
    },
    // End:: Validate Form

    // Start:: Submit Form
    async submitForm() {
      this.isWaitingRequest = true;
      // Start:: Append Request Data
      const REQUEST_DATA = new FormData();
      REQUEST_DATA.append('fullname', this.data.name);
      REQUEST_DATA.append('email', this.data.email);
      REQUEST_DATA.append('country_id', this.data.phoneCode.id);
      REQUEST_DATA.append('phone', this.data.phone);
      REQUEST_DATA.append('password', this.data.password);
      // Start:: Append Request Data

      try {
        // ********** Start:: Implement Request ********** //
        // let res = await AuthServices.sendAuthData('register', REQUEST_DATA, this.$i18n.locale);
        // this.isWaitingRequest = false;
        // window.localStorage.setItem("outfit_user_phonecode", this.data.phoneCode.key);
        // window.localStorage.setItem("outfit_user_country_id", this.data.phoneCode.id);
        // this.setAuthedUserData({
        //   phone: this.data.phoneCode.key+this.data.phone,
        //   verificationCode: res.data.dev_message,
        // });
        // this.$izitoast.success({
        //   message: this.$t('MESSAGES.registeredSuccessfully'),
        // });

        let res = await this.$axiosRequest({
          method: 'POST',
          url: 'register',
          data: REQUEST_DATA,
        });
        this.isWaitingRequest = false;
        // window.localStorage.setItem("outfit_user_phonecode", this.data.phoneCode.key);
        // window.localStorage.setItem("outfit_user_country_id", this.data.phoneCode.id);
        this.$cookies.set('outfit_user_phonecode', this.data.phoneCode.key);
        this.$cookies.set('outfit_user_country_id', this.data.phoneCode.id);

        this.setAuthedUserData({
          phone: this.data.phoneCode.key+this.data.phone,
          verificationCode: res.data.dev_message,
        });
        this.$izitoast.success({
          message: this.$t('MESSAGES.registeredSuccessfully'),
        });


        // ********** End:: Implement Request ********** //

        // ********** Start:: Redirect To Verify Account ********** //
        this.$router.replace('/auth/verification-code/verify-account');
        // ********** End:: Redirect To Verify Account ********** //
      } catch (err) {
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
