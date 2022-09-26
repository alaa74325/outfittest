<template>
  <div class="static_content_wrapper">
    <div class="container-xl">
      <!-- Start:: Page Title -->
      <div class="page_title"> {{$t("TITLES.terms")}} </div>
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
  name: "TermsOfServices",

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: "Terms Of Service",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Terms Of Service",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Terms Of Service",
        },
      ],
    };
  },

    async asyncData({i18n }) {
    try {
      const res = await StaticContentPagesServices.getStaticContentData( `terms`, i18n.locale);
      return {
        pageData: res.data.data,
      }
    } catch(err) {
      console.log(err.response.data.message)
    }
  },
}
</script>
