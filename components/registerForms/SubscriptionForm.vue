<template>
  <div class="personal_form_wrapper">
    <h4 class="form_title"> {{ $t("form.inputs.chooseMethods") }}</h4>
    <form class="mt-5" @submit.prevent="validateFormInputs">
      <div class="row">
        <!-- Start:: Trips Input -->
        <base-input
          col="6"
          type="checkbox"
          :label="$t('form.inputs.trips')"
          v-model="isTripActive"
        />
        <!-- End:: Trips Input -->

        <!-- Start:: From City To City Input -->
        <base-input
          col="6"
          type="checkbox"
          :label="$t('form.inputs.cityToCity')"
          v-model="isCityToCityActive"
        />
        <!-- End:: From City To City Input -->

        <!-- Start:: Delivery Input -->
        <base-input
          col="6"
          type="checkbox"
          :label="$t('form.inputs.delivery')"
          v-model="isOrderActive"
        />
        <!-- End:: Delivery Input -->

        <!-- Start:: Delivery Input -->
        <base-input
          col="6"
          type="checkbox"
          :label="$t('form.inputs.recivePackages')"
          v-model="isPackageActive"
        />
        <!-- End:: Delivery Input -->

        <!-- Start:: Cities Input -->
        <base-select-input
          static
          :staticItems="cities"
          :label="$t('form.inputs.cities')"
          multiple
          v-model="selectedCities"
          v-if="isCityToCityActive"
        />
        <!-- End:: Cities Input -->
      </div>

      <div class="btn_wrapper d-flex justify-content-center mt-3">
        <base-button
          :btnText="$t('form.finish')"
          :isLoading="isWaitingRequest"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CarDataForm",

  emits: ["nextStep"],

  data() {
    return {
      selectedCities: [],
      isTripActive: false,
      isCityToCityActive: false,
      isOrderActive: false,
      isPackageActive: false,

      cities: [],
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data
    }
  },

  methods: {
    // Start:: Get Cities
    getCities() {
      const request_headers = {
        "Accept-language": "ar",
        lang: "ar",
      };
      this.$axios({
        method: "GET",
        url: `cities/1`,
        headers: request_headers,
      })
        .then((res) => {
          this.cities = res.data.data;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    // End:: Get Cities

    // Start:: Validate Form Inputs
    validateFormInputs() {
      if (this.isCityToCityActive && this.selectedCities.length == 0) {
        this.$notification.error({
          message: this.$t("form.validation.cities"),
          placement: 'bottomRight',
          duration: 3,
        })
        return
      } else {
        this.submitForm()
      }
    },
    // End:: Validate Form Inputs

    // Start:: Submit Form
    submitForm() {
      const request_headers = {
        'Accept-language': 'ar',
        'lang': 'ar'
      };

      const request_data = new FormData()
      // Start:: Append Request Data
      request_data.append('user_id', localStorage.getItem('captain_one_driver_id'));
      request_data.append(`is_trip_active`, +this.isTripActive);
      request_data.append(`is_city_to_city_active`, +this.isCityToCityActive);
      request_data.append(`is_order_active`, +this.isOrderActive);
      request_data.append(`is_package_active`, +this.isPackageActive);
      if(this.isCityToCityActive) {
        this.selectedCities.forEach((element, index) => {
          request_data.append(`city_id[${index}]`, element.id);
        });
      }
      // End:: Append Request Data

      // START:: SEND REQUEST
      this.$axios({
        method: 'POST',
        url: `third_step_driver_register`,
        data: request_data,
        headers: request_headers,
      })
        .then(() => {
          this.$notification.success({
            message: "Data Sent Successfully",
            placement: 'bottomRight',
            duration: 3,
          });
          localStorage.removeItem("captain_one_driver_id");
          this.$emit('nextStep');
          location.reload()
        })
        .catch((error) => {
          this.isWaitingRequest = false
          this.$notification.error({
            message: error.response.data.message,
            placement: 'bottomRight',
            duration: 3,
          })
        })
      // START:: SEND REQUEST
    },
    // End:: Submit Form
  },

  created() {
    // Start:: Fire Methods
    this.getCities();
    // End:: Fire Methods
  },
}
</script>

<style lang="scss" scoped>
.personal_form_wrapper {
  .form_title {
    margin-block: 35px 20px;
    text-align: center;
    color: var(--white_clr);
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    .row {
      width: 70%;
      max-width: 55%;
    }
  }
}

@media (max-width: 850px) {
.personal_form_wrapper {
  form {
      .row {
        width: 95%;
        max-width: 95%;
      }
    }
  }
}
</style>
