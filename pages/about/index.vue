<template>
  <div class="about_content_wrapper">
    <div class="container-xl">
      <!-- Start:: AboutUS Row Content -->
      <div
        class="about_content_row"
        v-for="(item, index) in aboutPartition"
        :ke="item.id"
      >
        <div
          class="row_img_wrapper"
          :data-aos="($i18n.locale == 'en' && (index + 1) % 2 == 0) ? 'fade-right' : 'fade-left'"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            :src="item.image"
            width="200"
            height="200"
            :alt="item.title"
          />
        </div>

        <div
          class="row_text_content_wrapper"
          :data-aos="($i18n.locale == 'en' && (index + 1) % 2 == 0) ? 'fade-left' : 'fade-right'"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <h2 class="section_title">{{item.title}}</h2>
          <div class="text_content">{{item.desc}}</div>
        </div>
      </div>
      <!-- End:: AboutUS Row Content -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',

  head() {
    return {
      title: 'About Outfit',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'About Outfit',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'About Outfit',
        },
      ],
    }
  },

  data() {
    return {
      aboutPartition: [
        {
          id: 1,
          image: require('@/assets/media/images/aboutPage/about1.png'),
          title: 'OUR STORY',
          desc: `Outfit is the leading online shopping platform, bringing a new culture of fashion
            to Egypt. Launched in 2018, Outfit was founded by Hilda Louca with the
            vision to unite and promote all Egyptian designers, and revive the culture of 
            fashion in Egypt. Now home to over 300 Egyptian designers and brands, 
            Outfit is the largest hub of its kind to designers in Egypt.
          `,
        },
        {
          id: 2,
          image: require('@/assets/media/images/aboutPage/about2.png'),
          title: 'OUR DREAM',
          desc: `Outfit extended mission is to showcase the country's top design talents in a 
            well-curated digital platform of international standards. All the platform's 
            resources are directed in helping the local designers flourish locally and 
            internationally through providing them with all the latest digital tools to 
            guarantee ultimate reach, in addition to business development support for 
            their business aiming to become the number one online destination for 
            Egyptian and Regional designers to retail their products worldwide.
          `,
        },
        {
          id: 3,
          image: require('@/assets/media/images/aboutPage/about3.png'),
          title: 'OUR APPROACH',
          desc: `Outfit promises personal service through dedicated customer care, hassle-
            free shipping in exclusive signature packaging, free returns, and a fully-
            secured online platform. pieces are carefully curated an go through extensive
            quality and authenticity checks to be featured on the platform. in addition,
            all products are styled and offered with its extended family by our certified
            and professional stylist.
          `,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.about_content_wrapper {
  padding-block: 25px;
  min-height: 40vh;
  overflow: hidden;
  .about_content_row {
    padding-block: 25px;
    @include flexSpaceBetweenAlignment;
    column-gap: 30px;
    .row_img_wrapper {
      width: 50%;
      height: 620px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .row_text_content_wrapper {
      width: 45%;
      .section_title {
        margin-bottom: 25px;
        color: var(--theme_text_clr);
        font-size: 30px;
        letter-spacing: 5px;
        font-style: italic;
      }
      .text_content {
        font-size: 16px;
        color: var(--theme-text_clr);
        word-break: break-word;
      }
    }

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
}

@media (max-width: 850px) {
  .about_content_wrapper {
    padding-block: 0;
    .about_content_row {
      padding-block: 25px;
      flex-direction: column;
      .row_img_wrapper {
        width: 90%;
        height: 300px;
      }

      .row_text_content_wrapper {
        padding: 25px 10px;
        width: 100%;
        .section_title {
          margin-bottom: 15px;
          font-size: 25px;
        }
        .text_content {
          font-size: 15px;
        }
      }

      &:nth-child(odd) {
        flex-direction: column;
      }
    }
  }
}
</style>
