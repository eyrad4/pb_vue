import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from '@/store'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('./assets/css/app.css')
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBars, faTimes, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Search from './components/General/Search.vue'
import List from './components/General/List.vue'
import List2 from './components/General/List2.vue'
library.add(faSearch, faBars, faTimes, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(router)
Vue.use(BootstrapVue);
Vue.use(Vuelidate)

Vue.component('app-search', Search)
Vue.component('app-list', List)
Vue.component('app-list-copy', List2)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {
    'app-search': Search,
    'app-list': List,
    'app-list-copy': List2,
  },
  render: h => h(App),
}).$mount('#app')
