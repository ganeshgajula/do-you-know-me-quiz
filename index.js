var readlineSync = require("readline-sync");
var chalk = require("chalk");
var userName = readlineSync.question(chalk.red("What's your name ? "));
var score = 0;

console.log(
  chalk.blue(
    "Welcome " + userName + "! Let's See How Well Do You Know Ganesh \n"
  )
);

console.log(
  chalk.bgBlue(`RULES FOR PLAYING THE GAME:
1. Read the question properly and enter (a,b,c,d) as per your choice of answer.
2. There are total 16 Questions 
  a) LEVEL 1 Contains 6 Questions, 5 CORRECT ANSWERS Will TAKE YOU TO LEVEL 2.
  b) LEVEL 2 Contains 5 Questions, 4 CORRECT ANSWERS Will TAKE YOU TO LEVEL 3.
  c) LEVEL 3 Contains 5 Questions, 4 CORRECT ANSWERS & YOU WIN THE QUIZ.
3. EACH CORRECT ANSWER Will REWARD YOU 5 POINTS. 
4. EACH WRONG ANSWER Will COST YOU 2 POINTS. \n`)
);

console.log(
  chalk.bgYellow("\n LEVEL 1 (5 Correct Answers & You go to next level) \n")
);

var levelOneQuestions = [
  {
    question: chalk.green(`Where do I live ? 
  a. Mumbai
  b. Delhi
  c. Bangalore
  d. Hyderabad\n
Enter Your Choice: `),
    answer: "a",
    correctAnswer: "Mumbai",
  },
  {
    question: chalk.green(`From which college did I complete my BE ? 
  a. DY Patil
  b. SIES
  c. KJ Somaiya
  d. Don Bosco\n
Enter Your Choice: `),
    answer: "b",
    correctAnswer: "SIES",
  },
  {
    question: chalk.green(`Which is my favourite food outlet ? 
  a. Vada Pav
  b. Samosa
  c. Pav Bhaji
  d. Chicken Biryani\n
Enter Your Choice: `),
    answer: "d",
    correctAnswer: "Chicken Biryani",
  },
  {
    question: chalk.green(`Which is my favourite TV Series ?
  a. Friends
  b. HIMYM
  c. Suits
  d. Flash\n
Enter Your Choice: `),
    answer: "c",
    correctAnswer: "Suits",
  },
  {
    question: chalk.green(`On which domain i enjoy working ?
  a. Web Development
  b. AI
  c. Devops
  d. Networking\n
Enter Your Choice: `),
    answer: "a",
    correctAnswer: "Web Development",
  },
  {
    question: chalk.green(`Which is my favourite framework/library ?
  a. Angular
  b. Vue
  c. React
  d. React Native\n
Enter Your Choice: `),
    answer: "c",
    correctAnswer: "React",
  },
];

var levelTwoQuestions = [
  {
    question: chalk.green(`Which kind of movies do i enjoy watching ?
  a. Fictional
  b. Sci-Fi
  c. Drama
  d. Comedy\n
Enter Your Choice: `),
    answer: "b",
    correctAnswer: "Sci-Fi",
  },
  {
    question: chalk.green(`I own a laptop of which brand ?
  a. HP
  b. Dell
  c. Lenovo
  d. Apple\n
Enter Your Choice: `),
    answer: "a",
    correctAnswer: "HP",
  },
  {
    question: chalk.green(`Which is my favourite IPL Team ? 
  a. MI
  b. CSK
  c. RCB
  d. SRH\n
Enter Your Choice: `),
    answer: "b",
    correctAnswer: "CSK",
  },
  {
    question: chalk.green(`Which is my favourite outdoor game ?
  a. Football
  b. Badminton
  c. Basketball
  d. Cricket\n
Enter Your Choice: `),
    answer: "d",
    correctAnswer: "Cricket",
  },
  {
    question: chalk.green(`Which is my favourite indoor game ?
  a. Carrom
  b. Chess
  c. Snake & Ladder
  d. Table Tennis\n
Enter Your Choice: `),
    answer: "d",
    correctAnswer: "Table Tennis",
  },
];

