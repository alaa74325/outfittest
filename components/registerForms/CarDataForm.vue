<template>
  <div class="personal_form_wrapper">
    <form class="mt-5" @submit.prevent="validateFormInputs">
      <div class="row">
        <!-- Start:: Images Inputs -->
        <div class="image_inputs_group">
          <!-- ********** Start:: Car Insurance Input ********** -->
          <div class="single_image_input_wrapper">
            <div class="wrapper">
              <label for="car_insurance"></label>
              <img
                src="~/assets/media/images/uploadImage.png"
                alt="upload image"
                v-if="!carInsurance.path"
              />
              <img
                class="image_uploaded"
                :src="carInsurance.path"
                alt="User Image"
                width="100"
                height="100"
                v-else
              />
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                class="form-control"
                id="car_insurance"
                @change="selectFileToUpload"
              />
            </div>
            <div class="custom_placeholder">
              {{ $t("form.inputs.carInsurance") }}
            </div>
          </div>
          <!-- ********** End:: Car Insurance Input ********** -->

          <!-- ********** Start:: Car Form Input ********** -->
          <div class="single_image_input_wrapper">
            <div class="wrapper">
              <label for="car_form"></label>
              <img
                src="~/assets/media/images/uploadImage.png"
                alt="upload image"
                v-if="!carForm.path"
              />
              <img
                class="image_uploaded"
                :src="carForm.path"
                alt="User Image"
                width="100"
                height="100"
                v-else
              />
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                class="form-control"
                id="car_form"
                @change="selectFileToUpload"
              />
            </div>
            <div class="custom_placeholder">
              {{ $t("form.inputs.carForm") }}
            </div>
          </div>
          <!-- ********** End:: Car Form Input ********** -->

          <!-- ********** Start:: Driving License Input ********** -->
          <div class="single_image_input_wrapper">
            <div class="wrapper">
              <label for="driving_license"></label>
              <img
                src="~/assets/media/images/uploadImage.png"
                alt="upload image"
                v-if="!drivingLicense.path"
              />
              <img
                class="image_uploaded"
                :src="drivingLicense.path"
                alt="User Image"
                width="100"
                height="100"
                v-else
              />
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                class="form-control"
                id="driving_license"
                @change="selectFileToUpload"
              />
            </div>
            <div class="custom_placeholder">
              {{ $t("form.inputs.drivingLicense") }}
            </div>
          </div>
          <!-- ********** End:: Driving License Input ********** -->

          <!-- ********** Start:: Car Behind Input ********** -->
          <div class="single_image_input_wrapper">
            <div class="wrapper">
              <label for="car_behind"></label>
              <img
                src="~/assets/media/images/uploadImage.png"
                alt="upload image"
                v-if="!carBehind.path"
              />
              <img
                class="image_uploaded"
                :src="carBehind.path"
                alt="User Image"
                width="100"
                height="100"
                v-else
              />
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                class="form-control"
                id="car_behind"
                @change="selectFileToUpload"
              />
            </div>
            <div class="custom_placeholder">
              {{ $t("form.inputs.carBack") }}
            </div>
          </div>
          <!-- ********** End:: Car Behind Input ********** -->

          <!-- ********** Start:: Car Front Input ********** -->
          <div class="single_image_input_wrapper">
            <div class="wrapper">
              <label for="car_front"></label>
              <img
                src="~/assets/media/images/uploadImage.png"
                alt="upload image"
                v-if="!carFront.path"
              />
              <img
                class="image_uploaded"
                :src="carFront.path"
                alt="User Image"
                width="100"
                height="100"
                v-else
              />
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                class="form-control"
                id="car_front"
                @change="selectFileToUpload"
              />
            </div>
            <div class="custom_placeholder">
              {{ $t("form.inputs.carFront") }}
            </div>
          </div>
          <!-- ********** End:: Car Front Input ********** -->
        </div>
        <!-- End:: Images Inputs -->

        <!-- Start:: Car Classification Input -->
        <base-select-input
          static
          :staticItems="classifications"
          :label="$t('form.inputs.carClassification')"
          v-model="carClassification"
        />
        <!-- End:: Car Classification Input -->

        <!-- Start:: Car Brand Input -->
        <base-select-input
          static
          :staticItems="brands"
          :label="$t('form.inputs.carBrand')"
          @input="getModels(carBrand.id)"
          v-model="carBrand"
        />
        <!-- End:: Car Brand Input -->

        <!-- Start:: Car Model Input -->
        <base-select-input
          static
          :staticItems="models"
          :label="$t('form.inputs.carModel')"
          v-model="carModel"
        />
        <!-- End:: Car Model Input -->

        <!-- Start:: Plate Letters Input -->
        <base-input
          col="6"
          type="otb"
          length="3"
          :label="$t('form.inputs.plateLetters')"
          v-model="plateLetters"
        />
        <!-- End:: Plate Letters Input -->

        <!-- Start:: Plate Numbers Input -->
        <base-input
          class="d-flex align-items-center mt-4"
          col="6"
          type="number"
          :placeholder="$t('form.inputs.plateNumbers')"
          v-model="plateNumbers"
        />
        <!-- End:: Plate Numbers Input -->

        <!-- Start:: Full Plate Input -->
        <base-input
          type="text"
          :placeholder="$t('form.inputs.fullPlate')"
          v-model="fullPlate"
        />
        <!-- End:: Full Plate Input -->

        <!-- Start:: Plate Type Input -->
        <base-select-input
          static
          :staticItems="plateTypes"
          :label="$t('form.inputs.plateType')"
          v-model="plateType"
        />
        <!-- End:: Plate Type Input -->

        <!-- Start:: Recording Type Input -->
        <!-- <base-select-input
          label="Recording Type"
          v-model="recordingType"
        /> -->
        <!-- End:: Recording Type Input -->

        <!-- Start:: Manufacturing Year  Input -->
        <base-input
          type="number"
          :placeholder="$t('form.inputs.manufacturingYear')"
          v-model="manufacturingYear"
        />
        <!-- End:: Manufacturing Year Input -->

        <!-- Start:: Car License Serial Number Input -->
        <base-input
          type="number"
          :placeholder="$t('form.inputs.carLicenseSerialNumber')"
          v-model="licenseSerialNumber"
        />
        <!-- End:: Car License Serial Number Input -->
      </div>

      <div class="btn_wrapper d-flex justify-content-center mt-3">
        <base-button
          :btnText="$t('form.button')"
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
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Select Lists data
      classifications: [],
      brands: [],
      models: [],
      plateTypes: [
        {
          id: 1,
          name: "Private Car",
        },
        {
          id: 6,
          name: "Taxi",
        },
      ],
      // End:: Select Lists data

      carInsurance: {
        path: null,
        file: null,
      },
      carForm: {
        path: null,
        file: null,
      },
      drivingLicense: {
        path: null,
        file: null,
      },
      carBehind: {
        path: null,
        file: null,
      },
      carFront: {
        path: null,
        file: null,
      },
      carClassification: null,
      carBrand: null,
      carModel: null,
      plateLetters: null,
      plateNumbers: null,
      fullPlate: null,
      plateType: null,
      // recordingType: null,
      manufacturingYear: null,
      licenseSerialNumber: null,
    };
  },

  methods: {
    // Start:: Get Select Lists data
    getClassifications() {
      const request_headers = {
        "Accept-language": "ar",
        lang: "ar",
      };
      this.$axios({
        method: "GET",
        url: `car_packages`,
        headers: request_headers,
      })
        .then((res) => {
          this.classifications = res.data.data;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    getBrands() {
      const request_headers = {
        "Accept-language": "ar",
        lang: "ar",
      };
      this.$axios({
        method: "GET",
        url: `brands`,
        headers: request_headers,
      })
        .then((res) => {
          this.brands = res.data.data;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    getModels(brand_id) {
      const request_headers = {
        "Accept-language": "ar",
        lang: "ar",
      };
      this.$axios({
        method: "GET",
        url: `brands/${brand_id}`,
        headers: request_headers,
      })
        .then((res) => {
          this.models = res.data.data;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    // Start:: Get Select Lists data

    // Start:: Select Upload Image
    selectFileToUpload(e) {
      if (e.target.id == "car_insurance") {
        this.carInsurance.path = URL.createObjectURL(e.target.files[0]);
        this.carInsurance.file = e.target.files[0];
      } else if (e.target.id == "car_form") {
        this.carForm.path = URL.createObjectURL(e.target.files[0]);
        this.carForm.file = e.target.files[0];
      } else if (e.target.id == "driving_license") {
        this.drivingLicense.path = URL.createObjectURL(e.target.files[0]);
        this.drivingLicense.file = e.target.files[0];
      } else if (e.target.id == "car_behind") {
        this.carBehind.path = URL.createObjectURL(e.target.files[0]);
        this.carBehind.file = e.target.files[0];
      } else if (e.target.id == "car_front") {
        this.carFront.path = URL.createObjectURL(e.target.files[0]);
        this.carFront.file = e.target.files[0];
      }
    },
    // End:: Select Upload Image

    // Start:: Validate Form Inputs
    validateFormInputs() {
      if (!this.carInsurance.file) {
        this.$notification.error({
          message: this.$t("form.validation.carInsurance"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.carForm.file) {
        this.$notification.error({
          message: this.$t("form.validation.carForm"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.drivingLicense.file) {
        this.$notification.error({
          message: this.$t("form.validation.drivingLicense"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.carBehind.file) {
        this.$notification.error({
          message: this.$t("form.validation.carBack"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.carFront.file) {
        this.$notification.error({
         message: this.$t("form.validation.carFront"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.carClassification) {
        this.$notification.error({
          message: this.$t("form.validation.carClassification"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.carBrand) {
        this.$notification.error({
          message: this.$t("form.validation.carBrand"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.carModel) {
        this.$notification.error({
          message: this.$t("form.validation.carModel"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (this.plateLetters.length < 3) {
        this.$notification.error({
          message: this.$t("form.validation.plateLetters"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.plateNumbers) {
        this.$notification.error({
          message: this.$t("form.validation.plateNumbers"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.fullPlate) {
        this.$notification.error({
          message: this.$t("form.validation.fullPlate"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.manufacturingYear) {
        this.$notification.error({
          message: this.$t("form.validation.manufacturingYear"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.licenseSerialNumber) {
        this.$notification.error({
          message: this.$t("form.validation.carLicenseSerialNumber"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else {
        this.submitForm();
      }
    },
    // End:: Validate Form Inputs

    // Start:: Submit Form
    submitForm() {
      const request_headers = {
        "Accept-language": "ar",
        lang: "ar",
      };

      const request_data = new FormData();
      // Start:: Append Request Data
      request_data.append(
        "user_id",
        localStorage.getItem("captain_one_driver_id")
      );
      request_data.append("car_insurance_image", this.carInsurance.file);
      request_data.append("car_form_image", this.carForm.file);
      request_data.append("car_licence_image", this.drivingLicense.file);
      request_data.append("car_back_image", this.carBehind.file);
      request_data.append("car_front_image", this.carFront.file);
      request_data.append("car_package_id", this.carClassification.id);
      request_data.append("brand_id", this.carBrand.id);
      request_data.append("car_model_id", this.carModel.id);
      request_data.append("plate_letter_left", this.plateLetters[0]);
      request_data.append("plate_letter_middle", this.plateLetters[1]);
      request_data.append("plate_letter_right", this.plateLetters[2]);
      request_data.append("plate_numbers_only", this.plateNumbers);
      request_data.append("plate_number", this.fullPlate);
      request_data.append("plate_type", this.plateType.id);
      request_data.append("manufacture_year", this.manufacturingYear);
      request_data.append("license_serial_number", this.licenseSerialNumber);
      // End:: Append Request Data

      // START:: SEND REQUEST
      this.$axios({
        method: "POST",
        url: `second_step_driver_register`,
        data: request_data,
        headers: request_headers,
      })
        .then(() => {
          this.$notification.success({
            message: "Data Sent Successfully",
            placement: "bottomRight",
            duration: 3,
          });
          this.$emit("nextStep");
        })
        .catch((error) => {
          this.isWaitingRequest = false;
          this.$notification.error({
            message: error.response.data.message,
            placement: "bottomRight",
            duration: 3,
          });
        });
      // START:: SEND REQUEST
    },
    // End:: Submit Form
  },

  created() {
    // Start:: Fire Methods
    this.getClassifications();
    this.getBrands();
    this.getModels();
    // End:: Fire Methods
  },
};
</script>

<style lang="scss" scoped>
.personal_form_wrapper {
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    .row {
      width: 35%;
    }
  }

  .image_inputs_group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 8px;

    .single_image_input_wrapper {
      width: 25%;
    }
  }
}

@media (max-width: 850px) {
  .personal_form_wrapper {
    form {
      .row {
        width: 95%;
      }
    }
    .image_inputs_group {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 8px;
  
      .single_image_input_wrapper {
        width: 35%;
      }
    }
  }
}

@media (max-width: 1024px) {
  .personal_form_wrapper {
    .image_inputs_group {
      .single_image_input_wrapper {
        width: 45%;
      }
    }
  }
}
</style>
  