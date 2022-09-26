<template>
  <div class="static_content_wrapper">
    <div class="container-xl">
      <!-- Start:: Page Title -->
      <div class="page_title"> {{$t("TITLES.howToShop")}} </div>
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
  name: "HowToShop",

  transition: {
    name: 'fadeInUp',
    mode: 'out-in'
  },

  head() {
    return {
      title: "How To Shop",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "How To Shop",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "How To Shop",
        },
      ],
    };
  },
}
</script>