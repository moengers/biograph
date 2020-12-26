<template>
  <div id="familyTree">
        <div id="graph"></div>
        <h1>xxx</h1>
        <!-- <div>{{treeJason}}</div> -->
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
    return { treeJson };
  },
  name: 'FamilyTree',
  components: {},
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
