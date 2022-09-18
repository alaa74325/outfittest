<template>
  <div id="hero_section" class="hero_carousel_wrapper">
    <!-- Start:: Slider -->
    <client-only>
      <owl-carousel
        dir="ltr"
        :nav="false"
        :dots="true"
        :items="1"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="6000"
        :dragEndSpeed="2000"
        :smartSpeed="2000"
        :center="true"
        style="z-index: 2;"
      >
        <!-- Start:: Slider Item -->
        <div
          dir="ltr"
          class="slider_image_wrapper"
          v-for="slide in $t('mainSlider')"
          :key="slide.id"
        >
          <!-- <img
            src="~/assets/media/images/slider/slider01.svg"
            alt="Slider Image"
            class="slider_image"
          /> -->

          <div class="slide_content_wrapper">
            <div class="container-xl">
              <div class="slide_desc_content_wrapper">
                <!-- <h2>{{ slide.desc }}</h2> -->

                <h4 class="subtitle">{{ slide.mainTitle }}</h4>
                <h2 class="slide_title">{{ slide.title }}</h2>

                <div class="slide_desc">
                  {{ slide.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End:: Slider Item -->
      </owl-carousel>
    </client-only>
    <!-- End:: Slider -->

    <!-- Start:: Mobile Mockup -->
    <div
      class="mobile_mockup_wrapper focus_screen"
      data-aos-once="true"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <img src="~/assets/media/images/mobileScreens/logoScreen.png" alt="App" />
    </div>
    <!-- End:: Mobile Mockup -->

    <!-- Start:: Section Shape -->
    <div class="section_shape">
      <img src="~/assets/media/shapes/heroSliderShape.png" alt="shape" />
    </div>
    <!-- End:: Section Shape -->
  </div>
</template>

<script>
export default {
  name: "HeroCarousel",

  methods: {
    triggerRoute() {
      this.$router.push("/register");
    },
  },
};
</script>
