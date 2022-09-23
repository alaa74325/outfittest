<template>
  <nuxt-link :to="`/categories/${categoryData.id}`" class="category_card_wrapper">
    <!-- Start:: Card Image -->
    <div class="img_wrapper">
      <img
        class="cat_image"
        :src="categoryData.img"
        :alt="categoryData.name"
        width="105"
        height="140"
      />
    </div>
    <!-- End:: Card Image -->

    <h5 class="cat_name">{{categoryData.name}}</h5>
  </nuxt-link>
</template>

<script>
export default {
  name: "CategoryCard",

  props: {
    categoryData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.category_card_wrapper {
  padding: 10px;
  @include flexSpaceBetweenAlignment;
  background-color: var(--lighter_gray_clr);
  border-radius: 10px;
  .img_wrapper {
    .cat_image{
      width: 105px;
      height: 140px;
    }
  }
  .cat_name {
    width: 50%;
    max-width: 50%;
    text-align: center;
    color: var(--theme_text_clr );
  }
}

@media (max-width: 850px) {
.category_card_wrapper {
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  .img_wrapper {
    padding: 8px;
    background-color: var(--lighter_gray_clr);
    border-radius: 10px;
    .cat_image{
      width: 90px;
      height: 90px;
    }
  }
  .cat_name {
    margin-block: 8px;
    font-size: 15px;
  }
}
}
</style>
