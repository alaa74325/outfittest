<template>
    <div class="container-xl">
  <div class="products_section_wrapper" v-if="sectionItems.length > 0">
      <!-- Start:: Products List -->
      <div class="list_title_wrapper">
        <div class="list_title">{{sectionTitle}}</div>

        <div class="section_route_wrapper">
          <nuxt-link :to="sectionRoute">
            {{ $t("BUTTONS.showAll", {sectionName: sectionTitle}) }}
          </nuxt-link>
          <img
            :src="
              $i18n.locale == 'en' ?
              require('~/assets/media/icons/ui_icons/normalArrowRight.svg') :
              require('~/assets/media/icons/ui_icons/normalArrowLeft.svg')
            "
            alt="Arrow"
            width="20"
            height="20"
          />
        </div>
      </div>

      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3"
          v-for="(item, index) in sectionItems"
          :key="item"
          data-aos-once="false"
          data-aos="fade-up"
          :data-aos-delay="'300' * (index + 1)"
          data-aos-duration="1000"
        >
          <ProductCard
            :productData="item"
          />
        </div>
      </div>
      <!-- End:: Products List -->
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ui/cards/ProductCard.vue";

export default {
  name: "ProductsSection",

  components: {
    ProductCard,
  },

  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
    sectionRoute: {
      type: String,
      required: true,
    },
    sectionItems: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.products_section_wrapper {
  padding-block: 80px;
  overflow: hidden;
  .list_title_wrapper {
    margin-bottom: 25px;
    @include flexSpaceBetweenAlignment;
    .list_title {
      color: var(--theme_text_clr);
      font-size: 20px;
      font-family: $medium_font;
    }

    .section_route_wrapper {
      @include flexStartAlignment;
      column-gap: 6px;

      a {
        color: var(--theme_text_clr);
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}

.products_section_wrapper {
  padding-block: 25px;
  .list_title_wrapper {
    margin-bottom: 15px;
    .list_title {
      font-size: 18px;
    }

    .section_route_wrapper {
      column-gap: 4px;
      a {
        font-size: 14px;
      }
    }
  }
}

@keyframes secondsAnimation {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.1;
  }
}
</style>
