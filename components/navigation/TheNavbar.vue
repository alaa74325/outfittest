<template>
  <div
    id="navbar"
    class="header_content_wrapper"
    :class="{ sticky: scrollPosition > navHeight }"
  >
    <!-- Start:: Offer Header-->
    <div class="offer_header">
      <span class="offer_content">
        <img
          src="@/assets/media/icons/ui_icons/colored_gift.svg"
          width="25"
          height="25"
          alt="gift icon"
        />

        <span>Buy 2 Get 1 Of Them 50% Off</span>
      </span>

      <span class="offer_time">
        <span class="hours"> 23 <span>H</span> </span>
        <span class="clock_indecator">:</span>
        <span class="minutes"> 25 <span>M</span> </span>
        <span class="clock_indecator">:</span>
        <span class="seconds"> 45 <span>S</span> </span>
      </span>
    </div>
    <!-- End:: Offer Header-->

    <!-- Start:: Nav Mid -->
    <div class="container-xl py-0">
      <div class="nav_mid">
        <!-- Start:: Lang & Currency -->
        <div class="lang_and_currency">
          <!-- ********** Start:: Language ********** -->
          <div class="lang">
            <template v-if="$i18n.locale == 'en'">
              <nuxt-link
                v-for="(locale, i) in showLocales"
                :key="i"
                :to="switchLocalePath(locale.code)"
              >
                <span class="icon" @click="changeLang">
                  Ar
                  <i class="fas fa-angle-down"></i>
                </span>
              </nuxt-link>
            </template>

            <template v-if="$i18n.locale == 'ar'">
              <nuxt-link
                v-for="(locale, i) in showLocales"
                :key="i"
                :to="switchLocalePath(locale.code)"
              >
                <span class="icon" @click="changeLang">
                  En
                  <i class="fas fa-angle-down"></i>
                </span>
              </nuxt-link>
            </template>
          </div>
          <!-- ********** End:: Language ********** -->

          <!-- ********** Start:: Currency ********** -->
          <!-- <a-dropdown :trigger="['click']"> -->
          <!-- Start:: Selected Currency -->
          <!-- <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              <img
                src="~/assets/media/icons/ar.png"
                width="25"
                alt="Arabic Flag"
              />
              <span> KSA </span>
              <i class="fas fa-angle-down"></i>
            </a> -->
          <!-- End:: Selected Currency -->

          <!-- Start:: Currencies List -->
          <!-- <a-menu slot="overlay">
              <a-menu-item key="0">
                <button>
                  <img
                    src="~/assets/media/icons/ar.png"
                    width="25"
                    alt="Arabic Flag"
                  />
                  <span> KSA </span>
                </button>
              </a-menu-item>
              <a-menu-item key="1">
                <button>
                  <img
                    src="~/assets/media/icons/ar.png"
                    width="25"
                    alt="Arabic Flag"
                  />
                  <span> KSA </span>
                </button>
              </a-menu-item>
            </a-menu> -->
          <!-- End:: Currencies List -->
          <!-- </a-dropdown> -->
          <!-- ********** End:: Currency ********** -->
        </div>
        <!-- End:: Lang & Currency -->

        <!-- Start:: Logo -->
        <nuxt-link :to="'/'" class="logo_wrapper">
          <img
            src="~/assets/media/logo/logo.svg"
            width="130"
            height="60"
            alt="Logo"
          />
        </nuxt-link>
        <!-- End:: Logo -->

        <!-- Start:: Navbar Buttons -->
        <div class="navbar_btns_wrapper">
          <a-tooltip
            placement="bottom"
            class="profile_route"
            v-if="authedUserData.token"
          >
            <nuxt-link :to="'/profile'">
              <img
                src="~/assets/media/icons/ui_icons/user.svg"
                width="25"
                height="25"
                alt="profile"
              />
            </nuxt-link>
            <template slot="title">
              <span>{{ $t('TITLES.profile') }}</span>
            </template>
          </a-tooltip>

          <a-tooltip
            placement="bottom"
            class="wishlist_route"
            v-if="authedUserData.token"
          >
            <nuxt-link :to="'/profile/wishlist'">
              <img
                src="~/assets/media/icons/ui_icons/heart.svg"
                width="25"
                height="25"
                alt="profile"
              />
            </nuxt-link>
            <template slot="title">
              <span>{{ $t('TITLES.wishlist') }}</span>
            </template>
          </a-tooltip>

          <a-badge
            :count="5"
            :overflow-count="9"
            class="cart_route"
            v-if="authedUserData.token"
          >
            <a-tooltip placement="bottom">
              <nuxt-link :to="'/cart'">
                <img
                  src="~/assets/media/icons/ui_icons/cart.svg"
                  width="25"
                  height="25"
                  alt="profile"
                />
              </nuxt-link>
              <template slot="title">
                <span>{{ $t('TITLES.cart') }}</span>
              </template>
            </a-tooltip>
          </a-badge>

          <a-tooltip
            placement="bottom"
            class="auth_route"
            v-if="!authedUserData.token"
          >
            <nuxt-link :to="'/auth/login'">
              <img
                src="~/assets/media/icons/ui_icons/login.svg"
                width="25"
                height="25"
                alt="login"
              />
            </nuxt-link>
            <template slot="title">
              <span>{{ $t('TITLES.login') }}</span>
            </template>
          </a-tooltip>

          <button
            class="small_screens_menu"
            @click="toggleSamllScreensNavbarDrawer"
          >
            <i class="fa-solid fa-ellipsis"></i>
          </button>
        </div>
        <!-- End:: Navbar Buttons -->
      </div>
    </div>
    <!-- End:: Nav Mid -->

    <!-- Start:: Nav Routes & Search Input -->
    <div
      class="nav_routes_and_search_input_wrapper"
      v-if="navBarCategories.mainCategories && categoriesIsAvailable"
    >
      <div class="container-xl px-0">
        <ul class="routes_list">
          <li
            v-for="item in navBarCategories.mainCategories"
            :key="item.id"
            class="navbar_route"
          >
            <button
              :class="
                item.id == navBarCategories.currentActiveCategory.id
                  ? 'active'
                  : ''
              "
              @click="getDataBasedOnMainCategoryId(item.id)"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>

        <form class="search_form_wrapper">
          <input type="text" class="form-control" placeholder="Search...." />
          <button class="submit_btn">
            <img
              src="~/assets/media/icons/ui_icons/search_white.svg"
              width="28"
              height="28"
              alt="search button"
            />
          </button>
        </form>
      </div>
    </div>

    <div
      class="nav_sub_routes"
      v-if="
        navBarCategories.subCategoriesBasedOnMainCategory &&
        categoriesIsAvailable
      "
    >
      <div class="container-xl px-0">
        <ul class="routes_list">
          <li
            v-for="item in navBarCategories.subCategoriesBasedOnMainCategory"
            :key="item.id"
            class="navbar_route"
          >
            <nuxt-link :to="`/categories/${item.id}`">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- End:: Nav Routes & Search Input -->

    <!-- Start:: Categories Drawer -->
    <v-navigation-drawer
      class="categories_drawer"
      v-model="categoriesDrawerIsActive"
      absolute
      width="80%"
    >
      <h2 class="drawer_title">Categories</h2>

      <v-list v-for="item in categories" :key="item.id">
        <!-- Start:: Check If Main Category Has Subcategories Or Not  -->
        <nuxt-link
          class="category_route"
          to="/categories/item"
          v-if="item.subCats.length == 0"
        >
          {{ item.title }}
        </nuxt-link>

        <v-list-group v-else>
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>
          <!-- ***** Start:: Main Category Route ***** -->
          <v-list-item>
            <nuxt-link class="category_route" to="/categories/men">
              <i class="fa-solid fa-circle"></i> All {{ item.title }} Items
            </nuxt-link>
          </v-list-item>
          <!-- ***** End:: Main Category Route ***** -->

          <!-- ***** Start:: Check If LevelOne Subcategory Has Subcategories Or Not ***** -->
          <div
            v-for="levelOneSubItem in item.subCats"
            :key="levelOneSubItem.id"
          >
            <!-- *************** Start:: Single Route If LevelOne Subcategory Has No Sub Categories *************** -->
            <nuxt-link
              class="category_route"
              to="/categories/item/levelOneSubItem"
              v-if="levelOneSubItem.subCats.length == 0"
            >
              <i class="fa-solid fa-circle"></i>
              {{ levelOneSubItem.title }}
            </nuxt-link>
            <!-- *************** End:: Single Route If LevelOne Subcategory Has No Sub Categories *************** -->

            <!-- *************** Start:: Level Two Subcategories Routes Group If LevelOne Subcategory Has Sub Categories *************** -->
            <v-list-group v-else no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{
                    levelOneSubItem.title
                  }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item>
                <nuxt-link class="category_route" to="/categories/men">
                  <i class="fa-solid fa-circle"></i>
                  All {{ levelOneSubItem.title }}
                </nuxt-link>
              </v-list-item>

              <v-list-item
                v-for="levelTwoSubItem in levelOneSubItem.subCats"
                :key="levelTwoSubItem.id"
              >
                <nuxt-link
                  class="category_route"
                  to="/categories/item/levelOneSubItem/levelTwoSubItem"
                >
                  <i class="fa-solid fa-circle"></i>
                  {{ levelTwoSubItem.title }}
                </nuxt-link>
              </v-list-item>
            </v-list-group>
            <!-- *************** End:: Level Two Subcategories Routes Group If LevelOne Subcategory Has Sub Categories *************** -->
          </div>
          <!-- ***** End:: Check If LevelOne Subcategory Has Subcategories Or Not ***** -->
        </v-list-group>
        <!-- End:: Check If Main Category Has Subcategories Or Not  -->
      </v-list>
    </v-navigation-drawer>
    <!-- End:: Categories Drawer -->

    <!-- Start:: Small Screens Nav Drawer -->
    <div
      class="small_screens_nav_bar_wrapper"
      :class="{ active: smallScreensMenuIsOpen }"
    >
      <div class="small_screen_menu_close_btn">
        <button @click="toggleSamllScreensNavbarDrawer">
          <i class="fas fa-times fa-lg"></i>
        </button>
      </div>

      <ul class="small_screens_nav_bar_links_list">
        <li class="links_list_item" @click="toggleSamllScreensNavbarDrawer">
          <button
            :class="$route.path == localePath('/') ? 'active' : ''"
            @click="scrollToSection('hero_section')"
          >
            {{ $t('NAV.home') }}
          </button>
        </li>

        <li class="links_list_item" @click="toggleSamllScreensNavbarDrawer">
          <button @click="scrollToSection('about_section')">
            {{ $t('NAV.about') }}
          </button>
        </li>

        <li class="links_list_item" @click="toggleSamllScreensNavbarDrawer">
          <button @click="scrollToSection('contact_us_section')">
            {{ $t('NAV.contact') }}
          </button>
        </li>

        <li class="links_list_item" @click="toggleSamllScreensNavbarDrawer">
          <nuxt-link :to="localePath('/terms')">
            {{ $t('NAV.terms') }}
          </nuxt-link>
        </li>

        <li class="links_list_item">
          <nuxt-link
            v-for="(locale, i) in showLocales"
            :key="i"
            :to="switchLocalePath(locale.code)"
          >
            <span class="icon"><i class="fas fa-globe"></i></span>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- End:: Small Screens Nav Drawer -->
  </div>
