<template>
  <div id="app">
   <image_viewer></image_viewer>
  </div>
</template>

<script>
import image_viewer from './components/image-viewer.vue'
export default {
  name: 'App',
  components: {
    image_viewer
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
