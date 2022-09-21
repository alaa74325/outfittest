<template>
  <div class="login_form_wrapper">
    <!-- Start:: Form Title -->
    <h2 class="form_title"> Welcome Back! </h2>
    <!-- End:: Form Title -->

    <!-- Start:: Form -->
    <form class="mt-5" @submit.prevent="validateFormInputs">
      <div class="row justify-content-center">
        <!-- Start:: Email Or Phone Input -->
        <base-input
          type="text"
          :placeholder="$t('PLACEHOLDERS.emailOrPhone')"
          v-model="data.emailOrPhone"
        />
        <!-- End:: Email Or Phone Input -->

        <!-- Start:: Password Input -->
        <base-input
          type="password"
          :placeholder="$t('PLACEHOLDERS.password')"
          v-model="data.password"
        />
        <!-- End:: Password Input -->
        
        <!-- Start:: Forget Password Route -->
        <nuxt-link to="/auth/phone-to-reset-password" class="forget_password_route">  
          {{$t("BUTTONS.forgetPassword")}}
        </nuxt-link>
        <!-- End:: Forget Password Route -->
      </div>

      <div class="btn_wrapper mb-3 d-flex justify-content-center">
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
  name: "login",

  head() {
    return {
      title: "Login",
    };
  },

  data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      data: {
        emailOrPhone: null,
        password: null,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.login_form_wrapper {
  .form_title {
    text-align: center;
    color: var(--theme_text_clr);
    font-style: italic;
    font-size: 40px;
    font-family: $medium_font;
  }

  form {
    .forget_password_route {
      margin-block: 10px 20px;
      color: var(--theme_text_clr);
      font-size: 16px;
      text-align: end;
    }
    .auth_route_wrapper {
      margin-block: 20px;
      @include flexCenterAlignment;
      a {
        @include flexCenterAlignment;
        column-gap: 10px;
        color: var(--light_gray_clr);
        font-size: 18px;
        span {
          color: var(--main_theme_clr);
        }
      }
    }
  }
}
</style>