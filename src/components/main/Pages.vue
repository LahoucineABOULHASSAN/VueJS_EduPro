<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li :class="!page.previous ? 'page-item disabled' : 'page-item'">
        <button
          class="page-link previous"
          value="previous"
          @click="handleArrows"
        >
          &laquo;
        </button>
      </li>
      <li
        v-for="i in num"
        :class="page.current === i ? 'page-item active' : 'page-item'"
        :key="i"
      >
        <button class="page-link" @click="handleButton">{{ i }}</button>
      </li>
      <li :class="!page.next ? 'page-item disabled' : 'page-item'">
        <button class="page-link next" value="next" @click="handleArrows">
          &raquo;
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
  import handlePage from '../../composables/handlePage'
  import { onMounted, ref } from 'vue'
  export default {
    name: 'Pages',
    props: {
      num: Number,
    },
    setup(props) {
      const { page, pagination } = handlePage()
      pagination({ num: props.num, type: 'CURRENT' })
      const handleArrows = (event) => {
        if (event.target.value === 'previous') {
          pagination({ num: props.num, type: 'PREVIOUS' })
        }
        if (event.target.value === 'next') {
          pagination({ num: props.num, type: 'NEXT' })
        }
      }
      const handleButton = (event) => {
        page.value.current = parseInt(event.target.innerText)
        pagination({ num: props.num, type: 'CURRENT' })
      }
      onMounted(() => {
        if (props.num > 1) {
          page.value.next = 2
        }
      })
      return { page, handleButton, handleArrows, handlePage }
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
