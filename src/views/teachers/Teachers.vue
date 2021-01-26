<template>
  <section id="teachers">
    <h2 class="text-center">Teachers</h2>
    <h5 class="text-center">Meet Professional Teachers</h5>
    <SearchForm :options="data.slice(0, 4)" />
    <div v-if="data">
      <div class="row">
        <Teacher
          v-for="teacher in data.slice(0, 2)"
          :key="teacher.id"
          :teacher="teacher"
        />
      </div>
    </div>
    <div v-else>
      <p class="alert text-center alert-danger" role="alert">
        No Data Found!!
      </p>
    </div>
    <Pages :num="Math.ceil(data.length / 3)" />
  </section>
</template>

<script>
  import Teacher from './Teacher'
  import SearchForm from '../../components/main/SearchForm'
  import Pages from '../../components/main/Pages'
  import getData from '../../composables/getData'
  const URL = process.env.VUE_APP_TEACHERS_URL
  // import { ref } from 'vue'

  export default {
    name: 'Teachers',
    components: {
      Teacher,
      SearchForm,
      Pages,
    },
    setup() {
      const { data, error, fetchData } = getData(URL)
      fetchData()
      return { data, error, fetchData }
    },
  }
</script>

<style scoped>
  #teachers .card-img {
    height: 50vh;
  }
</style>
