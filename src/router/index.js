import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/pages/Landing/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage
    }
  ]
})
