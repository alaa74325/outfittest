<template>
  <div class="mobile_bottom_bar">
    <!-- Start:: Home Route -->
      <nuxt-link to="/">
        <img
          src="~/assets/media/icons/ui_icons/home.svg"
          width="23"
          height="23"
          alt="home"
        />
        <img
          src="~/assets/media/icons/ui_icons/main_colored_home.svg"
          width="23"
          height="23"
          alt="home"
        />

        <span class="route_text"> {{$t("TITLES.home")}} </span>
      </nuxt-link>
      <!-- End:: Home Route -->

      <!-- Start:: Categories Toggler -->
      <button class="categories_drawer_toggler"  @click.stop="$emit('toggleCategoriesDrawer')">
        <img
          src="~/assets/media/icons/ui_icons/categories.svg"
          width="23"
          height="23"
          alt="categories"
        />
        <img
          src="~/assets/media/icons/ui_icons/main_colored_categories.svg"
          width="23"
          height="23"
          alt="home"
        />
        <span class="route_text"> {{$t("TITLES.footerCategories")}} </span>
      </button>
      <!-- End:: Categories Toggler -->

      <!-- Start:: Wishlist Route -->
      <nuxt-link to="/profile/wishlist">
        <img
          src="~/assets/media/icons/ui_icons/heart.svg"
          width="23"
          height="23"
          alt="profile"
        />
        <img
          src="~/assets/media/icons/ui_icons/main_colored_heart.svg"
          width="23"
          height="23"
          alt="profile"
        />
        <span class="route_text"> {{$t("TITLES.wishlist")}} </span>
      </nuxt-link>
      <!-- End:: Wishlist Route -->

      <!-- Start:: Cart Route -->
        <nuxt-link to="/cart">
          <a-badge :count="5" :overflow-count="9">
            <img
              src="~/assets/media/icons/ui_icons/cart.svg"
              width="23"
              height="23"
              alt="profile"
            />
            <img
              src="~/assets/media/icons/ui_icons/main_colored_cart.svg"
              width="23"
              height="23"
              alt="profile"
            />
          </a-badge>
          <span class="route_text"> {{$t("TITLES.cart")}} </span>
        </nuxt-link>
      <!-- End:: Cart Route -->

      <!-- Start:: Profile Route -->
      <nuxt-link to="/profile">
        <img
          src="~/assets/media/icons/ui_icons/user.svg"
          width="23"
          height="23"
          alt="profile"
        />
        <img
          src="~/assets/media/icons/ui_icons/main_colored_user.svg"
          width="23"
          height="23"
          alt="profile"
        />
        <span class="route_text"> {{$t("TITLES.profile")}} </span>
      </nuxt-link>
      <!-- End:: Profile Route -->
  </div>
</template>

<script>
export default {
  name: "MobileBottomBar",

  emits: ["toggleCategoriesDrawer"],
}
</script>

<style lang="scss" scoped>
.mobile_bottom_bar {
  display: none;
}

@media (max-width: 850px) {
  .mobile_bottom_bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 18px 15px;
    background-color: var(--white_clr);
    border-radius: 25px 25px 0 0;
    @include flexSpaceBetweenAlignment;
    column-gap: 10px;
    @include simpleShadow;
    a,
    .categories_drawer_toggler {
      padding: 6px;
      border-radius: 8px;
      @include flexStartAlignment;
      column-gap: 6px;
      border: 1px solid transparent;
      img {
        &:first-of-type {
          display: inline-block;
        }
        &:nth-of-type(2) {
          display: none;
          }
      }
      .route_text {
        display: none;
        color: var(--main_theme_clr);
        font-family: $medium_font;
      }
    }

    a {
      &.nuxt-link-exact-active {
        background-color: rgba(51, 153, 137, 0.2);
        border: 1px solid var(--main_theme_clr);
        img {
          &:first-of-type {
            display: none;
          }
          &:nth-of-type(2) {
            display: inline-block;
            }
        }
        .route_text {
          display: inline-block;
        }
      }
    }
    .categories_drawer_toggler {
      &.active {
      background-color: rgba(51, 153, 137, 0.2);
      border: 1px solid var(--main_theme_clr);
      img {
          &:first-of-type {
            display: none;
          }
          &:nth-of-type(2) {
            display: inline-block;
            }
        }
        .route_text {
          display: inline-block;
        }
      }
    }
  }
}
</style>
