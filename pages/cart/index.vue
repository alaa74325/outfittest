<template>
  <div class="cart-page">
    <div class="container">
      <div class="row">
        <div class="header-cart">
          <h3>Shopping Cart</h3>
          <nuxt-link to="/" v-if="!CartEmpty">Continue Shopping</nuxt-link>
        </div>
        <div class="content-cart">
          <div v-if="CartEmpty" class="empty-cart">
            <div>
              <p>your shopping cart is empty!</p>
              <span>let's do some shopping</span>
              <nuxt-link to="/">Back To Home</nuxt-link>
            </div>
          </div>
          <div  class="col-lg-12 data-table" v-else>
            <cart-items  class="col-lg-9"></cart-items>
            <div  class="col-lg-3">
              <order-summary></order-summary>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from '~/components/ui/BaseButton.vue';
import  cartItems from '../../components/cart/cartITems.vue';
import  orderSummary from '../../components/cart/orderSummary.vue';
export default {
  datat(){
    return{
      CartEmpty:true,
    }
  },
  name:'Cart',
  components:{cartItems, BaseButton,orderSummary},
  head() {
    return {
      title: "Cart",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Cart",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Cart",
        },
      ],
    };
  },

}
</script>

<style lang="scss" scoped>
.cart-page{
  background: var(--lighter_gray_clr);
  .header-cart{
    @include flexSpaceBetweenAlignment;
    h3{
      font-style: italic;
      font-size: 32px;
      color:var(--theme_text_clr);
    }
    a{
      color:var(--cart_link_to_home);
      text-decoration: underline;
    }
  }
  .content-cart{
    .empty-cart{
          // text-decoration: none;
          // position: relative;
          // display: inline-block;
          // width: 150px;
          // text-align: center;
          // margin-top: 15px;
          // padding: 8px 20px;
          // font-size: 18px;
          // color: var(--white_clr);
          // border-radius: 10px;
          // background-image: linear-gradient(
          //   90deg,
          //   transparent 50%,
          //   var(--main_theme_clr) 50%
          // );
          // background-position: 100%;
          // background-size: 400%;
          // border: 1px solid var(--main_theme_clr);
    }
    .data-table{
      @include flexSpaceBetweenAlignment;
      align-items: flex-start;
    }
  }
}
</style>
