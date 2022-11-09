<template>
    <div class="auth_form_wrapper">
    <!-- Start:: Form Title -->
    <h2 class="form_title">{{ $t('TITLES.verificationCode') }}</h2>
    <h4 class="form_subtitle">
      {{ $t('TITLES.verificationCodeSentTo') }}
      <br/>
      {{ authedUserData.phone }}
    </h4>
    <!-- <div class="edit_phone_route_wrapper">
      <nuxt-link :to="localePath('/auth/edit-contact-info')"> {{$t("BUTTONS.editPhone")}} </nuxt-link>
    </div> -->
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

      // Start:: Request Data
      data: {
        verificationCode: null,
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

    // Start:: Verification Type
    verificationType() {
      return this.$route.params.type;
    },
    // End:: Verification Type
  },

  methods: {
    // Start:: Vuex Set Authed User Data
    ...mapActions({
      setAuthedUserData: "auth/setAuthedUserData",
      deleteAuthedUserData: "auth/deleteAuthedUserData",
    }),
    // End:: Vuex Set Authed User Data

    // Start:: Validate Form
    validateFormInputs() {
      if (!this.data.verificationCode) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.verificationCode'),
        })
        return
      }if (this.data.verificationCode.length < 4) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.verificationCodeLength'),
        })
        return
      } else {
        this.submitForm();
      }
    },
    // End:: Validate Form

    // Start:: Submit Form
    async submitForm() {
      if (this.verificationType == "verify-contact-method") {
        this.isWaitingRequest = true;
        // Start:: Append Request Data
        const REQUEST_DATA = new FormData();
        REQUEST_DATA.append('country_id', this.$cookies.get('outfit_user_country_id'));
        REQUEST_DATA.append('phone', this.phoneNumberWithoutPhoneCode);
        REQUEST_DATA.append('code', this.data.verificationCode);
        // Start:: Append Request Data

        try {
          // ********** Start:: Implement Request ********** //
          let res = await this.$axiosRequest({
            method: 'POST',
            url: 'check_code',
            data: REQUEST_DATA,
          });
          this.isWaitingRequest = false;
          // console.log(res.data);
          // Start:: Delete Cached Data From Previous Step
          // this.deleteAuthedUserData({phone: true, verificationCode: true});
          // this.$cookies.remove('outfit_user_phonecode');
          // this.$cookies.remove('outfit_user_country_id');
          // End:: Delete Cached Data From Previous Step
          this.$izitoast.success({
            message: this.$t('MESSAGES.verifiedSuccessfully'),
          });
          // ********** End:: Implement Request ********** //

          // ********** Start:: Redirect To Reset Password Page ********** //
          this.$router.replace("/auth/reset-password");
          // ********** End:: Redirect To Reset Password Page ********** //
        } catch (err) {
          this.isWaitingRequest = false;
          this.$izitoast.error({
            message: err.response.data.message,
          });
        }
      } else if (this.verificationType == "verify-account") {
        this.isWaitingRequest = true;
        // Start:: Append Request Data
        const REQUEST_DATA = new FormData();
        REQUEST_DATA.append('country_id', this.$cookies.get('outfit_user_country_id'));
        REQUEST_DATA.append('phone', parseInt(this.phoneNumberWithoutPhoneCode));
        REQUEST_DATA.append('code', this.data.verificationCode);
        // Start:: Append Request Data

        try {
          // ********** Start:: Implement Request ********** //
          let res = await this.$axiosRequest({
            method: 'POST',
            url: 'verify',
            data: REQUEST_DATA,
          });
          this.isWaitingRequest = false;

          // Start:: Delete Cached Data From Previous Step
          this.deleteAuthedUserData({phone: true, verificationCode: true});
          this.$cookies.remove('outfit_user_phonecode');
          this.$cookies.remove('outfit_user_country_id');
          // End:: Delete Cached Data From Previous Step

          // Start:: Cache Authed User Data
          this.setAuthedUserData({
            id: res.data.data.id,
            token: res.data.data.token,
          });
          // End:: Cache Authed User Data

          this.$izitoast.success({
            message: this.$t('MESSAGES.verifiedSuccessfully'),
          });
          // ********** End:: Implement Request ********** //

          // ********** Start:: Redirect To Home Page ********** //
          this.$router.replace("/");
          // ********** End:: Redirect To Home Page ********** //
        } catch (err) {
          this.isWaitingRequest = false;
          this.$izitoast.error({
            message: err.response.data.message,
          });
        }
      }
    },
    // End:: Submit Form
  },
}
</script>
