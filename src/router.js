import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import NPS from './views/NPS.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'home',
      component: Login
    },
    {
      path: '/nps',
      name: 'nps',    
      component: NPS
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
