<template>
  <section id="teachers">
    <h2 class="text-center">Teachers</h2>
    <h5 class="text-center">Meet Professional Teachers</h5>
    <SearchForm :options="data.slice(0, 4)" />
    <div class="row">
      <Teacher v-for="teacher in data" :key="teacher.id" :teacher="teacher" />
    </div>
  </section>
</template>

<script>
  import Teacher from './Teacher'
  import SearchForm from '../../components/main/SearchForm'
  import getData from '../../composables/getData'
  const URL = process.env.VUE_APP_TEACHERS_URL
  // import { ref } from 'vue'

  export default {
    name: 'Teachers',
    components: {
      Teacher,
      SearchForm,
    },
    setup() {
      const { data, error, fetchData } = getData(URL)
      fetchData()
      return { data, error, fetchData }
    },
  }
</script>

<style></style>
