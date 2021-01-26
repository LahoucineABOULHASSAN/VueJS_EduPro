import { createRouter, createWebHistory } from 'vue-router'
import Courses from '../views/courses/Courses.vue'
import Teachers from '../views/teachers/Teachers.vue'
import Reviews from '../views/reviews/Reviews.vue'

const routes = [
  {
    path: '/',
    redirect: '/courses',
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers,
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/courses',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
