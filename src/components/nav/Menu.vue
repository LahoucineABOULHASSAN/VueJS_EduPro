<template>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <router-link
        :to="{ name: 'Courses' }"
        class="nav-link isActive"
        aria-current="page"
        @click="isActive"
        >Courses</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        :to="{ name: 'Teachers' }"
        class="nav-link"
        @click="isActive"
      >
        Teachers
      </router-link>
    </li>
    <li class="nav-item">
      <a href="#reviews" class="nav-link" @click="isActive">
        Reviews
      </a>
    </li>
    <DropDown :isActive="isActive" />
  </ul>
</template>

<script>
  import DropDown from './DropDown'
  import { isActive } from '../../composables/nav'
  export default {
    name: 'Menu',
    components: { DropDown },
    setup() {
      return { isActive }
    },
  }
</script>

<style></style>
