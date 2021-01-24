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

<style></style>
