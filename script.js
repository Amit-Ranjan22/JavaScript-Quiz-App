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