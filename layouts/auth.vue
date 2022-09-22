<template>
  <v-app :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]">
    <div class="auth_layout">
    <Nuxt />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',

  head() {
    return {
      titleTemplate: "Outfit - %s",
      meta: [
        {
          hid: "title",
          name: "title",
          content: 'Auth Description'
        },
        {
          hid: "og:title",
          property: "og:title",
          content: 'Auth Description'
        },
        {
          hid: "description",
          name: "description",
          content: 'Auth Description'
        },
        {
          hid: "og:description",
          name: "og:description",
          content: 'Auth Description'
        },
      ],
    }
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

<style lang="scss" scoped>
.auth_layout {
  position: relative;
  height: 100vh;
  @include flexCenterAlignment;
}

// START:: ANIMATIONS
@keyframes vertical_movement {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(-20px);
  }
};
@keyframes horizontal_movement {
  from {
    transform: translateX(20px) rotate(90deg);
  }

  to {
    transform: translateX(-20px) rotate(90deg);
  }
};

</style>
