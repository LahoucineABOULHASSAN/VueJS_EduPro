<template>
  <form id="sign-up" class="col">
    <h2 class="text-center mb-4">Signup Today</h2>
    <input
      class="form-control form-control-sm mb-3"
      type="text"
      placeholder="Full Name"
    />
    <input
      class="form-control form-control-sm mb-3"
      type="email"
      placeholder="Email"
    />
    <input
      class="form-control form-control-sm mb-5"
      type="password"
      placeholder="Password"
    />
    <input class="btn btn-light" type="submit" value="Get Started" />
  </form>
</template>

<script>
  export default {
    name: 'SignUp',
  }
</script>
