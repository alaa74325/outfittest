import Vue from 'vue'

// ********** Inputs
import BaseInput from '~/components/formInputs/BaseInput.vue';
import BaseSelectInput from '~/components/formInputs/BaseSelectInput.vue';
import BaseCountryFlagPhoneInput from '~/components/formInputs/BaseCountryFlagPhoneInput.vue';
import BaseOtpInput from '~/components/formInputs/BaseOtpInput.vue';
import BaseTextArea from '~/components/formInputs/BaseTextArea.vue';

Vue.component('base-input', BaseInput);
Vue.component('base-country-flag-phone-input', BaseCountryFlagPhoneInput);
Vue.component('base-select-input', BaseSelectInput);
Vue.component('base-otp-input', BaseOtpInput);
Vue.component('base-textare', BaseTextArea);

import BaseButton from '~/components/ui/BaseButton.vue';
Vue.component('base-button', BaseButton);
