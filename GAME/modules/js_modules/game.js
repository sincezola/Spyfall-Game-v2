// game.js

import { fixButtons } from "./ui.js"
import { addOrRemoveAPlayer } from "./players.js"
import { locals } from "./locals.js"

let place = "";
let isGameRunning = false;
let playersAmount = 3;

const bluePlayerButton = [9, 202, 209, 0.808];
const greyPlayerButton = [23, 25, 26, 0.781];
const colorPlayerButton = [173, 78, 78, 0.877];

const startButton = document.querySelector("#startButton");
const endButton = document.querySelector("#endButton");
const addButton = document.querySelectorE("#addButton");
const removeButton = document.querySelector("#removeButton");
const startModal = document.querySelector("#startModal");
const playersButtonContainer = document.querySelector("#playersButtonContainer");

fixButtons();

addButton.onclick = function () {
    addOrRemoveAPlayer();
    playersAmount++;
    console.log(`${playersAmount} Players in the game`);
    fixButtons();
};

removeButton.onclick = function () {
    playersAmount--;
    console.log(`${playersAmount} Players in the game`);
    fixButtons();
    addOrRemoveAPlayer(true);
};

startButton.onclick = function () {
    console.log("Game Started");
    isGameRunning = true;
    fixButtons();
};

endButton.onclick = function () {
    console.log("Game Ended");
    isGameRunning = false;
    fixButtons();
};

function rgba(colorArray) {
    return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${colorArray[3]})`;
}

function chooseAPlace() {
    let randomIndexNumber = Math.floor(Math.random() * 50);
    place = locals[randomIndexNumber];
    return place;
}

export { colorPlayerButton, greyPlayerButton, bluePlayerButton, playersAmount, isGameRunning, chooseAPlace, rgba, addButton, removeButton, startButton, endButton };