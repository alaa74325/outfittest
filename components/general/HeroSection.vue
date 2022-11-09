<template>
  <div class="hero_section_wrapper">
    <!-- Start:: Section Text -->
    <div
      class="section_text_content_wrapper"
      data-aos-once="false"
      :data-aos="$i18n.locale == 'ar' ? 'fade-left' : 'fade-right'"
      data-aos-delay="500"
      data-aos-duration="1500"
    >
      <h3 class="section_title">Outfit Presents</h3>

      <h1 class="section_desc">
        {{sectionData.name}}
      </h1>

      <div class="btn_wrapper">
        <button class="star_now_btn" @click="scrollToSection('categories_section')">
          {{$t("BUTTONS.ShopNow")}}
          <img
            :src="
              $i18n.locale == 'en' ?
              require('~/assets/media/icons/ui_icons/arrowRight.svg') :
              require('~/assets/media/icons/ui_icons/arrowLeft.svg')
            "
            alt="Arrow"
            width="35"
            height="25"
          />
        </button>
      </div>
    </div>
    <!-- End:: Section Text -->

    <!-- Start:: Section Image -->
    <div
      class="section_image_wrapper"
      data-aos-once="false"
      :data-aos="$i18n.locale == 'ar' ? 'fade-right' : 'fade-left'"
      data-aos-delay="500"
      data-aos-duration="1500"
    >
      <img
        :src="sectionData.image"
        :alt="sectionData.name"
      />
    </div>
    <!-- End:: Section Image -->
  </div>
</template>

<script>
export default {
  name: "HeroSection",

  props: {
    sectionData: {
      type: Object,
      required: true,
    },
  },

  methods: {
    // Start:: Scroll To Section
    scrollToSection(section_id) {
      if (this.$route.path != this.localePath('/')) {
        this.$router.push(this.localePath('/'))
      } else {
        const selected_section = document.querySelector(`#${section_id}`)
        selected_section.scrollIntoView()
      }
    },
    // End:: Scroll To Section
  }
}
</script>

<style lang="scss" scoped>
.hero_section_wrapper {
  padding-block: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow-x: hidden;

  .section_text_content_wrapper {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;

    .section_title {
      color: var(--theme_text_clr);
      font-style: italic;
    }

    .section_desc {
      margin-block: 10px 25px;
      font-size: 70px;
      font-weight: 400;
      font-style: italic;
      line-height: 1.4;
      text-transform: uppercase;
      color: var(--theme_text_clr);
      span {
        color: var(--main_theme_clr);
      }
    }

    .btn_wrapper {
      display: flex;
      justify-content: flex-end;
      button {
        color: var(--main_theme_clr);
        font-size: 20px;
        font-style: italic;
        img {
          transition: all 0.4s linear;
        }

        &:hover {
          img{
            transform: translateX(5px);
          }
        }
      }
    }
  }

  .section_image_wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: "";
      position: absolute;
      top: -10px;
      right: -100px;
      display: block;
      width: 100%;
      height: 100%;
      border: 2px solid var(--main_theme_clr);
      border-radius: 250px 250px 0 0;
      opacity: 0.2;
      z-index: 1;
    }

    img {
      // width: 75%;
      width: 500px;
      height: 700px;
      border-radius: 250px 250px 0 0;
      object-fit: cover;
      z-index: 2;
    }
  }
}

@media (max-width: 850px) {
  .hero_section_wrapper {
    padding-block: 20px;
    flex-direction: column-reverse;
    .section_image_wrapper {
      &::after {
        right: -45px;
      }

      img {
        width: 175px;
        height: 245px;
      }
    }

    .section_text_content_wrapper {
      padding-block: 15px;
      width: 100%;

      .section_desc {
        margin-block: 5px;
        font-size: 24px;
        text-align: center;
      }

      .btn_wrapper {
        button {
          font-size: 16px;
          &:hover {
            img {
              transform: translateX(0);
            }
          }
          img {
            width: 25px;
            height: 15px;
          }
        }
      }
    }
  }
}
</style>
