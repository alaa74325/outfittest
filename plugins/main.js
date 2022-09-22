import Vue from 'vue'

// ********** Inputs
import BaseInput from '~/components/FormInputs/BaseInput.vue';
import BaseSelectInput from '~/components/FormInputs/BaseSelectInput.vue';
import BaseCountryFlagPhoneInput from '~/components/FormInputs/BaseCountryFlagPhoneInput.vue';
import BaseOtpInput from '~/components/FormInputs/BaseOtpInput.vue';

Vue.component('base-input', BaseInput);
Vue.component('base-country-flag-phone-input', BaseCountryFlagPhoneInput);
Vue.component('base-select-input', BaseSelectInput);
Vue.component('base-otp-input', BaseOtpInput);

import BaseButton from '~/components/ui/BaseButton.vue';
Vue.component('base-button', BaseButton);
