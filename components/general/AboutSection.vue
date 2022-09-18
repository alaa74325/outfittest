<template>
  <div id="about_section" class="about_section_content_wrapper">
    <div class="row align-items-center px-5">
      <!-- Start:: Section Image -->
      <div
        class="col-md-6"
        data-aos-once="false"
        :data-aos="$i18n.locale == 'ar' ? 'fade-left' : 'fade-right'"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div class="section_image_wrapper">
          <img
            src="~/assets/media/images/about.png"
            alt="About Us Section Image"
          />
        </div>
      </div>
      <!-- End:: Section Image -->

      <!-- Start:: Section Text -->
      <div class="col-md-6">
        <div class="logo_wrapper">
          <img
            src="~/assets/media/logo/logo.svg"
            alt="Logo"
            width="180"
            height="180"
            data-aos-once="false"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
        </div>

        <h4
          class="section_subtitle"
          data-aos-once="false"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          {{ $t("about.mainTitle") }}
        </h4>
        <h2
          class="section_title"
          data-aos-once="false"
          data-aos="fade"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          {{ $t("about.title") }}
        </h2>

        <div
          class="section_desc"
          data-aos-once="false"
          data-aos="fade"
          data-aos-delay="800"
          data-aos-duration="1000"
          v-html="$t('about.desc')"
        ></div>
      </div>
      <!-- End:: Section Text -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style lang="scss" scoped>
.about_section_content_wrapper {
  padding-block: 50px;
  overflow-x: hidden;

  .section_image_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 75%;
    }
  }

  .section_subtitle {
    margin-block: 20px 0;
    color: var(--main_theme_clr);
    font-size: 30px;
  }

  .section_title {
    margin-block: 25px;
    color: var(--main_theme_clr);
    font-weight: 800;
    font-size: 40px;
    width: 70%;
  }

  .section_desc {
    word-break: break-word;
    word-spacing: 2px;
    font-size: 16px;
    color: var(--light_gray_clr);
    line-height: 1.6;
    text-align: start;
    width: 85%;
  }
}

@media (max-width: 850px) {
  .about_section_content_wrapper {
    padding-block: 30px;
    .section_image_wrapper {
      img {
        width: 90%;
      }
    }

    .logo_wrapper {
      display: flex;
      justify-content: center;
    }

    .section_subtitle {
      margin-block: 20px 0;
      font-size: 22px;
      text-align: center;
    }

    .section_title {
      margin-block: 25px;
      font-size: 25px;
      width: 100%;
      text-align: center;
    }

    .section_desc {
      word-break: break-word;
      word-spacing: 2px;
      font-size: 16px;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
