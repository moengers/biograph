<template>
  <div id="app">
    <h1>Familienstammbaum</h1>
    <fam-tree />
  </div>
</template>

<script>
import FamTree from './familytree.vue';

export default {
  data() {
    return {};
  },
  name: 'App',
  components: {
    FamTree,
  },
};
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
