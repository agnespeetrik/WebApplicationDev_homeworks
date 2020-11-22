<template>
  <div class="index">
    <Navbar></Navbar>
    <Posts></Posts>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue';
import Navbar from '@/components/Navbar.vue';

export default {
name: 'Index',
components: {
    Navbar,
    Posts
  }
}
</script>

<style scoped>

</style>