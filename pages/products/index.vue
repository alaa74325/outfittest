<template>
    <div>
        <div class="container">
            <div class="row">
                <h1>Products page</h1>
                <!-- Start Products Cards -->
                <
                <category-card  class="col-lg-3" v-for="product in 15" :key="product"/>
            </div>
        </div>
    </div>
</template>
<script>
import CategoryCard from '../../components/ui/cards/CategoryCard.vue';
export default {

    components: { CategoryCard },
    name: "ProductsPage",
    head() {
        return {
        title: "All Products",
        meta: [
            {
            hid: "title",
            name: "title",
            content: "Products",
            },
            {
            hid: "og:title",
            property: "og:title",
            content: "Products",
            },
        ],
        };
    },
}
</script>