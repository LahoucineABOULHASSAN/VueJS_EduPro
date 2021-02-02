<template>
  <div class="alert alert-danger text-center" role="alert">
    {{ error }}
  </div>
</template>

<script>
  import { onMounted } from 'vue'
  export default {
    name: 'Error',
    props: { error: String },
  }
</script>
