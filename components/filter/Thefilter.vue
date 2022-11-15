<template>
  <div
    class="products_filter_wrapper"
    :class="{ small_screens_filter: isSmallScreensFilter }"
  >
    <button class="close_btn" @click="$emit('closeFilter')">
      <i class="fa-solid fa-x"></i>
    </button>

    <form @submit.prevent="fireFilter">
      <v-expansion-panels multiple v-model="activePanel">
        <v-expansion-panel v-for="option in filterOptions" :key="option.id">
          <v-expansion-panel-header>
            {{ option.title }} dgsgg
          </v-expansion-panel-header>

          <!-- *************** Start:: Categories Filter *************** -->
          <v-expansion-panel-content v-if="option.id == 'filter_categories'">
            <ul class="filter_categories_list">
              <li
                class="filter_category"
                v-for="item in option.categories"
                :key="item.id"
              >
                <div class="filter_category_view">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="filter_categories"
                    :id="`category-${item.id}`"
                    :value="item"
                    v-model="OptionsToFireFilter.categories"
                  />
                  <label :for="`category-${item.id}`">
                    {{ item.name }} dollter
                  </label>
                </div>
              </li>
            </ul>
          </v-expansion-panel-content>
          <!-- *************** End:: Categories Filter *************** -->

          <!-- *************** Start:: Price Filter *************** -->
          <v-expansion-panel-content v-if="option.id == 'filter_prices'">
            <v-range-slider
              v-model="OptionsToFireFilter.priceRange"
              :max="option.maxPrice"
              :min="option.minPrice"
              hide-details
              class="align-center"
            >
              <template v-slot:prepend>
                <div class="value_wrapper">
                  {{ OptionsToFireFilter.priceRange[0] }} 3254
                  {{ $t('APP_CURRENCY') }} $
                </div>
              </template>

              <template v-slot:append>
                <div class="value_wrapper">
                  {{ OptionsToFireFilter.priceRange[1] }}100
                  {{ $t('APP_CURRENCY') }} $
                </div>
              </template>
            </v-range-slider>
          </v-expansion-panel-content>
          <!-- *************** End:: Price Filter *************** -->

          <!-- *************** Start:: Sizes Filter *************** -->
          <v-expansion-panel-content v-if="option.id == 'filter_sizes'">
            <ul class="filter_sizes_list">
              <li
                class="filter_size"
                v-for="item in option.sizes"
                :key="item.id"
              >
                <div class="filter_size_view">
                  <input
                    type="checkbox"
                    name="filter_sizes"
                    :id="`size-${item.id}`"
                    :value="item"
                    v-model="OptionsToFireFilter.sizes"
                  />
                  <label :for="`size-${item.id}`">
                    {{ item.size }} l
                  </label>
                </div>
              </li>
            </ul>
          </v-expansion-panel-content>
          <!-- *************** End:: Sizes Filter *************** -->

          <!-- *************** Start:: Colors Filter *************** -->
          <v-expansion-panel-content v-if="option.id == 'filter_colors'">
            <ul class="filter_colors_list">
              <li
                class="filter_color"
                v-for="item in option.colors"
                :key="item.id"
              >
                <div class="filter_color_view">
                  <input
                    type="checkbox"
                    name="filter_colors"
                    :id="`color-${item.id}`"
                    :value="item"
                    v-model="OptionsToFireFilter.colors"
                  />
                  <label :for="`color-${item.id}`">
                    <span :style="{ 'background-color': item.color }"></span>
                  </label>
                </div>
              </li>
            </ul>
          </v-expansion-panel-content>
          <!-- *************** End:: Colors Filter *************** -->

          <!-- *************** Start:: Brands Filter *************** -->
          <v-expansion-panel-content v-if="option.id == 'filter_brands'">
            <ul class="filter_brands_list">
              <li
                class="filter_brand"
                v-for="item in option.brands"
                :key="item.id"
              >
                <div class="filter_brand_view">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="filter_brands"
                    :id="`brand-${item.id}`"
                    :value="item"
                    v-model="OptionsToFireFilter.brands"
                  />
                  <label :for="`brand-${item.id}`">
                    {{ item.name }} brand
                  </label>
                </div>
              </li>
            </ul>
          </v-expansion-panel-content>
          <!-- *************** End:: Brands Filter *************** -->

          <!-- *************** Start:: Rate Filter *************** -->
          <v-expansion-panel-content v-if="option.id == 'filter_rates'">
            <star-rating
              :show-rating="false"
              :star-size="24"
              :rounded-corners="true"
              :border-width="4"
              border-color="#d8d8d8"
              active-color="#FFBE0F"
              active-border-color="#FFBE0F"
              :star-points="[
                23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46,
                19, 31, 17,
              ]"
              v-model="OptionsToFireFilter.rate"
            />
          </v-expansion-panel-content>
          <!-- *************** End:: Rate Filter *************** -->

          <!-- *************** Start:: Other Options Filter *************** -->
          <v-expansion-panel-content v-if="option.id == 'filter_other_options'">
            <ul class="filter_categories_list">
              <li
                class="filter_category"
                v-for="item in option.otherOptions"
                :key="item.id"
              >
                <div class="filter_category_view">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="filter_other_options"
                    :id="`other-options-${item.id}`"
                    :value="item"
                    v-model="OptionsToFireFilter.otherOption"
                  />
                  <label :for="`other-options-${item.id}`">
                    {{ item.name }} color
                  </label>
                </div>
              </li>
            </ul>
          </v-expansion-panel-content>
          <!-- *************** End:: Other Options Filter *************** -->
        </v-expansion-panel>
      </v-expansion-panels>

      <base-button class="w-100" :btnText="$t('BUTTONS.apply')" />
    </form>
    <div class="btn_wrapper2">
      <button type="button" @click="fireFilter2()">
        {{ $t('BUTTONS.reset') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFilter',
  emits: ['closeFilter', 'onFilter'],
  props: {
    filterOptions: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activePanel: [0, 1, 2, 4, 5, 6],
      // Start:: Filter Options
      OptionsToFireFilter: {
        categories: null,
        priceRange: [0, 0],
        sizes: [],
        colors: [],
        brands: [],
        rate: 0,
        otherOption: null,
      },
      // End:: Filter Options,
    }
  },
  computed: {
    isSmallScreensFilter() {
      if (process.client) {
        return window.innerWidth < 1000 ? true : false
      }
    },
  },
  methods: {
    // Start:: Fire Filter Method To Pass Filter Options To The Parent Component
    fireFilter() {
      this.$emit('onFilter', this.OptionsToFireFilter)
    },
    fireFilter2() {
      this.OptionsToFireFilter.categories = null
      this.OptionsToFireFilter.priceRange = [0, 0]
      this.OptionsToFireFilter.sizes = []
      this.OptionsToFireFilter.colors = []
      this.OptionsToFireFilter.brands = []
      this.OptionsToFireFilter.rate = 0
      this.OptionsToFireFilter.otherOption = null
      console.log('test')
    },
    // End:: Fire Filter Method To Pass Filter Options To The Parent Component
  },
}
</script>

