<template>
  <section id="services">
    <div class="row">
      <SignUp />
      <div class="col">
        <h2 class="card-title  text-dark mb-4">
          Start your journey to a better life with online practical courses
        </h2>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li>
              <span>
                <i class="users large icon"></i>
              </span>
              <div>
                <h6>Professional Trainers</h6>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet elit. Eum animi, accusamus
                </p>
              </div>
            </li>
            <li>
              <span>
                <i class="certificate large icon"></i>
              </span>
              <div>
                <h6>International Certificates</h6>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet elit. Eum animi, accusamus
                </p>
              </div>
            </li>
            <li>
              <span>
                <i class="gift large icon"></i>
              </span>
              <div>
                <h6>Free For Three Months</h6>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet elit. Eum animi, accusamus
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SignUp from './SignUp'
  export default {
    name: 'Services',
    components: { SignUp },
  }
</script>

<style scoped>
  /*  **************** Services style **************** */
  #services .card-body {
    background: none;
  }
  .list-group li span {
    text-align: center;
    font-size: 1.2rem;
    padding: 0.6rem;
    border-radius: 50%;
    background-color: var(--bs-primary);
    margin-right: 1rem;
  }
  .list-group li span i.icon {
    margin: 0;
    color: var(--bs-light);
  }
  .list-group li h6 {
    font-weight: bold;
  }
  #services form {
    padding: 3rem 0;
  }
  #services form {
    border-radius: 50%;
    background-color: var(--bs-dark);
  }
  #services form input[type='submit'] {
    font-weight: bold;
    padding: 0.6rem 1rem;
    border-radius: 25px;
  }
</style>
