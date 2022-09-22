<template>
  <div class="auth_form_wrapper">
    <!-- Start:: Form Title -->
    <h2 class="form_title">{{ $t('TITLES.welcomeBack') }}</h2>
    <!-- End:: Form Title -->

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
export default {
  name: 'login',

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

      // Start:: Requist Data
      data: {
        emailOrPhone: null,
        password: null,
      },
      // End:: Requist Data
    }
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
      } else {
        this.submitForm();
      }
    },
    // End:: Validate Form

    // Start:: Submit Form
    submitForm() {
      this.isWaitingRequest = true;
      setTimeout(() => {
        this.$router.replace("/");
      }, 1500);
    },
    // End:: Submit Form
  },
}
</script>
