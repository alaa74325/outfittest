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
  background: var(--secondary_theme_clr);
  padding: 20px;
  text-align: center;
  p{
    color:var(--theme_text_clr);

  }
}
</style>
