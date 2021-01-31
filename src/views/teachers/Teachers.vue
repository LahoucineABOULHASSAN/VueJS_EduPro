<template>
  <section id="teachers">
    <h2 class="text-center">Teachers</h2>
    <h5 class="text-center">Meet Professional Teachers</h5>
    <SearchForm
      :options="data.slice(0, 4)"
      :modelValue="searchItem"
      @update:modelValue="searchItem = $event.toLowerCase()"
    />
    <div v-if="data">
      <div class="row">
        <Teacher
          v-for="teacher in filterResults"
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
    <Pages :num="Math.ceil(filterResults.length / 3)" />
  </section>
</template>

<script>
  import Teacher from './Teacher'
  import SearchForm from '../../components/main/SearchForm'
  import Pages from '../../components/main/Pages'
  import getData from '../../composables/getData'
  import { ref, computed } from 'vue'
  const URL = process.env.VUE_APP_TEACHERS_URL

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
      const searchItem = ref('')
      const filterResults = computed(() => {
        return data.value.filter((teacher) =>
          teacher.name.toLowerCase().includes(searchItem.value)
        )
      })
      return { data, error, fetchData, searchItem, filterResults }
    },
  }
</script>

<style scoped>
  #teachers .card-img {
    height: 50vh;
  }
</style>
