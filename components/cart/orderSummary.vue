<template>
  <div class="order-summary">
    <div class="container">
      <div class="add-voucher">
        <input type="text" placeholder="Add a Voucher"/>
        <base-button :btnText="buttonText"></base-button>
      </div>
      <h3>Order Summary</h3>
      <div class="order-details">
        <span>Items</span>
        <span>2</span>
      </div>
      <div class="order-details">
        <span>Subtotal</span>
        <span>700 EGP</span>
      </div>
      <div class="order-details">
        <span>Vat (%)</span>
        <span>0.00 EGP</span>
      </div>
      <div class="order-details">
        <span>Voucher</span>
        <span>-100 EGP</span>
      </div>
      <div class="total-price">
        <span>Total</span>
        <span>600 EGP</span>
      </div>
      <base-button to="/" btnText="Continue To Shopping"></base-button>
    </div>
  </div>
</template>
<script>
import BaseButton from '../ui/BaseButton.vue'
export default {
  components: { BaseButton },
  data(){
    return{
      buttonText:'Apply'
    }
  }
}
</script>

<style lang="scss" scoped>
.order-summary{
    margin-inline-start: 1%;
    border-radius: 10px;
    background:var(--white_clr);
    width: 99%;
    padding: 0 8px;
    font-weight: 400;
    .add-voucher{
      @include flexSpaceBetweenAlignment;
      border:1px solid var(--light_gray_clr);
      border-radius: 10px;
      input{
        width:70%;
        outline: 0;
        height: 45px;
        font-size: 14px;
        padding: 8px ;
      }
      button{
        padding: 8px ;
        font-size: 17px;
        border: 1px solid transparent;
      }
    }
    h3{
      font-size: 20px;
      color:var(--theme_text_clr) !important;
      margin:10px 0;
    }
    .order-details{
      @include flexSpaceBetweenAlignment;
      margin-block: 15px ;
      span{
        color:var(--theme_text_clr);
      }
    }

}
</style>
