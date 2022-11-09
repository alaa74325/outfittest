export default ({ app, $axios }, inject) => {
    const axiosRequest = $axios.create({
        baseURL: `https://outfit.phpv8.aait-d.com/website/`,
        headers: {
            common: {
                "Authorization":  app.$cookies.get("outfit_website_user_token") ?
                "Bearer " + app.$cookies.get("outfit_website_user_token") : null,
                "cache-control": "cache-control",
                "Accept": "application/json",
                "Accept-language": app.i18n.locale,
                "lang": app.i18n.locale,
            }
        }
    });

    // $axios.onRequest(config => {
    //   console.log('Making request to =>' + config.url);
    // });

    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status);
      console.log("TEST GLOBAL ERROR");

      if (code === 404) {
        redirect('/404');
      } else if (code === 500) {
        redirect('/500');
        console.log("500 SERVER ERROR");
      }
      // console.log("REQUEST ERROR ==> ", error);
    });

    inject('axiosRequest', axiosRequest);
}
