<template>
  <section id="courses">
    <h2 class="text-center">Popular Courses</h2>
    <h5 class="text-center">
      Upgrade your skills with the newest courses
    </h5>
    <SearchForm
      :options="data.slice(0, 4)"
      :modelValue="searchItem"
      @update:modelValue="searchItem = $event.toLowerCase()"
    />
    <div v-if="data">
      <div class="row mb-4">
        <Course
          v-for="course in filterResults"
          :key="course.id"
          :course="course"
        />
      </div>
      <Pages :num="Math.ceil(data.length / 3)" />
    </div>
    <div v-else>
      <p class="alert text-center alert-danger" role="alert">
        No Courses Found!!
      </p>
    </div>
  </section>
</template>

<script>
  import Course from './Course'
  import SearchForm from '../../components/main/SearchForm'
  import Pages from '../../components/main/Pages'
  import getData from '../../composables/getData'
  import { computed, ref } from 'vue'
  const URL = process.env.VUE_APP_COURSES_URL

  export default {
    name: 'Courses',
    components: {
      SearchForm,
      Pages,
      Course,
    },
    setup() {
      const { data, error, fetchData } = getData(URL)
      fetchData()
      const searchItem = ref('')
      const filterResults = computed(() => {
        return data.value.filter((course) =>
          course.title.toLowerCase().includes(searchItem.value)
        )
      })
      return { data, error, fetchData, searchItem, filterResults }
    },
  }
</script>

<style>
  /*  **************** Courses style **************** */
  #courses .carousel-caption {
    bottom: 0;
    left: 0;
    text-align: start;
    font-weight: bold;
    padding: 0.6rem 1rem;
    color: var(--bs-light);
    text-shadow: 0px 0px 10px var(--bs-dark);
  }
  #courses i.icon {
    color: var(--light);
  }
  .info .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .info .card-link {
    font-weight: bold;
    margin-right: 1rem;
    color: var(--bs-dark);
  }
  #courses .info .btn {
    float: right;
  }
</style>
