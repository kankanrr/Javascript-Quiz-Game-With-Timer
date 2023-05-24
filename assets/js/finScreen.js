// query selector vars + localstorage var
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const recentScore = localStorage.getItem('recentScore');

// highscores var to parse our scores in local storage and return them as string
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// var for how many max highscores we can have
const maxHighScores = 5;

// finalscores innertext will be set as our recentScore local storage strings
finalScore.innerText = recentScore;

// on keyup the username button will be re enabled
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
});

// savehighscore function
saveHighScore = e => {
    e.preventDefault();

    // this object array will store user score and inputted name
    const score = {
        score: recentScore,
        name: username.value
    };

    // we then push the highscores into our score obj array
    highScores.push(score);

    // they are then sorted from less recent to most recent
    highScores.sort((a,b) => {
        return b.score - a.score
    });

    // array is then spliced into 5 recent scores
    highScores.splice(5);

    // they are set in the localstorage again for later use
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./');
};