<template>
  <div class="card-sales">
    <p><span>05:30 </span><span>09:13</span></p>
    <p>{{$t("FlashSales.saleNow")}}</p>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.card-sales{
  background: var(--sales_now);
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  width:49.5%;
  display: block;
  p{
    color:var(--theme_text_clr);
    margin:0px;
    font-size: 16px;
    font-weight: 300;

  }
  span:last-of-type{
    font-size: 13px;
  }
}
.card-sales:last-of-type{
  background: var(--sales_now_out);
}
</style>
