function playGame(playerChoice) {
    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultDisplay = document.getElementById('result');
    
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a draw!';
    } else if (
        (playerChoice === 'stone' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'stone') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`;
    } else {
        result = `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}`;
    }

    resultDisplay.textContent = result;
    resultDisplay.style.animation = 'popUp 0.5s ease forwards';
}

document.styleSheets[0].insertRule(`
    @keyframes popUp {
        0% { transform: scale(0.5); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }
`);
