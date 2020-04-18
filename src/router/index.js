import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Wish List Home"
    }
  },
  {
    path: '/kk',
    name: 'K.K.',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/KK.vue'),
    meta: {
      title: "K.K. Wish List"
    }
  },
  {
    path: '/fossil',
    name: 'Fossil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fossil.vue'),
    meta: {
      title: "Fossil Wish List"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
