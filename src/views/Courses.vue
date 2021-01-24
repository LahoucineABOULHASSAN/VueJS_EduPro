<template>
  <section id="courses">
    <h2 className="text-center">Popular Courses</h2>
    <h5 className="text-center">
      Upgrade your skills with the newest courses
    </h5>
    <SearchForm :options="options" />
    <!-- {courses ? (
        <>
          <div className="row mb-4">
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
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
        </>
      ) : (
        <p className="alert text-center alert-danger" role="alert">
          No Courses Found!!
        </p>
      )} -->
  </section>
</template>

<script>
  import SearchForm from '../components/main/SearchForm'
  import { ref } from 'vue'
  export default {
    name: 'Courses',
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

<style>
  /*  **************** Courses style **************** */
  #courses form {
    width: 60%;
    margin: 0 auto;
  }
  #courses form .form-control {
    width: 100%;
    border: 1px solid var(--bs-dark);
    border-radius: 5px;
    background-color: var(--bs-dark);
    color: #fff;
    margin: 1rem 0;
  }
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
  #courses nav {
    width: fit-content;
    margin: 0 auto;
  }
  #courses nav .page-link {
    color: var(--bs-success);
  }
  #courses nav .page-item.active .page-link {
    background-color: var(--bs-success);
    color: var(--bs-dark);
    border-color: none;
  }
  #courses nav .page-item.disabled .page-link {
    background-color: var(--bs-light);
    color: var(--bs-secondary);
  }
</style>
