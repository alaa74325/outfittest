export default ({ app, $axios }, inject) => {
    const axiosRequest = $axios.create({
        baseURL: `https://outfit.phpv8.aait-d.com/website/`,
        headers: {
            common: {
                // "Authorization":  "Bearer " + USER_TOKEN,
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

    // $axios.onError(error => {
    //   const code = parseInt(error.response && error.response.status)
    //   if (code === 404) {
    //     redirect('/404');
    //   }
    //   console.log("REQUEST ERROR ==> ", error);
    // });

    inject('axiosRequest', axiosRequest);
}
