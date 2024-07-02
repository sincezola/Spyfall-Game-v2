// game.js

import { fixButtons, enableButton, disableButton } from "./ui.js"
import { addOrRemoveAPlayer } from "./players.js"
import { locals } from "./locals.js"

// Game state variables
let place = ""; // Current place in the game
let isGameRunning = false; // Flag to check if the game is running
let playersAmount = 3; // Initial number of players

// Select a random item from the locals object
function getRandomLocal() {
    const keys = Object.keys(locals); // Get the keys of the locals object
    const randomKey = keys[Math.floor(Math.random() * keys.length)]; // Select a random key
    return locals[randomKey]; // Return the value corresponding to the random key
  }
  
let local = getRandomLocal(); // Get a random local

function returnLocal() {
    return local
}

// Player button colors
const bluePlayerButton = [9, 202, 209, 0.808];
const greyPlayerButton = [23, 25, 26, 0.781];
const colorPlayerButton = [173, 78, 78, 0.877];

// Button elements
const startButton = document.querySelector("#startButton");
const endButton = document.querySelector("#endButton");
const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");

// Initialize button states
fixButtons();

// Add player button click event
addButton.onclick = function () {
    addOrRemoveAPlayer();
    playersAmount++;
    console.log(`${playersAmount} Players in the game`);
    fixButtons();
};

// Remove player button click event
removeButton.onclick = function () {
    playersAmount--;
    console.log(`${playersAmount} Players in the game`);
    fixButtons();
    addOrRemoveAPlayer(true);
};

// Start game button click event
startButton.onclick = function () {
    console.log("Game Started");
    isGameRunning = true;
    fixButtons();
};

// End game button click event
endButton.onclick = function () {
    console.log("Game Ended");
    isGameRunning = false;
    fixButtons();

    // Re-roll the local
    local = getRandomLocal();
};

// Function to convert color array to rgba string
function rgba(colorArray) {
    return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${colorArray[3]})`;
}

// Function to choose a random place
function chooseAPlace() {
    let randomIndexNumber = Math.floor(Math.random() * 50);
    place = locals[randomIndexNumber];
    return place;
}

// UI Functions ------------------
function basicButtonsLogicsGameRunning() { 
    // Disable/enable buttons based on game state
    if (!startButton.disabled) disableButton(startButton);
    if (!addButton.disabled) disableButton(addButton);
    if (!removeButton.disabled) disableButton(removeButton);
    if (endButton.disabled) enableButton(endButton);
}
  
function basicButtonsLogicGameIsntRunning() {
    // Disable/enable buttons based on game state
    enableButton(startButton);
    if (playersAmount > 13) disableButton(addButton);
    else enableButton(addButton);
    if (playersAmount <= 3) disableButton(removeButton);
    else enableButton(removeButton);
    disableButton(endButton);
}

// Exporting Functions --------
export { getRandomLocal, basicButtonsLogicsGameRunning, basicButtonsLogicGameIsntRunning, colorPlayerButton, greyPlayerButton, bluePlayerButton, playersAmount, isGameRunning, chooseAPlace, rgba, addButton, removeButton, startButton, endButton, returnLocal };
