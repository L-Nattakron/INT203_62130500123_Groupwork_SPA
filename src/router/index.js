import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewAlbum from '../views/NewAlbum.vue'
import Feedback from '../views/Feedback.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'NewAlbum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewAlbum.vue')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Feedback.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
