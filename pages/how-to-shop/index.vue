<template>
  <div class="static_content_wrapper">
    <div class="container-xl">
      <!-- Start:: Page Title -->
      <div class="page_title"> {{$t("TITLES.howToShop")}} </div>
      <!-- End:: Page Title -->

      <div class="page_content" v-html="PageData"> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToShop",

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: "How To Shop",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "How To Shop",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "How To Shop",
        },
      ],
    };
  },

  async asyncData({$axiosRequest}) {
    try {
      const res = await $axiosRequest({
        method: "GET",
        url: "how_to_shop",
      });
      return {
        pageData: res.data.data.how_to_shop,
      }
    } catch(err) {
      console.log(err.response.data.message)
    }
  },

  // async asyncData({$axios }) {
  //   try {
  //     const res = await $axios.get("how_to_shop");
  //     return {
  //       pageData: res.data.data.how_to_shop,
  //     }
  //   } catch(err) {
  //     console.log(err.response.data.message)
  //   }
  // },

  // async created() {
  //     const howToShopData = await StaticContentPagesServices.getStaticContentData(`how_to_shop`, this.$i18n.locale);
  //     console.log(howToShopData);
  // }
}
</script>
