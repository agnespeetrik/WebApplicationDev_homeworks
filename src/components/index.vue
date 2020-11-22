<template>

</template>

<script>
import navar from './navbar';
import posts from './posts';

export default {
name: "index",
components: {
    navbar,
    posts
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>