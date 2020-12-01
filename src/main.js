import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Snotify from 'vue-snotify'

// Проблема при смене layout
Vue.use(Snotify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
