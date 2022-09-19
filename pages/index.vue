<template>
  <div>
    <MainLoader v-if="isLoading" />

    <div class="home_page_content_wrapper">
      <!-- Start:: Hero Carousel -->
      <HeroSection />
      <!-- End:: Hero Carousel -->

      <!-- Start:: Categories Section -->
      <CategoriesSection />
      <!-- End:: Categories Section -->
    </div>
  </div>
</template>

<script>
import MainLoader from "~/components/ui/MainLoader.vue";

// Start:: Importing Home Page Components
import HeroSection from "~/components/general/HeroSection.vue";
import CategoriesSection from "~/components/general/CategoriesSection.vue";
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
    HeroSection,
    CategoriesSection,
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
