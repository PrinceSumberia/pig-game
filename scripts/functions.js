const initGame = () => {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.querySelector(`#score-0`).textContent = '0';
    document.querySelector(`#score-1`).textContent = '0';

    document.querySelector(`#current-0`).textContent = '0';
    document.querySelector(`#current-1`).textContent = '0';

    document.querySelector(`#name-0`).textContent = 'Player 1';
    document.querySelector(`#name-1`).textContent = 'Player 2';

    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');

    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');

    document.querySelector(`.player-0-panel`).classList.add('active');
};

const nextPlayer = () => {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    previousDice = 0;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
};