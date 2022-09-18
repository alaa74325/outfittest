<template>
  <div class="personal_form_wrapper">
    <form class="mt-5" @submit.prevent="validateFormInputs">
      <div class="row justify-content-center">
        <!-- ********** Start:: Driver Image Input ********** -->
        <div class="single_image_input_wrapper">
          <div class="wrapper">
            <label for="user_image"></label>
            <img
              src="~/assets/media/images/uploadImage.png"
              alt="upload image"
              v-if="!image.path"
            />
            <img
              class="image_uploaded"
              :src="image.path"
              alt="User Image"
              width="100"
              height="100"
              v-else
            />
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              class="form-control"
              id="user_image"
              @change="selectFileToUpload"
            />
          </div>
          <div class="custom_placeholder">
            {{ $t("form.inputs.driverImg") }}
          </div>
        </div>
        <!-- ********** End:: Driver Image Input ********** -->

        <!-- Start:: Username Input -->
        <base-input
          type="text"
          :placeholder="$t('form.inputs.userName')"
          v-model="userName"
        />
        <!-- End:: Username Input -->

        <!-- Start:: Phonecode Input -->
        <base-input
          type="phonecode"
          :placeholder="$t('form.inputs.mobileNum')"
          @changeKey="setSelectedPhoneCode"
          v-model="mobile"
        />
        <!-- End:: Phonecode Input -->

        <!-- Start:: Email Input -->
        <base-input
          type="email"
          :placeholder="$t('form.inputs.email')"
          v-model="email"
        />
        <!-- End:: Email Input -->

        <!-- Start:: City Input -->
        <base-select-input
          static
          :staticItems="cities"
          :label="$t('form.inputs.city')"
          v-model="city"
        />
        <!-- End:: City Input -->

        <!-- Start:: National Id Input -->
        <base-input
          type="text"
          :placeholder="$t('form.inputs.idNum')"
          v-model="natId"
        />
        <!-- End:: National Id Input -->

        <!-- Start:: Date Of Birth Input -->
        <base-input
          type="date"
          :placeholder="$t('form.inputs.dateBirth')"
          v-model="dateOfBirth"
        />
        <!-- End:: Date Of Bearth Input -->

        <!-- Start:: Hijri Date Of Birth Input -->
        <!-- HIJRI DATE:: {{ hijriDateOfBirth }}
        <date-picker v-model="hijriDateOfBirth"/> -->

        <!-- <base-input
          type="date"
          :placeholder="$t('form.inputs.dateBirthHigri')"
          v-model="hijriDateOfBirth"
        /> -->
        <!-- End:: Hijri Date Of Birth Input -->

        <!-- Start:: Driver Is With Special Needs Input -->
        <base-input
          col="6"
          type="checkbox"
          :label="$t('form.inputs.driverNeed')"
          v-model="isWithSpecialNeeds"
        />
        <!-- End:: Driver Is With Special Needs Input -->

        <!-- Start:: Driver Is Infected Input -->
        <base-input
          col="6"
          type="checkbox"
          :label="$t('form.inputs.driverproblem')"
          v-model="isInfected"
        />
        <!-- End:: Driver Is Infected Input -->

        <!-- Start:: Health Certificate Input -->
        <div class="col-12">
          <div class="input_wrapper upload_file_text_preview top_label">
            <label class="input_file_label" for="health_certificate">
              <span class="file_name">
                <template v-if="!this.healthCertificate.path">
                  {{ $t("form.inputs.healthCertificate") }}
                </template>
                <template v-else>
                  {{ this.healthCertificate.path }}
                </template>
              </span>
            </label>

            <input
              type="file"
              accept="image/*, .pdf"
              class="form-control"
              id="health_certificate"
              @change="selectFileToUpload"
            />
          </div>
        </div>
        <!-- End:: Health Certificate Input -->

        <!-- Start:: Password Input -->
        <base-input
          type="password"
          :placeholder="$t('form.inputs.Password')"
          v-model="password"
        />
        <!-- End:: Password Input -->

        <!-- Start:: Confirm Password Input -->
        <base-input
          type="password"
          :placeholder="$t('form.inputs.confirmPassword')"
          v-model="confirmPassword"
        />
        <!-- End:: Confirm Password Input -->
      </div>

      <div class="btn_wrapper mb-3 d-flex justify-content-center">
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
  name: "PersonalInfoForm",

  emits: ["nextStep"],

  data() {
    return {
      // Start:: Loader Contrle Data
      isWaitingRequest: false,
      // End:: Loader Contrle Data

      // Start:: Select Lists data
      cities: [],
      // End:: Select Lists data

      image: {
        path: null,
        file: null,
      },
      userName: null,
      selectedPhoneCode: null,
      mobile: null,
      email: null,
      city: null,
      natId: null,
      dateOfBirth: null,
      hijriDateOfBirth: null,
      isWithSpecialNeeds: false,
      isInfected: false,
      healthCertificate: {
        path: null,
        file: null,
      },
      password: null,
      confirmPassword: null,
    };
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

    // Start:: Select Upload Image
    selectFileToUpload(e) {
      if (e.target.id == "user_image") {
        this.image.path = URL.createObjectURL(e.target.files[0]);
        this.image.file = e.target.files[0];
      } else if (e.target.id == "health_certificate") {
        this.healthCertificate.path = e.target.files[0].name;
        this.healthCertificate.file = e.target.files[0];
      }
    },
    // End:: Select Upload Image

    // Start:: Control Phonecode
    setSelectedPhoneCode(value) {
      this.selectedPhoneCode = value;
    },
    // End:: Control Phonecode

    // Start:: Validate Form Inputs
    validateFormInputs() {
      if (!this.image.file) {
        this.$notification.error({
          message: this.$t("form.validation.driverImg"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.userName) {
        this.$notification.error({
          message: this.$t("form.validation.userName"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.mobile) {
        this.$notification.error({
          message: this.$t("form.validation.mobileNum"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.email) {
        this.$notification.error({
          message: this.$t("form.validation.email"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.city) {
        this.$notification.error({
          message: this.$t("form.validation.city"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.natId) {
        this.$notification.error({
          message: this.$t("form.validation.idNum"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.dateOfBirth) {
        this.$notification.error({
          message: this.$t("form.validation.dateBirth"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      }
      // else if (!this.hijriDateOfBirth) {
      //   this.$notification.error({
      //     message: "Hijri Date Of Birth Field Can't Be Empty",
      //     placement: "bottomRight",
      //     duration: 3,
      //   });
      //   return;
      // }
      else if (!this.healthCertificate.file) {
        this.$notification.error({
          message: this.$t("form.validation.healthCertificate"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (!this.password) {
        this.$notification.error({
          message: this.$t("form.validation.Password"),
          placement: "bottomRight",
          duration: 3,
        });
        return;
      } else if (this.password != this.confirmPassword) {
        this.$notification.error({
          message: this.$t("form.validation.confirmPassword"),
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
      request_data.append("user_type", "driver");
      request_data.append("image", this.image.file);
      request_data.append("fullname", this.userName);
      request_data.append("phonecode", this.selectedPhoneCode);
      request_data.append("phone", this.mobile);
      request_data.append("email", this.email);
      request_data.append("city_id", this.city.id);
      request_data.append("identity_number", this.natId);
      request_data.append("date_of_birth", this.dateOfBirth);
      request_data.append("date_of_birth_hijri", this.dateOfBirth);
      request_data.append("is_with_special_needs", +this.isWithSpecialNeeds);
      request_data.append("is_infected", +this.isInfected);
      request_data.append("health_certificate", this.healthCertificate.file);
      request_data.append("password", this.password);
      // End:: Append Request Data

      // START:: SEND REQUEST
      this.$axios({
        method: "POST",
        url: `register`,
        data: request_data,
        headers: request_headers,
      })
        .then((res) => {
          localStorage.setItem("captain_one_driver_id", res.data.data.user_id);
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
    this.getCities();
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
}

@media (max-width: 850px) {
.personal_form_wrapper {
  form {
      .row {
        width: 95%;
      }
    }
  }
}
</style>