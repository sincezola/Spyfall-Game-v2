// ui.js

import { colorPlayerButton, greyPlayerButton, bluePlayerButton, playersAmount, isGameRunning, rgba, startButton, endButton, addButton, removeButton } from "./game.js"

const startModal = document.querySelector("#startModal");

function openInfoModal() {
  startModal.showModal();
}

function disableButton(button) {
  button.disabled = true;
  button.classList.add("disabled");
}

function ableButton(button) {
  button.classList.remove("disabled");
  button.disabled = false;
}

function fixButtons() {
  if (isGameRunning) {
    if (!startButton.disabled) disableButton(startButton);
    if (!addButton.disabled) disableButton(addButton);
    if (!removeButton.disabled) disableButton(removeButton);
    if (endButton.disabled) ableButton(endButton);
  } else {
    ableButton(startButton);
    if (playersAmount > 13) disableButton(addButton);
    else ableButton(addButton);
    if (playersAmount <= 3) disableButton(removeButton);
    else ableButton(removeButton);
    disableButton(endButton);
  }

  if (isGameRunning) {
    changePlayersButtonColor(true, bluePlayerButton, colorPlayerButton);
  } else {
    changePlayersButtonColor(false, greyPlayerButton);
  }
}

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

export { fixButtons, changePlayersButtonColor };
