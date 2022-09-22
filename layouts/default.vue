<template>
  <v-app :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]">
    <!-- Start:: Layout Navbar -->
    <TheNavbar/>
    <!-- End:: Layout Navbar -->

    <Nuxt />

    <!-- Start:: Layout Footer -->
    <TheFooter/>
    <!-- End:: Layout Footer -->
  </v-app>
</template>

<script>
import TheNavbar from "~/components/structure/TheNavbar";
import TheFooter from "~/components/structure/TheFooter";

export default {
  name: 'DefaultLayout',

  head() {
    return {
      titleTemplate: "Outfit - %s",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Outfit Website Desc Will Go Here',
        }
      ],
    }
  },

  components: {
    TheNavbar,
    TheFooter,
  },

  mounted() {
    // Start:: Fire Mutation Update Store Auth Values To Fix SSR Bug
    this.$store.commit('auth/updateStateAuthValues', {
      token: window.localStorage.getItem("outfit_website_user_token"),
    });
    // End:: Fire Mutation Update Store Auth Values To Fix SSR Bug
  },
}
</script>
