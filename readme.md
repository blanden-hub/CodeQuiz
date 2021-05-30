Questions

What does CSS stand for?

creative style sheets
computer style sheets
cascading style sheets
colorful style sheets

What is the correct HTML for referring to an external style sheet?

<stylesheet>style.css</stylesheet>
<link rel="stylesheet" href=style.css>
<style src="style.css">
<linkstyle rel="style.css">

Where in an HTML document is the correct place to refer to an external style sheet?

in the <head> section
in the <body> section
in the <div> section
in the <footer> section

Which HTML tag is used to define an internal style sheet?

<style>
<css>
<script>
<html>

What is the practice of writing phrases without spaces or punctuation called?

Camel Casing
Under Casing
Dash Casing
Smalltalk Casing



# Code Quiz

## Introduction

> M week 4 Challenge was to make a code quiz from scratch with the criteria of GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## Code Samples

> var questionAnswers = [{
        question: "What does CSS stand for?",
        answers: ["creative style sheets",
            "computer style sheets",
            "cascading style sheets",
            "colorful style sheets",
        ],
        correctAnswer: "cascading style sheets"



function nextQuestion() {
    currentQuestion = questionAnswers[index];
    question.textContent = currentQuestion.question;
    option1.textContent = currentQuestion.answers[0];

## Installation

> the Code Quiz is viewable at https://blanden-hub.github.io/CodeQuiz.github.io/