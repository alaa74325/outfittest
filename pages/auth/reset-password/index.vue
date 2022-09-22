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

  methods: {
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
