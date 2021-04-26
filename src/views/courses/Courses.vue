<template>
  <section id="courses">
    <h5 class="text-center">
      Upgrade your skills with the newest courses
    </h5>
    <SearchForm
      :options="data.slice(0, 4)"
      :modelValue="searchItem"
      @update:modelValue="searchItem = $event.toLowerCase()"
    />
    <div v-if="filterResults">
      <div class="row mb-4">
        <Course
          v-for="course in filterResults"
          :key="course.id"
          :course="course"
        />
      </div>
      <Pages
        v-if="Math.ceil(numPages / 3)"
        :num="Math.ceil(numPages / 3)"
        @changePage="handlePagination($event)"
      />
    </div>
    <Loading v-else-if="!error" />
    <Error v-if="error" :error="error" />
  </section>
</template>

<script>
import Course from "./Course";
import SearchForm from "../../components/main/SearchForm";
import Pages from "../../components/main/Pages";
import Loading from "../../components/Loading";
import Error from "../../components/main/Error";
import getData from "../../composables/getData";
import paginateData from "../../composables/paginateData";
import { computed, ref } from "vue";
const URL = process.env.VUE_APP_COURSES_URL;

export default {
  name: "Courses",
  components: {
    SearchForm,
    Pages,
    Loading,
    Error,
    Course,
  },
  setup() {
    const searchItem = ref("");
    const currentPage = ref(1);
    const numPages = ref(null);
    const { data, error, fetchData } = getData(URL);
    fetchData();
    const handlePagination = (i) => {
      currentPage.value = i;
    };
    const filterResults = computed(() => {
      const arr = data.value.filter((course) =>
        course.title.toLowerCase().includes(searchItem.value)
      );
      numPages.value = arr.length;
      error.value = arr.length ? null : "Ooops!, No similar results found";
      const res = paginateData(arr, currentPage.value, 3);
      return res;
    });

    return {
      data,
      error,
      fetchData,
      searchItem,
      currentPage,
      numPages,
      filterResults,
      handlePagination,
    };
  },
};
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
