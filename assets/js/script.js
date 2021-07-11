//what question are we on right now?
var currentQuestionIndex = 0; //starts at 0
var time = questions.length * 15; // 15 seconds per question = 75 seconds total, and the penalty will also be 15 seconds so this might come in handy
var countdownEl; //this will run the countdown, like a container in html 




//first lets add some variables and reference them to the html dom elements
var countDown = document.getElementById("countdown"); //for the countdown timer in the header

var startButton = document.getElementById("start"); //start button variable


var questionsEl = document.getElementById("questions"); //references the different questions with the choices
var questionTitle = document.getElementById("title"); //references the different questions
var questionChoices = document.getElementById("choices"); //references the different choices, choices will act like submit button as well

var resultsEl = document.getElementById("results"); //Correct! or Wrong! to be displayed on following page with new question

var initialsEl = document.getElementById("initials"); //asks for initials one the last page
var submitButton = document.getElementById("submit"); //submit button variable



function startQuiz() { //what happens when you press the start quiz button
  var startScreenEl = document.getElementById("start-screen"); //select the first page html
  startScreenEl.setAttribute("class", "hide"); // references the css stylesheet, display: none .....so this hides the initial page

  questionsEl.removeAttribute("class"); // this will display the questions
 
  countdownEl = setInterval(updatedTime, 1000); //have timer countdown at start of quiz  https://www.w3schools.com/js/js_timing.asp

  countDown.textContent = time;  //countdown timer is set at 75seconds to begin with
  getQuestions();  //transitional function to next function
};

function getQuestions() {
  var currentQuestion = questions[currentQuestionArray]; //reference the questions-array.js

  var titleEl = document.getElementById("questiontitle");
  titleEl.textContent = currentQuestion.title;


  questionChoices.innerHTML = ""; //delete old choices

  
  currentQuestion.choices.forEach(function(choice, i) {  // create a loop to actually add in the new choices
    //because the old choices are deleted this will add brand new choices into the mix
    var loopChoices = document.createElement("button");
    loopChoices.setAttribute("class", "choice");
    loopChoices.setAttribute("value", choice);

    loopChoices.textContent = i + 1 + ". " + choice;

    
    loopChoices.onclick = onButtonClick; 

    questionChoices.appendChild(loopChoices); // puts the values on the page
  });
};

function onButtonClick() { //what happens when you answer a question
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


startButton.onclick = startQuiz; //this starts the quiz