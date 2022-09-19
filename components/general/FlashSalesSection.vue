<template>
  <div class="flash_sales_section_wrapper">
    <div class="container-xl">
      <!-- Start:: Section Title -->
      <div class="section_title_wrapper">
        <h3 class="section_title"> {{$t("TITLES.salesOfTheDay")}} </h3>
      </div>
      <!-- End:: Section Title -->

      <!-- Start:: Products List -->
      <div class="list_title_wrapper">
        <div class="list_title">{{$t("TITLES.flashSales")}}</div>

        <div class="section_route_wrapper">
          <nuxt-link to="/flash-sales">
            all Sales
          </nuxt-link>
        </div>  
      </div>

      <div class="row">
        <div class="col-md-4 col-xl-3">
          <FlashSaleProductCard />
        </div>
      </div>
      <!-- End:: Products List -->
    </div>
  </div>
</template>

<script>
import FlashSaleProductCard from "@/components/ui/cards/FlashSaleProductCard.vue";

export default {
  name: "FlashSaleSection",

  components: {
    FlashSaleProductCard,
  },
}
</script>

<style lang="scss" scoped>
.flash_sales_section_wrapper {
  padding-block: 50px;
  .section_title_wrapper {
    margin-bottom: 30px;
    .section_title {
      text-align: center;
      color: var(--theme_text_clr);
      font-style: italic;
    }
  }

  .list_title_wrapper {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .list_title {
      color: var(--theme_text_clr);
      font-size: 20px;
      font-family: $medium_font;
    }
  }
}
</style>