//first lets add some variables and reference them to the html dom elements
var countDown = document.getElementById("countdown"); //for the countdown timer in the header

var startButton = document.getElementById("start"); //start button variable


var questionsEl = document.getElementById("questions"); //references the different questions with the choices
var questionTitle = document.getElementById("title"); //references the different questions
var choicesEl = document.getElementById("choices"); //references the different choices, choices will act like submit button as well

var resultsEl = document.getElementById("results"); //Correct! or Wrong! to be displayed on following page with new question

var initialsEl = document.getElementById("initials"); //asks for initials one the last page
var submitButton = document.getElementById("submit"); //submit button variable