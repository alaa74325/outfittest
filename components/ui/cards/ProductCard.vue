<template>
  <div class="product_card_wrapper">
    <!-- Start:: Product Image -->
    <div class="card_image_wrapper">
      <!-- ********** Start:: Product Images ********** -->
      <img
        class="product_image"
        src="@/assets/media/images/product_1_1.png"
        alt="product name"
        width='300'
        height='360'
      />
      <img
        class="product_image"
        src="@/assets/media/images/product_1_2.png"
        alt="product name"
        width='300'
        height='360'
      />
      <!-- ********** End:: Product Images ********** -->

      <!-- ********** Start:: Wishlist Button ********** -->
      <button class="wishlist_btn">
        <img
          src="@/assets/media/icons/ui_icons/heart.svg"
          alt="heart icon"
          width='30'
          height='30'
        />
        <!-- <img
          src="@/assets/media/icons/ui_icons/colored_heart.svg"
          alt="heart icon"
          width='35'
          height='35'
        /> -->
      </button>
      <!-- ********** End:: Wishlist Button ********** -->
    </div>
    <!-- End:: Product Image -->

    <!-- Start:: Product Info -->
    <div class="product_info">
      <!-- ********** Start:: Product Name & Price ********** -->
      <p class="product_name"> Single Button Flap Detail Tweed Overcoat </p>
      <div class="product_price_and_badge_wrapper">
        <p class="product_price"> EGP 254 </p>
        <div class="product_badge"> Top Rated </div>
      </div>
      <!-- ********** End:: Product Name & Price ********** -->

      <!-- ********** Start:: Product Colors ********** -->
      <div class="product_colors_wrapper">
        <div class="radio_input_wrapper">
          <input 
            id="color_1" 
            class="radio_input" 
            type="radio" 
            name="product_colors"
            value="#D1CAB1"
            v-model="selectedColor"
          >
          <label class="radio_label" for="color_1" style="background: #D1CAB1"></label>
        </div>

        <div class="radio_input_wrapper">
          <input 
            id="color_2" 
            class="radio_input" 
            type="radio" 
            name="product_colors"
            value="#BFA3B6"
            v-model="selectedColor"
          >
          <label class="radio_label" for="color_2" style="background: #BFA3B6"></label>
        </div>

        <div class="radio_input_wrapper">
          <input 
            id="color_3" 
            class="radio_input" 
            type="radio" 
            name="product_colors"
            value="#4273B2"
            v-model="selectedColor"
          >
          <label class="radio_label" for="color_3" style="background: #4273B2"></label>
        </div>
      </div>
      <!-- ********** End:: Product Colors ********** -->
    </div>
    <!-- End:: Product Info -->
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  data() {
    return {
      selectedColor: "#BFA3B6",
    }
  },
}
</script>

<style lang="scss"> 
.product_card_wrapper {
  // ********** Start:: Product Image **********
  .card_image_wrapper {
    position: relative;
    width: 300px;
    height: 360px;
    border-radius: 10px;
    overflow: hidden;

    &:hover {
      .product_image {
        &:first-child {
          opacity: 0;
        }
        &:nth-child(2) {
          opacity: 1;
        }
      }
    }

    .product_image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.4s linear;
      z-index: 1;
      &:first-child {
        opacity: 1;
      }
      &:nth-child(2) {
        opacity: 0;
      }
    }

    .wishlist_btn {
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      @include flexCenterAlignment;
      z-index: 2;
    }
  }
  // ********** End:: Product Image **********

  // ********** Start:: Product Info **********
  .product_info {
    padding: 10px 5px;
    .product_name {
      margin-bottom: 5px;
      color: var(--light_gray_clr);
      font-size: 15px;
    }
    .product_price_and_badge_wrapper {
      margin-bottom: 8px;
      @include flexSpaceBetweenAlignment;
      .product_price {
        margin-bottom: 0;
        color: var(--theme_text_clr);
        font-size: 16px;
      }

      .product_badge {
        padding: 5px;
        color: var(--light_gray_clr);
        background-color: #F8F8F8;
        font-size: 12px;
        border-radius: 5px;
      }
    }
    .product_colors_wrapper {
      @include flexStartAlignment;
      column-gap: 8px;
      .radio_input_wrapper {
        @include flexCenterAlignment;
        .radio_input {
          display: none;
          &[checked="checked"] {
            & + .radio_label {
              border: 1px solid var(--theme_text_clr);
              transform: scale(1.05);
            }
          }
        }
        .radio_label {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
    }
  }
  // ********** End:: Product Info **********
}
</style>