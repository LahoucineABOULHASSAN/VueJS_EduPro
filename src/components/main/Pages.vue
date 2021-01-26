<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li :class="!page.previousPage ? 'page-item disabled' : 'page-item'">
        <button
          class="page-link previous"
          @click="() => hundlePage(page.previousPage)"
        >
          &laquo;
        </button>
      </li>
      <li
        v-for="i in num"
        :class="page.currentPage === i ? 'page-item active' : 'page-item'"
        :key="i"
      >
        <button class="page-link">{{ i }}</button>
      </li>
      <li :class="!page.nextPage ? 'page-item disabled' : 'page-item'">
        <button class="page-link next" @click="() => hundlePage(page.nextPage)">
          &raquo;
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'Pages',
    props: {
      num: Number,
    },
    setup() {
      const page = ref({
        previousPage: null,
        nextPage: null,
      })
      const hundlePage = () => {
        console.log('clicked')
      }
      return { page, hundlePage }
    },
  }
</script>

<style scoped>
  nav {
    width: fit-content;
    margin: 0 auto;
  }
  nav .page-link {
    color: var(--bs-success);
  }
  nav .page-item.active .page-link {
    background-color: var(--bs-success);
    color: var(--bs-dark);
    border-color: none;
  }
  nav .page-item.disabled .page-link {
    background-color: var(--bs-light);
    color: var(--bs-secondary);
  }
</style>
