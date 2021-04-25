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
      <a class="nav-link" @click="isActive" data-id="features">
        features
      </a>
    </li>
    <DropDown :isActive="isActive" />
    <li>
      <a class="nav-link" @click="isActive" data-id="about">
        about
      </a>
    </li>
    <li>
      <a class="nav-link" @click="isActive" data-id="contact">
        contact Us
      </a>
    </li>
  </ul>
</template>

<script>
import DropDown from "./DropDown";
import { isActive } from "../../composables/nav";
export default {
  name: "Menu",
  components: { DropDown },
  setup() {
    return { isActive };
  },
};
</script>

<style></style>
