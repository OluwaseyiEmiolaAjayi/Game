//declare game
//get comp input
//get user input
// validate user response
//play 5 rounds
//display results

const opts = ["rock", "paper", "scissors"];
const winners = []

function game() {
    for (let i=0; i<5; i++) {
        playRound()
    }

    displayWinner();
}

function playRound() {
  const playerSelection = playerInput();
  const compSelection = compInput();
  const winner = declareWinner(playerSelection, compSelection);
  winners.push(winner)
}

function playerInput() {
  let input = prompt("Rock Paper Scissors");
  while (input == "") {
    input = prompt("Rock Paper Scissors: Choose your option");
  }
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Rock Paper Scissors: Enter a valid option");
    input = input.toLowerCase();
    check = validateInput(input);
  }
  input = input.toLowerCase();
  return input;
}

function compInput() {
  return opts[Math.floor(Math.random() * opts.length)];
}

function validateInput(opt) {
  return opts.includes(opt);
}

function declareWinner(player, computer) {
    console.log(player, computer)
    if (player === computer) {
        alert ('It\'s a tie')
        return 'Tie'
    } else if ((player === 'rock' && computer == 'scissors') 
    || (player === 'scissors' && computer == 'paper')
    || (player === 'paper' && computer == 'rock')) {
        alert('You Win!')
        return 'Player'
    } else {
        alert('Computer Wins')
        return 'Computer'
    }
}

function displayWinner() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let compWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;

    let finalResult = ('Your Wins: '+ playerWins) + ' ' + ('\nComputer Wins: '+ compWins) + ' ' + ('\nTies: ' + ties);
    alert (finalResult)
}

game();
