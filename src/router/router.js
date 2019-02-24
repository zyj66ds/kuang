import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Login from '../components/login/Login'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
  ]
})
router.beforeEach(function (to, from, next) {
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
