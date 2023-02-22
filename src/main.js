import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from 'js-md5';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$md5 = md5

Vue.use(VueAxios,axios)

Vue.use(Mint);

Vue.config.productionTip = false

axios.defaults.baseURL = '/user'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
