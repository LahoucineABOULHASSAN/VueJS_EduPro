<template>
  <section id="reviews">
    <h2 class="text-center">Student Reviews</h2>
    <h5 class="text-center mb-4">Student Reviews</h5>
    <div class="row">
      <Review v-for="review in data" :key="review.id" :review="review" />
    </div>
  </section>
</template>

<script>
  import Review from './Review'
  import getData from '../../composables/getData'
  import { ref } from 'vue'
  const URL = process.env.VUE_APP_STUDENTS_URL
  export default {
    name: 'Reviews',
    components: { Review },
    setup() {
      const { data, error, fetchData } = getData(URL)
      fetchData()
      return { data, error, fetchData }
    },
  }
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
