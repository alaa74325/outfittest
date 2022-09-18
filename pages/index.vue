<template>
  <div>
    <MainLoader v-if="isLoading" />

    <div class="home_page_content_wrapper">
      <!-- Start:: Hero Carousel -->
      <HeroCarousel />
      <!-- End:: Hero Carousel -->

      <!-- Start:: Services Section -->
      <ServicesSection />
      <!-- End:: Services Section -->

      <!-- Start:: About Section -->
      <AboutSection />
      <!-- End:: About Section -->

      <!-- Start:: App Screens Section -->
      <AppScreensSection />
      <!-- End:: App Screens Section -->

      <!-- Start:: Download App Section -->
      <DownloadApp />
      <!-- End:: Download App Section -->

      <!-- Start:: Testimonials Section -->
      <TestimonialsCarousel />
      <!-- End:: Testimonials Section -->
    </div>
  </div>
</template>

<script>
import MainLoader from "~/components/ui/MainLoader.vue";

// Start:: Importing Home Page Components
import HeroCarousel from "~/components/carousels/HeroCarousel.vue";
import ServicesSection from "~/components/general/ServicesSection.vue";
import AboutSection from "~/components/general/AboutSection.vue";
import AppScreensSection from "~/components/general/AppScreensSection.vue";
import DownloadApp from "~/components/general/DownloadApp.vue";
import TestimonialsCarousel from "~/components/carousels/TestimonialsCarousel.vue";
import BaseInput from "~/components/FormInputs/BaseInput.vue";
// End:: Importing Home Page Components

export default {
  name: "HomePage",

  head() {
    return {
      title: this.$t("meta.home"),
      meta: [
        {
          hid: "title",
          name: "title",
          content: this.$t("meta.home"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("meta.home"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.desc"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("meta.desc"),
        },
      ],
    };
  },

  // asyncData(context) {
  //   console.log("ASYNC DATA CONTEXT ==>", context);
  // },

  components: {
    MainLoader,
    HeroCarousel,
    ServicesSection,
    AboutSection,
    AppScreensSection,
    DownloadApp,
    TestimonialsCarousel,
    BaseInput,
  },

  data() {
    return {
      isLoading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      document.body.style.overflow = "unset";
    }, 1000);
  },
};
</script>
