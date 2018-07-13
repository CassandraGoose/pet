import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pet from './views/Pet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pet',
      name: 'pet',
      component: Pet,
    }
  ]
})
