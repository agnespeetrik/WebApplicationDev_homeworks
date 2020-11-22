<template>
  <div class="home">
    <Navbar></Navbar>
    <Posts></Posts>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import Navbar from "@/components/Navbar";

export default {
name: "index",
components: {
    Navbar,
    Posts
  }
}
</script>

<style scoped>

</style>