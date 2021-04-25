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
        <a class="dropdown-item" @click="isActive" data-id="services">
          services
        </a>
      </li>
      <li>
        <a class="dropdown-item" @click="isActive" data-id="sign-up">
          login & sign up
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    isActive: Function,
  },
};
</script>
