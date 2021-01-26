import { createRouter, createWebHistory } from 'vue-router'
import Courses from '../views/courses/Courses.vue'
import Teachers from '../views/teachers/Teachers.vue'

const routes = [
  {
    path: '/',
    redirect: '/courses',
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers,
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
