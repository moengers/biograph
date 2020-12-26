<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <PackChart :tweetData=loadData />
  </div>
</template>

<script>

// https://levelup.gitconnected.com/d3-js-and-vue-js-7a6a721eb79f
import * as d3 from 'd3';

import PackChart from './components/familytree.vue';

export default {
  name: 'app',
  components: {
    PackChart,
  },
  data() {
    return {
      loadData: [],
    };
  },
  mounted() {
    console.log('App loaded');
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await d3.json('./tweets.json');
      this.loadData = data;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
