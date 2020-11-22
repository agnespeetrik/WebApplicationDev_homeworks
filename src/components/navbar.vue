<template>
<header>
  <nav>
    <div class="logo-container">
      <img src="../assets/logo.png" alt="postIt">
    </div>
    <div class="search-container">
      <input type="text" name="search">
      <button type="button">Search</button>
    </div>
    <div class="avatar-container">
      <img class="avatar">
      <div class="drop-down-container">
        <span id="user-name">John Doe</span>
        <span id="user-email"></span>
        <span class="separator"></span>
        <span>
          <button class="button" @click="browsePage" v-if="!isLoggingIn" >Browse</button>
        </span>
        <span class="separator"></span>
        <span>
          <button class="button" @click="logOut" v-if="!isLoggingIn">Log Out</button>
        </span>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'navbar',

  data() {
    return {
      isLoggingIn: false,
      showMore: false
    }
  },
  methods: {
    logOut() {
          this.isLoggingIn = true
          setTimeout(() => {
            this.isLoggingIn = false
            setTimeout(() => this.redirectToLogOut(), 200)
          }, 200)
        },
        redirectToLogOut() {
          this.$router.push({name: 'Login'})
        },
        browsePage() {
          this.isLoggingIn = true
          setTimeout(() => {
            this.isLoggingIn = false
            setTimeout(() => this.redirectToBrowsePage(), 200)
          }, 200)
        },
        redirectToBrowsePage() {
          this.$router.push({name: 'Browse'})
        }
  }
}


</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}
header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
}
nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
}
nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
}
nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}
nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
}
nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}
button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}
button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}
</style>