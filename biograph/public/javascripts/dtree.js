// import * as d3 from 'd3';
// import * as dTree from 'd3-dtree';

const d3 = require('d3');
const dTree = require('d3-dtree');

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
