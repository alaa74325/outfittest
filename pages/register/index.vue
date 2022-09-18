<template>
  <div class="d-flex justify-content-center align-items-center w-100">
    <MainLoader v-if="isLoading"/>

    <div class="register_forms">
        <!-- Start:: Titles -->
        <h4 class="form_title"> {{$t("form.title")}}</h4>
        <h5 class="form_subtitle"> {{$t("form.desc")}} </h5>
        <!-- End:: Titles -->

        <!-- Start:: Wizard Tabs -->
        <div class="wizard_tabs_wrapper">
          <button class="wizard_tab" :disabled="currentStep == 1 || currentStep == 2 || currentStep == 3">
            <span class="icon">
              <i class="fa-solid fa-user"></i>
            </span>

            <div class="tab_name"> {{$t("form.steps.one")}} </div>
          </button>

          <button class="wizard_tab" :disabled="currentStep == 2 || currentStep == 3">
            <span class="icon">
              <i class="fa-solid fa-car"></i>
            </span>

            <div class="tab_name"> {{$t("form.steps.two")}} </div>
          </button>

          <button class="wizard_tab" :disabled="currentStep == 3">
            <span class="icon">
              <i class="fa-solid fa-star"></i>
            </span>

            <div class="tab_name"> {{$t("form.steps.three")}} </div>
          </button>
        </div>
        <!-- End:: Wizard Tabs -->

      <div class="forms_outer_wrapper">
        <div class="forms_wrapper">
          <PersonalInfoForm
            v-if="currentStep == 1"
            @nextStep="currentStep = 2"
          />
          <CarDataForm
            v-if="currentStep == 2"
            @nextStep="currentStep = 3"
          />
          <SubscriptionForm
            v-if="currentStep == 3"
            @nextStep="currentStep = 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainLoader from "~/components/ui/MainLoader.vue";
import PersonalInfoForm from "~/components/registerForms/PersonalInfoForm.vue";
import CarDataForm from "~/components/registerForms/CarDataForm.vue";
import SubscriptionForm from "~/components/registerForms/SubscriptionForm.vue";

export default {
  name: "Register",

  layout: 'auth',

  head() {  
    return {
      title: this.$t("meta.register"),
      meta: [
        {
          hid: "title",
          name: "title",
          content: this.$t("meta.register"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("meta.register"),
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.desc"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("meta.desc"),
        },
      ],
    }
  },

  components: {
    MainLoader,
    PersonalInfoForm,
    CarDataForm,
    SubscriptionForm,
  },

  data() {
    return {
      isLoading: true,
      currentStep: 1,
    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      document.body.style.overflow = "unset";
    }, 1000);
  },
}
</script>

<style lang="scss" scoped>
.register_forms {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .form_title,
  .form_subtitle {
    text-align: center;
    color: var(--white_clr);
  }

  .wizard_tabs_wrapper {
    width: 35%;
    border: 1px dashed var(--white_clr);
    position: relative;
      margin-block: 60px;
    .wizard_tab {
      position: absolute;
      top: 50%;
      transform: translateY(-35%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 4px;
      cursor: unset;
      .icon {
        display: block;
        width: 55px;
        height: 55px;
        background-color: #f1f1f1;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: var(--light_gray_clr);
      }
      .tab_name {
        color: var(--white_clr);
      }
      &:first-child {
        left: -35px;
      }
      &:nth-child(2) {
        left: calc(50% - 40px);
      }
      &:last-child {
        left: calc(100% - 50px);
      }
      &[disabled] {
      .icon {
        background-color: var(--main_theme_clr);
        color: var(--secondary_theme_clr);
      }
      }
    }
  }
  .forms_wrapper {
    width: 100%;
    min-height: 55vh;
    max-height: 55vh;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}

@media (max-width: 850px) {
  .register_forms {
    margin-top: 60px;
    .wizard_tabs_wrapper {
      width: 95%;
    }
  }
}
</style>
