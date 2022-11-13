<template>
  <v-app
    class="default_layout"
    :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]"
  >
    <!-- Start:: Layout Navbar -->
    <TheNavbar
      :categoriesIsAvailable="false"
      :categoriesDrawerIsActive="false"
    />
    <!-- End:: Layout Navbar -->

    <Nuxt />

    <!-- Start:: Layout Footer -->
    <TheFooter />
    <!-- End:: Layout Footer -->

    <!-- Start:: Mobile Bottom Bar -->
    <MobileBottomBar @toggleCategoriesDrawer="toggleCategoriesDrawer" />
    <!-- End:: Mobile Bottom Bar -->
  </v-app>
</template>

<script>
import TheNavbar from '~/components/navigation/TheNavbar'
import TheFooter from '~/components/navigation/TheFooter'
import MobileBottomBar from '~/components/navigation/MobileBottomBar'

export default {
  name: 'ProfileLayout',

  head() {
    return {
      titleTemplate: 'Outfit - %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Outfit Website Desc Will Go Here',
        },
      ],
    }
  },

  components: {
    TheNavbar,
    TheFooter,
    MobileBottomBar,
  },

  data() {
    return {
      // Start:: Drawers Controle Data
      categoriesDrawerIsActive: false,
      // End:: Drawers Controle Data
    }
  },

  methods: {
    // Start:: Toggle Categories Drawer
    toggleCategoriesDrawer() {
      this.categoriesDrawerIsActive = !this.categoriesDrawerIsActive
    },
    // End:: Toggle Categories Drawer
  },

  mounted() {
    // Start:: Fire Mutation Update Store Auth Values To Fix SSR Bug
    this.$store.commit('auth/updateStateAuthValues', {
      id: this.$cookies.get('outfit_website_user_id'),
      token: this.$cookies.get('outfit_website_user_token'),
      phone: this.$cookies.get('outfit_website_user_phone'),
      verificationCode: this.$cookies.get(
        'outfit_website_user_verification_code'
      ),
    })
    // End:: Fire Mutation Update Store Auth Values To Fix SSR Bug
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 850px) {
  .default_layout {
    padding-bottom: 75px;
  }
}
</style>
