<template>
  <div class="auth_form_wrapper">
    <!-- Start:: Form Title -->
    <h2 class="form_title">{{ $t('TITLES.welcomeBack') }}</h2>
    <!-- End:: Form Title -->

    <h2> TOKEN:: {{userToken}} </h2>

    <!-- Start:: Form -->
    <form @submit.prevent="validateFormInputs">
      <div class="row justify-content-center">
        <!-- Start:: Email Or Phone Input -->
        <base-input
          type="text"
          :placeholder="$t('FORMS.Placeholders.emailOrPhone')"
          v-model="data.emailOrPhone"
        />
        <!-- End:: Email Or Phone Input -->

        <!-- Start:: Password Input -->
        <base-input
          type="password"
          :placeholder="$t('FORMS.Placeholders.password')"
          v-model="data.password"
        />
        <!-- End:: Password Input -->

        <!-- Start:: Forget Password Route -->
        <div class="forget_password_route_wrapper">
          <nuxt-link
            to="/auth/phone-to-reset-password"
            class="forget_password_route"
          >
            {{ $t('BUTTONS.forgetPassword') }}
          </nuxt-link>
        </div>
        <!-- End:: Forget Password Route -->
      </div>

      <div class="btn_wrapper mb-3">
        <base-button
          :btnText="$t('BUTTONS.singIn')"
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
import { mapGetters } from 'vuex';

export default {
  name: 'Login',

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: 'Login',
    }
  },

  data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Request Data
      data: {
        emailOrPhone: null,
        password: null,
      },
      // End:: Request Data
    }
  },

  computed: {
    ...mapGetters({
      userToken: 'auth/testToken',
    }),
  },

  methods: {
    // Start:: Validate Form
    validateFormInputs() {
      if (!this.data.emailOrPhone) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.emailOrPhone'),
        })
        return
      } else if (!this.data.password) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.password'),
        })
        return;
      } else if (this.data.password.length < 6) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.passwordLength'),
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
      const REQUEST_DATA = new FormData()
      // ********** Start:: Static Data
      REQUEST_DATA.append('device_token', 'static_token');
      REQUEST_DATA.append('type', 'ios');
      // ********** End:: Static Data
      REQUEST_DATA.append('country_id', 1);
      REQUEST_DATA.append('phone', this.data.emailOrPhone);
      REQUEST_DATA.append('password', this.data.password);
      // Start:: Append Request Data

      try {
        let res = await this.$axios.post('login', REQUEST_DATA);
        // console.log("RES::", res);
      } catch(err) {
        this.isWaitingRequest = false;
        // console.log("ERROR::", err.response.data);
        this.$izitoast.error({
          message: err.response.data.message,
        });

        // ********** Start:: Redirect To Verify Account ********** //
        if(!err.response.data.is_active) {
          this.$router.replace('/auth/verification-code/verify-account');
        }
        // ********** End:: Redirect To Verify Account ********** //
      }



      // this.isWaitingRequest = true;
      // setTimeout(() => {
      //   this.$router.replace("/");
      // }, 1500);
    },
    // End:: Submit Form
  },
}
</script>
