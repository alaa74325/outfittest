<template>
  <nuxt-link :to="`/categories/${categoryData.id}`" class="category_card_wrapper">
    <!-- Start:: Card Image -->
    <img
      class="cat_image"
      :src="categoryData.img"
      :alt="categoryData.name"
      width="105"
      height="140"
    />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--lighter_gray_clr);
  border-radius: 10px;
  .cat_image{ 
    width: 105px;
    height: 140px;
  }
  .cat_name {
    width: 50%;
    max-width: 50%;
    text-align: center;
    color: var(--theme_text_clr );
  }
}
</style>