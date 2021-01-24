<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Options
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
        <router-link
          :to="{ name: 'About' }"
          class="dropdown-item"
          @click="isActive"
        >
          About
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'ContactUs' }"
          class="dropdown-item"
          @click="isActive"
        >
          Contact Us
        </router-link>
      </li>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li>
        <a href="#login" class="dropdown-item" @click="isActive">
          Login
        </a>
      </li>
      <li>
        <a href="#sign-up" class="dropdown-item" @click="isActive">
          Sign up
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'DropDown',
    props: {
      isActive: Function,
    },
  }
</script>
