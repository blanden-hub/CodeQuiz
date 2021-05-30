const question = document.querySelector("#question");
const option1 = document.querySelector("#btn1");
const option2 = document.querySelector("#btn2");
const option3 = document.querySelector("#btn3");
const option4 = document.querySelector("#btn4");
const time = document.querySelector("#timer");
const saveScore = document.querySelector("#submit-button");

var secondsLeft = 60;
var timer

var questionAnswers = [{
        question: "What does CSS stand for?",
        answers: ["creative style sheets",
            "computer style sheets",
            "cascading style sheets",
            "colorful style sheets",
        ],
        correctAnswer: "cascading style sheets"
    },

    {
        question: "What is the correct HTML for referring to an external style sheet?",
        answers: ["<stylesheet>style.css</stylesheet>",
            "<link rel='stylesheet' href=style.css>",
            "<style src='style.css'>",
            "<linkstyle rel='style.css'>",
        ],
        correctAnswer: "<link rel='stylesheet' href=style.css>",
    },

    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: ["in the <head> section",
            "in the <body> section",
            "in the <div> section",
            "in the <footer> section",
        ],
        correctAnswer: "in the <head> section",
    },

    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: ["<html>",
            "<css>",
            "<script>",
            "<style>",
        ],
        correctAnswer: "<style>"
    },

    {
        question: "What is the practice of writing phrases without spaces or punctuation called?",
        answers: ["Camel Casing",
            "Under Casing",
            "Dash Casing",
            "Smalltalk Casing",
        ],
        correctAnswer: "Camel Casing"
    },
];


var index = 0;
var currentQuestion = questionAnswers[0];

function nextQuestion() {
    currentQuestion = questionAnswers[index];
    question.textContent = currentQuestion.question;
    option1.textContent = currentQuestion.answers[0];
    option2.textContent = currentQuestion.answers[1];
    option3.textContent = currentQuestion.answers[2];
    option4.textContent = currentQuestion.answers[3];
}

option1.addEventListener("click", function (event) {
    event.preventDefault();
    if (option1.textContent === currentQuestion.correctAnswer) {
        alert("correct answer!");
    } else {
        alert("Epic Fail! 🤦🏻");
        secondsLeft -= 15;
    }
    index++
    if (index === questionAnswers.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

option2.addEventListener("click", function (event) {
    event.preventDefault();
    if (option2.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("Epic Fail! 🤦🏻");
        secondsLeft -= 15;
    }
    index++
    if (index === questionAnswers.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

option3.addEventListener("click", function (event) {
    event.preventDefault();
    if (option3.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("Epic Fail! 🤦🏻");
        secondsLeft -= 15;
    }
    index++
    if (index === questionAnswers.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

option4.addEventListener("click", function (event) {
    event.preventDefault();
    if (option4.textContent === currentQuestion.correctAnswer) {
        alert("correct answer");
    } else {
        alert("Epic Fail! 🤦🏻");
        secondsLeft -= 15;
    }
    index++
    if (index === questionAnswers.length) {
        quizEnd();
    } else {
        nextQuestion();
    }
});

function quizStart() {
    timer = setInterval(function () {
        secondsLeft--;
        time.textContent = "time left: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timer);
            quizEnd();
        }
    }, 1000);

    question.removeAttribute("class");
    nextQuestion();
}

quizStart()

function quizEnd() {
    clearInterval(timer);
    let finalScore = document.querySelector("#final-score");
    let highScores = document.querySelector("#highscores-div");
    highScores.style.display = "block";
    finalScore.textContent = "Your Score: " + secondsLeft;
}

function initialsSave() {
    const initials = document.querySelector("#initials");
    let initializer = initials.value.trim();
    if (initializer !== "") {
        let highScores = JSON.parse(window.localStorage.getItem("high-scores") || "[]");

        let newScore = {
            score: secondsLeft,
            initials: initializer,
        }

        highScores.push(newScore);
        window.localStorage.setItem("high-scores", JSON.stringify(highScores));
    }
}
saveScore.onclick = initialsSave;