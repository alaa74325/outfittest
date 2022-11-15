<template>
  <div class="order-summary">
    <div class="container">
      <div>
        <input type="text" placeholder="Add a Voucher"/>
        <base-button :btnText="buttonText"></base-button>
      </div>
      <h3>Order Summary</h3>
      <div>
        <span>Items</span>
        <span>2</span>
      </div>
      <div>
        <span>Subtotal</span>
        <span>700 EGP</span>
      </div>
      <div>
        <span>Vat (%)</span>
        <span>0.00 EGP</span>
      </div>
      <div>
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
  margin-inline-start: 10px;
}
</style>
