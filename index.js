// import
let readlineSync = require('readline-sync');
let chalk = require('chalk');

// high score logic
const highScorers = [
  {
    name: "king",
    score: 10
  },
  {
    name: "princess",
    score: 10
  }
]

// add score
let score = 0;

// Check for high Score
function CheckhighScore(name, score) {
  // console.log("High Score in Calling....");
  for (let i = 0; i < highScorers.length; i++) {
    if (score > highScorers[i].score) {
      // console.log("Pushed to high score");
      highScorers.push({ name: name, score: score });
      break;
    }
  }
}