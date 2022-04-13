let squares = document.querySelectorAll(".square");
// Attributes to the variable "squares" all stage squares.
let infoPlayers = document.getElementById("info-players");
// Attributes to the variable "infoPlayers" all the elements inside the div "info-players" (name inputs, error message and "save start button").
let errorMsg = document.getElementById("error-msg");
// Attributes to the variable "errorMsg" the paragraph "error-message".
let body = document.querySelector("body");
// Attributes to the variable "body" the whole body of the HTML document.
let gameContainer = document.getElementById("game-container");
// Attributes to the variable "gameContainer" the div "game-container" (it includes the whole game content and the header).
let gameWinner = document.getElementById("result");
// Attributes to the variable "gameWinner" the div "result".
let infoSavedState = false;
// Checks if the players have pressed "save and start" button. It receives as default the boolean value "false".

onload = function () {
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
};
// After the whole page has been loaded add the event "click" (that starts the function handleClick) to each of the stage squares.

function handleClick(event) {
// Receives as parameter the whole "click" event mentioned in the  function above.
  if (infoSavedState == false) {
    return;
  }
  // Checks if the variable "infoSavedState" value is false (means that players haven't pressed "save and start" button yet) and if it's so kills the program.
  if (infoSavedState == true) {
  // Checks if the variable "infoSavedState" value is true (means that players pressed "save and start" button). 
    let square = event.target;
    // Creates the variable square and attributes to it the target of the event "click" mentioned in the "onload" function above.
    let position = square.id;
    // Creates the variable position and attributes to it the id of the element attributed to the variable "square" (the id of the HTML element clicked).

    if (handleMove(position)) {
    // Checks if the function handleMove (game.js), when receiving the current value of the variable position as its parameter, returns the boolean value "true" as the value of the variable gameOver. 
      setTimeout(() => {
        gameContainer.style.filter = "blur(5px)";
        gameWinner.style.display = "flex";
        gameWinner.innerHTML = `<p>Game Over! - The winner is ${checkWinner()}!</p>
                                <button onclick="hideWinner()">Back</button>`;
      }, 10);
    }
    // After 10 milliseconds, the method setTimeout is gonna execute an arrow function that's gonna add a 5px blur to the div "game-container", change the display of the div "result" and also add to it a paragraph that congratulates the winner.
    updateSquare(position);
    // Execute the function updateSquare that receives as its parameter the variable "position".
  }
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<img src="${symbol}"></img>`;
}

function resetMatch() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  playerTimeIcon2.classList.remove("fa-solid", "fa-arrow-left");
  playerTimeIcon1.classList.remove("fa-solid", "fa-arrow-left");


  squares.forEach((square) => {
    square.innerHTML = "";
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];

  playerName1 = "";
  playerName2 = "";
  playerTime = 0;
  gameOver = false;

  playerNameInput1.value = "";
  playerNameInput2.value = "";

  player1.innerHTML = "";
  player2.innerHTML = "";

  playerTimeIcon1.classList.remove("fa-solid", "fa-arrow-left");
  playerTimeIcon2.classList.remove("fa-solid", "fa-arrow-left");
  infoSavedState = false

  squares.forEach((square) => {
    square.innerHTML = "";
  });
}

function sendPlayersInfo() {
  if (playerNameInput1.value == "" || playerNameInput2.value == "") {
    errorMsg.classList.add("empty-value");

    return (infoSavedState = false);
  }

  if (playerNameInput1.value != "" || playerNameInput2.value != "") {
    playerName1 = playerNameInput1.value;
    playerName2 = playerNameInput2.value;

    player1.innerHTML = playerName1;
    player2.innerHTML = playerName2;

    errorMsg.classList.remove("empty-value");

    playerTimeFunction();

    return (infoSavedState = true);
  }
}

function hideWinner() {
  gameContainer.style.filter = "none";
  gameWinner.style.display = "none";
}
