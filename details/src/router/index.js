import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    redirect:'/login'
    // component: Home
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/login.vue")
  },
  {
    path: '/index',
    name:"index",
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    children:[
      {
        path: 'helloWord',
        name:"helloWord",
        component: () => import(/* webpackChunkName: "about" */ '../components/tally'),
      },
      {
        path: 'var',
        name:"var",
        component: () => import(/* webpackChunkName: "about" */ '../components/more/va.vue'),
      },
      {
        path: 'mySetting',
        name:"mySetting",
        component: () => import(/* webpackChunkName: "about" */ '../components/mySetting'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
