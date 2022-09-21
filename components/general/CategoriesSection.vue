<template>
  <div id="categories_section" class="categories_section_content_wrapper">
    <div class="container-fluid">
      <!-- Start:: Section Title -->
      <div class="section_title_wrapper">
        <h3 class="section_title"> {{$t("TITLES.categories")}} </h3>
      </div>
      <!-- End:: Section Title -->

      <!-- Start:: Categories -->
      <div class="row justify-content-center">
        <div 
          class="col-md-3 col-xl-2" 
          v-for="(item,index) in dummyCats" 
          :key="item.id"
          data-aos-once="false"
          data-aos="fade"
          :data-aos-delay="300 * (index + 1)"
          data-aos-duration="1000"
        >
          {{300 * (index + 1)}}
          <CategoryCard 
            :categoryData="item"
          />
        </div>
      </div>
      <!-- End:: Categories -->
    </div>
  </div>
</template>

<script>
// Start:: importing Category Card
import CategoryCard from "@/components/ui/cards/CategoryCard.vue";
// End:: importing Category Card

export default {
  name: "CategoriesSection",

  components: {
    CategoryCard
  },

  data() {
    return {
      dummyCats: [
        {
          id: 1,
          name: "Tops",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 2,
          name: "Sweaters & Sweatshirts",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 3,
          name: "Dresses",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 4,
          name: "Bottoms",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 5,
          name: "Blouses",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 6,
          name: "Bags",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 7,
          name: "Tops",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 8,
          name: "Sweaters & Sweatshirts",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 9,
          name: "Dresses",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 10,
          name: "Bottoms",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 11,
          name: "Blouses",
          img: require('@/assets/media/images/categoryImg.png'),
        },
        {
          id: 12,
          name: "Bags",
          img: require('@/assets/media/images/categoryImg.png'),
        },
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
.categories_section_content_wrapper {
  padding-block: 80px;
  padding-inline: 40px;
  .section_title_wrapper {
    margin-bottom: 30px;
    .section_title {
      text-align: center;
      color: var(--theme_text_clr);
      font-style: italic;
    }
  }
}

@media (max-width: 850px) {
  .services_section_content_wrapper {
    padding-block: 20px;
    padding-inline: 15px;
  }
}
</style>
