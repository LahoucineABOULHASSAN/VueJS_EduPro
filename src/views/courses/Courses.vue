<template>
  <section id="courses">
    <h2 class="text-center">Popular Courses</h2>
    <h5 class="text-center">
      Upgrade your skills with the newest courses
    </h5>
    <SearchForm :options="data.slice(0, 4)" />
    <div v-if="data">
      <div class="row mb-4">
        <Course
          v-for="course in data.slice(0, 3)"
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
    <!-- {courses ? (
        <>
          {page.pageFiltering && filteredCourses ? (
            <Pagination
              arr={filteredCourses}
              numPages={Math.ceil(filteredCourses.length / 3)}
            />
          ) : (
            <Pagination
              arr={getcourses}
              numPages={Math.ceil(getcourses.length / 3)}
            />
          )}
        </> -->
  </section>
</template>

<script>
  import Course from './Course'
  import SearchForm from '../../components/main/SearchForm'
  import Pages from '../../components/main/Pages'
  import getData from '../../composables/getData'
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
      return { data, error, fetchData }
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
