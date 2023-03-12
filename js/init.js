import { SlackBlockKitBuilder } from "./slack_block_kit_builder.js";

Handlebars.registerHelper({
  inc: (input) => input + 1,
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and() {
    return Array.prototype.every.call(arguments, Boolean);
  },
  or() {
    return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  },
});

const builder = new SlackBlockKitBuilder;
window.builder = builder
window.addEventListener("DOMContentLoaded", init);

function init() {
  addEventListenerToInputBlocks();
  addEventListenerToClearBlocks();
  addEventListenerToOutputBlocks();
}

function addEventListenerToInputBlocks() {
  const allBlocks = document.querySelectorAll(".block");
  for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].addEventListener("click", addBlock);
  }
}

function addBlock(event){
  builder.addBlock(event.target.id)
}

function addEventListenerToClearBlocks() {
  document.querySelector("#clear-blocks").addEventListener("click", clearBlocks);
}

function clearBlocks() {
  document.querySelector('#output-monospace').innerHTML = "";
  document.querySelector('.output').innerHTML = "";
  builder.clearBlocks();
}

function addEventListenerToOutputBlocks() {
  const outputArea = document.querySelector(".output");
  outputArea.addEventListener('click', onOutputAreaClick);
}

function onOutputAreaClick(event) {
  const target = event.target.closest('.output-block');
  if (target) {
    handleTargetClick(target);
    alert(`Target block clicked: ${target.outerHTML}`);
  }
}

function handleTargetClick(target) {
  const type = target.getAttribute('data-type')
  switch (type) {
    case "header":
      builder.updateBlock(target.id, {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Updated Header"
        },
        "blockID": target.id
      });
      break;
    default:
      // Do nothing
  } 
}