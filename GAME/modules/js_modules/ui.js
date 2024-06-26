// Importing functions and variables from game.js
import {
  returnLocal,
  getRandomLocal,
  colorPlayerButton,
  greyPlayerButton,
  bluePlayerButton,
  playersAmount,
  isGameRunning,
  rgba,
  startButton,
  endButton,
  addButton,
  removeButton,
  basicButtonsLogicsGameRunning,
  basicButtonsLogicGameIsntRunning
} from "./game.js";

// Selecting DOM elements
const closeModalButton = document.querySelector("#closeModalButton");
const secondSpyChoice = document.querySelector("#secondSpyChoice");
const firstSpyChoice = document.querySelector("#firstSpyChoice");
const infoModal = document.querySelector("#infoModal");
const localNameContainer = document.querySelector("#localName")
const playerNameContainer = document.querySelector("#playerName")

// Creating Elements
const localName = document.createElement("p");
const playerName = document.createElement("p");

// Function to open the info modal
function openInfoModal() {
  startModal.showModal();
}

// Function to disable a button
function disableButton(button) {
  if (button) {
    button.disabled = true;
    button.classList.add("disabled");
  }
}

// Function to enable a button
function enableButton(button) {
  if (button) {
    button.classList.remove("disabled");
    button.disabled = false;
  }
}

// Event listener for the second spy choice radio button
secondSpyChoice.addEventListener("change", () => {
  spyChoicesLogic(false);
});

// Event listener for the first spy choice radio button
firstSpyChoice.addEventListener("change", () => {
  spyChoicesLogic(true);
});

function spyChoicesLogic(isFirst) {
  if (isFirst) {
    if (startButton.disabled == true && playersAmount < 4) {   // Enables start button if it's disabled and playersAmount is less than 4
      enableButton(startButton);
    }
  } else {
    if (secondSpyChoice.checked && playersAmount < 4) {   // Disables start button if second spy choice is checked and playersAmount is less than 4
      disableButton(startButton);
    }
  }
}

closeModalButton.onclick = () => {
  infoModal.close();
}

// Function to adjust button states based on game running status
function fixButtons() {
  const playerButton = document.querySelectorAll(".playerButton"); // Dynamically adding buttons to class playerButton

  document.querySelectorAll('.playerButton').forEach(button => { // Filter all the buttons with the class and add and event for them
    button.addEventListener('click', openModal);
  });

  if (isGameRunning) {
    // Change buttons state if game is running
    basicButtonsLogicsGameRunning();
    changePlayersButtonColor(true, bluePlayerButton, colorPlayerButton); // Changes color of player buttons if specified

    playerButton.forEach(button => { // Enable all the players buttons if the game is running
      enableButton(button);
    });
  } else {
    // Change buttons state if game is not running
    basicButtonsLogicGameIsntRunning();
    changePlayersButtonColor(false, greyPlayerButton); // Changes color of player buttons if specified

    playerButton.forEach(button => { // Disable all the players buttons if the game is not running
      disableButton(button);
    });

    // Spies choices logic ------
    spyChoicesLogic(true);
    spyChoicesLogic(false);
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
    } catch (err) {
      console.warn("Some rules could not be accessed");
    }
  });
}

function openModal(event) {
  // Show the mMdal
  infoModal.showModal();
  const pressionedButton = event.target;

  // Disable the pressioned button
  disableButton(pressionedButton);

  // Add the Player Name to Modal
  playerName.textContent = pressionedButton.innerText;
  playerNameContainer.appendChild(playerName)

  // Add the Local to Modal
  localName.textContent = `Local: ${returnLocal()}`;
  localNameContainer.appendChild(localName)

}

// Exporting Functions --------
export { fixButtons, changePlayersButtonColor, disableButton, enableButton };
