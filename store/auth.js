// =========================== Start:: Auth Module State ===========================
export const state = () =>({
  // outfit_website_user_token: process.browser  ? localStorage.getItem("outfit_website_user_token") : null,
  outfit_website_user_token: null,
});
// =========================== End:: Auth Module State ===========================


// =========================== Start:: Auth Module Mutations ===========================
export const mutations = {
  // Start:: Update Store Token Value To Fix SSR Bug
  updateStateToken(state, payload) {
    state.outfit_website_user_token = payload;
  },
  // End:: Update Store Token Value To Fix SSR Bug
};
// =========================== End:: Auth Module Mutations ===========================


// =========================== Start:: Auth Module Actions ===========================
export const actions = {};
// =========================== End:: Auth Module Actions ===========================


// =========================== Start:: Auth Module Getters ===========================
export const getters = {
  testToken(state) {
    return state.outfit_website_user_token;
  },
};
// =========================== End:: Auth Module Getters ===========================
