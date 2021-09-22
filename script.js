let quizQuestions = document.getElementById("quiz-questions");
let timer = document.getElementById("timer");
let startQuizBtn = document.getElementById("startQuiz-btn");
let timeCounter = document.getElementById("timecounter");
let questionCollection = document.getElementById("questions-collection");
let nextQuestions;
let answerChoices = document.getElementById("answer-choices");
let userScore = document.getElementById("score");
let submitScoreBtn = document.getElementById("submitScoreBtn");
let currentIndex = 0;
let score = 0;
let counter = 75;
var alert = document.getElementById("alert");
let quizInfo = document.getElementById("quizInfo");
let quizinfo = document.getElementsByClassName("quizinfoDispNone");
let allScores = [];
let storedScores = JSON.parse(localStorage.getItem("userData"));
let hideMe = document.getElementById("HIDE");
let inputScore = document.getElementById("inputScore");

let questions = [
    {
        questn: "Commonly used data type Do Not include:---",
        options: ["strings", "booleance", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        questn: "The condition in an if/else statement is enclosed within:---",
        options: ["quotes", "Curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses"
    },
    {
        questn: "Arrays in JavaScript can be used to store:---",
        options: ["numbers and strings", "others Arrays", "booleances", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        questn: "String values must be enclosed within --- when being assigned to variables ",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes"
    },
    {
        questn: "A very useful tool used during development and debugging for printing content to the debugger is:---",
        options: ["JavaScript", "terminal/bash", "alerts", "console.log"],
        correctAnswer: "console.log"
    },
]

startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    if (storedScores !== null) {
        allScores = storedScores;
    }
    // quizInfo.classList.add("quizinfo")
    quizInfo.setAttribute("style", "display: none ");
    timeCounter.classList.remove("TimerDisplayNone");
    // startQuizBtn.classList.add("startBtn")
    startQuizBtn.setAttribute("style", "display: none");
    quizQuestions.classList.remove("questionsCollctn");

    nextQuestions = questions[currentIndex];
    displayQuestion(nextQuestions)
    gametime()
};

submitScoreBtn.addEventListener("click", function () {
    let name = inputScore.value;
    scorePage(name, counter);
});

function gametime() {
    let timeinterval = setInterval(function () {
        timer.innerText = counter;
        counter--;
    }, 1000);
};

function scorePage(alpha1, num1) {
    let userData = {
        initial: alpha1,
        userScore: num1
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score1-1.html";
};

function displayQuestion(question) {
    questionCollection.innerText = question.questn;
    question.options.forEach(function (element) {
        let button = document.createElement("button");
        button.setAttribute("style", "background-color: orange");
        button.innerText = element;
        answerChoices.appendChild(button);
        button.addEventListener("click", displayNextQuestion);
    });
};

function displayNextQuestion(event) {
    currentIndex++;
    if (currentIndex < questions.length) {
        popup(event.target.innerText == nextQuestions.correctAnswer)
        answerChoices.innerHTML = "";
        if (currentIndex < questions.length) {
            nextQuestions = questions[currentIndex];
            displayQuestion(nextQuestions);
        } else {
            currentIndex = 0;
            displayQuestion(nextQuestions);
        }
    } else {
        endGame();
    };
};

function popup(popupResponse){
    if(popupResponse){
        alert.innerText = "Correct";
    } else {
        alert.innerText = "Wrong";
        counter -= 15;
        timer.innerHTML = counter;
    };
};

setTimeout(function () {
  alert.innerText = "";
}, 1000);

function endGame() {
  userScore.innerText = counter;
  timeCounter.classList.add("TimerDisplayNone");
  quizQuestions.classList.add("questionsCollctn");
};