<style lang="scss">
.products_filter_wrapper {
  padding-inline: 15px;
  width: 22%;
  .close_btn {
    display: none;
  }
  &.small_screens_filter {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    padding: 25px;
    padding-bottom: 220px;
    background-color: rgba(225, 225, 225, 0.5);
    backdrop-filter: blur(5px);
    z-index: 2;
    transition: all 0.5s linear;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    &.active {
      left: 0;
    }
  }
  .v-item-group {
    .v-expansion-panel {
      border: 1px solid var(--border_clr);
      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
      &::before,
      &::after {
        display: none;
      }
      .v-expansion-panel-header {
        color: var(--main_theme_clr);
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        &::before,
        &::after {
          display: none;
        }
        .v-expansion-panel-header__icon {
          i {
            color: var(--main_theme_clr);
          }
        }
      }
      .v-expansion-panel-content {
        .v-expansion-panel-content__wrap {
          padding-inline: 15px;
          .v-input {
            direction: ltr;
            flex-wrap: wrap;
            justify-content: space-between;
            &.v-input--range-slider {
              .v-input__prepend-outer,
              .v-input__append-outer {
                .value_wrapper {
                  text-align: center;
                  width: 80px;
                  padding: 12px 5px;
                  background-color: var(--border_clr);
                  color: var(--main_theme_clr);
                  font-size: 15px;
                  font-weight: 600;
                }
              }
              .v-input__prepend-outer {
                order: 1;
              }
              .v-input__append-outer {
                order: 2;
              }
              .v-input__control {
                order: 3;
                .v-input__slot {
                  border: none;
                  padding-inline: 0;
                  .v-slider {
                    .v-slider__track-container {
                      .v-slider__track-background {
                        background-color: var(--main_theme_clr) !important;
                        border-color: var(--main_theme_clr) !important;
                        opacity: 0.4;
                      }
                      .v-slider__track-fill {
                        background-color: var(--main_theme_clr) !important;
                        border-color: var(--main_theme_clr) !important;
                      }
                    }
                    .v-slider__thumb-container {
                      &.primary--text {
                        background-color: var(--main_theme_clr) !important;
                        border-color: var(--main_theme_clr) !important;
                        .v-slider__thumb {
                          &.primary {
                            background-color: var(--main_theme_clr) !important;
                            border-color: var(--main_theme_clr) !important;
                          }
                          &::before {
                            background-color: var(--main_theme_clr) !important;
                            border-color: var(--main_theme_clr) !important;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .filter_sizes_list {
            padding: 0;
            margin: 0;
            @include flexCenterAlignment;
            row-gap: 10px;
            column-gap: 10px;
            flex-wrap: wrap;
            .filter_size {
              .filter_size_view {
                input[type='checkbox'] {
                  display: none;
                  &:checked + label {
                    border: 1px solid var(--main_theme_clr);
                    @include midShadow;
                  }
                }
                label {
                  display: inline-block;
                  padding: 3px;
                  width: 45px;
                  height: 45px;
                  border: 1px solid var(--border_clr);
                  color: var(--main_theme_clr);
                  font-size: 16px;
                  cursor: pointer;
                  @include flexCenterAlignment;
                }
              }
            }
          }
          .filter_colors_list {
            padding: 0;
            margin: 0;
            @include flexCenterAlignment;
            column-gap: 10px;
            row-gap: 10px;
            flex-wrap: wrap;
            .filter_color {
              .filter_color_view {
                input[type='checkbox'] {
                  display: none;
                  &:checked + label {
                    border: 1px solid var(--main_theme_clr);
                    @include midShadow;
                  }
                }
                label {
                  display: inline-block;
                  padding: 7px;
                  width: 40px;
                  height: 40px;
                  border: 1px solid var(--border_clr);
                  cursor: pointer;
                  span {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
          .filter_brands_list,
          .filter_categories_list {
            padding: 0;
            margin: 0;
            .filter_brand,
            .filter_category {
              &:not(:last-of-type) {
                margin-bottom: 8px;
              }
              .filter_brand_view,
              .filter_category_view {
                @include flexStartAlignment;
                column-gap: 10px;
                input[type='radio'],
                input[type='checkbox'] {
                  width: 20px;
                  height: 20px;
                  border-radius: 1px;
                  &:checked {
                    background-color: var(--main_theme_clr);
                    border-color: var(--main_theme_clr);
                    box-shadow: none;
                    outline: none;
                  }
                  &:checked + label {
                    color: var(--main_theme_clr);
                  }
                }
                input[type='radio'] {
                  border-radius: 50%;
                }
                label {
                  color: var(--theme_text_clr);
                  font-size: 15px;
                  cursor: pointer;
                }
              }
            }
          }
          .vue-star-rating {
            justify-content: center;
            column-gap: 8px;
          }
        }
      }
    }
  }
}
@media (max-width: 1000px) {
  .products_filter_wrapper {
    .close_btn {
      display: inline-block;
      margin-bottom: 20px;
      font-size: 18px;
      svg,
      i {
        color: var(--light_red_clr);
      }
    }
  }
}
.btn_wrapper2 {
  @include flexCenterAlignment;
  button {
    @include simpleButtonStyle;
    width: 100%;
  }
}
</style>
