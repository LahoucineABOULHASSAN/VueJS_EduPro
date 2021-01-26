<template>
  <div class="card col">
    <div class="card bg-dark text-white">
      <img class="card-img" :src="course.img" :alt="course.title" />
      <div class="carousel-caption d-none d-md-block">
        <span>
          <i class="calendar alternate icon"></i> {{ course.start + ' - ' }}
        </span>
        <span>{{ course.duration + ' Hours' }}</span>
      </div>
    </div>
    <div class="card-body mb-1">
      <h5 class="card-title">{{ course.title }}</h5>
      <p class="card-text">
        <small class="text-muted">{{ course.desc }}</small>
      </p>
    </div>
    <div class="card-body info">
      <img
        class="avatar"
        :src="course.teacher.image"
        :alt="course.teacher.name"
      />
      <a class="card-link" :href="'#' + course.teacher.name">
        {{ course.teacher.name }}
      </a>
      <button :class="course.premium ? 'btn btn-success' : 'btn btn-info'">
        {{ course.premium ? '$ ' + course.price : 'Free' }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Course',
    props: {
      course: Object,
    },
  }
</script>
