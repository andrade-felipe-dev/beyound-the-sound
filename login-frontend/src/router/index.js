import Vue from 'vue'
import VueRouter from 'vue-router'
import Authentication from '../views/credentials/Index.vue'
import ForgotPassword from '../views/forgot_password/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authentication',
    component: Authentication
  },
  {
    path: '/esqueceu-senha',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
