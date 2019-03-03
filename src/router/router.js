import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Login from '../components/login/Login.vue'
import Users from '../components/users/Users.vue'
import Roles from '../components/roles/Roles.vue'
import Rights from '../components/rights/Rights.vue'

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
    component: Home,
    children: [{
      path: '/users',
      component: Users
    },
    {
      path: '/roles',
      component: Roles
    },
    {
      path: '/rights',
      component: Rights
    }
    ]
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
