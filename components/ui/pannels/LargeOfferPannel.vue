<template>
  <div class="large_offer_pannel_wrapper">
    <img
      :src="offerData.image"
      :alt="offerData.name"
      width="600"
      height="400"
    />

    <div class="pannel_overlay">
      <h3 class="pannel_title">
        {{offerData.name}}
      </h3>

      <h5 class="pannel_desc">
        {{offerData.desc}}
      </h5>

      <nuxt-link :to="localePath(`/categories/${offerData.category_id}`)" class="pannel_route">
        {{$t("BUTTONS.ShopNow")}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LargeOfferPannel",

  props: {
    offerData: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.large_offer_pannel_wrapper {
  margin-bottom: 15px;
  position: relative;
  width: 100%;
  height: 450px;
  border-radius: 40px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  .pannel_overlay {
    position: absolute;
    inset: 0;
    padding: 60px 30px;
    background-color: rgba(0, 0, 0, 0.4);
    @include flexCenterAlignment;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;

    .pannel_title {
      margin: 0;
      width: 50%;
      color: var(--white_clr);
      font-size: 65px;
      font-style: italic;
      font-family: $medium_font;
    }

    .pannel_desc {
      margin: 0;
      width: 60%;
      color: var(--white_clr);
      font-size: 22px;
      font-family: $regular_font;
    }

    .pannel_route {
      @include simpleButtonStyle;
      &:hover {
        background-position: 0;
        color: var(--white_clr);
        border: 1px solid var(--white_clr);
      }
    }
  }
}

@media (max-width: 850px) {
  .large_offer_pannel_wrapper {
    width: 100%;
    height: 230px;

    .pannel_overlay {
      padding: 20px;
      justify-content: flex-end;
      row-gap: 11px;

      .pannel_title {
        font-size: 28px;
        width: 100%;
      }

      .pannel_desc {
        width: 100%;
        font-size: 18px;
      }

      .pannel_route {
        margin-top: 0;
        font-size: 14px;
        width: fit-content;
      }
    }
  }
}
</style>
