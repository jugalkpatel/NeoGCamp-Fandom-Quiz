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

// Level2
const levelSecondQuestions = [
  {
    question: "Which Building card has biggest Range?",
    answer: "xbow",
    options: ["xbow", "mortar", 'inferno-tower', 'barbarian-hut']
  },
  {
    question: "Which card in clash royale has most single-hit damage?",
    answer: "Sparky",
    options: ["Pekka", "Mega-Night", "Sparky"]
  },
  {
    question: "Which Card has highest hit points in clash royale?",
    answer: "golem",
    options: ["pekka", "golem", "Giant-Skelly"]
  },
  {
    question: "Which spell does most damage if ignored?",
    answer: "gravy yard",
    options: ['Royal Delivery', 'gravy yard', 'Mirror', 'barbarian barrel']
  },
  {
    question: "which card has highest damage per second in game?",
    answer: "Sparky",
    options: ['Mega Minion', 'Prince', 'Mega Minion', 'Sparky']
  },
]

// Level3
const levelThreeQuestions = [
  {
    question: "Is rage spell affect all things inside it?",
    options: undefined,
    answer: true
  },
  {
    question: "Is Healer Heels in Spell?",
    options: undefined,
    answer: true
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