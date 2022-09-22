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
export default {
  name: "Register",

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: "Register",
    };
  },

    data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Requist Data
      data: {
        name: null,
        email: null,
        phoneCode: null,
        phone: null,
        password: null,
      },
      // End:: Requist Data
    }
  },

  methods: {
    // Start:: Change Selected Phonecode
    phonecodeChanged(data) {
      this.data.phoneCode = data;
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
    submitForm() {
      this.isWaitingRequest = true;
      setTimeout(() => {
        this.$router.replace("/auth/verification-code/verify-account");
      }, 1500);
    },
    // End:: Submit Form
  },
}
</script>