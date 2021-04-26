<template>
  <section id="reviews">
    <h5 class="text-center mb-4">Our Student's Reviews</h5>
    <div v-if="data.length" class="row">
      <Review v-for="review in data" :key="review.id" :review="review" />
    </div>
    <Loading v-else-if="!error" />
    <Error v-if="error" :error="error" />
  </section>
</template>

<script>
import Review from "./Review";
import Loading from "../../components/Loading";
import Error from "../../components/main/Error";
import getData from "../../composables/getData";
const URL = process.env.VUE_APP_STUDENTS_URL;
export default {
  name: "Reviews",
  components: { Review, Loading, Error },
  setup() {
    const { data, error, fetchData } = getData(URL);
    fetchData();
    return { data, error, fetchData };
  },
};
</script>

<style>
/*  **************** Reviews style **************** */
.reviewer {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.reviewer div {
  line-height: 1.1rem;
}
#reviews p {
  text-align: justify;
}
</style>
