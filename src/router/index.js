import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login'
Vue.use(Router)

export const RouterMap = [
  { path: '/login', name: 'Login',  component: Login}
]
export default new Router({
  mode:'history',
  routes: RouterMap
})
