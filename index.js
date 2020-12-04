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

const levelOneQuestions = [
  {
    question: "What is the best Chest in clash Royale?",
    answer: "king's legendary chest",
    options: ["king's legendary chest", "Legendary chest", "Mythical Chest", "Super Magical Chest?"]
  },
  {
    question: "How many buildings are in clash royale?",
    answer: 12,
    options: [11, 12, 13, 10]
  },
  {
    question: "how many arena's are there in clash royale?",
    answer: 13,
    options: [9, 12, 11, 13]
  },
  {
    question: "What is the max level which can be reached by king tower and areana towers?",
    answer: 13,
    options: [13, 14, 15, 10]
  },
  {
    question: "How Many Cards are associated with skeleton's?",
    answer: 11,
    options: [12, 11, 13, 14]
  },
  {
    question: "What is attack range of wizard?",
    answer: 5.5,
    options: [5, 3, 5.5, 2]
  },
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