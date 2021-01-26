<template>
  <section id="features">
    <div class="row">
      <div class="col">
        <div class="card border-secondary">
          <div class="card-header  text-primary">
            <h5 class="text-dark">
              <span class="badge bg-primary">01</span> Trending courses
            </h5>
          </div>
          <div class="card-body text-secondary">
            <p class="card-text">
              Lorem ipsum dolor sit amet elit. Eum animi, accusamus quos vitae
              cum ullam?
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-secondary">
          <div class="card-header  text-danger">
            <h5 class="text-dark">
              <span class="badge bg-danger">02</span> Books & Library
            </h5>
          </div>
          <div class="card-body text-secondary">
            <p class="card-text">
              Lorem ipsum dolor sit amet elit. Eum animi, accusamus quos vitae
              cum ullam?
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-secondary">
          <div class="card-header  text-info">
            <h5 class="text-dark">
              <span class="badge bg-info">03</span> Certified Teachers
            </h5>
          </div>
          <div class="card-body text-secondary">
            <p class="card-text">
              Lorem ipsum dolor sit amet elit. Eum animi, accusamus quos vitae
              cum ullam?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Features',
  }
</script>

<style scoped>
  /*  **************** Features style **************** */
  section#features .card {
    border-radius: 0;
  }
  section#features .card .card-header {
    text-align: center;
  }
  section#features .card .card-header h5 {
    margin: 0;
  }
  section#features .card .card-header span {
    margin-right: 1rem;
    border-radius: 50%;
    padding: 0.5rem;
  }
</style>
