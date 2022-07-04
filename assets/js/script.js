
//Document methods that link to  html for tracking quiz time
var timerEl = document.getElementById("timer");
var timeOut = document.getElementById("time-out");
var timeRemaining = document.getElementById("time-remaining");
var startQuiz = document.getElementById("start-btn");
var startSection =  document.getElementById("start-section");
//References elements in html

//ref to total number of correct scores
var score = document.getElementById("score");

//ref to answer buttons
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");
var answer4 = document.getElementById("btn4");

//ref to back button
var back= document.getElementById("back");
//References elements in html
var mainEl = document.getElementById('main');
var choicesE1 = document.getElementsByClassName('answers');


var numberCorrect =0;
var numberQuestion =0;
//var scoreResult;
//var questionIndex = 0;
// ref to question and title
var questionSection = document.getElementById("question-section");
var questionTitle = document.getElementById("question-title");
var displayHighScore =  document.getElementById("view-highscore");
var clearHighScore = document.getElementById("clear-highscore"); 

//ref to list of top scores
var TopScores = document.getElementById("top-scores");




//quiz object containing questions, answers and correct answer
var questions = [
 {
   question: "Commonly used data types Do Not Include:",
   answers:{
       a: 'strings', 
       b: 'booleans', 
       c: 'alerts', 
       d: 'numbers'
   },  
   correctAnswer: 'c'
 },
 {
   question: "Arrays in Javascript can be used to store:",
   answers:{
        a: 'numbers and strings',
        b: 'other arrays', 
        c: 'booleans', 
        d: 'all of the above'
   },
   correctAnswer: 'd'
 }, 
 {
   question: "A very useful/tool during debugging for printer content to the debugger is:",
   answers:{
        a: 'Javascript',
        b: 'console log',
        c: 'for loops',    
        d: 'terminal bash'
  },
   correctAnswer: 'd'
 },
 {
   question: "String values must be enclosed with ______ when being assigned to variables",
    answers:{    
        a: 'commas', 
        b: 'curly brackets', 
        c: 'quotes', 
        d: 'parenthesis'
  },
   correctAnswer: 'c'
 },
 {
   question: "The condition in an if/else statement is enclosed with ______.",
    answers: {
        a: 'parenthesis', 
        b: 'curly brackets', 
        c: 'parenthesis', 
        d: 'square brackets'
   },
   correctAnswer: 'a'
 }
];
 





function displayQuestions(questions, quizContainer){
  //stores output and selected answer
  var output = [];
  var answers;
  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;
  
    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];
  
      // for each available answer to this question...
      for(letter in questions[i].answers){ 
  
}


// Timer that counts down from 75
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
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

