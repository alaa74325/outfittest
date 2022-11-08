<template>
  <div class="contact_us_content_wrapper">
    <div class="container-xl">
      <!-- Start:: Page Form -->
      <div class="contact_form_wrapper">
        <div class="row">
          <!-- Start:: Contact Form Image -->
          <div class="col-md-6">
            <div class="img_wrapper">
              <img
                src="@/assets/media/images/contactUsImage.png"
                width="200"
                height="200"
                alt="contact us from"
              />
            </div>
          </div>
          <!-- End:: Contact Form Image -->

          <!-- Start:: Contact Form -->
          <div class="col-md-6">
            <div class="form_wrapper">
              <h2 class="form_title"> {{$t("TITLES.contactUs")}} </h2>
              <form @submit.prevent="validateFormInputs">
                <div class="row justify-content-center">
                  <!-- Start:: Name Input -->
                  <base-input
                    type="text"
                    :placeholder="$t('FORMS.Placeholders.fullName')"
                    v-model="data.name"
                  />
                  <!-- End:: Name Input -->

                  <!-- Start:: Email Input -->
                  <base-input
                    type="email"
                    :placeholder="$t('FORMS.Placeholders.email')"
                    v-model="data.email"
                  />
                  <!-- End:: Email Input -->

                  <!-- Start Phone Input -->
                  <base-country-flag-phone-input
                    @changeKey="phonecodeChanged"
                    :placeholder="$t('FORMS.Placeholders.phone')"
                    :preSelectedPhoneCode="data.phoneCode"
                    v-model="data.phone"
                  />

                  <!-- <base-input
                    type="text"
                    :placeholder="$t('FORMS.Placeholders.phone')"
                    v-model="data.phone"
                  /> -->
                  <!-- End Phone Input -->

                  <!-- Start Message Input -->
                  <base-textarea
                    rows="8"
                    :placeholder="$t('FORMS.Placeholders.howCanWeHelp')"
                    v-model="data.message"
                  />
                  <!-- End Message Input -->
                </div>

                <div class="btn_wrapper mb-3">
                  <base-button
                    class="w-100"
                    :btnText="$t('BUTTONS.sendMessage')"
                    :isLoading="isWaitingRequest"
                  />
                </div>
              </form>
            </div>
          </div>
          <!-- End:: Contact Form -->
        </div>
      </div>
      <!-- End:: Page Form -->

      <!-- Start:: Page Map -->
      <div class="page_map_wrapper">
      <GMap
        ref="gMap"
        :center="mapCenter"
        :options="{fullscreenControl: true, styles: mapStyle}"
        :zoom="13"
      >
        <GMapMarker
          :position="mapCenter"
        ></GMapMarker>
      </GMap>
      </div>
      <!-- End:: Page Map -->
    </div>
  </div>
</template>

<script>

export default {
  name: "ContactUs",

  head() {
    return {
      title: "Contact Us",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Contact Us",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Contact Us",
        },
      ],
    };
  },

  async asyncData({$axiosRequest}) {
    try {
      const contactData = await $axiosRequest({
        method: "GET",
        url: "contact",
      });
      return {
        mapCenter: {
          lat:  parseFloat(contactData.data.data.lat),
          lng:  parseFloat(contactData.data.data.lng),
        },
      };
    } catch(err) {
      console.log(err.response.data.message)
    }
  },

  data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: G-map Data
      mapStyle: [
          {
              featureType: "all",
              elementType: "all",
              stylers: [{ saturation: -100 }],
          },
      ],
      // End:: G-map Data

      // Start:: Request Data
      data: {
        name: null,
        email: null,
        phoneCode: null,
        phone: null,
        message: null,
      },
      // End:: Request Data
    }
  },

  methods: {
    // Start:: Change Selected Phonecode
    phonecodeChanged(data) {
      this.data.phoneCode = data;
    },
    // End:: Change Selected Phonecode

    // Start:: Validate Form
    validateFormInputs() {
      if (!this.data.name) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.name'),
        })
        return
      } else if (!this.data.email) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.email'),
        })
        return
      } else if (!this.data.phone) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.phone'),
        })
        return
      } else if (!this.data.message) {
        this.$izitoast.error({
          message: this.$t('FORMS.Validation.message'),
        })
        return
      } else {
        this.submitForm()
      }
    },
    // End:: Validate Form

    // Start:: Submit Form
    async submitForm() {
      this.isWaitingRequest = true;
      // Start:: Append Request Data
      const REQUEST_DATA = new FormData();
      REQUEST_DATA.append('fullname', this.data.name);
      REQUEST_DATA.append('email', this.data.email);
      REQUEST_DATA.append('phone', this.data.phoneCode.key+this.data.phone);
      REQUEST_DATA.append('content', this.data.message);
      // Start:: Append Request Data

      try {
        // ********** Start:: Implement Request ********** //
        await this.$axiosRequest({
          method: "POST",
          url: 'contact',
          data: REQUEST_DATA,
        });
        this.isWaitingRequest = false;
        this.$izitoast.success({
          message: this.$t('MESSAGES.sentSuccessfully'),
        });
        this.clearFormInput();

        // ********** End:: Implement Request ********** //
      } catch (err) {
        this.isWaitingRequest = false;
        this.$izitoast.error({
          message: err.response.data.message,
        });
      }
    },
    // End:: Submit Form

    // Start:: Clear Form Inputs
    clearFormInput() {
      this.data.name = null;
      this.data.email = null;
      this.data.phone = null;
      this.data.message = null;
    },
    // End:: Clear Form Inputs
  },
}
</script>

<style lang="scss" scoped>
.contact_us_content_wrapper {
  padding-block: 25px;
  .contact_form_wrapper {
    .img_wrapper {
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .form_wrapper {
      .form_title {
        margin-bottom: 20px;
        color: var(--theme_text_clr);
        font-style: italic;
        font-size: 28px;
        letter-spacing: 5px;
        text-transform: uppercase;
      }
    }
  }

  .page_map_wrapper {
    margin-top: 30px;
    border-radius: 15px;
    overflow: hidden;
  }
}
</style>
