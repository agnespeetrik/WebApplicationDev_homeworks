<template>
  <div class="posts">
    <Navbar />
    <section class="main-container"  v-for="post in list" v-bind:key="post.id">
      <div class="post">
        <div class="post-author">
          <span class="post-author-info">{{post.author.info}}
            <img v-bind:src="post.author.avatar">
          <span class="post-author">{{post.author.firstname + " " + post.author.lastname}}
          </span>
            </span>
          <small>{{post.createTime}}</small>
        </div>
      <div v-if="post.media !== null" class="post-image">
        <img v-if="post.media.type === 'image'" :src="post.media.url" alt="">
        <video v-else controls>
          <source type="video/mp4" :src="post.media.url">
       </video>
    </div>
      <div class="post-title">
        <h3>{{post.text | capitalize}}</h3>
      </div>
        <div class="post-actions">
        <button class="like-button" v-bind:class="{ liked: isLiked }" @click="toggleLike()">{{ post.likes}}</button>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from 'axios'

export default {
  name: 'Posts',
  components: {
    Navbar
  },
  data(){
    return {
      list:this.list,
      isLiked: false,
    }
  },
  methods: {
    toggleLike: function () {
      this.isLiked = !this.isLiked;
    },
  },
  mounted() {
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
    .then((resp) => {
      this.list=resp.data;
      console.log(resp.data)
    })
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 10px 5px 5px 5px;
  background-color: #ffffff;
}
.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}
.post .post-author {
  padding: 10px;
}
.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}
.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}
.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: -8px;
}
.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 35px;
}
.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}
.post .post-image img, video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}
.post .post-title {
  padding: 10px;
}
.post .post-title h3 {
  display: inline;
}
.post .post-title ~ .post-actions {
  padding: 10px;
}
.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}
.like-button.liked {
  background-color: #01579b;
}

</style>