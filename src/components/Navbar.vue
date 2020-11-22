<template>
  <div>
    <header>
      <nav>
        <div class="logo-container">
          <img src="../assets/logo.png" alt="postIt">
        </div>
        <div class="search-container">
          <input type="text" name="search">
          <button type="button">Search</button>
        </div>
        <div class="avatar-container" @click="toggleDropDown">
          <img src="../assets/avatar.png" alt="postIt">
        </div>
        <div class="dropdown-container">
          <div class="dropdown">
            <div class="userinfo">
              <span id="user-name">John Doe</span>
              <span id="user-email">johnblablabla@gmail.com</span>
            </div>
            <hr>
            <button class="link1" @click="browsePage" v-if="!isLoggingIn" >Browse</button>
            <button class="link2" @click="logOut" v-if="!isLoggingIn">Log Out</button>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Navbar',

  data() {
    return {
      isLoggingIn: false,
      showMore: false
    }
  },

  methods: {
    toggleDropDown() {
      this.$el.querySelector('.dropdown-container').classList.toggle('displayed')
    },
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

nav .avatar:hover{
    cursor: pointer;
}

.dropdown-container {
    display: none;
    position: absolute;
    top: 40px;
    right: 0;
    padding: 0
}

.displayed {
  display: block;
}

.dropdown-container .dropdown {
    position: relative;
    background-color: white;
    width: 250px;
    height: auto;
    padding-top: 20px;
}

.dropdown-container .dropdown .userinfo {
    padding: 5px 0px 15px 10px;
}

.dropdown-container .dropdown .link1, .link2 {
    border-top: 1px solid lightgray;
    padding: 10px 10px 10px 10px;
    margin: 5px 0px 5px 10px;
}

</style>