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
        <a href="#about-us" class="dropdown-item" @click="isActive">
          About
        </a>
      </li>
      <li>
        <a href="contact-us" class="dropdown-item" @click="isActive">
          Contact Us
        </a>
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
