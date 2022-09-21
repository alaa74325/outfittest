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

}
</script>

<style lang="scss" scoped>
.auth_layout {
  position: relative;
  height: 100vh;
  @include flexCenterAlignment;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 90px;
    height: 180px;
    background-image: url("../assets/media/shapes/dottedPattern.svg");
    background-size: 100%;
  }

  &::before {
    top: 80px;
    left: 65px;
    animation: vertical_movement 1.7s linear infinite;
    animation-direction: alternate;
  }

    &::after {
    bottom: 20px;
    right: 150px;
    transform: translateY(0);
    animation: horizontal_movement 2s linear infinite;
    animation-direction: alternate;
  }
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

@media (max-width: 850px) {
  .auth_layout {
  position: relative;
  height: 100vh;
  background: linear-gradient(to bottom, #0C4384, #4B86DD);
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    width: 60px;
    height: 120px;
  }

  &::before {
    top: 70px;
    left: 50px;
  }

    &::after {
    bottom: 0;
    right: 50px;
  }
}
}
</style>
