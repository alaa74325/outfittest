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

      <!-- Start:: Flash Sales Section -->
      <FlashSalesSection />
      <!-- End:: Flash Sales Section -->

      <!-- Start:: Offer Pannel Section -->
      <div class="container-xl py-5">
        <div class="row">
          <div
            class="col-md-6"
            data-aos-once="false"
            :data-aos="$i18n.locale == 'ar' ? 'fade-left' : 'fade-right'"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            <SmallOfferPannel
              :offerData="firstOffer"
            />
          </div>
          <div
            class="col-md-6"
            data-aos-once="false"
            :data-aos="$i18n.locale == 'ar' ? 'fade-right' : 'fade-left'"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            <SmallOfferPannel
              :offerData="secondOffer"
            />
          </div>
        </div>
      </div>
      <!-- End:: Offer Pannel Section -->

      <!-- Start:: Top Rated Products Section -->
      <ProductsSection
        :section_title="$t('TITLES.topRated')"
        section_route="/top-rated"
      />
      <!-- End:: Top Rated Products Section -->

      <!-- Start:: Offer Pannel Section -->
      <div class="container-xl py-5">
        <LargeOfferPannel
          data-aos-once="false"
          data-aos="flip-up"
          data-aos-delay="500"
          data-aos-duration="1500"
          :offerData="thirdOffer"
        />
      </div>
      <!-- End:: Offer Pannel Section -->

      <!-- Start:: Most Ordered Products Section -->
      <ProductsSection
        :section_title="$t('TITLES.mostOrdered')"
        section_route="/most-ordered"
      />
      <!-- End:: Most Ordered Products Section -->

      <!-- Start:: Offer Pannel Section -->
      <div class="container-xl py-5">
        <LargeOfferPannel
          data-aos-once="false"
          data-aos="flip-up"
          data-aos-delay="500"
          data-aos-duration="1500"
          :offerData="fourthOffer"
        />
      </div>
      <!-- End:: Offer Pannel Section -->

      <!-- Start:: New Arrival Products Section -->
      <ProductsSection
        :section_title="$t('TITLES.newArrivals')"
        section_route="/new-arrivals"
      />
      <!-- End:: New Arrival Products Section -->
    </div>
  </div>
</template>

<script>
import MainLoader from "~/components/ui/MainLoader.vue";

// Start:: Importing Home Page Components
import HeroSection from "~/components/general/HeroSection.vue";
import CategoriesSection from "~/components/general/CategoriesSection.vue";
import FlashSalesSection from "~/components/general/FlashSalesSection.vue";
import SmallOfferPannel from "~/components/ui/pannels/SmallOfferPannel.vue";
import LargeOfferPannel from "~/components/ui/pannels/LargeOfferPannel.vue";
import ProductsSection from "~/components/general/ProductsSection.vue";
// End:: Importing Home Page Components

export default {
  name: "HomePage",

  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Home",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Home",
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
    FlashSalesSection,
    SmallOfferPannel,
    LargeOfferPannel,
    ProductsSection,
  },

  data() {
    return {
      isLoading: true,

      // Start:: Dummy Data
      firstOffer: {
        image: require("@/assets/media/images/offerPannel.png"),
        title: "Get Jeweled",
        route_text: "show your jewelry now",
        route: "",
      },
      secondOffer: {
        image: require("@/assets/media/images/offerPannel2.png"),
        title: "End Of Summer",
        route_text: "show from here",
        route: "",
      },
      thirdOffer: {
        image: require("@/assets/media/images/largeOfferPannel.png"),
        title: "Fall 2022 Collection",
        desc: "The Astest Fashion For Everyone",
        route: "",
      },
      fourthOffer: {
        image: require("@/assets/media/images/largeOfferPannel2.png"),
        title: "Fall 2022 Collection",
        desc: "The Astest Fashion For Everyone",
        route: "",
      },
      // End:: Dummy Data
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
