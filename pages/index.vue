<template>
  <div>
    <MainLoader v-if="!homeData" />

    <div
      class="home_page_content_wrapper"
      v-for="item in homeData"
      :key="item.id"
    >
      <!-- Start:: Hero Carousel -->
      <HeroSection
        v-if=" item.view_type == 'main_banner'"
        :sectionData="item.data"
      />
      <!-- End:: Hero Carousel -->

      <!-- Start:: Categories Section -->
      <CategoriesSection
        v-if="item.view_type == 'sub_category'"
        :categories="item.data"
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
              :offerData="pannel"
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
        :sectionType="item.type"
      />
      <!-- End:: Top Rated Products Section -->

      <!-- Start:: Most Ordered Products Section -->
      <ProductsSection
        v-if="item.view_type == 'products' && item.type == 'most_orders'"
        :sectionTitle="item.text"
        :sectionRoute="`/categories/${item.data.id}`"
        :sectionItems="item.data"
        :sectionType="item.type"
      />
      <!-- End:: Most Ordered Products Section -->

      <!-- Start:: Offer Pannel Section -->
      <div class="container-xl py-5" v-if="item.view_type == 'banner'">
        <LargeOfferPannel
          data-aos-once="false"
          data-aos="flip-up"
          data-aos-delay="500"
          data-aos-duration="1500"
          :offerData="item.data"
        />
      </div>
      <!-- End:: Offer Pannel Section -->

      <!-- Start:: New Arrival Products Section -->
      <ProductsSection
        v-if="item.view_type == 'products' && item.type == 'new_arrivals_highlights'"
        :sectionTitle="item.text"
        :sectionRoute="`/categories/${item.data.id}`"
        :sectionItems="item.data"
        :sectionType="item.type"
      />
      <!-- End:: New Arrival Products Section -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
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

  async fetch({store}) {
    await store.dispatch("homePage/getHomePageData");
  },

  data() {
    return {
      isLoading: true,
    };
  },

  computed: {
    ...mapGetters({
      homeData: "homePage/homeData",
    }),
  },
};
</script>
