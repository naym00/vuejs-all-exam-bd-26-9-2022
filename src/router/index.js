import Vue from 'vue'
import VueRouter from 'vue-router'
import CoursesView from '../views/CoursesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'course',
    component: CoursesView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
