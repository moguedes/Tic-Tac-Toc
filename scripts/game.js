let board = ["", "", "", "", "", "", "", "", ""];
// Creates an array called board that receives 9 empty spots. It represents the stage and its squares.
let playerName1 = "";
// Attributes to the variable "playerName1" an empty string.
let playerName2 = "";
// Attributes to the variable "playerName2" an empty string.
let playerNameInput1 = document.getElementById("player-name-input1");
// Attributes to the variable "playerNameInput1" the input "player-name-input1".
let playerNameInput2 = document.getElementById("player-name-input2");
// Attributes to the variable "playerNameInput2" the input "player-name-input2".
let playerTimeIcon1 = document.getElementById("player-time-icon1");
// Attributes to the variable "playerTimeIcon1" the input "player-time-icon1".
let playerTimeIcon2 = document.getElementById("player-time-icon2");
// Attributes to the variable "playerTimeIcon2" the input "player-time-icon2".
let player1 = document.getElementById("player1");
// Attributes to the variable "player1" the span "player1".
let player2 = document.getElementById("player2");
// Attributes to the variable "player2" the span "player2".
let playerTime = 0;
// Attributes zero to the variable playerTime.
let gameOver = false;
// Attributes, as default, to the variable "gameOver" the boolean value "false".
let symbols = ["./images/Golden-Circle.png", "./images/Golden-Sword.png"];
// Attributes to the array "symbols" two images (O, X) that gonna fulfil the stage squares when pressed by the players.
let gameActualPlayers = document.getElementById("game-actual-players");
// Attributes to the variable "gameActualPlayers" the div "game-actual-players" (paragraphs, spans and icons).
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// Attributes to the array "winStates" 8 arrays that represents all the possible sequences of squares that results in one of the players' victory.
function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = winner();

    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;

      playerTimeFunction();
    }
  }
  return gameOver;
}

function winner() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}

function checkWinner() {
  if (playerTime === 0) {
    return playerName1;
  }
  if (playerTime === 1) {
    return playerName2;
  }
}

function playerTimeFunction() {
  if (playerTime === 0) {
    playerTimeIcon2.classList.remove("fa-solid", "fa-arrow-left");
    playerTimeIcon1.classList.add("fa-solid", "fa-arrow-left");
  }
  if (playerTime === 1) {
    playerTimeIcon1.classList.remove("fa-solid", "fa-arrow-left");
    playerTimeIcon2.classList.add("fa-solid", "fa-arrow-left");
  }
}
