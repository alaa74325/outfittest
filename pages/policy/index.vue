<template>
  <div class="static_content_wrapper">
    <div class="container-xl">
      <!-- Start:: Page Title -->
      <div class="page_title"> {{$t("TITLES.returnsPolicy")}} </div>
      <!-- End:: Page Title -->

      <!-- PageData::: {{pageData}} -->

      <div
          class="page_content"
          v-for="item in pageData"
          :key="item.id"
        >
        {{item.desc}}
      </div>
    </div>
  </div>
</template>

<script>
import StaticContentPagesServices from "~/services/StaticContentPagesServices";

export default {
  name: "Policy",

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: "Returns Policy",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Returns Policy",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Returns Policy",
        },
      ],
    };
  },

  async asyncData({i18n }) {
    try {
      const res = await StaticContentPagesServices.getStaticContentData( `policy`, i18n.locale);
      return {
        pageData: res.data.data,
      }
    } catch(err) {
      console.log(err.response.data.message)
    }
  },
}
</script>
