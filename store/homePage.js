// =========================== Start:: Home Page Module State ===========================
export const state = () =>({
  homeData: null,
});
// =========================== End:: Home Page Module State ===========================

// =========================== Start:: Home Page Module Mutations ===========================
export const mutations = {
  // Start:: Set Home Page Data
  setHomePageData(state, payload) {
    state.homeData = payload;
  },
  // End:: Set Home Page Data
};
// =========================== End:: Home Page Module Mutations ===========================

// =========================== Start:: Home Page Module Actions ===========================
export const actions = {
  // Start:: Get Home Page Data
  async getHomePageData(context, payload) {
    try {
      const res = await this.$axiosRequest({
        url: "home",
        params: {
          main_category_id: payload,
        }
      });
      context.commit("setHomePageData", res.data.data);
    } catch(err) {
      console.log(err.response.data.message);
    }
  },
  // End:: Get Home Page Data
};
// =========================== End:: Home Page Module Actions ===========================

// =========================== Start:: Home Page Module Getters ===========================
export const getters = {
  // Start:: Home Page Data Getter
  homeData(state) {
    return state.homeData;
  },
  // End:: Home Page Data Getter
};
// =========================== End:: Home Page Module Getters ===========================
