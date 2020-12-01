export default {
  namespaced: true,
  state: {
    tags: []
  },
  mutations: {
    SOCKET_SET_TAGS (state, tags) {
      state.tags = tags
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
}
