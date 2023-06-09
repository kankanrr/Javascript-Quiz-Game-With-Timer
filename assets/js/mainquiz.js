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
        question: 'What is Javascript ?',
        choice1: 'A programming language',
        choice2: 'A movie script',
        choice3: 'A Hard Drive',
        choice4: 'Software',
        answer: 1
    },
    {
        question: 'Which of the following is an example of an array ?',
        choice1: 'var items = ();',
        choice2: 'let items = {};',
        choice3: 'const items;',
        choice4: 'var items = [];',
        answer: 4
    },
    {
        question: 'What is the correct way to write a function ?',
        choice1: 'function ();',
        choice2: 'function doSomething() {};',
        choice3: 'function = ();',
        choice4: 'function doSomething [] {};',
        answer: 2
    },
    {
        question: 'What is a var ?',
        choice1: 'A Variance',
        choice2: 'An Attribute',
        choice3: 'A Variable',
        choice4: 'An Element',
        answer: 3
    },
]

// const vars for how many q's and score per q

const scorePoints = 100;
const maxQuestions = 4;

// start game func

function startGame() {
    // set our vars to initial vals
    questionCount = 0;
    score = 0;
    timer = 120;

    // timerInterval func for countdown
    var timerInterval = setInterval(function () {
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
    // e is short for event | => is a shorter way to create a func
    choice.addEventListener('click', e => {
        // if goodAns === false then return and player gets 0 points
        if (!goodAns) return

        goodAns = false;
        const slctChoice = e.target;
        const slctAnswer = slctChoice.dataset['number'];

        // based on if the user selected answer is correct or incorrect this will decide
        var classApply = slctAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // if the class applied is correct the score will increase by our set var of 100 pts
        if(classApply === 'correct') {
            increaseScore(scorePoints);
        } else if (classApply === 'incorrect') {
            timer = timer - 10;
        }

        // this will add 'correct' or 'incorrect' class to our selected choice var which will decide if user ans is right or wrong
        slctChoice.parentElement.classList.add(classApply);

        // this sill set a short 1 sec timeout that will remove the 'correct' or 'incorrect' class and then it will get a new question to continue the quiz
        setTimeout(() => {
            slctChoice.parentElement.classList.remove(classApply);
            getNewQuestion();
        }, 1000);
    });
});

// increase score function

function increaseScore (num) {
    score += num;
    scoreText.innerText = score;
};

// Initialization

startGame();