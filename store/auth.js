// =========================== Start:: Auth Module State ===========================
export const state = () => ({
  userId: null,
  userType: null,
  userToken: null,
  userName: null,
  userAvatar: null,
  userPhone: null,
  verificationCode: null,
})
// =========================== End:: Auth Module State ===========================

// =========================== Start:: Auth Module Mutations ===========================
export const mutations = {
  // Start:: Update Store Auth Values To Fix SSR Bug
  updateStateAuthValues(state, payload) {
    // console.log("VUEX METHODS", payload);

    if (payload.id) {
      state.userId = payload.id
    }
    if (payload.type) {
      state.userType = payload.type
    }
    if (payload.token) {
      state.userToken = payload.token
    }
    if (payload.avatar) {
      state.userAvatar = payload.avatar
    }
    if (payload.name) {
      state.userName = payload.name
    }
    if (payload.phone) {
      state.userPhone = payload.phone
    }
    if (payload.verificationCode) {
      state.verificationCode = payload.verificationCode
    }
  },
  // End:: Update Store Auth Values To Fix SSR Bug

  // Start:: Set Authed User Data Mutation
  setAuthedUserData(state, payload) {
    if (payload.id) {
      state.userId = payload.id
      this.$cookies.set('outfit_website_user_id', payload.id);
    }
    if (payload.type) {
      state.userType = payload.type
      this.$cookies.set('outfit_website_user_type', payload.type);
    }
    if (payload.token) {
      state.userToken = payload.token
      this.$cookies.set('outfit_website_user_token', payload.token);
    }
    if (payload.avatar) {
      state.userAvatar = payload.avatar
      this.$cookies.set('outfit_website_user_avatar', payload.avatar);
    }
    if (payload.name) {
      state.userName = payload.name
      this.$cookies.set('outfit_website_user_name', payload.name);
    }
    if (payload.phone) {
      state.userPhone = payload.phone
      this.$cookies.set('outfit_website_user_phone', payload.phone);
    }
    if (payload.verificationCode) {
      state.verificationCode = payload.verificationCode
      this.$cookies.set('outfit_website_user_verification_code', payload.verificationCode);
    }
  },
  // END:: SET Authed User Data Mutation

  // Start:: Delete Local Storage Authed Data Mutation
  deleteAuthedUserData(_, payload) {
    if (payload.id) {
      this.$cookies.remove('outfit_website_user_id');
    }
    if (payload.type) {
      this.$cookies.remove('outfit_website_user_type');
    }
    if (payload.token) {
      this.$cookies.remove('outfit_website_user_token');
    }
    if (payload.avatar) {
      this.$cookies.remove('outfit_website_user_avatar');
    }
    if (payload.phone) {
      this.$cookies.remove('outfit_website_user_phone');
    }
    if (payload.verificationCode) {
      this.$cookies.remove('outfit_website_user_verification_code');
    }
  },
  // End:: Delete Local Storage Authed Data Mutation
}
// =========================== End:: Auth Module Mutations ===========================

// =========================== Start:: Auth Module Actions ===========================
export const actions = {
  // Start:: Set Authed User Data Action
  setAuthedUserData(context, payload) {
    context.commit('setAuthedUserData', payload);
  },
  // End:: Set Authed User Data Action

  // Start:: Delete Local Storage Authed Data Action
  deleteAuthedUserData(context, payload) {
    context.commit('deleteAuthedUserData', payload);
  },
  // End:: Delete Local Storage Authed Data Action

  // Start:: Logout Action
  logout() {
    this.$router.replace('/')
    // localStorage.clear()
    this.$cookies.removeAll()
    location.reload()
  },
  // End:: Logout Action
}
// =========================== End:: Auth Module Actions ===========================

// =========================== Start:: Auth Module Getters ===========================
export const getters = {
  // Start:: Authed User Data Getter
  authedUserData(state) {
    return {
      id: state.userId,
      type: state.userType,
      token: state.userToken,
      name: state.userName,
      avatar: state.userAvatar,
      phone: state.userPhone,
      verificationCode: state.verificationCode,
    }
  },
  // End:: Authed User Data Getter
}
// =========================== End:: Auth Module Getters ===========================
