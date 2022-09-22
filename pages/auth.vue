<template>
  <div class="auth_forms_wrapper">
    
    <!-- Start:: Logo Wrapper -->
    <nuxt-link 
      to="/" 
      class="logo_wrapper"
    >
      <img
        src="~/assets/media/logo/logo.svg"
        width="200"
        height="100"
        alt="Logo"
      />
    </nuxt-link>
    <!-- End:: Logo Wrapper -->

    <!-- Start:: Forms Card Wrapper -->
    <div class="forms_card_wrapper">
      <div class="inner_content_wrapper">
        <div class="forms_card_image_wrapper">
          <img
            src="../assets/media/images/authImage1.png"
            width="550"
            height="600"
          />
        </div>

        <div class="forms_content">
          <NuxtChild />
        </div>
      </div>
    </div>
    <!-- Start:: Forms Card Wrapper -->
  </div>
</template>

<script>
export default {
  name: "Authentication",

  layout: "auth",
}
</script>

<style lang="scss" scoped>
.auth_forms_wrapper {
  width: 60%;
  .logo_wrapper {
    margin-bottom: 30px;
    width: 100%;
    @include flexCenterAlignment;
  }

  .forms_card_wrapper {
    position: relative;
    @include flexCenterAlignment;
    border-radius: 10px;
    @include midShadow;
    min-height: 600px;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 250%;
      height: 250%;
      background-image: conic-gradient(transparent, transparent, transparent, var(--main_theme_clr));
      animation: borderAnimation 4s linear infinite both;
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 250%;
      height: 250%;
      background-image: conic-gradient(transparent, transparent, transparent, var(--secondary_theme_clr));
      animation: borderAnimation 4s linear infinite both;
      animation-delay: -2s;
    }
    .inner_content_wrapper {
      position: absolute;
      inset: 3px;
      border-radius: 10px;
      background-color: var(--white_clr);
      @include flexSpaceBetweenAlignment;
      z-index: 1;
      overflow: hidden;
      .forms_card_image_wrapper {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .forms_content {
        padding: 10px 25px;
        width: 50%;
        height: 100%;
        @include flexCenterAlignment;
      }
    }
  }
}

@keyframes borderAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>