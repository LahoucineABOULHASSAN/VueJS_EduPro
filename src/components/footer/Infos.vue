<template>
  <div id="infos" class="row">
    <div class="col subscribe">
      <h5 class="mb-4">NewsLetter Subscribe</h5>
      <form>
        <input
          type="email"
          class="form-control mb-3"
          placeholder="E-Mail Here"
          required
        />
        <button type="submit" class="btn btn-outline-primary mb-3">
          Send
        </button>
      </form>
      <small class="text-muted">
        ** Lorem ipsum, dolor sit amet conse.
      </small>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <div class="p-3">
            <h5>About Us</h5>
            <small class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptates.
            </small>
          </div>
        </div>
        <div class="col">
          <div class="p-3">
            <h5>Contact Info</h5>
            <small class="text-muted">
              <i class="phone volume icon"></i> (808) 08 080 8080
            </small>
            <br />
            <small class="text-muted">
              <i class="mail icon"></i>servicepro@yoursite.com
            </small>
          </div>
        </div>
        <div class="col">
          <div class="p-3">
            <h5>
              <a href="https://facebook.com">
                <i class="facebook icon"></i>
              </a>
              <a href="https://twitter.com">
                <i class="twitter icon"></i>
              </a>
              <a href="https://linkedin.com">
                <i class="linkedin icon"></i>
              </a>
            </h5>
            <small class="text-muted">Copyright &copy; 2020 EduPro</small>
          </div>
        </div>
        <div class="col">
          <div class="p-3">
            <h5>Quick Links</h5>
            <small>
              <a class="text-muted" href="#career">
                Career
              </a>
            </small>
            <small>
              <a class="text-muted" href="#investor">
                Investor
              </a>
            </small>
            <small>
              <a class="text-muted" href="#policy">
                Privacy & policy
              </a>
            </small>
            <small>
              <a class="text-muted" href="#terms">
                Terms & Conditions
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Infos',
  }
</script>

<style></style>
