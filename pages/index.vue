<template>
  <div>
    <MainLoader v-if="!homeData" />

    <!-- <pre dir="ltr">
      <code>
        HOME DATA:: {{homeData}}
      </code>
    </pre> -->

    <div
      class="home_page_content_wrapper"
      v-for="item in homeData"
      :key="item.id"
    >
      <!-- Start:: Hero Carousel -->
      <HeroSection v-if=" item.view_type == 'slider'"/>
      <!-- End:: Hero Carousel -->

      <!-- Start:: Categories Section -->
      <CategoriesSection
        v-if="item.view_type == 'sub_category'"
      />
      <!-- End:: Categories Section -->

      <!-- Start:: Flash Sales Section -->
      <FlashSalesSection
        v-if="item.view_type == 'flash_sale' && item.data"
      />
      <!-- End:: Flash Sales Section -->

      <!-- Start:: Offer Pannel Section -->
      <div class="container-xl py-5" v-if="item.view_type == 'divided_slider'">
        <div class="row">
          <div
            v-for="(pannel, index) in item.data"
            :key="pannel.id"
            class="col-md-6"
            data-aos-once="false"
            :data-aos="$i18n.locale === 'ar' || index === 1 ?  'fade-left' : 'fade-right'"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            <SmallOfferPannel
              :offerData="firstOffer"
            />
          </div>
        </div>
      </div>
      <!-- End:: Offer Pannel Section -->

      <!-- Start:: Top Rated Products Section -->
      <ProductsSection
        v-if="item.view_type == 'products' && item.type == 'top_rated'"
        :sectionTitle="item.text"
        :sectionRoute="`/categories/${item.data.id}`"
        :sectionItems="item.data"
      />
      <!-- End:: Top Rated Products Section -->

      <!-- Start:: Offer Pannel Section -->
      <!-- <div class="container-xl py-5">
        <LargeOfferPannel
          data-aos-once="false"
          data-aos="flip-up"
          data-aos-delay="500"
          data-aos-duration="1500"
          :offerData="thirdOffer"
        />
      </div> -->
      <!-- End:: Offer Pannel Section -->

      <!-- Start:: Most Ordered Products Section -->
      <ProductsSection
        v-if="item.view_type == 'products' && item.type == 'most_orders'"
        :sectionTitle="item.text"
        :sectionRoute="`/categories/${item.data.id}`"
        :sectionItems="item.data"
      />
      <!-- End:: Most Ordered Products Section -->

      <!-- Start:: Offer Pannel Section -->
      <div class="container-xl py-5" v-if="item.view_type == 'sliders'">
        <LargeOfferPannel
          v-for="pannel in item.data"
          :key="pannel.id"
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
        v-if="item.view_type == 'products' && item.type == 'new_arrivals_highlights'"
        :sectionTitle="item.text"
        :sectionRoute="`/categories/${item.data.id}`"
        :sectionItems="item.data"
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

  components: {
    MainLoader,
    HeroSection,
    CategoriesSection,
    FlashSalesSection,
    SmallOfferPannel,
    LargeOfferPannel,
    ProductsSection,
  },

  async asyncData({$axiosRequest}) {
    try {
      const res = await $axiosRequest({
        url: "home",
        params: {
          main_category_id: 27,
        }
      });
      return {
        homeData: res.data.data,
      }
    } catch(err) {
      console.log(err.response.data.message);
    }
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
};
</script>
