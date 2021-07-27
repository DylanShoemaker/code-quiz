function printHighScores () {
  var scores = JSON.parse(window.localStorage.getItem("highScores")) || []; //borrow code from showHighScores// this is where we get the info from the localStorage

  var sortedScores = scores.sort(function(a,b){return b.score - a.score}); //https://www.developerdrive.com/html5-javascript-gem-game-with-saved-scoreboard/ and https://www.sitepoint.com/community/t/sorting-an-array-of-scores/70694/6 for the return
  
  sortedScores.forEach(function(score) { 
    var item = document.createElement("li"); //you need to create a list of items so lets create li tags

    item.textContent = score.initials + " - " + score.score;

    
    // display on page
    var list = document.getElementById("highScores"); // https://stackoverflow.com/questions/40613789/localstorage-and-adding-li-to-list
    console.dir(list.children.length);
    list.appendChild(item); 
  });
}

function byeBye() {  //clear local storage //https://www.w3schools.com/jsref/met_storage_clear.asp
  window.localStorage.clear();
  window.location.reload(); // refreshes page with no list!
}

document.getElementById("clear").onclick = byeBye; //this links the Clear Highscores Button


printHighScores(); //this will start the function immediately 
