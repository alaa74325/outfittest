<template>
    <div class="auth_form_wrapper">
    <!-- Start:: Form Title -->
    <h2 class="form_title">{{ $t('TITLES.verificationCode') }}</h2>
    <h4 class="form_subtitle">
      {{ $t('TITLES.verificationCodeSentTo') }}
      +20 1018930494
    </h4>
    <div class="edit_phone_route_wrapper">
      <nuxt-link to="/auth/edit-contact-info"> {{$t("BUTTONS.editPhone")}} </nuxt-link>
    </div>
    <!-- End:: Form Title -->

    <!-- Start:: Form -->
    <form @submit.prevent="validateFormInputs">
      <div class="row justify-content-center">
        <!-- Start:: Verification Code -->
        <base-otp-input
          otpLength="4"
          v-model="data.verificationCode"
        />
        <!-- End:: Verification Code -->
      </div>

      <div class="btn_wrapper mb-3">
        <base-button
          :btnText="$t('BUTTONS.verify')"
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
  name: "VerificationCode",

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },  
  
  head() {
    return {
      title: 'Verification Code',
    }
  },

  data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Requist Data
      data: {
        verificationCode: null,
      },
      // End:: Requist Data
    }
  },

  computed: {
    // Start:: Verificatio Type
    verificationType() {
      return this.$route.params.type;
    },
    // End:: Verificatio Type
  },

  methods: {
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
        this.$router.replace("/");
      }, 1500);
    },
    // End:: Submit Form
  },
}
</script>