<template>
  <div class="header_content_wrapper">
    <div class="container-xl py-0">
      <!-- Start:: Logo -->
      <div class="logo_wrapper">
        <img
          src="~/assets/media/logo/logo.svg"
          width="85"
          height="85"
          alt="Logo"
        />
      </div>
      <!-- End:: Logo -->

      <!-- Start:: Navbar Buttons -->
      <div class="navbar_btns_wrapper">
        <nuxt-link :to="localePath('/')">
          <img
            src="~/assets/media/icons/ui_icons/home_white.svg"
            alt="home icon"
            width="20"
            height="20"
          />
          <span class="route_text">{{ $t('nav.backToHome') }}</span>
        </nuxt-link>
      </div>
      <!-- End:: Navbar Buttons -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthNavbar',
}
</script>
