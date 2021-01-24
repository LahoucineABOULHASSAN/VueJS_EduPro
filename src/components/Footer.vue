<template>
  <footer id="footer">
    <div id="contact-us" class="row">
      <About />
      <ContactUs />
    </div>
    <Infos />
  </footer>
</template>

<script>
  import About from '../views/About'
  import ContactUs from '../views/ContactUs'
  import Infos from './footer/Infos'
  export default {
    name: 'Footer',
    components: {
      About,
      ContactUs,
      Infos,
    },
  }
</script>

<style>
  /*  **************** Footer style **************** */
  footer #contact-us {
    background: var(--bs-info);
  }
  footer #infos {
    background: var(--bs-dark);
    color: var(--bs-light);
  }
  footer .contact-us {
    padding: 0.7rem 1rem;
  }
  #footer form {
    padding: 0;
  }
  #footer #infos .form-control {
    border: 2px solid var(--bs-primary);
  }
  #footer form .form-control {
    width: 100%;
    color: var(--bs-light);
    border: none;
    background: var(--bs-dark);
    border-radius: 5px;
  }
  #footer form .btn {
    width: 50%;
    border-width: 2px;
    border-radius: 25px;
  }
  #footer .card.row {
    grid-gap: 0;
    color: var(--bs-dark);
  }
  #footer .card img {
    width: 100%;
    height: auto;
    padding: 0;
  }
  #footer .subscribe {
    padding: 1rem;
  }
  #infos .row .col:last-child small {
    margin-right: 0.5rem;
  }
</style>
