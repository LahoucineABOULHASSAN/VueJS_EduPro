import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Teachers from '../views/Teachers.vue'
import Courses from '../views/Courses.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
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
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
