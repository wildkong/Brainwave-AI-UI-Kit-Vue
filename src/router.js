import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Featuresuggestions1920on from './views/featuresuggestions1920on'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Featuresuggestions1920on',
      path: '/',
      component: Featuresuggestions1920on,
    },
  ],
})
