<template>
  <div class="testimonials_carousel_wrapper">
    <!-- Start:: Section Title -->
    <div class="section_title_wrapper">
      <h2 class="section_title">{{ $t("clientSay") }}</h2>
    </div>
    <!-- End:: Section Title -->

    <!-- Start:: Slider -->
    <client-only>
      <owl-carousel
      data-aos-once="true" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"
        dir="ltr"
        :nav="true"
        :dots="false"
        :items="1"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="6000"
        :dragEndSpeed="2000"
        :smartSpeed="2000"
        :center="true"
        :responsive="{
          0: {
            nav: false,
          },
          550: {
            nav: true,
          },
        }"
      >
        <!-- START:: SLIDER ITEM -->
        <div
          dir="ltr"
          class="slider_image_wrapper"
          v-for="item in $t('clientSlider')"
          :key="item.name"
        >
          <div class="testimonial_card_wrapper">
            <div class="testimonial_card_body">
              <div class="body_text_wrapper">
                {{ item.desc }}
              </div>

              <div class="testimonial_image">
                <img
                  class="client_image"
                  :src="require(`@/assets/media/images/${item.image}`)"
                  alt="Client Naem"
                  width="80"
                  height="80"
                />
              </div>

              <div class="client_info">
                <div class="name">{{ item.name }}</div>
                <div class="role">{{ item.job }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- END:: SLIDER ITEM -->
      </owl-carousel>
    </client-only>
    <!-- End:: Slider -->
  </div>
</template>

<script>
export default {
  name: "TestimonialsCarousel",
};
</script>

<style lang="scss">
.testimonials_carousel_wrapper {
  padding-block: 60px;
  background-color: #f8f8f8;
  .section_title_wrapper {
    text-align: center;
    .section_title {
      color: var(--main_theme_clr);
      font-size: 45px;
      font-weight: 600;
    }
  }

  .owl-carousel {
    position: relative;
    .owl-stage-outer {
      .owl-item {
        .testimonial_card_wrapper {
          .testimonial_card_body {
            padding: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .body_text_wrapper {
              position: relative;
              margin-bottom: 25px;
              width: 75%;
              padding: 25px;
              word-break: break-word;
              word-spacing: 2px;
              font-size: 20px;
              color: var(--light_gray_clr);
              text-align: center;
              line-height: 1.3;
              direction: rtl;
              &::before {
                content: "";
                position: absolute;
                top: -30px;
                left: 0;
                display: block;
                width: 45px;
                height: 45px;
                background-image: url("../../assets/media/icons/ui_icons/quote.png");
                background-size: 100%;
              }
              &::after {
                content: "";
                position: absolute;
                bottom: -30px;
                right: 0;
                display: block;
                width: 45px;
                height: 45px;
                background-image: url("../../assets/media/icons/ui_icons/quoteReverse.png");
                background-size: 100%;
              }
            }

            .testimonial_image {
              margin-bottom: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              .client_image {
                width: unset;
                border-radius: 50%;
                object-fit: cover;
              }
            }

            .client_info {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              row-gap: 6px;
              .name {
                margin-bottom: 0;
                color: var(--main_theme_clr);
                font-size: 18px;
                font-family: $regular_font;
              }
              .role {
                color: var(--dark_secondary_theme_clr);
                font-size: 18px;
                font-family: $regular_font;
              }
            }
          }
        }
      }
    }

    .owl-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 25px;
      padding-inline: 60px;

      .owl-prev,
      .owl-next {
        margin: 0;
        padding: 18px 25px;
        color: var(--mid_main_theme_clr);
      }

      .owl-prev {
        span {
          opacity: 0;
        }
        &::before {
          content: "";
          display: block;
          width: 38px;
          height: 15px;
          background-image: url("../../assets/media/icons/ui_icons/arrowLeft.svg");
        }
        &:hover {
          background-color: transparent;
        }
      }

      .owl-next {
        span {
          opacity: 0;
        }
        &::before {
          content: "";
          display: block;
          width: 38px;
          height: 15px;
          background-image: url("../../assets/media/icons/ui_icons/arrowRight.svg");
        }
        &:hover {
          background-color: transparent;
        }
      }
    }
  }
}

@media (max-width: 850px) {
  .testimonials_carousel_wrapper {
    padding-block: 30px;
    .section_title_wrapper {
      .section_title {
        font-size: 30px;
      }
    }

    .owl-carousel {
      .owl-stage-outer {
        .owl-item {
          .testimonial_card_wrapper {
            .testimonial_card_body {
              padding: 8px;
              .body_text_wrapper {
                margin-bottom: 15px;
                width: 100%;
                padding: 10px;
                font-size: 16px;
                &::before {
                  display: none;
                }
                &::after {
                  content: "";
                  position: absolute;
                  bottom: -30px;
                  right: 0;
                  display: block;
                  width: 45px;
                  height: 45px;
                  background-image: url("@/assets/media/icons/ui_icons/quoteReverse.png");
                  background-size: 100%;
                }
              }

              .testimonial_image {
                margin-bottom: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .client_image {
                  width: unset;
                  border-radius: 50%;
                  object-fit: cover;
                }
              }

              .client_info {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                row-gap: 6px;
                .name {
                  margin-bottom: 0;
                  color: var(--main_theme_clr);
                  font-size: 18px;
                }
                .role {
                  color: var(--dark_secondary_theme_clr);
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
