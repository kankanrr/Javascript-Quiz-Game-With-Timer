// query selector constant vars
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressBar = document.querySelector('#progressBarText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const timerText = document.querySelector('#timer');

// placeholder vars

var currentQuestion = [];
var goodAns = true;
var score = 0;
var questionCount = 0;
var questionsLeft = [];
var timer = 0;

// questions array

var questions = [
    {
        question: 'What is 1+1 ?',
        choice1: '2',
        choice2: '10',
        choice3: 'two',
        choice4: '21',
        answer: 1
    },
    {
        question: 'What is the Captiol of the USA ?',
        choice1: 'Nebraska',
        choice2: 'Los Angeles',
        choice3: 'Orange',
        choice4: 'Washington D.C.',
        answer: 4
    },
    {
        question: 'What is Kamen Rider ?',
        choice1: 'A Movie',
        choice2: 'A TV Show',
        choice3: 'A Short Film',
        choice4: 'Some Super Hero',
        answer: 2
    },
    {
        question: 'What is Kingdom Hearts ?',
        choice1: 'A Platformer Game',
        choice2: 'A Show',
        choice3: 'A Disney Licensed RPG',
        choice4: 'A Book',
        answer: 3
    },
];

// const vars for how many q's and score per q

const scorePoints = 100;
const maxQuestion = 4;

// start game func

function startGame() {};

// get new question func (this is random every play)

function getNewQuestion() {};

// choices function

choices.forEach(choice => {

});

// increase score function

function increaseScore (num) {

};

// Initialization

startGame();