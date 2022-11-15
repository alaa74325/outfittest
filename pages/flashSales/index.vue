<template>
  <div class="flash-sales">
    <div class="container">
      <div class="row">
        <div  class="col-lg-12 sales-now">
          <sales-now class="" v-for="sale in 2" :key="sale"></sales-now>
        </div>
        <div class="col-lg-12 ">
          <div class="filter-product">
            <flashSalesFilterOption v-for="item in 6" :key="item" :filterItem="item"></flashSalesFilterOption>
          </div>
        </div>
        <div class="col-lg-12 reset-grid">
          <span>{{ $t("FlashSales.gridSection") }}</span>
          <button><img src="../../assets/images/icons/col12.png"/></button>
          <button><img src="../../assets/images/icons/col6.png"/></button>
          <button><img src="../../assets/images/icons/col4.png"/></button>
        </div>
        <!-- Start:: Product in Sales -->
        <uiCardsFlashSaleProductCard v-for="i in 20" :key="i" class="col-lg-3 col-md-4 col-sm-6"></uiCardsFlashSaleProductCard>
        <!-- End:: Product in Sales -->
      </div>
    </div>
  </div>
</template>
<script>
import salesNow from '../../components/flashSales/salesNow.vue';
export default {
  components: { salesNow },
  name: "FlashSalesPage",
  head() {
    return {
      title: "Flash Sales",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Flash Sales",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Home",
        },
      ],
    };
  },
}
</script>
<style lang="scss" scoped>
.filter-product{
  @include flexStartAlignment;
  background:#F4F5F7;
  border-radius: 6px;
  padding: 20px 25px ;
  margin: 0;
}
.sales-now{
  @include flexSpaceBetweenAlignment;
}
.reset-grid{
  margin:10px 0 15px;
  span{
    color:var(--theme_text_clr);
    font-size: 16px;
  }
  button{
    margin-left:15px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
