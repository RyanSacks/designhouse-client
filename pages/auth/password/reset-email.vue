<template>
  <div class="wrapper">

    <!-- Section Cards -->
    <section class="authentication">
      <div class="auth-body">
        <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
          Reset Password
        </h1>
        <form @submit.prevent="submit" class="auth-form">
          <alert-success :form="form">{{ status }}</alert-success>
          <div class="form-group">
            <base-input
              :form="form"
              field="email"
              inputType="email"
              v-model.trim="form.email"
              placeholder="Email">
            </base-input>
          </div>
          <div class="text-right">
            <base-button :loading="form.busy">
              Send Reset Link
            </base-button>
          </div>
          <p class="font-14 fw-400 text-center mt-4">
            <nuxt-link :to="{ name: 'login' }" class="color-blue">Back to login</nuxt-link>
          </p>
        </form>
      </div>
    </section>
    <!-- End Cards -->
  </div>
</template>

<script>
    export default {
        name: "reset-email",
        middleware: ['guest'],
        data() {
            return {
                status: '',
                form: this.$vform({
                    email: ''
                })
            }
        },

        methods: {
            submit() {
              this.form.post('/password/email')
                  .then(res => {
                      this.status = res.data.status;
                      this.form.reset();
                  })
                  .catch(e => {
                      console.log(e);
                  })
            }
        }
    }
</script>

<style scoped>

</style>
