// Importing functions and variables from game.js
import {
  colorPlayerButton,
  greyPlayerButton,
  bluePlayerButton,
  playersAmount,
  isGameRunning,
  rgba,
  startButton,
  endButton,
  addButton,
  removeButton
} from "./game.js";

// Selecting DOM elements
const startModal = document.querySelector("#startModal");
const secondSpyChoice = document.querySelector("#secondSpyChoice");
const firstSpyChoice = document.querySelector("#firstSpyChoice");

// Function to open the info modal
function openInfoModal() {
  startModal.showModal();
}

// Function to disable a button
function disenableButton(button) {
  button.disabled = true;
  button.classList.add("disabled");
}

// Function to enable a button
function enableButton(button) {
  button.classList.remove("disabled");
  button.disabled = false;
}

// Event listener for the second spy choice radio button
secondSpyChoice.addEventListener("change", () => {
  // Disables start button if second spy choice is checked and playersAmount is less than 4
  if (secondSpyChoice.checked && playersAmount < 4) {
    disenableButton(startButton);
  }
});

// Event listener for the first spy choice radio button
firstSpyChoice.addEventListener("change", () => {
  // Enables start button if it's disabled and playersAmount is less than 4
  if (startButton.disabled == true && playersAmount < 4) {
    enableButton(startButton);
  }
});

// Function to adjust button states based on game running status
function fixButtons() {
  if (isGameRunning) {
    // Disables buttons if game is running
    if (!startButton.disabled) disenableButton(startButton);
    if (!addButton.disabled) disenableButton(addButton);
    if (!removeButton.disabled) disenableButton(removeButton);
    if (endButton.disabled) enableButton(endButton);

    // Changes color of player buttons if specified
    changePlayersButtonColor(true, bluePlayerButton, colorPlayerButton);
  } else {
    // Enables/disables buttons based on player amount
    enableButton(startButton);
    if (playersAmount > 13) disenableButton(addButton);
    else enableButton(addButton);
    if (playersAmount <= 3) disenableButton(removeButton);
    else enableButton(removeButton);
    disenableButton(endButton);

    // Changes color of player buttons if specified
    changePlayersButtonColor(false, greyPlayerButton);
  }
}

// Function to change the color of player buttons
function changePlayersButtonColor(wannaChangeColor, bgColor, color = [255, 255, 255, 0.548]) {
  Array.from(document.styleSheets).forEach((sheet) => {
    try {
      Array.from(sheet.cssRules).forEach((rule) => {
        if (rule.selectorText === ".playerButton") {
          rule.style.backgroundColor = rgba(bgColor);
          if (wannaChangeColor) {
            rule.style.color = rgba(color);
          }
        }
      });
    } catch (e) {
      console.warn("Some rules could not be accessed");
    }
  });
}

// Exporting functions for external use
export { fixButtons, changePlayersButtonColor };
