// players.js

import { fixButtons } from "./ui.js";
import { playersAmount } from "./game.js";

const playersButtonContainer = document.querySelector("#playersButtonContainer");

function addOrRemoveAPlayer(remove = false) {
  if (!remove) {
    let button = document.createElement("button");
    button.classList.add("playerButton");
    button.textContent = `Player ${playersAmount + 1}`;
    playersButtonContainer.appendChild(button);
    console.log("Button created successfully!");
  } else {
    let buttons = playersButtonContainer.getElementsByClassName("playerButton");
    playersButtonContainer.removeChild(buttons[buttons.length - 1]);
    console.log("Last button removed successfully!");
  }

  fixButtons();
}

export { addOrRemoveAPlayer };
