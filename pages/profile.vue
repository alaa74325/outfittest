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
                <v-form @submit.prevent>
                  <h3 class="card_title">Edit Info</h3>
                  <!-- input image -->
                  <!-- START:: single photo input -->
                  <div class="single_image_input_wrapper mb-5">
                    <div class="wrapper">
                      <label for="user_avatar">
                        <!-- <i class="fal fa-pencil-alt"></i> -->
                      </label>
                      <img
                        class="image_uploaded"
                        :src="edit.avatar.path"
                        alt="User Avatar"
                        width="160"
                        height="160"
                      />
                      <input
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        class="form-control"
                        id="user_avatar"
                        @change="selectUploadedImage"
                      />
                    </div>
                  </div>
                  <!-- END:: MULTI UPLOAD FILES GROUP -->
                  <!-- email input -->
                  <div style="margin-bottom: 10px">
                    <v-text-field
                      :label="$t('FORMS.Placeholders.email')"
                      v-model="edit.email"
                    />
                  </div>
                  <!-- username input  -->
                  <v-text-field
                    :label="$t('FORMS.Placeholders.username')"
                    v-model="edit.username"
                  />

                  <!-- Start Phone -->
                  <div class="absolute_btn_container">
                    <base-country-flag-phone-input
                      @changeKey="phonecodeChanged"
                      :placeholder="$t('FORMS.Placeholders.phone')"
                      :preSelectedPhoneCode="edit.phoneCode"
                      v-model="edit.phone"
                    />
                    <button class="absolute_btn">
                      {{ $t('BUTTONS.verify') }}
                    </button>
                  </div>
                  <!-- End Phone -->

                  <!-- confirmation code  -->
                  <div class="absolute_btn_container">
                    <v-text-field
                      :label="$t('FORMS.Placeholders.confirmationCode')"
                      v-model="edit.code"
                    />
                    <button class="absolute_btn">
                      {{ $t('BUTTONS.confirm') }}
                    </button>
                  </div>
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
                      <div class="timer">{{ '0 : ' + timerCount }}</div>
                    </div>
                    <!-- End:: CountDown Timer -->
                  </div>
                  <!-- save button -->
                  <div class="btn_wrapper">
                    <base-button
                      class="edit_form_btn"
                      :btnText="$t('BUTTONS.saveChanges')"
                      :isLoading="isLoadingEdit"
                    />
                  </div>
                  <!-- change password  btn -->
                  <div class="change_password_btn">
                    <button @click="openChangePasswordModel">
                      {{ $t('BUTTONS.changePassword') }}
                      <img
                        src="@/assets/media/icons/ui_icons/edit.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </v-form>
              </v-card>
            </v-dialog>
            <!-- End ::  Edit model  -->
            <!-- Start ::  Change Password model  -->
            <v-dialog v-model="isChangePasswordModel" width="500">
              <v-card class="p-4 card_container">
                <v-form @submit.prevent>
                  <h3 class="card_title mb-10">
                    {{ $t('BUTTONS.changePassword') }}
                  </h3>
                  <!-- Start:: Password Input -->
                  <base-input
                    type="password"
                    :placeholder="$t('FORMS.Placeholders.currentPassword')"
                    v-model="password.current"
                  />
                  <!-- End:: Password Input -->
                  <!-- Start:: Password Input -->
                  <base-input
                    type="password"
                    :placeholder="$t('FORMS.Placeholders.newPassword')"
                    v-model="password.new"
                  />
                  <!-- End:: Password Input -->
                  <!-- Start:: Password Input -->
                  <base-input
                    type="password"
                    :placeholder="$t('FORMS.Placeholders.confirmPassword')"
                    v-model="password.confirm"
                  />
                  <!-- End:: Password Input -->
                  <!-- save button -->
                  <div class="btn_wrapper">
                    <base-button
                      class="edit_form_btn"
                      :btnText="$t('BUTTONS.saveChanges')"
                      :isLoading="isLoadingPassword"
                    />
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
            <div
              @click="isDeleteAccountModel = true"
              class="profile_tap danger"
            >
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
            <v-dialog v-model="isDeleteAccountModel" width="500">
              <v-card class="p-4 card_container">
                <v-form @submit.prevent>
                  <h6>{{ $t('TITLES.deleteAccount') }}</h6>
                  <!-- save button -->

                  <div class="flex_end">
                    <button class="flex_end-delete">
                      {{ $t('BUTTONS.delete') }}
                    </button>
                    <base-button :btnText="$t('BUTTONS.keepMeIn')" />
                  </div>
                </v-form>
              </v-card>
            </v-dialog>
          </li>
          <!-- log out  -->
          <li class="profile_tap_container">
            <div @click="isLogoutModel = true" class="profile_tap danger">
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
            <v-dialog v-model="isLogoutModel" width="500">
              <v-card class="p-4 card_container">
                <v-form @submit.prevent>
                  <h6>{{ $t('TITLES.logoutMessage') }}</h6>
                  <!-- save button -->

                  <div class="flex_end">
                    <button class="flex_end-delete">
                      {{ $t('BUTTONS.logout') }}
                    </button>
                    <base-button :btnText="$t('BUTTONS.keepMeIn')" />
                  </div>
                </v-form>
              </v-card>
            </v-dialog>
          </li>
        </ul>
      </div>
      <div style="flex: 1">
        <div class="child_container">
          <NuxtChild />
        </div>
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
      isChangePasswordModel: false,
      isDeleteAccountModel: false,
      isLogoutModel: false,
      timerCount: 60,
      // isLoadingPassword:false,
      isLoadingEdit: false,
      isLoadingPassword: false,
      edit: {
        email: '',
        username: '',
        phoneCode: '',
        code: '',
        avatar: {
          path: 'https://images.pexels.com/photos/13984623/pexels-photo-13984623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          file: null,
        },
      },
      password: {
        current: '',
        new: '',
        confirm: '',
      },
    }
  },
  methods: {
    // Start:: Change Selected Phonecode
    phonecodeChanged(data) {
      this.edit.phoneCode = data
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
    //   Start ::open change password model
    openChangePasswordModel() {
      this.isEditModel = false
      this.isChangePasswordModel = true
    },
    //   End ::open change password model
    // START:: SELECT UPLOADED IMAGE
    selectUploadedImage(e) {
      this.edit.avatar.path = URL.createObjectURL(e.target.files[0])
      this.edit.avatar.file = e.target.files[0]
    },
    // END:: SELECT UPLOADED IMAGE
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
  .resend_code_container {
    @include flexSpaceBetweenAlignment;
    .resend_btn {
      color: var(--main_theme_clr);
      font-weight: bold;
    }
    .timer_wrapper {
      font-size: 1rem;
    }
  }
  .edit_form_btn {
    width: 100% !important;
    padding: 1rem !important;
  }
}
.change_password_btn {
  margin-top: 1rem;
  button {
    width: 100%;
    padding: 0.5rem 0rem;
    @include flexSpaceBetweenAlignment;
    transition: all 0.5s;
    img {
      width: 25px;
    }
    &:hover {
      padding: 0.5rem;
      border-radius: 10px;
      background: rgba(128, 128, 128, 0.2);
    }
  }
}

.absolute_btn_container {
  height: auto;
  position: relative;
  .absolute_btn {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: var(--main_theme_clr);
  }
}
.flex_end {
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  height: 80px;
  margin-top: 1rem;
  column-gap: 1rem;
  .flex_end-delete {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    width: 150px;
    border-radius: 10px;
    height: 65px;
    align-self: flex-end;
    border: 1px solid red;
    transition: all 0.3s;
    font-weight: bold;
    &:hover {
      background: red;
      color: white;
    }
  }
}
.child_container {
  width: 90%;
  margin: 0rem auto;
}
</style>
