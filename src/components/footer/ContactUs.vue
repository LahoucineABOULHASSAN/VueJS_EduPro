<template>
  <div id="contact" class="col contact-us">
    <h2 class="mb-4">Contact Us</h2>
    <form>
      <input
        type="text"
        class="form-control form-control-sm mb-3"
        placeholder="Enter Full Name"
        required
      />
      <input
        type="email"
        class="form-control form-control-sm mb-3"
        placeholder="Enter Your E-Mail Here"
        required
      />
      <textarea
        class="form-control form-control-sm mb-3"
        placeholder="Enter Your Message Here"
        required
      ></textarea>
      <button type="submit" class="btn btn-dark btn-sm">
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style></style>
