<template>
  <div class="static_content_wrapper">
    <div class="container-xl">
      <!-- Start:: Page Title -->
      <div class="page_title"> {{$t("TITLES.terms")}} </div>
      <!-- End:: Page Title -->

      <div class="page_content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere assumenda alias sequi magnam, 
        ullam quae obcaecati! Nemo necessitatibus saepe molestiae vitae molestias, cumque, 
        porro asperiores repudiandae voluptates amet atque, dolores ut accusamus ullam iure voluptatibus 
        eligendi quasi officiis odio suscipit. Consequuntur deserunt, molestias dolorem id quae repellendus? 
        Modi, reiciendis magni.
        Nemo necessitatibus saepe molestiae vitae molestias, cumque, 
        porro asperiores repudiandae voluptates amet atque, dolores ut accusamus ullam iure voluptatibus 
        eligendi quasi officiis odio suscipit. Consequuntur deserunt, molestias dolorem id quae repellendus? 
        Modi, reiciendis magni.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere assumenda alias sequi magnam, 
        ullam quae obcaecati! Nemo necessitatibus saepe molestiae vitae molestias, cumque, 
        porro asperiores repudiandae voluptates amet atque, dolores ut accusamus ullam iure voluptatibus 
        eligendi quasi officiis odio suscipit. Consequuntur deserunt, molestias dolorem id quae repellendus? 
        Modi, reiciendis magni.
        Nemo necessitatibus saepe molestiae vitae molestias, cumque, 
        porro asperiores repudiandae voluptates amet atque, dolores ut accusamus ullam iure voluptatibus 
        eligendi quasi officiis odio suscipit. Consequuntur deserunt, molestias dolorem id quae repellendus? 
        Modi, reiciendis magni.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermsOfServices",

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: "Terms Of Service",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Terms Of Service",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Terms Of Service",
        },
      ],
    };
  },
}
</script>