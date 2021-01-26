<template>
  <section id="teachers">
    <h2 class="text-center">Teachers</h2>
    <h5 class="text-center">Meet Professional Teachers</h5>
    <SearchForm :options="options" />

    <div class="row">
      <!-- <Teacher :key="teacher.id" :teacher="teacher" /> -->
    </div>
  </section>
</template>

<script>
  import SearchForm from '../components/main/SearchForm'
  import { ref } from 'vue'

  export default {
    name: 'Teachers',
    components: {
      SearchForm,
    },
    setup() {
      const options = ref([
        { id: 1, title: 'title1' },
        { id: 2, title: 'title2' },
        { id: 2, title: 'title2' },
      ])
      return { options }
    },
  }
</script>

<style></style>
