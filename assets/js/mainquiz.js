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

function startGame() {
    // set our vars to initial vals
    questionCount = 0;
    score = 0;
    timer = 120;

    // timerInterval func for countdown
    let timerInterval = setInterval(function () {
        timer--;
        timerText.textContent = timer;

        // if conditioning to end game when timer reaches 0
        if (timer <= 0) {
            clearInterval(timerInterval);
            localStorage.setItem('recentScore', score);
            return window.location.assign('./finScreen.html')
        }
    }, 1000);

    // unpack questions array to update our questionsLeft var then getnewquestions
    questionsLeft = [...questions];
    getNewQuestion();
};

// get new question func (this is random every play)

function getNewQuestion() {
    // when there are no questions left score will be stored and user is sent to end screen
    if(questionsLeft.length === 0 || questionCount > maxQuestions) {
        localStorage.setItem('recentScore', score);
        return window.location.assign('./finScreen.html');
    };

    questionCount++;

    // progressBar setup 

    // innerText will set a string that shows that we are on Question "blank" (${} will insert the var in the string) of our maxQuestions var
    progressBar.innerText = `Question ${questionCount} of ${maxQuestions}`;
    // this will gradually increase the progress bar style using questionCount divided by maxQuestions times 100% (sinc we have 4 questions this will go in 25% increments)
    progressBarFull.style.width = `${(questionCount/maxQuestions) * 100}%`;

    // end progressBar setup

    // constant var for getting out random questionIndex (each time you click play the questions will be in random order)
    const questionIndex = Math.floor(Math.random() * questionsLeft.length);
    currentQuestion = questionsLeft[questionIndex];
    question.innerText = currentQuestion.question

    // for each choice we make this function will check which choice and which number in the dataset it was
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    });

    // this will remove whichever question we answered from our array
    questionsLeft.splice(questionIndex, 1);

    goodAns = true;
};

// choices function

choices.forEach(choice => {

});

// increase score function

function increaseScore (num) {

};

// Initialization

startGame();