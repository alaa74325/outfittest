<template>
  <div class="container-xl">
    <div class="user_profile_wrapper">
      <div class="porfile_taps_wapper">
        <ul class="profile_taps">
          <li class="profile_info_tap">
            <div class="profile_info_user_tap">
              <div class="profile_user_img_container">
                <img src="@/assets/media/images/xd/img.svg" alt="" />
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
            <nuxt-link to="/profile" class="profile_tap"
              ><div>
                <img src="@/assets/media/icons/ui_icons/heart_.svg" alt="" />
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
            <nuxt-link to="/profile" class="profile_tap"
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
            <nuxt-link to="/profile" class="profile_tap"
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
            <nuxt-link to="/profile" class="profile_tap"
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
            <nuxt-link to="/profile" class="profile_tap"
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
            <nuxt-link to="/profile" class="profile_tap"
              ><div>
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
            </nuxt-link>
          </li>
          <!-- log out  -->
          <li class="profile_tap_container">
            <nuxt-link to="/profile" class="profile_tap"
              ><div>
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
            </nuxt-link>
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
