<template>
  <div class="static_page_content_wrapper">
    <div class="page_title">
      <h2> Privacy Policy </h2>
    </div>

    <div class="page_content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste animi cupiditate quam nobis 
      blanditiis ratione ut neque dignissimos at inventore quisquam sunt veniam praesentium distinctio, 
      cumque hic quod odio porro enim ab sapiente ex totam. Quasi eaque molestias quaerat mollitia? 
      Perferendis excepturi provident, optio voluptatem tempore impedit quos blanditiis numquam tempora 
      fugit non commodi culpa nulla molestiae corrupti! Sit, amet! Tenetur alias doloremque quibusdam, 
      voluptatum atque quam omnis similique consequuntur voluptas nisi nulla iste, cumque dicta mollitia 
      consequatur iusto facere!
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPlicy",

  layout: 'staticContent',
}
</script>

<style lang="scss" scoped>
.static_page_content_wrapper {
  padding-block: 30px 40px;
  background-color: #F8F8F8;
  .page_title {
    h2 {
      margin-bottom: 20px;
      text-align: center;
      font-size: 35px;
      color: var(--main_theme_clr);
    }
  }

  .page_content {
    word-break: break-word;
    word-spacing: 2px;
    font-size: 22px;
    color: var(--light_gray_clr);
    line-height: 1.6;
    text-align: start;
  }
}
</style>