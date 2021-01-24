<template>
  <header id="home">
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img
            src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            class="d-block w-100"
            alt="online education"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Distance Learning Education Center</h1>
            <p>
              Our online courses are designed to fit in your industry supporting
              all-around with latest technologies
            </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="https://images.pexels.com/photos/5198252/pexels-photo-5198252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            class="d-block w-100"
            alt="man learning"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Professional Trainers & Teachers</h1>
            <p>
              Our work group is based on known and Professionals people who love
              their work
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.pexels.com/photos/4050296/pexels-photo-4050296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            class="d-block w-100"
            alt="girl learning"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>International Certification</h1>
            <p>
              Our certifications will help you find your dream job more easily.
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleDark"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleDark"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style></style>
