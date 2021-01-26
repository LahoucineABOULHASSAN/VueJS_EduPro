<template>
  <div class="col">
    <div class="card mb-1">
      <img
        :src="teacher.image"
        class="card-img card-img-top"
        :alt="teacher.name"
      />
      <div class="card-body">
        <h5 class="card-title">{{ teacher.name }}</h5>
        <p class="card-text">{{ teacher.desc }}</p>
      </div>
    </div>
    <div class="card-body">
      <a v-for="media in teacher.medias" :key="media.id" :href="media.url">
        <i
          :class="'icon large ' + media.icon"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :title="media.icon"
        ></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Teacher',
    props: {
      teacher: Object,
    },
  }
</script>
