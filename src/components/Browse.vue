<template>
  <div class="browse">
    <Navbar></Navbar>
    <section class="main-container" v-for="item in list" v-bind:key="item.id">
      <div class="profile">
        <img v-bind:src="item.avatar">
        <h2>{{item.firstname + item.lastname}}</h2>
        <button class="follow-button">Follow</button>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import axios from 'axios';

export default {
name: "browse",
components: {
    Navbar
  },
  data () {
    return {list:this.list}
  },
  mounted() {
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
        .then((resp) => {
          this.list=resp.data;
        })
  }
}
</script>

<style scoped>
* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: #0277bd;
    color: #263238;
}

a {
    color: #40c4ff;
}


.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
.profile {
  width: 40%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
.profile img{
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}
.profile h2{
  font-size: 16px;
}
.follow-button{
  background-color: #82008f;
}
.follow-button.followed{
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}
</style>