export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    getCloudTags () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject()
        }, 2000)
      })
    }
  },
  getters: {
  },
  modules: {
  }
}
