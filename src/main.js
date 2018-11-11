import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('./assets/css/app.css')
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBars, faTimes, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faBars, faTimes, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(router)
Vue.use(BootstrapVue);
Vue.use(Vuelidate)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
