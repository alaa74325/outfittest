// =========================== Start:: App Categories Module State ===========================
export const state = () =>({
  mainCategories: null,
  subCategoriesBasedOnMainCategory: null,
  currentActiveCategory: null,
});
// =========================== End:: App Categories Module State ===========================

// =========================== Start:: App Categories Module Mutations ===========================
export const mutations = {
  // Start:: Set App Categories Data
  updateAppCategories(state, payload) {
    if(payload.mainCategories) {
      state.mainCategories = payload.mainCategories;
    }
    if(payload.subCategoriesBasedOnMainCategory) {
      state.subCategoriesBasedOnMainCategory = payload.subCategoriesBasedOnMainCategory;
    }
    if(payload.currentActiveCategory) {
      state.currentActiveCategory = payload.currentActiveCategory;
    }
  },
  // End:: Set App Categories Data
};
// =========================== End:: App Categories Module Mutations ===========================

// =========================== Start:: App Categories Module Actions ===========================
export const actions = {
  // Start:: Get NavBar Categories
  async getMainCategories(context) {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    // })

    try {
      let res = await this.$axiosRequest({
        method: "GET",
        url: "get_category",
      });
        console.log("Main Categories ==>", res.data.data);

        context.commit("updateAppCategories", {
          mainCategories: res.data.data,
          currentActiveCategory: res.data.data[0],
        });
        context.dispatch("getSubCategories");
        // this.$nextTick(() => {
        //   this.$nuxt.$loading.finish()
        // })
    } catch(err) {
      console.log(err.response.data.message);
      // this.$nextTick(() => {
      //   this.$nuxt.$loading.finish()
      // })
    }
  },

  async getSubCategories(context, payload) {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    // })
    try {
      let res = await this.$axiosRequest({
        method: "GET",
        url: "get_category",
        params: {
          category_id: payload ? payload : context.state.mainCategories[0].id,
        }
      });
        console.log("SubCategories ==>", res.data.data);
        context.commit("updateAppCategories", {
          subCategoriesBasedOnMainCategory: res.data.data,
        });
        // this.$nextTick(() => {
        //   this.$nuxt.$loading.finish()
        // })
    } catch(err) {
      console.log(err.response.data.message);
      // this.$nextTick(() => {
      //   this.$nuxt.$loading.finish()
      // })
    }
  },

  async getDataBasedOnMainCategoryId(context, payload) {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    // })

    try {
      let res = await this.$axiosRequest({
        method: "GET",
        url: "get_category",
        params: {
          category_id: payload
        }
      });
        console.log("SubCategories On Click ==>", res.data.data);

        context.dispatch("homePage/getHomePageData", payload, {root:true});
        context.dispatch("getSubCategories", payload);
        context.commit("updateAppCategories", {
          currentActiveCategory: context.state.mainCategories.find(item => item.id == payload),
        });

        // this.$nextTick(() => {
        //   this.$nuxt.$loading.finish()
        // })
    } catch(err) {
      console.log(err.response.data.message);
      // this.$nextTick(() => {
      //   this.$nuxt.$loading.finish()
      // })
    }
  },
  // End:: Get NavBar Categories
};
// =========================== End:: App Categories Module Actions ===========================

// =========================== Start:: App Categories Module Getters ===========================
export const getters = {
  // Start:: App Categories Data Getter
  navBarCategories(state) {
    return {
      mainCategories: state.mainCategories,
      subCategoriesBasedOnMainCategory: state.subCategoriesBasedOnMainCategory,
      currentActiveCategory: state.currentActiveCategory,
    };
  },
  // End:: App Categories Data Getter
};
// =========================== End:: App Categories Module Getters ===========================
