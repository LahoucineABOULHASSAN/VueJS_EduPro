<template>
  <section id="teachers">
    <h5 class="text-center">Meet Professional Teachers</h5>
    <SearchForm
      :options="data.slice(0, 4)"
      :modelValue="searchItem"
      @update:modelValue="searchItem = $event.toLowerCase()"
    />
    <div v-if="data.length">
      <div class="row">
        <Teacher
          v-for="teacher in filterResults"
          :key="teacher.id"
          :teacher="teacher"
        />
      </div>
      <Pages
        v-if="Math.ceil(numPages / 4)"
        :num="Math.ceil(numPages / 4)"
        @changePage="handlePagination($event)"
      />
    </div>
    <Loading v-else-if="!error" />
    <Error v-if="error" :error="error" />
  </section>
</template>

<script>
import Teacher from "./Teacher";
import SearchForm from "../../components/main/SearchForm";
import Pages from "../../components/main/Pages";
import Loading from "../../components/Loading";
import Error from "../../components/main/Error";
import getData from "../../composables/getData";
import { ref, computed } from "vue";
import paginateData from "../../composables/paginateData";
const URL = process.env.VUE_APP_TEACHERS_URL;

export default {
  name: "Teachers",
  components: {
    Teacher,
    SearchForm,
    Pages,
    Loading,
    Error,
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
      const arr = data.value.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchItem.value)
      );
      numPages.value = arr.length;
      error.value = arr.length ? null : "Ooops!, No similar results found";
      const res = paginateData(arr, currentPage.value, 4);
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

<style scoped>
#teachers .card-img {
  height: 50vh;
}
</style>
