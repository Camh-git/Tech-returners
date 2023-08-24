const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory
  const player1Img = document.getElementById("player-one-move__img");
  const player2Img = document.getElementById("player-two-move__img");
  player1Img.src = `./images/${moveOne}.png`;
  player2Img.src = `./images/${moveTwo}.png`;
  const container = document.getElementById("play-btn");
  const resultDisplay = document.createElement("h3");
  resultDisplay.style.color = "black";
  resultDisplay.textContent = outcome;
  container.appendChild(resultDisplay);

  //resultOutput.innerHTML = outcome;
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
