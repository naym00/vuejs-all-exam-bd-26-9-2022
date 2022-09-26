import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false



// npm install --save axios vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://frosty-bern-acwuycxv7kid.vapor-farm-f1.com/api'
// 'course-category/all'
// 'course-by-category/course-wise-videos-ntrca'
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
