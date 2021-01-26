<template>
  <main class="wrapper">
    <ul class="nav justify-content-center">
      <li :class="courseClass" @click="isActive(courses)" ref="courses">
        <router-link
          :to="{ name: 'Courses' }"
          class="nav-link"
          aria-current="page"
          href="#"
          >Courses</router-link
        >
      </li>
      <li :class="teacherClass" @click="isActive(teachers)" ref="teachers">
        <router-link :to="{ name: 'Teachers' }" class="nav-link" href="#"
          >Teachers</router-link
        >
      </li>
    </ul>
    <router-view />
    <Features />
    <Services />
  </main>
</template>

<script>
  import Features from '../components/main/Features'
  import Services from '../components/main/Services'
  import { ref } from 'vue'
  export default {
    name: 'Main',
    components: { Features, Services },
    setup() {
      const courses = ref(null)
      const teachers = ref(null)
      const courseClass = ref('nav-item active')
      const teacherClass = ref('nav-item')
      const isActive = (elem) => {
        const val = elem === courses.value ? 'courses' : 'teachers'
        if (val === 'courses') {
          courseClass.value = 'nav-item active'
          teacherClass.value = 'nav-item'
        }
        if (val === 'teachers') {
          courseClass.value = 'nav-item'
          teacherClass.value = 'nav-item active'
        }
      }
      return { courses, teachers, courseClass, teacherClass, isActive }
    },
  }
</script>
<style scoped>
  .wrapper {
    padding: 3rem 7%;
  }
  ul li {
    /* text-transform: uppercase; */
    /* border-bottom: 4px solid var(--bs-secondary); */
    /* margin-right: 1rem; */
    position: relative;
  }
  li a {
    display: block;
    color: var(--bs-secondary);
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    outline: 0;
    padding-bottom: 25px;
  }
  li.active a {
    color: var(--bs-info);
  }
  li.active a:before {
    border-color: var(--bs-info);
  }
  li.active a:after {
    background-color: var(--bs-info);
    width: 15px;
    height: 15px;
  }
  li a:before {
    transition: all 0.3s;
    width: 25px;
    height: 25px;
    border: 2px solid transparent;
    background-color: transparent;
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -5px;
  }
  li a:after {
    transition: all 0.3s;
    width: 15px;
    height: 15px;
    background-color: var(--bs-secondary);
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 0;
  }
</style>
