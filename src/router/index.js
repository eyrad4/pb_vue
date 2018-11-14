import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
import ProgressBar from '@/components/ProgressBar'
import Form from '@/components/Form'
import PopupForm from '@/components/PopupForm'
import Download from '@/components/Download'

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
    },
    {
      path: '/popupform',
      name: 'PopupForm',
      component: PopupForm
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ],
  mode: 'history'
})