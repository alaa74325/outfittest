<template>
  <div class="flash-sales">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 ">
          <div class="filter-product">
            <filter-product v-for="item in 6" :key="item" :filterItem="item"></filter-product>
          </div>
        </div>
        <div class="filter-side col-lg-2">
          <filter :filterOptions="filterdata"></filter>
        </div>
        <div class="col-lg-10 row">
          <div class="reset-grid">
          <span>{{ $t("FlashSales.gridSection") }}</span>
          <button><img src="../../assets/images/icons/col12.png"/></button>
          <button><img src="../../assets/images/icons/col6.png"/></button>
          <button><img src="../../assets/images/icons/col4.png"/></button>
        </div>
        <!-- Start:: Products -->
        <product-card v-for="product in products" :key="product" :productData="product" class="col-lg-4"></product-card>
        <!-- End:: Products -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import salesNow from '../../components/flashSales/salesNow.vue';
import productCard from '../../components/ui/cards/ProductCard.vue';
import filterProduct from '../../components/flashSales/filterOption.vue';
import filter from '../../components/filter/Thefilter.vue'
export default {
  components: { salesNow, productCard ,filterProduct,filter},
  name: "All Product",
  head() {
    return {
      title: "All Products",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "All Products",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Home",
        },
      ],
    };
  },
  data(){
    return{
      filterdata:[
                {
                    "id": 198,
                    "sku_number": "zara_211",
                    "name": "Tesla",
                    "rate": 0,
                    "is_available": 1,
                    "main_image": "https://backend.zahaaksa.com/storage/uploads/JBqdBbDr2OQt3K0vfkZzcCiQByGwm40sDinlbopG.jpg",
                    "sizes": [
                        {
                            "id": 873,
                            "size": "25",
                            "desc": null,
                            "quantity": 173
                        }
                    ],
                    "colors": [
                        {
                            "id": 255,
                            "color": "black",
                            "sizes": [
                                {
                                    "id": 873,
                                    "size": "25",
                                    "quantity": 173,
                                    "desc": null
                                }
                            ]
                        }
                    ],
                    "hover_image": "",
                    "brand_id": null,
                    "brand_name": "",
                    "category_id": null,
                    "category_name": "",
                    "quantity": 173,
                    "views": 0,
                    "color_id": null,
                    "color_name": null,
                    "fav_count": 1,
                    "is_favourite": false,
                    "is_offered": 1,
                    "price": 200,
                    "offer_price": 100,
                    "discount": "50",
                    "slug": "tesla"
                },
                {
                    "id": 197,
                    "sku_number": "1231",
                    "name": "teeeeesttttfdsf",
                    "rate": 5,
                    "is_available": 0,
                    "main_image": "https://backend.zahaaksa.com/storage/uploads/w6R9IWAci4wIP5Jv3hFUnx4arVqojSStoNeLjjES.jpg",
                    "sizes": [
                        {
                            "id": 867,
                            "size": "10",
                            "desc": null,
                            "quantity": 48
                        },
                        {
                            "id": 868,
                            "size": "20",
                            "desc": null,
                            "quantity": 60
                        },
                        {
                            "id": 869,
                            "size": "10",
                            "desc": null,
                            "quantity": 10
                        },
                        {
                            "id": 870,
                            "size": "50",
                            "desc": null,
                            "quantity": 20
                        }
                    ],
                    "colors": [
                        {
                            "id": 253,
                            "color": "black",
                            "sizes": [
                                {
                                    "id": 867,
                                    "size": "10",
                                    "quantity": 48,
                                    "desc": null
                                },
                                {
                                    "id": 868,
                                    "size": "20",
                                    "quantity": 60,
                                    "desc": null
                                }
                            ]
                        },
                        {
                            "id": 254,
                            "color": "#b12525",
                            "sizes": [
                                {
                                    "id": 869,
                                    "size": "10",
                                    "quantity": 10,
                                    "desc": null
                                },
                                {
                                    "id": 870,
                                    "size": "50",
                                    "quantity": 20,
                                    "desc": null
                                }
                            ]
                        }
                    ],
                    "hover_image": "",
                    "brand_id": null,
                    "brand_name": "",
                    "category_id": null,
                    "category_name": "",
                    "quantity": 137,
                    "views": 0,
                    "color_id": null,
                    "color_name": null,
                    "fav_count": 2,
                    "is_favourite": false,
                    "is_offered": 1,
                    "price": 1561,
                    "offer_price": 16,
                    "discount": "99",
                    "slug": "teeeeesttttfdsf"
                },
                {
                    "id": 195,
                    "sku_number": "12321213",
                    "name": "testtest",
                    "rate": 0,
                    "is_available": 1,
                    "main_image": "https://backend.zahaaksa.com/storage/uploads/0nwiHno6PPs0BKxJxLajGKl8X7j9iVVcFPxSvdIa.png",
                    "sizes": [
                        {
                            "id": 864,
                            "size": "55",
                            "desc": null,
                            "quantity": 0
                        }
                    ],
                    "colors": [
                        {
                            "id": 250,
                            "color": "black",
                            "sizes": [
                                {
                                    "id": 864,
                                    "size": "55",
                                    "quantity": 0,
                                    "desc": null
                                }
                            ]
                        }
                    ],
                    "hover_image": "",
                    "brand_id": null,
                    "brand_name": "",
                    "category_id": null,
                    "category_name": "",
                    "quantity": 0,
                    "views": 0,
                    "color_id": null,
                    "color_name": null,
                    "fav_count": 4,
                    "is_favourite": false,
                    "is_offered": 1,
                    "price": 150,
                    "offer_price": 128,
                    "discount": "15",
                    "slug": "testtest"
                },
                {
                    "id": 193,
                    "sku_number": "1412321",
                    "name": "test55",
                    "rate": 0,
                    "is_available": 1,
                    "main_image": "https://backend.zahaaksa.com/storage/uploads/PM2COE1uL4z7wxqvFiUYWAfbia7u8srmVCHCSO8U.jpg",
                    "sizes": [
                        {
                            "id": 861,
                            "size": "55",
                            "desc": null,
                            "quantity": 3
                        }
                    ],
                    "colors": [
                        {
                            "id": 247,
                            "color": "black",
                            "sizes": [
                                {
                                    "id": 861,
                                    "size": "55",
                                    "quantity": 3,
                                    "desc": null
                                }
                            ]
                        }
                    ],
                    "hover_image": "",
                    "brand_id": null,
                    "brand_name": "",
                    "category_id": null,
                    "category_name": "",
                    "quantity": 4,
                    "views": 0,
                    "color_id": null,
                    "color_name": null,
                    "fav_count": 2,
                    "is_favourite": false,
                    "is_offered": 1,
                    "price": 12,
                    "offer_price": 10,
                    "discount": "15",
                    "slug": "test55"
                },
                {
                    "id": 192,
                    "sku_number": "1243241",
                    "name": "test11",
                    "rate": 0,
                    "is_available": 1,
                    "main_image": "https://backend.zahaaksa.com/storage/uploads/7ces0uj9fLIAL4r5jf3o6YQk4AHebUwHGpR7oWNQ.png",
                    "sizes": [
                        {
                            "id": 860,
                            "size": "55",
                            "desc": null,
                            "quantity": 0
                        }
                    ],
                    "colors": [
                        {
                            "id": 246,
                            "color": "#764747",
                            "sizes": [
                                {
                                    "id": 860,
                                    "size": "55",
                                    "quantity": 0,
                                    "desc": null
                                }
                            ]
                        }
                    ],
                    "hover_image": "",
                    "brand_id": null,
                    "brand_name": "",
                    "category_id": null,
                    "category_name": "",
                    "quantity": 0,
                    "views": 0,
                    "color_id": null,
                    "color_name": null,
                    "fav_count": 4,
                    "is_favourite": false,
                    "is_offered": 0,
                    "price": 1500,
                    "offer_price": null,
                    "discount": null,
                    "slug": "test11-1"
                },
                {
                    "id": 189,
                    "sku_number": "1243241",
                    "name": "test11",
                    "rate": 0,
                    "is_available": 1,
                    "main_image": "https://backend.zahaaksa.com/storage/uploads/oeDZKl98VWS24czoziMuWuMP2xboUYh9khU1f5tu.png",
                    "sizes": [],
                    "colors": [],
                    "hover_image": "",
                    "brand_id": null,
                    "brand_name": "",
                    "category_id": null,
                    "category_name": "",
                    "quantity": 150,
                    "views": 0,
                    "color_id": null,
                    "color_name": null,
                    "fav_count": 2,
                    "is_favourite": false,
                    "is_offered": 0,
                    "price": 1500,
                    "offer_price": null,
                    "discount": null,
                    "slug": "test11"
                },
                {
                    "id": 188,
                    "sku_number": "1431",
                    "name": "test",
                    "rate": 0,
                    "is_available": 1,
                    "main_image": "https://backend.zahaaksa.com/storage/uploads/iF3D6xwnlnBfEwpB29PqlYkrkIP7bZmTILwhpiyM.png",
                    "sizes": [
                        {
                            "id": 858,
                            "size": "55",
                            "desc": null,
                            "quantity": -1
                        }
                    ],
                    "colors": [
                        {
                            "id": 244,
                            "color": "null",
                            "sizes": [
                                {
                                    "id": 858,
                                    "size": "55",
                                    "quantity": -1,
                                    "desc": null
                                }
                            ]
                        }
                    ],
                    "hover_image": "",
                    "brand_id": null,
                    "brand_name": "",
                    "category_id": null,
                    "category_name": "",
                    "quantity": 19,
                    "views": 0,
                    "color_id": null,
                    "color_name": null,
                    "fav_count": 5,
                    "is_favourite": false,
                    "is_offered": 0,
                    "price": 150,
                    "offer_price": null,
                    "discount": null,
                    "slug": "test-1"
                },
                {
                    "id": 186,
                    "sku_number": "",
                    "name": "test",
                    "rate": 0,
                    "is_available": 1,
                    "main_image": "https://backend.zahaaksa.com/storage/uploads/iPOkYCAbmUg3CeiPRFgLaQDdPJSX1upWBpTS4b1n.jpg",
                    "sizes": [
                        {
                            "id": 856,
                            "size": "xl,m",
                            "desc": null,
                            "quantity": 199
                        },
                        {
                            "id": 857,
                            "size": "xl,m",
                            "desc": null,
                            "quantity": 193
                        }
                    ],
                    "colors": [
                        {
                            "id": 242,
                            "color": "sadasdas",
                            "sizes": [
                                {
                                    "id": 856,
                                    "size": "xl,m",
                                    "quantity": 199,
                                    "desc": null
                                }
                            ]
                        },
                        {
                            "id": 243,
                            "color": "لون جديد",
                            "sizes": [
                                {
                                    "id": 857,
                                    "size": "xl,m",
                                    "quantity": 193,
                                    "desc": null
                                }
                            ]
                        }
                    ],
                    "hover_image": "",
                    "brand_id": null,
                    "brand_name": "",
                    "category_id": 1,
                    "category_name": "Abaya",
                    "quantity": 791,
                    "views": 0,
                    "color_id": null,
                    "color_name": null,
                    "fav_count": 1,
                    "is_favourite": false,
                    "is_offered": 1,
                    "price": 4000,
                    "offer_price": 2800,
                    "discount": "30",
                    "slug": "test"
                }
            ],
      products:[
    {
        "id": 198,
        "sku_number": "zara_211",
        "name": "Tesla",
        "rate": 0,
        "is_available": 1,
        "main_image": "https://backend.zahaaksa.com/storage/uploads/JBqdBbDr2OQt3K0vfkZzcCiQByGwm40sDinlbopG.jpg",
        "sizes": [
            {
                "id": 873,
                "size": "25",
                "desc": null,
                "quantity": 173
            }
        ],
        "colors": [
            {
                "id": 255,
                "color": "black",
                "sizes": [
                    {
                        "id": 873,
                        "size": "25",
                        "quantity": 173,
                        "desc": null
                    }
                ]
            }
        ],
        "hover_image": "",
        "brand_id": null,
        "brand_name": "",
        "category_id": null,
        "category_name": "",
        "quantity": 173,
        "views": 0,
        "color_id": null,
        "color_name": null,
        "fav_count": 1,
        "is_favourite": false,
        "is_offered": 1,
        "price": 200,
        "offer_price": 100,
        "discount": "50",
        "slug": "tesla"
    },
    {
        "id": 197,
        "sku_number": "1231",
        "name": "teeeeesttttfdsf",
        "rate": 5,
        "is_available": 0,
        "main_image": "https://backend.zahaaksa.com/storage/uploads/w6R9IWAci4wIP5Jv3hFUnx4arVqojSStoNeLjjES.jpg",
        "sizes": [
            {
                "id": 867,
                "size": "10",
                "desc": null,
                "quantity": 48
            },
            {
                "id": 868,
                "size": "20",
                "desc": null,
                "quantity": 60
            },
            {
                "id": 869,
                "size": "10",
                "desc": null,
                "quantity": 10
            },
            {
                "id": 870,
                "size": "50",
                "desc": null,
                "quantity": 20
            }
        ],
        "colors": [
            {
                "id": 253,
                "color": "black",
                "sizes": [
                    {
                        "id": 867,
                        "size": "10",
                        "quantity": 48,
                        "desc": null
                    },
                    {
                        "id": 868,
                        "size": "20",
                        "quantity": 60,
                        "desc": null
                    }
                ]
            },
            {
                "id": 254,
                "color": "#b12525",
                "sizes": [
                    {
                        "id": 869,
                        "size": "10",
                        "quantity": 10,
                        "desc": null
                    },
                    {
                        "id": 870,
                        "size": "50",
                        "quantity": 20,
                        "desc": null
                    }
                ]
            }
        ],
        "hover_image": "",
        "brand_id": null,
        "brand_name": "",
        "category_id": null,
        "category_name": "",
        "quantity": 137,
        "views": 0,
        "color_id": null,
        "color_name": null,
        "fav_count": 2,
        "is_favourite": false,
        "is_offered": 1,
        "price": 1561,
        "offer_price": 16,
        "discount": "99",
        "slug": "teeeeesttttfdsf"
    },
    {
        "id": 195,
        "sku_number": "12321213",
        "name": "testtest",
        "rate": 0,
        "is_available": 1,
        "main_image": "https://backend.zahaaksa.com/storage/uploads/0nwiHno6PPs0BKxJxLajGKl8X7j9iVVcFPxSvdIa.png",
        "sizes": [
            {
                "id": 864,
                "size": "55",
                "desc": null,
                "quantity": 0
            }
        ],
        "colors": [
            {
                "id": 250,
                "color": "black",
                "sizes": [
                    {
                        "id": 864,
                        "size": "55",
                        "quantity": 0,
                        "desc": null
                    }
                ]
            }
        ],
        "hover_image": "",
        "brand_id": null,
        "brand_name": "",
        "category_id": null,
        "category_name": "",
        "quantity": 0,
        "views": 0,
        "color_id": null,
        "color_name": null,
        "fav_count": 4,
        "is_favourite": false,
        "is_offered": 1,
        "price": 150,
        "offer_price": 128,
        "discount": "15",
        "slug": "testtest"
    },
    {
        "id": 193,
        "sku_number": "1412321",
        "name": "test55",
        "rate": 0,
        "is_available": 1,
        "main_image": "https://backend.zahaaksa.com/storage/uploads/PM2COE1uL4z7wxqvFiUYWAfbia7u8srmVCHCSO8U.jpg",
        "sizes": [
            {
                "id": 861,
                "size": "55",
                "desc": null,
                "quantity": 3
            }
        ],
        "colors": [
            {
                "id": 247,
                "color": "black",
                "sizes": [
                    {
                        "id": 861,
                        "size": "55",
                        "quantity": 3,
                        "desc": null
                    }
                ]
            }
        ],
        "hover_image": "",
        "brand_id": null,
        "brand_name": "",
        "category_id": null,
        "category_name": "",
        "quantity": 4,
        "views": 0,
        "color_id": null,
        "color_name": null,
        "fav_count": 2,
        "is_favourite": false,
        "is_offered": 1,
        "price": 12,
        "offer_price": 10,
        "discount": "15",
        "slug": "test55"
    },
    {
        "id": 192,
        "sku_number": "1243241",
        "name": "test11",
        "rate": 0,
        "is_available": 1,
        "main_image": "https://backend.zahaaksa.com/storage/uploads/7ces0uj9fLIAL4r5jf3o6YQk4AHebUwHGpR7oWNQ.png",
        "sizes": [
            {
                "id": 860,
                "size": "55",
                "desc": null,
                "quantity": 0
            }
        ],
        "colors": [
            {
                "id": 246,
                "color": "#764747",
                "sizes": [
                    {
                        "id": 860,
                        "size": "55",
                        "quantity": 0,
                        "desc": null
                    }
                ]
            }
        ],
        "hover_image": "",
        "brand_id": null,
        "brand_name": "",
        "category_id": null,
        "category_name": "",
        "quantity": 0,
        "views": 0,
        "color_id": null,
        "color_name": null,
        "fav_count": 4,
        "is_favourite": false,
        "is_offered": 0,
        "price": 1500,
        "offer_price": null,
        "discount": null,
        "slug": "test11-1"
    },
    {
        "id": 189,
        "sku_number": "1243241",
        "name": "test11",
        "rate": 0,
        "is_available": 1,
        "main_image": "https://backend.zahaaksa.com/storage/uploads/oeDZKl98VWS24czoziMuWuMP2xboUYh9khU1f5tu.png",
        "sizes": [],
        "colors": [],
        "hover_image": "",
        "brand_id": null,
        "brand_name": "",
        "category_id": null,
        "category_name": "",
        "quantity": 150,
        "views": 0,
        "color_id": null,
        "color_name": null,
        "fav_count": 2,
        "is_favourite": false,
        "is_offered": 0,
        "price": 1500,
        "offer_price": null,
        "discount": null,
        "slug": "test11"
    },
    {
        "id": 188,
        "sku_number": "1431",
        "name": "test",
        "rate": 0,
        "is_available": 1,
        "main_image": "https://backend.zahaaksa.com/storage/uploads/iF3D6xwnlnBfEwpB29PqlYkrkIP7bZmTILwhpiyM.png",
        "sizes": [
            {
                "id": 858,
                "size": "55",
                "desc": null,
                "quantity": -1
            }
        ],
        "colors": [
            {
                "id": 244,
                "color": "null",
                "sizes": [
                    {
                        "id": 858,
                        "size": "55",
                        "quantity": -1,
                        "desc": null
                    }
                ]
            }
        ],
        "hover_image": "",
        "brand_id": null,
        "brand_name": "",
        "category_id": null,
        "category_name": "",
        "quantity": 19,
        "views": 0,
        "color_id": null,
        "color_name": null,
        "fav_count": 5,
        "is_favourite": false,
        "is_offered": 0,
        "price": 150,
        "offer_price": null,
        "discount": null,
        "slug": "test-1"
    },
    {
        "id": 186,
        "sku_number": "",
        "name": "test",
        "rate": 0,
        "is_available": 1,
        "main_image": "https://backend.zahaaksa.com/storage/uploads/iPOkYCAbmUg3CeiPRFgLaQDdPJSX1upWBpTS4b1n.jpg",
        "sizes": [
            {
                "id": 856,
                "size": "xl,m",
                "desc": null,
                "quantity": 199
            },
            {
                "id": 857,
                "size": "xl,m",
                "desc": null,
                "quantity": 193
            }
        ],
        "colors": [
            {
                "id": 242,
                "color": "sadasdas",
                "sizes": [
                    {
                        "id": 856,
                        "size": "xl,m",
                        "quantity": 199,
                        "desc": null
                    }
                ]
            },
            {
                "id": 243,
                "color": "لون جديد",
                "sizes": [
                    {
                        "id": 857,
                        "size": "xl,m",
                        "quantity": 193,
                        "desc": null
                    }
                ]
            }
        ],
        "hover_image": "",
        "brand_id": null,
        "brand_name": "",
        "category_id": 1,
        "category_name": "Abaya",
        "quantity": 791,
        "views": 0,
        "color_id": null,
        "color_name": null,
        "fav_count": 1,
        "is_favourite": false,
        "is_offered": 1,
        "price": 4000,
        "offer_price": 2800,
        "discount": "30",
        "slug": "test"
    }
     ]
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-product{
  @include flexStartAlignment;
  background:#F4F5F7;
  border-radius: 6px;
  padding: 20px 25px ;
  margin: 0;
}
.sales-now{
  @include flexSpaceBetweenAlignment;
}
.reset-grid{
  margin:10px 0 15px;
  span{
    color:var(--theme_text_clr);
    font-size: 16px;
  }
  button{
    margin-left:15px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
