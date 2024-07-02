// players.js

import { fixButtons } from "./ui.js"
import { playersAmount } from "./game.js"

// DOM Navigation -----
const playersButtonContainer = document.querySelector("#playersButtonContainer");

// Function to add or remove a player
function addOrRemoveAPlayer(remove = false) {
  if (!remove) {
    // Create a new button for a player
    let button = document.createElement("button");
    button.classList.add("playerButton");
    button.textContent = `Jogador ${playersAmount + 1}`;
    playersButtonContainer.appendChild(button);
    console.log("Button created successfully!");
  } else {
    // Remove the last player button
    let buttons = playersButtonContainer.getElementsByClassName("playerButton");
    playersButtonContainer.removeChild(buttons[buttons.length - 1]);
    console.log("Last button removed successfully!");
  }

  // Update the state of the buttons
  fixButtons();
}

// Exporting Functions --------
export { addOrRemoveAPlayer };
