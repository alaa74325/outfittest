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
              <button>
                <img src="@/assets/media/icons/ui_icons/edit.svg" alt="" />
              </button>
            </div>
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
            <div to="/profile" class="profile_tap">
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
            <div to="/profile" class="profile_tap">
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
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid rgba(144, 158, 172, 0.3);
        font-size: 1.1rem;
      }
      .profile_tap.nuxt-link-exact-active {
        * {
          color: #222;
        }
      }
    }
  }
}
</style>
