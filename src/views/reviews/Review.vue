<template>
  <div class="col card-body info">
    <div class="reviewer mb-3">
      <img class="avatar" :src="review.image" :alt="review.name" />
      <div>
        <a class="card-link" :href="'#' + review.name">
          {{ review.name }}
        </a>
        <br />
        <small class="text-muted">{{ review.job }}</small>
      </div>
    </div>
    <p class="text-muted">{{ review.review }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Review',
    props: {
      review: Object,
    },
  }
</script>

<style></style>
