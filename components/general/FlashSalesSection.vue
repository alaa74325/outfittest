<template>
  <div class="flash_sales_section_wrapper">
    <div class="container-xl">
      <!-- Start:: Section Title -->
      <div class="section_title_wrapper">
        <h3 class="section_title"> {{$t("TITLES.salesOfTheDay")}} </h3>
      </div>
      <!-- End:: Section Title -->

      <!-- Start:: Products List -->
      <div class="list_title_wrapper">
        <div class="list_title">{{$t("TITLES.flashSales")}}</div>

        <div class="section_route_wrapper">
          <nuxt-link to="/flash-sales">
            <span class="timer_text"> Endes In </span>

            <span class="offer_time">
              <span class="hours"> 23 H</span>
              <span class="clock_indecator">:</span>
              <span class="minutes"> 25 M</span>
              <span class="clock_indecator">:</span>
              <span class="seconds"> 45 S</span>
            </span>
          </nuxt-link>
        </div>  
      </div>

      <div class="row">
        <div 
          class="col-md-4 col-xl-3"
          v-for="(item, index) in 4"
          :key="item"
          data-aos-once="false"
          data-aos="fade-up"
          :data-aos-delay="'300' * (index + 1)"
          data-aos-duration="1000"
        >
          <FlashSaleProductCard />
        </div>
      </div>
      <!-- End:: Products List -->
    </div>
  </div>
</template>

<script>
import FlashSaleProductCard from "@/components/ui/cards/FlashSaleProductCard.vue";

export default {
  name: "FlashSaleSection",

  components: {
    FlashSaleProductCard,
  },
}
</script>

<style lang="scss" scoped>
.flash_sales_section_wrapper {
  padding-block: 80px;
  overflow: hidden;
  .section_title_wrapper {
    margin-bottom: 30px;
    .section_title {
      text-align: center;
      color: var(--theme_text_clr);
      font-style: italic;
    }
  }

  .list_title_wrapper {
    margin-bottom: 25px;
    @include flexSpaceBetweenAlignment;
    .list_title {
      color: var(--theme_text_clr);
      font-size: 20px;
      font-family: $medium_font;
    }

    .section_route_wrapper {
      a { 
        color: var(--theme_txet_clr);
        @include flexStartAlignment;
        column-gap: 10px;
        .timer_text {
          color: var(--theme_text_clr);
          font-size: 16px;
          font-weight: 600;
        }
        .offer_time {
          @include flexCenterAlignment;
          .hours,
          .minutes ,
          .seconds {
            background-color: var(--theme_text_clr);
            color: var(--white_clr);
            font-size: 16px;
            padding: 8px;
            border-radius: 6px;
            span {	
              color: var(--theme_txet_clr)
            }
          }
          .clock_indecator {
            display: inline-block;
            margin-inline: 5px;
            font-size: 35px;
            color: var(--theme_txet_clr);
            @include flexCenterAlignment;
            animation: secondsAnimation 1s infinite alternate;
          }
        }
      }
    }
  }
}

@keyframes secondsAnimation {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.1;
  }
}
</style>