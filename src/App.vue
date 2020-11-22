
<template>
  <div id="login">
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="res/css/style.css">
    <img alt="logo" src="assets/logo.png">
    <HelloWorld msg="Welcome to postIt! Please log in!"/>
    <login />
  </div>
</template>

<script>
import login from './components/login.vue'

export default {
  name: 'login',
  components: {
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>