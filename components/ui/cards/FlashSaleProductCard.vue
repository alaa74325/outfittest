<template>
  <div class="flash_sale_product_card_wrapper">
    <!-- Start:: Product Image -->
    <div class="card_image_wrapper">
      <!-- ********** Start:: Sale Badge ********** -->
      <div class="sale_badge_wrapper">
        <img
          src="@/assets/media/icons/ui_icons/lightning.svg"
          alt="lightning icon"
          width="25"
          height="30"
        />

        <span class="sale_percentage">
          55%
        </span>
      </div>
      <!-- ********** End:: Sale Badge ********** -->

      <!-- ********** Start:: Product Images ********** -->
      <img
        class="product_image"
        src="@/assets/media/images/product_1_1.png"
        alt="product name"
        width='300'
        height='400'
      />
      <img
        class="product_image"
        src="@/assets/media/images/product_1_2.png"
        alt="product name"
        width='300'
        height='400'
      />
      <!-- ********** End:: Product Images ********** -->
    </div>
    <!-- End:: Product Image -->

    <!-- Start:: Product Info -->
    <div class="product_info">
      <!-- ********** Start:: Product Name & Price ********** -->
      <p class="product_name"> Single Button Flap Detail Tweed Overcoat </p>
      <p class="product_price">
        <span class="price_after_sale"> EGP 254 </span>
        <span class="price_before_sale"> EGP 355 </span>
      </p>
      <!-- ********** End:: Product Name & Price ********** -->

      <!-- ********** Start:: Product Sold Quantity ********** -->
      <div class="sold_quantity_bar">
        <v-progress-linear
          height="15"
          color="#FAD73B"
          v-model="soldQuantity"
        >
          <span>{{ Math.ceil(soldQuantity) }}% {{$t("TITLES.sold")}}</span>
        </v-progress-linear>
      </div>
      <!-- ********** End:: Product Sold Quantity ********** -->
    </div>
    <!-- End:: Product Info -->
  </div>
</template>

<script>
export default {
  name: "FlashSaleProductCard",

  data() {
    return {
      soldQuantity: 40,
    }
  },
}
</script>

<style lang="scss">
.flash_sale_product_card_wrapper {
  // ********** Start:: Product Image **********
  .card_image_wrapper {
    position: relative;
    width: 99%;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;

    &:hover {
      .product_image {
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          opacity: 1;
        }
      }
    }

    .sale_badge_wrapper {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 20px;
      @include flexCenterAlignment;
      flex-direction: column;
      row-gap: 4px;
      background-color: var(--mid_yellow_clr);
      z-index: 2;
      .sale_percentage {
        color: var(--theme_text_clr);
        font-weight: 600;
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
      &:nth-child(2) {
        opacity: 1;
      }
      &:nth-child(3) {
        opacity: 0;
      }
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
    .product_price {
      margin-bottom: 8px;
      @include flexStartAlignment;
      column-gap: 12px;
      .price_after_sale {
        color: var(--theme_text_clr);
        font-size: 17px;
      }
      .price_before_sale {
        color: var(--light_gray_clr);
        font-size: 14px;
        text-decoration: line-through;
      }
    }
  }
  // ********** End:: Product Info **********

  // ********** Start:: Product Sold Quantity **********
  .sold_quantity_bar {
    .v-progress-linear {
      color: var(--theme_text_clr);
      font-size: 11px;
      font-weight: 600;
      border-radius: 10px;
      background-color: #ffe46b5d;
      .v-progress-linear__determinate {
        border-radius: 10px !important;
      }
      .v-progress-linear__content {
        padding-inline: 5px;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }
  // ********** End:: Product Sold Quantity **********
}

@media (max-width: 850px) {
  .flash_sale_product_card_wrapper {
  // ********** Start:: Product Image **********
  .card_image_wrapper {
    width: 100%;
    height: 220px;
    .sale_badge_wrapper {
      padding: 6px 12px;
      z-index: 2;
      .sale_percentage {
        font-size: 11px;
      }
    }
  }
  // ********** End:: Product Image **********

  // ********** Start:: Product Info **********
  .product_info {
    padding: 6px 5px;
    .product_name {
      font-size: 12px;
    }
    .product_price {
      .price_after_sale {
        font-size: 13px;
      }
      .price_before_sale {
        font-size: 11px;
      }
    }
  }
  // ********** End:: Product Info **********

  // ********** Start:: Product Sold Quantity **********
  .sold_quantity_bar {
    .v-progress-linear {
      color: var(--theme_text_clr);
      font-size: 11px;
      font-weight: 600;
      border-radius: 10px;
      background-color: #ffe46b5d;
      .v-progress-linear__determinate {
        border-radius: 10px !important;
      }
      .v-progress-linear__content {
        padding-inline: 5px;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }
  // ********** End:: Product Sold Quantity **********
}
}
</style>
