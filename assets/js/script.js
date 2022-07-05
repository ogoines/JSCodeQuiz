
var timerEl = document.getElementById("quiz-timer");
var timeLeft = document.getElementById("time-Left");
var timesUp = document.getElementById("quiz-over");
var highScore= document.getElementById("view-high-score");


var quizInfo = document.getElementById("quiz-directions");
var startQuiz= document.getElementById("start-quiz");

//quiz object containing questions, answers and correct answer
const quiz = [
 {
   question: "Commonly used data types Do Not Include:",
   answers:[
       "A. string",
       "B. booleans", 
       "C. alerts", 
       "D. numbers"
      ],
  correctAnswer: "C. alerts"
 },
 {
   question: "Arrays in Javascript can be used to store:",
   answers:[
       "A. numbers and strings",
       "B. other arrays", 
       "C. booleans", 
       "D. all of the above"
      ],
    correctAnswer: "D. all of the above"
 }, 
 {
   question: "A very useful/tool during debugging for printer content to the debugger is:",
   answers:[
        "A. Javascript",
        "B. console log",
        "C. for loops",    
        "D. terminal bash"
      ],
   correctAnswer: "D. terminal bash"
 },
 {
   question: "String values must be enclosed with ______ when being assigned to variables.",
   answers:[    
        "A. commas", 
        "B. curly brackets", 
        "C. quotes", 
        "D. parenthesis"
      ],
   correctAnswer: "C. quotes"
 },
 {
   question: "The condition in an if/else statement is enclosed with ______.",
    answers: [        
        "A. parenthesis", 
        "B. curly brackets", 
        "C. parenthesis", 
        "D. square brackets"
      ],
   correctAnswer: "A. parenthesis"
 }
];

//links to elements in question container

var questionContainer = document.getElementById("question-container");
var questionAsked = document.getElementById("question");
var answerA = document.getElementById("btn-0");
var answerB = document.getElementById("btn-1");
var answerC = document.getElementById("btn-2");
var answerD = document.getElementById("btn-3");
var checkAnswer = document.getElementById("check-answer");

//links to elements in results section
var  resultsContainer= document.getElementById("results-section");
var userScore = document.getElementById("user-score");
var  initialInput = document.getElementById("initial-input");
var  userInitials = document.getElementById("btn-user-initials");
var  highscoreContainer = document.getElementById("highscore-container");
var  highscoreList = document.getElementById("highscore-list");
var  backBtn = document.getElementById("btn-button");
var  clearScoresBtn = document.getElementById("btn-clear-scores");

var quizIndex = 0;
//console.log(quiz[quizIndex].question);
//console.log(quiz[quizIndex].answers);




function displayQuestion() {
  questionAsked.textContent = quiz[quizIndex].question;
  answerA.textContent = quiz[quizIndex].answers[0];
  answerB.textContent = quiz[quizIndex].answers[1];
  answerC.textContent = quiz[quizIndex].answers[2];
  answerD.textContent = quiz[quizIndex].answers[3];
}

console.log("answerD");



// Timer that counts 
function countdown() {
 var timeLeft = 8;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "Time's up!!!";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}
countdown();
