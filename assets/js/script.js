//what question are we on right now?
var questionArray = 0; //starts at 0
var time = questions.length * 15; // 15 seconds per question = 75 seconds total, and the penalty will also be 15 seconds so this might come in handy
var timerContainer; //this will run the countdown, like a container in html 




//first lets add some variables and reference them to the html dom elements

var startButton = document.getElementById("start"); //start button variable
var questionsEl = document.getElementById("questions"); //references the different questions with the choices
var questionChoices = document.getElementById("choices"); //references the different choices, choices will act like submit button as well
var resultsEl = document.getElementById("results"); //Correct! or Wrong! to be displayed on following page with new question
var initialsEl = document.getElementById("initials"); //asks for initials one the last page
var finalResults = document.getElementById("finalresults"); //asks for initials one the last page
var submitButton = document.getElementById("submit"); //submit button variable
var timerEl = document.getElementById("time"); //for the countdown timer in the header


function startQuiz() { //what happens when you press the start quiz button
  var startScreenEl = document.getElementById("start-screen"); //select the first page html
  startScreenEl.setAttribute("class", "hide"); // references the css stylesheet, display: none .....so this hides the initial page

  questionsEl.removeAttribute("class"); // this will display the questions
 
  timerContainer = setInterval(updatedTime, 1000); //have timer countdown at start of quiz  https://www.w3schools.com/js/js_timing.asp

  timerEl.textContent = time;  //countdown timer is set at 75seconds to begin with

  getQuestion();  //transitional function to next function
}

function getQuestion() {
  var currentQuestion = questions[questionArray]; //reference the questions-array.js

  var titleEl = document.getElementById("questiontitle");
  titleEl.textContent = currentQuestion.title;


  questionChoices.innerHTML = ""; //delete old choices

  
  currentQuestion.choices.forEach(function(choice, i) {  // create a loop to actually add in the new choices https://stackoverflow.com/questions/56024232/use-the-foreach-function-to-add-option-elements-to-select-html-element    
    //because the old choices are deleted this will add brand new choices into the mix // uofu repo /04-Web-APIs/02-Challenge/
    var loopChoices = document.createElement("button");
    loopChoices.setAttribute("class", "choice");
    loopChoices.setAttribute("value", choice);

    loopChoices.textContent = i + 1 + ". " + choice;   //https://www.youtube.com/watch?v=49pYIMygIcU  its like 40 minutes long and they didn't section it out but its full of good information

    
    loopChoices.onclick = onButtonClick; 

    questionChoices.appendChild(loopChoices); // puts the values on the page
  });
}

function onButtonClick() {

  if (this.value == questions[questionArray].answer) {

    resultsEl.textContent = "Correct!";

    
  } else {

    time -= 15; //issue 15 second penalty
    if (time < 0) { 
      time = 0;  //this is so that we don't have negative numbers
    }

    timerEl.textContent = time; //updates time on page

    resultsEl.textContent = "Wrong!"; // alerts them that they are wrong on the page though, not an alert pop-up
  }

  resultsEl.setAttribute("class", "results");
  setTimeout(function() {
    resultsEl.setAttribute("class", "hideresults");
  }, 3500); // displaying correct or wrong for 3.5 seconds

  questionArray++; // this moves the question along!!!!!!

  if (questionArray === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz() {  //borrow code from the start quiz section

  clearInterval(timerContainer);

  var finalResults = document.getElementById("finalresults");
  finalResults.removeAttribute("class"); // this will display the final results
  
  questionsEl.setAttribute("class", "hide");   //hide questions
  

  var scoreEl = document.getElementById("score");   //display final score
  scoreEl.textContent = time;
  
}

function updatedTime() {
  //this function is for what goes on in the timer, this updated time acts as a container
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}


startButton.onclick = startQuiz; //this starts the quiz
