import axios from 'axios';
// import i18n from 'i18n';

const serverRequest = axios.create({
  baseURL: `https://outfit.phpv8.aait-d.com/website/`,
  headers: {
    // "Authorization":  "Bearer " + USER_TOKEN,
    "cache-control": "cache-control",
    "Accept": "application/json",
    // "Accept-language": i18n.locale,
    // "lang": i18n.locale,
  },
});

export default {
  sendContactMessage(requestData, currentLang) {
    return serverRequest({
      method: "POST",
      url: 'contact',
      headers: {
        "Accept-language": currentLang,
        "lang": currentLang,
      },
      data: requestData,
    });
  },
  getContactUsData() {
    return serverRequest({
      method: "GET",
      url: 'contact',
    });
  },
}
