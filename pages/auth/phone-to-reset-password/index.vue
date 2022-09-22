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

      // Start:: Requist Data
      data: {
        phoneCode: null,
        phone: null,
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
    submitForm() {
      this.isWaitingRequest = true;
      setTimeout(() => {
        this.$router.replace("/auth/verification-code/verify-contact-method");
      }, 1500);
    },
    // End:: Submit Form
  },
}
</script>