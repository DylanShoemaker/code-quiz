//first lets add some variables and reference them to the html dom elements
var countDown = document.getElementById("countdown"); //for the countdown timer in the header

var startButton = document.getElementById("start"); //start button variable


var questionsEl = document.getElementById("questions"); //references the different questions with the choices
var questionTitle = document.getElementById("title"); //references the different questions
var choicesEl = document.getElementById("choices"); //references the different choices, choices will act like submit button as well

var resultsEl = document.getElementById("results"); //Correct! or Wrong! to be displayed on following page with new question

var initialsEl = document.getElementById("initials"); //asks for initials one the last page
var submitButton = document.getElementById("submit"); //submit button variable


function startQuiz() { //what happens when you press the start quiz button
  //countdown timer is set at 75seconds to begin with
  //have timer countdown at start of quiz
  //hide the start page 
  //unhide first question

  //write out the questions here?
  // title
  // choices
  // submit button
  //transitional function to next function
};



function renamethis() { //what happens when you answer a question
  //if wrong issue penalty -15 seconds
  //Correct! or Wrong! use the resultsEl function and have that function display string on document

  //go to next question

  //transitional function to next function
};

function endQuiz() {
  //hide questions
  //unhide final-results
  //use dom to display final score
  //text input box for initials 
  //submit button should transition to high score page
};