</template>

<script>
// Start:: Importing Vuex Helpers
import { mapGetters, mapActions } from 'vuex'
// End:: Importing Vuex Helpers

export default {
  name: 'TheNavbar',

  props: {
    categoriesDrawerIsActive: {
      required: true,
      type: Boolean,
    },
    categoriesIsAvailable: {
      required: false,
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      // Start:: Dummy Categories Data
      categories: {
        menCat: {
          id: 1,
          title: 'Men',
          subCats: [
            {
              id: 1,
              title: 'T-Shirts',
              subCats: [],
            },
            {
              id: 2,
              title: 'Jackets',
              subCats: [
                {
                  id: 1,
                  title: 'Long Jacket',
                },
                {
                  id: 2,
                  title: 'Short Jacket',
                },
              ],
            },
          ],
        },
        kidsCat: {
          id: 2,
          title: 'Kids',
          subCats: [],
        },
      },
      // End:: Dummy Categories Data

      // Start:: NavBar Control Data
      smallScreensMenuIsOpen: false,
      scrollPosition: null,
      navHeight: null,
      // End:: NavBar Control Data
    }
  },

  computed: {
    // Start:: Vuex Get Authed User Data
    ...mapGetters({
      authedUserData: 'auth/authedUserData',
      navBarCategories: 'navBarCategories/navBarCategories',
    }),
    // End:: Vuex Get Authed User Data

    locales() {
      return this.$i18n.locales.filter((i) => i.code)
    },
    showLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },

  methods: {
    // Start:: Vuex Actions
    ...mapActions({
      getHomePageData: 'homePage/getHomePageData',
      getMainCategories: 'navBarCategories/getMainCategories',
      getSubCategories: 'navBarCategories/getSubCategories',
      getDataBasedOnMainCategoryId:
        'navBarCategories/getDataBasedOnMainCategoryId',
    }),
    // End:: Vuex Actions

    // // Start:: Get NavBar Categories
    // async getMainCategories() {
    //   this.$nextTick(() => {
    //     this.$nuxt.$loading.start()
    //   })
    //   try {
    //     let res = await this.$axiosRequest({
    //       method: "GET",
    //       url: "get_category",
    //     });
    //       console.log("Main Categories ==>", res.data.data);
    //       this.mainCategories = res.data.data;
    //       this.getSubCategories();
    //       this.currentActiveCategory = this.mainCategories[0];

    //       this.$nextTick(() => {
    //         this.$nuxt.$loading.finish()
    //       })
    //   } catch(err) {
    //     console.log(err.response.data.message);
    //     this.$nextTick(() => {
    //       this.$nuxt.$loading.finish()
    //     })
    //   }
    // },
    // async getSubCategories(mainCategoryId) {
    //   try {
    //     let res = await this.$axiosRequest({
    //       method: "GET",
    //       url: "get_category",
    //       params: {
    //         category_id: mainCategoryId ? mainCategoryId : this.mainCategories[0].id,
    //       }
    //     });
    //       console.log("SubCategories ==>", res.data.data);
    //       this.subCategoriesBasedOnMainCategory = res.data.data;
    //   } catch(err) {
    //     console.log(err.response.data.message);
    //   }
    // },
    // async getDataBasedOnMainCategoryId(mainCategoryId) {
    //   this.$nextTick(() => {
    //     this.$nuxt.$loading.start()
    //   })

    //   try {
    //     let res = await this.$axiosRequest({
    //       method: "GET",
    //       url: "get_category",
    //       params: {
    //         category_id: mainCategoryId
    //       }
    //     });
    //       console.log("SubCategories On Click ==>", res.data.data);
    //       this.getSubCategories(mainCategoryId);
    //       this.currentActiveCategory = this.mainCategories.find(item => item.id == mainCategoryId);
    //       this.getHomePageData(mainCategoryId);

    //       this.$nextTick(() => {
    //         this.$nuxt.$loading.finish()
    //       })
    //   } catch(err) {
    //     console.log(err.response.data.message);
    //     this.$nextTick(() => {
    //       this.$nuxt.$loading.finish()
    //     })
    //   }
    // },
    // // End:: Get NavBar Categories

    changeLang() {
      setTimeout(() => {
        location.reload()
      }, 1000)
    },

    toggleSamllScreensNavbarDrawer() {
      this.smallScreensMenuIsOpen = !this.smallScreensMenuIsOpen
    },

    // START:: HANDLING STICKY HEADER
    updateScroll() {
      this.scrollPosition = window.scrollY
      window.scrollY > this.navHeight
        ? (document.body.style.paddingTop = '85px')
        : (document.body.style.paddingTop = '0')
    },
    // END:: HANDLING STICKY HEADER
  },

  created() {
    // Start:: Fire Methods
    this.getMainCategories()
    // End:: Fire Methods
  },

  mounted() {
    // START:: FIRE METHODS
    this.navHeight = document.getElementById('navbar').clientHeight

    window.addEventListener('scroll', this.updateScroll, { passive: true })
    // END:: FIRE METHODS
  },
}
</script>
