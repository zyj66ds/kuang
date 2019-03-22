import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Login from '../components/login/Login.vue'
import Info from '../components/info/Info.vue'
import Enquiry from '../components/enquiry/Enquiry.vue'
import Team from '../components/team/Team.vue'
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
      path: '/info',
      component: Info
    }, {
      path: '/enquiry',
      component: Enquiry
    }, {
      path: '/team',
      component: Team
    }]
  }
  ]
})
// router.beforeEach(function (to, from, next) {
//   if (to.path === '/login') {
//     next()
//   } else {
//     const token = localStorage.getItem('token')
//     if (token) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default router
