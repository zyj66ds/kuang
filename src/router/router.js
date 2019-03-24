import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Login from '../components/login/Login.vue'
import Info from '../components/info/Info.vue'
import Enquiry from '../components/enquiry/Enquiry.vue'
import Team from '../components/team/Team.vue'
import Approval from '../components/approval/Approval.vue'
import Backup from '../components/backup/Backup.vue'
import Deposit from '../components/deposit/Deposit.vue'
import Diary from '../components/diary/Diary.vue'
import Duty from '../components/duty/Duty.vue'
import In from '../components/in/In.vue'
import Inc from '../components/inc/Inc.vue'
import Material from '../components/material/Material.vue'
import News from '../components/news/News.vue'
import Order from '../components/order/Order.vue'
import Out from '../components/out/Out.vue'
import Outc from '../components/outc/Outc.vue'
import Purchase from '../components/purchase/Purchase.vue'
import Request from '../components/request/Request.vue'
import Sales from '../components/sales/Sales.vue'
import Sheet from '../components/sheet/Sheet.vue'
import User from '../components/user/User.vue'
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
    }, {
      path: '/approval',
      component: Approval
    }, {
      path: '/backup',
      component: Backup
    }, {
      path: '/deposit',
      component: Deposit
    }, {
      path: '/diary',
      component: Diary
    }, {
      path: '/duty',
      component: Duty
    }, {
      path: '/in',
      component: In
    }, {
      path: '/inc',
      component: Inc
    }, {
      path: '/material',
      component: Material
    }, {
      path: '/news',
      component: News
    }, {
      path: '/order',
      component: Order
    }, {
      path: '/out1',
      component: Out
    }, {
      path: '/out2',
      component: Out
    }, {
      path: '/outc',
      component: Outc
    }, {
      path: '/purchase',
      component: Purchase
    }, {
      path: '/request',
      component: Request
    }, {
      path: '/sales',
      component: Sales
    }, {
      path: '/sheet',
      component: Sheet
    }, {
      path: '/user',
      component: User
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