var levelThreeQuestions = [
  {
    question: chalk.green(`Which is on my list of places to visit? 
  a. USA
  b. UK
  c. Australia
  d. New Zealand\n
Enter Your Choice: `),
    answer: "a",
    correctAnswer: "USA",
  },
  {
    question: chalk.green(`How much did i score in my last semester ? 
  a. 9 ptr
  b. 10 ptr
  c. 8.5 ptr
  d. 8 ptr\n
Enter Your Choice: `),
    answer: "b",
    correctAnswer: "10 ptr",
  },
  {
    question: chalk.green(`Who is my favourite Cricketer ? 
  a. Virat Kohli
  b. Suresh Raina
  c. MS Dhoni
  d. Rohit Sharma\n
Enter Your Choice: `),
    answer: "c",
    correctAnswer: "MS Dhoni",
  },
  {
    question: chalk.green(`Which type of songs do i love to listen ?
  a. Romantic
  b. Party
  c. Breakup
  d. DJ\n
Enter Your Choice:`),
    answer: "a",
    correctAnswer: "Romantic",
  },
  {
    question: chalk.green(`Who is my favourite actor ?
  a. SRK
  b. Salman
  c. Prabhas
  d. SSR\n
Enter Your Choice: `),
    answer: "d",
    correctAnswer: "SSR",
  },
];

var highScorers = [
  {
    name: "Abhirup",
    points: "\t80",
  },
  {
    name: "Siddharth",
    points: "\t78",
  },
  {
    name: "Prajakta",
    points: "\t76",
  },
  {
    name: "Abhishek",
    points: "\t70",
  },
  {
    name: "Sushant",
    points: "\t59",
  },
];

function play(question, answer, correctAnswer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgBlue("You're Right"));
    score = score + 5;
    console.log(chalk.yellow("Your Score is ", score));
    console.log("\n");
  } else {
    console.log(chalk.bgRed("You're Wrong"));
    console.log(chalk.red("The correct answer is ", correctAnswer));
    score = score - 2;
    console.log(chalk.yellow("Your Score is ", score));
    console.log("\n");
  }
}

for (var i = 0; i < levelOneQuestions.length; i++) {
  play(
    levelOneQuestions[i].question,
    levelOneQuestions[i].answer,
    levelOneQuestions[i].correctAnswer
  );
}
totalScore(score);

var levelOneScore = score;
if (levelOneScore >= 23) {
  console.log(
    chalk.bgYellow(
      "\nLETS BEGIN LEVEL 2 (4 Correct Answers & You go to next level)\n"
    )
  );
  for (var i = 0; i < levelTwoQuestions.length; i++) {
    play(
      levelTwoQuestions[i].question,
      levelTwoQuestions[i].answer,
      levelTwoQuestions[i].correctAnswer
    );
  }
  totalScore(score);
}

var levelTwoScore = score;
if (levelTwoScore >= 41) {
  console.log(
    chalk.bgYellow("\nLETS BEGIN LEVEL 3 (4 Correct Answers & You WIN) \n")
  );
  for (var i = 0; i < levelThreeQuestions.length; i++) {
    play(
      levelThreeQuestions[i].question,
      levelThreeQuestions[i].answer,
      levelThreeQuestions[i].correctAnswer
    );
  }
  totalScore(score);
}

function totalScore(finalScore) {
  for (var k = 0; k < highScorers.length; k++) {
    if (finalScore > 0 && finalScore >= 23 && finalScore <= 30) {
      console.log(chalk.blue("\nYAY! Your Total Score Is ", finalScore));
      console.log(chalk.bgBlue("CONGRATS!! You are now in LEVEL 2"));
      break;
    } else if (finalScore >= 41 && finalScore <= 55) {
      console.log(chalk.blue("\nYAY! Your Total Score Is ", finalScore));
      console.log(chalk.bgBlue("CONGRATS!! You are now in LEVEL 3"));
      break;
    } else if (finalScore > 0 && finalScore >= highScorers[k].points) {
      console.log(chalk.blue("\nYAY! Your Total Score Is ", finalScore));
      console.log(
        chalk.bgBlue(
          "\nCONGRATULATIONS!! You Played Really Well. \nYou Deserve A Place In Our Leaderboard. \nKindly Share The Screenshot of Your Score."
        )
      );
      break;
    } else if (finalScore > 0 && finalScore < 20) {
      console.log(chalk.blue("\nYour Total Score Is ", finalScore));
      console.log(chalk.yellow("You didn't Qualify to Level 2"));
      console.log(chalk.red("Thanks for Playing!!"));
      break;
    } else if (finalScore > 23 && finalScore < 41) {
      console.log(chalk.blue("\nYour Total Score Is ", finalScore));
      console.log(chalk.yellow("You didn't Qualify to Level 3"));
      console.log(chalk.red("Thanks for Playing!!"));
      break;
    } else if (finalScore < 0) {
      console.log(
        chalk.bgRed(
          "\nSeems like your Score is Negative.\nYOU LOSE THE GAME... TRY AGAIN"
        )
      );
      break;
    }
  }
}

console.log(chalk.bgYellow("\nLeaderBoard"));
console.log(chalk.bgCyan("Name \t Points"));
for (var j = 0; j < highScorers.length; j++) {
  console.log(chalk.red(highScorers[j].name, highScorers[j].points));
}
