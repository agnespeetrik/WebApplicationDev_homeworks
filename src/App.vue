
<template>
  <div id="app">
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="res/css/style.css">
    <router-view/>
  </div>
</template>

<style>

*{
  font-family: 'Roboto Slab', serif;
  outline: none;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  margin-top: 60px;
}

body {
  background-color: #0277bd;
  color: #263238;
}

a {
  color: #40c4ff;
}

</style>