<template>
  <div class="static_page_content_wrapper">
    <MainLoader v-if="isLoading" />

    <div class="container">
      <div class="page_title">
        <h2>{{ $t("terms.title") }}</h2>
      </div>

      <div class="page_content">
        <p v-for="item in $t('terms.desc')" :key="item.id">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MainLoader from "~/components/ui/MainLoader.vue";
export default {
  name: "TermsAndConditions",

  head() {  
    return {
      title: this.$t("meta.terms"),
      meta: [
        {
          hid: "title",
          name: "title",
          content: this.$t("meta.terms"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("meta.terms"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.desc"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("meta.desc"),
        },
      ],
    }
  },

  components: {
    MainLoader,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      document.body.style.overflow = "unset";
    }, 1000);
  },
  layout: "staticContent",
};
</script>

<style lang="scss" scoped>
.static_page_content_wrapper {
  padding-block: 30px 40px;
  background-color: #f8f8f8;

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
    font-size: 17px;
    color: var(--light_gray_clr);
    line-height: 1.6;
    text-align: start;
  }
}
</style>
