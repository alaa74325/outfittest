<template>
  <div class="small_offer_pannel_wrapper">
    <img
      :src="offerData.image"
      :alt="offerData.title"
      width="600"
      height="600"
    />

    <div class="pannel_overlay">
      <h3 class="pannel_title">
        {{offerData.title}}
      </h3>

      <nuxt-link :to="`/${offerData.route}`" class="pannel_route">
        {{offerData.route_text}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallOfferPannel",

  props: {
    offerData: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.small_offer_pannel_wrapper {
  position: relative;
  width: 600px;
  height: 600px;
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
    justify-content: flex-end;
    row-gap: 15px;

    .pannel_title {
      margin: 0;
      color: var(--white_clr);
      font-size: 65px;
      font-style: italic;
      font-family: $medium_font;
    }

    .pannel_route {
      color: var(--white_clr);
      font-size: 22px;
      text-decoration: underline;
      text-transform: uppercase;
    }
  }
}

@media (max-width: 850px) {
  .small_offer_pannel_wrapper {
    position: relative;
    width: 100%;
    height: 380px;

    .pannel_overlay {
      padding: 30px 15px;

      .pannel_title {
        font-size: 40px;
        text-align: center;
      }

      .pannel_route {
        font-size: 18px;
      }
    }
  }
}
</style>
