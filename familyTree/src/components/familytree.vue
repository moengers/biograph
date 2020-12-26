<template>
  <div>
    <h1>Circle Pack in D3</h1>
    <h2>{{ msg }}</h2>
    <svg
      :height='height'
      :width='width'
    >
      <g transform="translate(50,50)">
        <circle
          v-for="c in output"
          :key="c.id"
          :r="c.r"
          :cx="c.x"
          :cy="c.y"
          :fill="c.fill"
          :stroke="c.stroke"
        >
        </circle>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
import * as dTree from 'd3-dtree';
// import * as lodash from 'lodash';

const options = {
  target: '#graph',
  debug: true,
  hideMarriageNodes: true,
  marriageNodeSize: 4,
  height: 400,
  width: 600,
  callbacks: {
    nodeClick(name, extra) {
      alert(`Click: ${name} + ${extra}`);
    },
    nodeRightClick(name, extra) {
      alert(`Right-click: ${name} + ${extra}`);
    },
    textRenderer(name, extra, textClass) {
      let nameAndNick = name;
      if (extra && extra.nickname) {
        nameAndNick = `${name} (${extra.nickname})`;
      }
      return `<p align='center' class='${textClass}'>${nameAndNick}</p>`;
    },
    marriageClick(extra, id) {
      alert(`Clicked marriage node${id} + ${extra}`);
    },
    marriageRightClick(extra, id) {
      alert(`Right-clicked marriage node${id} + ${extra}`);
    },
  },
};

const treeJson = d3.json('./../Data/TreeData.json', (error, treeData) => {
  dTree.init(treeData, options);
  if (error) alert(error);
  alert(error);
});

console.log(treeJson);

export default {
  data() {
    return {
      msg: 'Hi from Chart Component',
      height: 600,
      width: 600,
    };
  },
  name: 'FamilyTree',
  components: {},
  props: ['tweetData'],
  created() {
    this.colourScale = d3
      .scaleOrdinal()
      .range(['#5EAFC6', '#FE9922', '#93c464', '#75739F']);
  },
  computed: {
    packData() {
      const nestedTweets = d3
        .nest()
        .key((d) => d.user)
        .entries(this.tweetData);

      const packableTweets = { id: 'All Tweets', values: nestedTweets };
      return d3
        .hierarchy(packableTweets, (d) => d.values)
        .sum((d) => (d.retweets ? d.retweets.length + d.favorites.length + 1 : 1));
    },
    output() {
      return this.packChart();
    },
  },
  methods: {
    packChart() {
      const packChart = d3.pack();
      packChart.size([500, 500]);
      packChart.padding(10);
      const output = packChart(this.packData).descendants();
      return output.map((d, i) => {
        const fill = this.colourScale(d.depth);
        return {
          id: i + 1,
          r: d.r,
          x: d.x,
          y: d.y,
          fill,
          stroke: 'grey',
        };
      });
    },
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
.linage {
  fill: none;
  stroke: black;
}
.marriage {
  fill: none;
  stroke: black;
}
.node {
  background-color: lightblue;
  border-style: solid;
  border-width: 1px;
}
.nodeText {
  font: 10px sans-serif;
}
.marriageNode {
  background-color: black;
  border-radius: 50%;
}
</style>
