<template>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a
        href="/courses"
        class="nav-link isActive"
        aria-current="page"
        @click="isActive"
        >home</a
      >
    </li>
    <li>
      <a href="#about" class="nav-link" @click="isActive">
        About
      </a>
    </li>
    <li>
      <a href="#contact-us" class="nav-link" @click="isActive">
        Contact Us
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
