let storedScores = JSON.parse(localStorage.getItem("userData"));
let highScoresArea = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");

function displayScores() {
    if(storedScores !== null) {
        let scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (let i = 0; i < storedScores.length; i++){
            let initials = storedScores[i].initial;
            let scores = storedScores[i].userScore;
            let scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
      };
      highScoresArea.appendChild(scoreList);
    };
};

displayScores();

backBtn.addEventListener("click", function(){
    location.href = "index.html";
});

clearBtn.addEventListener("click", function(){
    highScoresArea.innerHTML = "";
    window.localStorage.clear();
});