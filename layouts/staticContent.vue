<template>
  <v-app :class="[{ rtl: $i18n.locale == 'ar' }, { ltr: $i18n.locale == 'en' }]">
    <TheNavbar/>
    <HeroCarousel
      :sliderData="sliderData"
    />

    <Nuxt />

    <DownloadApp/>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavbar from "~/components/structure/TheNavbar";
import HeroCarousel from "~/components/carousels/HeroCarousel.vue";
import DownloadApp from "~/components/general/DownloadApp.vue";
import TheFooter from "~/components/structure/TheFooter";

export default {
  name: 'StaticContent',

  head() {
    return {
      titleTemplate: "Captain One - %s",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Static Content Description'
        }
      ],
    }
  },
  
  components: {
    TheNavbar,
    HeroCarousel,
    DownloadApp,
    TheFooter,
  },

  data() {
    return {
      sliderData: [
        {
          id: 1,
          image: require("~/assets/media/images/slider/slider01.svg"),
          desc: "In the first steps of success Alalmiyalhura Company with the Golden System Trading Company announces a contract for a partnership to operate the Captain one application",
        },
        {
          id: 2,
          image: require("~/assets/media/images/slider/slider01.svg"),
          desc: "To become one of the largest applications in the Kingdom of Saudi Arabia with the highest investments It is an application that specializes in connecting individuals that enables you to book flights that allow you to reach any destination throughout the Kingdom of Saudi Arabia with the best services and provides you with complete comfort and time savings. Your place and destination.",
        },
        {
          id: 3,
          image: require("~/assets/media/images/slider/slider01.svg"),
          desc: "The Captain one application also offers you the service of delivering bad orders from restaurants or stores, in addition to delivering packages from anywhere to your desired destination",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.static_content_header {
  position: relative;
  height: 100vh;
  background-image: url("~/assets/media/images/slider/slider01.svg");
  background-size: 100%;
  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(21, 50, 82, 0.85);
    z-index: 1;
  }
  .section_shape {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 104%;
    z-index: 2;
    img {
      width: 100%;
    }
  }
}
</style>
