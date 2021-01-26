<template>
  <form class="mb-4" @submit.prevent="handleSubmit">
    <input
      class="form-control"
      list="datalistOptions"
      id="exampleDataList"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="item"
    />
    <datalist id="datalistOptions">
      <option
        v-for="option in options"
        :value="option.title"
        :key="option.id"
      />
    </datalist>
  </form>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'SearchForm',
    props: { options: Array },
    setup(props) {
      const item = ref('')
      return { item }
    },
  }
</script>

<style scoped>
  form {
    width: 60%;
    margin: 0 auto;
  }
  form .form-control {
    width: 100%;
    border: 1px solid var(--bs-dark);
    border-radius: 5px;
    background-color: var(--bs-dark);
    color: #fff;
    margin: 1rem 0;
  }
</style>
