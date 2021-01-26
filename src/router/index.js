import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Teachers from '../views/Teachers.vue'
import Courses from '../views/Courses.vue'

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
