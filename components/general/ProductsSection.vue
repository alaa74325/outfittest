<template>
  <div class="products_section_wrapper">
    <div class="container-xl">
      <!-- Start:: Products List -->
      <div class="list_title_wrapper">
        <div class="list_title">{{section_title}}</div>

        <div class="section_route_wrapper">
          <nuxt-link :to="section_route">
            {{ $t("BUTTONS.showAll", {sectionName: section_title}) }}
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
          class="col-md-4 col-xl-3"
          v-for="(item, index) in 4"
          :key="item"
          data-aos-once="false"
          data-aos="fade-up"
          :data-aos-delay="'300' * (index + 1)"
          data-aos-duration="1000"
        >
          <ProductCard />
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
    section_title: {
      type: String,
      required: true,
    },
    section_route: {
      type: String,
      required: true,
    },
  }
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
        color: var(--theme_txet_clr);
        color: var(--theme_text_clr);
        font-size: 16px;
        font-weight: 600;
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