<template>
  <div class="footer_content_wrapper">
    <div class="container-xl">
      <div class="row justify-content-between">
        <!-- Start:: Logo Wrapper -->
        <div class="col-md-3">
          <nuxt-link to="/" class="logo_wrapper">
            <img
              src="~/assets/media/logo/logo_black.svg"
              width="100"
              height="80"
              alt="Logo"
            />
          </nuxt-link>

          <div class="powered_by_content">
            Copyright &copy; {{ currentYear }} All Rights Reserved | Made With
            <img
              src="@/assets/media/icons/ui_icons/heart.svg"
              alt="heart icon"
              width="25"
              height="25"
            />
            By
            <a href="https://alalmiyalhura.com/" target="_blank"
              >Alalmiya Alhura</a
            >
          </div>
        </div>
        <!-- End:: Logo Wrapper -->

        <!-- Start:: Routes Wrapper -->
        <div class="col-md-5 d-flex justify-content-around">
          <div class="routes_wrapper">
            <h5 class="routes_title">{{ $t('TITLES.companyInfo') }}</h5>
            <ul class="footer_routes_list">
              <li class="footer_route">
                <nuxt-link to="/about">
                  {{ $t('NAV.about') }}
                </nuxt-link>
              </li>

              <li class="footer_route">
                <nuxt-link to="/how-to-shop">
                  {{ $t('NAV.howToShop') }}
                </nuxt-link>
              </li>

              <!-- <li class="footer_route">
                <nuxt-link to="/faqs">
                  {{ $t('NAV.faqs') }}
                </nuxt-link>
              </li> -->

              <li class="footer_route">
                <nuxt-link to="/terms">
                  {{ $t('NAV.terms') }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="routes_wrapper">
            <h5 class="routes_title">{{ $t('TITLES.helpAndSupport') }}</h5>
            <ul class="footer_routes_list">
              <li class="footer_route">
                <nuxt-link to="/terms">
                  {{ $t('NAV.terms') }}
                </nuxt-link>
              </li>

              <li class="footer_route">
                <nuxt-link to="/contact">
                  {{ $t('NAV.contact') }}
                </nuxt-link>
              </li>

              <!-- <li class="footer_route">
                <nuxt-link to="/size-guide">
                  {{ $t('NAV.sizeGuide') }}
                </nuxt-link>
              </li> -->

              <li class="footer_route">
                <nuxt-link to="/policy">
                  {{ $t('NAV.returnsPolicy') }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- End:: Routes Wrapper -->

        <!-- Start:: Subscribe & Download -->
        <div class="col-md-4">
          <div class="subscribe_form">
            <div class="form_title">
              {{ $t('TITLES.news') }}
            </div>
            <form class="subscribe_form_wrapper">
              <input
                type="text"
                class="form-control"
                :placeholder="$t('FORMS.Placeholders.yourEmailHere')"
              />
              <button class="submit_btn">
                {{ $t('BUTTONS.subscribe') }}
              </button>
            </form>
          </div>

          <div class="download_app_section_wrapper">
            <div class="download_section_title">
              {{ $t('TITLES.downloadApp') }}
            </div>

            <div class="download_links_wrapper">
              <a href="#" target="_blank">
                <img
                  src="~/assets/media/icons/ui_icons/apple.svg"
                  width="40"
                  height="40"
                  alt="Logo"
                />
              </a>

              <a href="#" target="_blank">
                <img
                  src="~/assets/media/icons/ui_icons/android.svg"
                  width="40"
                  height="40"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
        </div>
        <!-- End:: Subscribe & Download -->
      </div>

      <div class="social_platforms_links_wrapper">
        <a class="social_media_link" href="#" target="_blank">
          <i class="fa-brands fa-facebook-f"></i>
        </a>

        <a class="social_media_link" href="#" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a class="social_media_link" href="#" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>

        <a class="social_media_link" href="#" target="_blank">
          <i class="fa-brands fa-youtube"></i>
        </a>

        <a class="social_media_link" href="#" target="_blank">
          <i class="fa-brands fa-pinterest"></i>
        </a>

        <a class="social_media_link" href="#" target="_blank">
          <i class="fa-brands fa-snapchat"></i>
        </a>

        <a class="social_media_link" href="#" target="_blank">
          <i class="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',

  data() {
    return {
      // Start:: Current Year
      currentYear: new Date().getFullYear(),
      // End:: Current Year
    }
  },

  methods: {
    // START:: SCROLL TO SECTION
    scrollToSection(section_id) {
      if (this.$route.path.includes('/register')) {
        this.$router.push('/')
      } else {
        const selected_section = document.querySelector(`#${section_id}`)
        selected_section.scrollIntoView()
      }
    },
    // END:: SCROLL TO SECTION
  },
}
</script>
