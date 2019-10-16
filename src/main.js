import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import { sync } from 'vuex-router-sync';

import '@fortawesome/fontawesome-free/js/all';
import './scss/app.scss'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
