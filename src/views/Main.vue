<template>
  <main class="wrapper">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link
          :to="{ name: 'Courses' }"
          class="nav-link"
          aria-current="page"
          href="#"
          >Courses</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Teachers' }" class="nav-link" href="#"
          >Teachers</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Reviews' }" class="nav-link" href="#"
          >Reviews</router-link
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
  export default {
    name: 'Main',
    components: { Features, Services },
    setup() {
      return {}
    },
  }
</script>
<style scoped>
  .wrapper {
    padding: 3rem 7%;
  }
  ul li {
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
  li a.router-link-active {
    color: var(--bs-info);
  }
  li a.router-link-active:before {
    border-color: var(--bs-info);
  }
  li a.router-link-active:after {
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
