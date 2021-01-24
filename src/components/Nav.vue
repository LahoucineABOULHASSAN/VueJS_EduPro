<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">EduPro</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <Menu />
        <div>
          <i class="phone icon"></i>
          <span class="text-muted">+88 8888 8888</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import Menu from './nav/Menu'

  export default {
    name: 'Nav',
    components: { Menu },
  }
</script>

<style>
  /*  **************** Navbar style **************** */
  nav.navbar {
    border-top: 3px solid var(--bs-primary);
    padding: 0;
  }
  nav.navbar > .container-fluid {
    margin: 0 2rem;
  }
  nav.navbar .container-fluid .navbar-toggler {
    border: none;
    border-radius: 0;
    padding: 0.2rem 0.4rem;
    background-color: var(--bs-info);
    font-size: 1rem;
  }
  nav.navbar .container-fluid .navbar-toggler:focus {
    box-shadow: none;
  }
  nav.navbar .navbar-brand {
    color: var(--bs-info);
    font-weight: 500;
    margin-right: 2rem;
  }
  nav.navbar .navbar-nav .nav-link {
    font-weight: 500;
    padding: 0.7rem 1rem;
  }
  nav.navbar .navbar-nav .nav-link:hover {
    background: var(--bs-primary);
  }
  nav.navbar .navbar-nav .nav-link.dropdown-toggle:hover {
    background: none;
  }
  nav.navbar .navbar-nav .isActive {
    background: var(--bs-primary);
  }
  nav.navbar .dropdown .dropdown-menu {
    min-width: inherit;
    padding: 0;
    background: var(--bs-light);
    border: none;
    border-radius: 0;
    margin: 0;
  }
  .dropdown-item {
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.25rem 1.5rem;
  }
  nav.navbar .dropdown .dropdown-menu .dropdown-divider {
    margin: 0;
  }
  nav.navbar .dropdown .dropdown-menu .dropdown-item:hover {
    background: var(--bs-primary);
  }
  nav.navbar i.icon {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    padding: 0.5rem;
    margin-right: 0.5rem;
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
    border-radius: 50%;
    background-color: var(--bs-primary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .collapse div {
    margin-bottom: 0.5rem;
  }
</style>
