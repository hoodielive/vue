<template>
  <div id="app" class="container py-4">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label>First Name:</label>
            <input
              v-model="form.firstName"
              type="text"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label>Last Name:</label>
            <input
              v-model="form.lastName"
              type="text"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label>Email:</label>
            <input
              v-model="form.email"
              type="email"
              class="form-control"
            >
          </div>

          <div class="form-group">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  }
}
</script>

<style>
</style>
