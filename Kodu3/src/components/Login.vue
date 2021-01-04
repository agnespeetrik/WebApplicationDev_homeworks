<template>
  <section class="login-page">
    <section id="login-container">
      <div>
        <h1>Welcome to postIt!</h1>
      </div>
      <div>
        <h4>
          <a href="#">Create an Account</a>
        </h4>
      </div>
      <div>
        <h4>Or</h4>
      </div>
      <div>
        <h3>Please Log In</h3>
        <form action="index.vue" method="post">
          <div>
            <input type="text" name="email" placeholder="Email">
          </div>
          <div>
            <input type="password" name="password" placeholder="Password">
          </div>
          <div>
            <button @click="login" v-if="!isLoggingIn">Log In</button>
          </div>
          <div>
            <small>
              <a href="#">Forgot password?</a>
            </small>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isLoggingIn: false
    }
  },
  methods: {
    login() {
      this.isLoggingIn = true
      setTimeout(() => {
        this.isLoggingIn = false
        setTimeout(() => this.redirect())
      })
    },
    redirect() {
      this.$router.push({name: 'Index'})
    }
  }
}
</script>

<style scoped>

.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#login-container {
  background-image: url(../assets/logo.png);
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: 15px 15px;
  min-width: 25%;
  padding: 45px 45px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  text-align: center;
}
#login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}

</style>