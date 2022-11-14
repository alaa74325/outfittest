<template>
  <div class="container-xl">
    <div class="user_profile_wrapper">
      <div class="porfile_taps_wapper">
        <ul class="profile_taps">
          <li class="profile_info_tap">
            <div class="profile_info_user_tap">
              <div class="profile_user_img_container">
                <img
                  src="https://images.pexels.com/photos/13984623/pexels-photo-13984623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
              <div>
                <h5>Eslam Ahmed</h5>
                <h6>+20 1015631340</h6>
              </div>
            </div>

            <div class="profile_info_edit_btn">
              <button @click="isEditModel = true">
                <img src="@/assets/media/icons/ui_icons/edit.svg" alt="" />
              </button>
            </div>
            <!-- START ::  Edit model  -->
            <v-dialog v-model="isEditModel" width="500">
              <v-card class="p-4 card_container">
                <v-form>
                  <h3 class="card_title">Edit Info</h3>
                  <!-- input image -->
                  <div class="user_img_container">
                    <img
                      src="https://images.pexels.com/photos/13984623/pexels-photo-13984623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <!-- email input -->
                  <v-text-field
                    :label="$t('FORMS.Placeholders.email')"
                    v-model="data.email"
                  />
                  <!-- username input  -->
                  <v-text-field
                    :label="$t('FORMS.Placeholders.username')"
                    v-model="data.username"
                  />

                  <!-- Start Phone -->
                  <base-country-flag-phone-input
                    @changeKey="phonecodeChanged"
                    :placeholder="$t('FORMS.Placeholders.phone')"
                    :preSelectedPhoneCode="data.phoneCode"
                    v-model="data.phone"
                  />
                  <!-- End Phone -->

                  <!-- confirmation code  -->
                  <v-text-field
                    :label="$t('FORMS.Placeholders.confirmationCode')"
                    v-model="data.code"
                  />
                  <!-- resend code  -->
                  <div class="resend_code_container my-2">
                    <div>
                      {{ $t('FORMS.Validation.resend') }}
                      <button class="resend_btn">
                        {{ $t('BUTTONS.resend') }}
                      </button>
                    </div>
                    <!-- Start:: CountDown Timer -->
                    <div class="timer_wrapper">
                      <h3 class="timer">{{ '0 : ' + timerCount }}</h3>
                    </div>
                    <!-- End:: CountDown Timer -->
                  </div>
                </v-form>
              </v-card>
            </v-dialog>
            <!-- End ::  Edit model  -->
          </li>
          <!-- orders -->
          <li class="profile_tap_container">
            <nuxt-link to="/profile" class="profile_tap"
              ><div>
                <img src="@/assets/media/icons/ui_icons/bag.svg" alt="" />
                {{ $t('TITLES.orders') }}
              </div>
              <span
                ><i
                  :class="`fa-solid fa-angle-${
                    $i18n.locale == 'en' ? 'right' : 'left'
                  }`"
                ></i
              ></span>
            </nuxt-link>
          </li>
          <!-- wishlist -->
          <li class="profile_tap_container">
            <nuxt-link to="/profile/wishlist" class="profile_tap"
              ><div>
                <img
                  class="img"
                  style="fill: #000"
                  src="@/assets/media/icons/ui_icons/heart_.svg"
                  alt=""
                />
                {{ $t('TITLES.wishlist') }}
              </div>
              <span
                ><i
                  :class="`fa-solid fa-angle-${
                    $i18n.locale == 'en' ? 'right' : 'left'
                  }`"
                ></i
              ></span>
            </nuxt-link>
          </li>
          <!-- gifts-->
          <li class="profile_tap_container">
            <nuxt-link to="/profile/gifts" class="profile_tap"
              ><div>
                <img src="@/assets/media/icons/ui_icons/gift.svg" alt="" />
                {{ $t('TITLES.gift') }}
              </div>
              <span
                ><i
                  :class="`fa-solid fa-angle-${
                    $i18n.locale == 'en' ? 'right' : 'left'
                  }`"
                ></i
              ></span>
            </nuxt-link>
          </li>
          <!-- My Reviews -->
          <li class="profile_tap_container">
            <nuxt-link to="/profile/reviews" class="profile_tap"
              ><div>
                <img
                  src="@/assets/media/icons/ui_icons/outline-receipt.svg"
                  alt=""
                />
                {{ $t('TITLES.reviews') }}
              </div>
              <span
                ><i
                  :class="`fa-solid fa-angle-${
                    $i18n.locale == 'en' ? 'right' : 'left'
                  }`"
                ></i
              ></span>
            </nuxt-link>
          </li>
          <!-- My Addresses -->
          <li class="profile_tap_container">
            <nuxt-link to="/profile/addresses" class="profile_tap"
              ><div>
                <img src="@/assets/media/icons/ui_icons/location.svg" alt="" />
                {{ $t('TITLES.addresses') }}
              </div>
              <span
                ><i
                  :class="`fa-solid fa-angle-${
                    $i18n.locale == 'en' ? 'right' : 'left'
                  }`"
                ></i
              ></span>
            </nuxt-link>
          </li>
          <!-- My wallet -->
          <li class="profile_tap_container">
            <nuxt-link to="/profile/wallet" class="profile_tap"
              ><div>
                <img
                  src="@/assets/media/icons/ui_icons/empty-wallet.svg"
                  alt=""
                />
                {{ $t('TITLES.wallet') }}
              </div>
              <span
                ><i
                  :class="`fa-solid fa-angle-${
                    $i18n.locale == 'en' ? 'right' : 'left'
                  }`"
                ></i
              ></span>
            </nuxt-link>
          </li>
          <!-- Delete My Account  -->
          <li class="profile_tap_container">
            <div to="/profile" class="profile_tap danger">
              <div>
                <img
                  src="@/assets/media/icons/ui_icons/linear-user.svg"
                  alt=""
                />
                {{ $t('TITLES.deleteMyAccount') }}
              </div>
              <span
                ><i
                  :class="`fa-solid fa-angle-${
                    $i18n.locale == 'en' ? 'right' : 'left'
                  }`"
                ></i
              ></span>
            </div>
          </li>
          <!-- log out  -->
          <li class="profile_tap_container">
            <div to="/profile" class="profile_tap danger">
              <div>
                <img
                  src="@/assets/media/icons/ui_icons/outline-logout.svg"
                  alt=""
                />
                {{ $t('TITLES.logout') }}
              </div>
              <span
                ><i
                  :class="`fa-solid fa-angle-${
                    $i18n.locale == 'en' ? 'right' : 'left'
                  }`"
                ></i
              ></span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'profile',
  data() {
    return {
      isEditModel: false,
      timerCount: 60,
      data: {
        email: '',
        username: '',
        phoneCode: '',
        code: '',
      },
    }
  },
  methods: {
    // Start:: Change Selected Phonecode
    phonecodeChanged(data) {
      this.data.phoneCode = data
    },
    // End:: Change Selected Phonecode

    // Start:: CountDown Timer
    countDown() {
      if (timerCount > 0) {
        setTimeout(() => {
          timerCount -= 1
          this.countDown()
        }, 1000)
      }
    },
    // End:: CountDown Timer
  },
}
</script>

<style lang="scss" scoped>
.user_profile_wrapper {
  display: flex;
  padding: 2rem 0rem;
  .porfile_taps_wapper {
    * {
      color: #909eac;
    }

    width: 50%;
    max-width: 22rem;
    .profile_taps {
      width: 100%;
      .profile_info_tap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;

        h5 {
          font-weight: bold;
          color: #222;
        }
        h6 {
          font-weight: bold;
        }
        .profile_info_user_tap {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 1rem;
          .profile_user_img_container {
            width: 100px;
            height: 100px;
            overflow: hidden;
            border-radius: 10px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            }
          }
        }
      }
      .profile_tap {
        @include flexSpaceBetweenAlignment;
        // display: flex;
        // justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid rgba(144, 158, 172, 0.3);
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s ease-in;
        &:hover {
          * {
            color: #222;
          }
          img {
            filter: brightness(0) invert(0);
          }
        }
        &.nuxt-link-exact-active {
          * {
            color: #222;
          }
          img {
            filter: brightness(0) invert(0);
          }
        }
        &.danger {
          * {
            color: red;
          }
          &:hover {
            opacity: 0.7;
          }
          img {
            filter: none;
          }
        }
      }
    }
  }
}
.card_container {
  .card_title {
    font-style: italic;
  }
  .user_img_container {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 10px;
    margin: 1rem auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}
</style>
