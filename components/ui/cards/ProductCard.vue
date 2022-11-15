<template>
  <div class="product_card_wrapper" v-if="selectedProductDetail">
    <!-- Start:: Product Image -->
    <div class="card_image_wrapper">
      <!-- ********** Start:: Product Images ********** -->
      <nuxt-link :to="localePath(`/products/${productData.id}`)">
        <img
          class="product_image"
          :src="selectedProductDetail.main_image"
          :alt="productData.name"
          width='330'
          height='360'
        />
        <img
          class="product_image"
          :src="selectedProductDetail.hover_image"
          :alt="productData.name"
          width='330'
          height='360'
        />
      </nuxt-link>
      <!-- ********** End:: Product Images ********** -->

      <!-- ********** Start:: Wishlist Button ********** -->
      <button class="wishlist_btn">
        <img
          v-show="!productData.is_favourite"
          src="@/assets/media/icons/ui_icons/heart.svg"
          alt="heart icon"
          width='30'
          height='30'
        />
        <img
          v-show="productData.is_favourite"
          src="@/assets/media/icons/ui_icons/colored_heart.svg"
          alt="heart icon"
          width='35'
          height='35'
        />
      </button>
      <!-- ********** End:: Wishlist Button ********** -->
    </div>
    <!-- End:: Product Image -->

    <!-- Start:: Product Info -->
    <div class="product_info">
      <!-- ********** Start:: Product Name & Price ********** -->
      <nuxt-link :to="localePath(`/products/${productData.id}`)">
        <p class="product_name"> {{productData.name}} </p>
        <div class="product_price_and_badge_wrapper">
          <p class="product_price"> $ {{selectedProductDetail.price}} </p>
          <!-- <div class="product_badge"> Top Rated </div> -->
        </div>
      </nuxt-link>
      <!-- ********** End:: Product Name & Price ********** -->

      <!-- ********** Start:: Product Colors ********** -->
      <!-- <div class="product_colors_wrapper"
        v-for="detail in productData.product_details"
        :key="detail.id"
      >
        <div class="radio_input_wrapper">
          <input
            :id="`product_${productData.id}_color_${detail.color.id}`"
            class="radio_input"
            type="radio"
            :name="`${productType}_product_${productData.id}_color_${selectedProductDetail.color.id}`"
            :value="detail.color"
            v-model="selectedProductDetail.color"
          >
          <label class="radio_label" :for="`product_${productData.id}_color_${detail.color.id}`">
            <span class="color_preview" :style="`background: ${detail.color.hex}`"></span>
          </label>
        </div>
      </div> -->
      <!-- ********** End:: Product Colors ********** -->
    </div>
    <!-- End:: Product Info -->
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    productData: {
      type: Object,
      required: true,
    },
    productType: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      selectedProductDetail: null,
    }
  },

  mounted() {
    // Start:: Set Initial Product Detail
    this.selectedProductDetail = this.productData;
    // End:: Set Initial Product Detail
  },
}
</script>

<style lang="scss">
.product_card_wrapper {
  // ********** Start:: Product Image **********
  .card_image_wrapper {
    position: relative;
    width: 300px;
    height: 330px;
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
      @include textEllipsis;
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
          &:checked {
            & + .radio_label {
              border: 1px solid var(--theme_text_clr);
              transform: scale(1.05);
            }
          }
        }
        .radio_label {
          padding: 2px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1px solid var(--border_clr);
          @include flexCenterAlignment;
          .color_preview {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
  // ********** End:: Product Info **********
}

@media (max-width: 850px) {
  .product_card_wrapper {
    // ********** Start:: Product Image **********
    .card_image_wrapper {
      width: 100%;
      height: 220px;

      .wishlist_btn {
        bottom: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
      }
    }
    // ********** End:: Product Image **********

    // ********** Start:: Product Info **********
    .product_info {
    padding: 6px 5px;
      .product_name {
        font-size: 12px;
      }
      .product_price_and_badge_wrapper {
        .product_price {
          font-size: 13px;
        }

        .product_badge {
          padding: 4px;
          font-size: 11px;
        }
      }
      .product_colors_wrapper {
        .radio_input_wrapper {
          .radio_label {
            width: 17px;
            height: 17px;
          }
        }
      }
    }
    // ********** End:: Product Info **********
  }
}
</style>
