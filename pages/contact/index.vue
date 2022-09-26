<template>
  <div class="contact_us_content_wrapper">
    <div class="container-xl">
      <div class="contact_form_wrapper">
        <div class="row">
          <!-- Start:: Contant Form Image -->
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
          <!-- End:: Contant Form Image -->

          <!-- Start:: Contant Form -->
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
                  <base-input
                    type="text"
                    :placeholder="$t('FORMS.Placeholders.phone')"
                    v-model="data.phone"
                  />
                  <!-- End Phone Input -->
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
          <!-- End:: Contant Form -->
        </div>
      </div>
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

  data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Request Data
      data: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
      // End:: Request Data
    }
  },

  methods: {
    // Start:: Validate Form Inputs
    validateFormInputs() {},
    // End:: Validate Form Inputs

    // Start:: Submit Form
    submitForm() {},
    // End:: Submit Form
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
        color: var(--theme_text_clr);
        font-style: italic;
        font-size: 28px;
        letter-spacing: 5px;
      }
    }
  }
}
</style>