let scores, activePlayer, roundScore, gamePlaying, previousDice;

initGame();

document.querySelector('.btn-roll').addEventListener('click', (event) => {
    if (gamePlaying) {
        document.querySelector('.dice').style.display = 'block';
        const dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').setAttribute('src', `./images/dice-${dice}.png`);

        console.log(dice, previousDice)
        if (dice !== 1) {
            if (previousDice == 6 && dice == 6) {
                nextPlayer();
            } else {
                roundScore += dice;
                document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
                previousDice = dice;
            }
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', (event) => {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', initGame);




