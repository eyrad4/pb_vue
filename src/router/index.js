import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
import ProgressBar from '@/components/ProgressBar'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/progressbar',
      name: 'ProgressBar',
      component: ProgressBar
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ],
  mode: 'history'
})