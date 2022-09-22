import Vue from 'vue'

// ********** Inputs
import BaseInput from '@/components/formInputs/BaseInput.vue';
import BaseCountryFlagPhoneInput from '@/components/formInputs/BaseCountryFlagPhoneInput.vue';
import BaseSelectInput from '@/components/formInputs/BaseSelectInput.vue';

Vue.component('base-input', BaseInput);
Vue.component('base-country-flag-phone-input', BaseCountryFlagPhoneInput);
Vue.component('base-select-input', BaseSelectInput);




import BaseButton from '~/components/ui/BaseButton.vue';
Vue.component('base-button', BaseButton);