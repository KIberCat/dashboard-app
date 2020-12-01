import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Snotify from 'vue-snotify'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.use(new VueSocketIO({
    debug: false,
    connection: SocketIO('http://localhost:3000'),
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
)
// Проблема при смене layout
Vue.use(Snotify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
