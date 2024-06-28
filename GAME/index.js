/* prettier-ignore-start */
import locals from "./modules/locals.json" with { type: "json" };

console.log(locals);

// Normal Variables
let place = "";
let isGameRunning = false;
let playersAmount = 3;

// Constant Variables
const bluePlayerButton = [9, 202, 209, 0.808];
const greyPlayerButton = [23, 25, 26, 0.781];
const colorPlayerButton = [173, 78, 78, 0.877];

// DOM Navigation -----
const startButton = document.querySelector("#startButton");
const endButton = document.querySelector("#endButton");
const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");
const startModal = document.querySelector("#startModal");
const playersButtonContainer = document.querySelector(
  "#playersButtonContainer"
);

fixButtons(); // Prepare the buttons

addButton.onclick = function () {
  addOrRemoveAPlayer(); // There is a new player in the game
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

  isGameRunning = true; // The game started
  fixButtons();
};

endButton.onclick = function () {
  console.log("Game Ended");

  isGameRunning = false;
  fixButtons();
};

// Helper function to convert RGBA arrays to CSS strings
function rgba(colorArray) {
  return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${colorArray[3]})`;
}

function openInfoModal() {
  startModal.showModal();
}

function chooseAPlace() {
  // When called return a Place
  let randomIndexNumber = Math.floor(Math.random() * 50);
  place = locals[randomIndexNumber];

  return place;
}

function disableButton(button) {
  button.disabled = true;
  button.classList.add("disabled");
}

function ableButton(button) {
  button.classList.remove("disabled");
  button.disabled = false;
}

function addOrRemoveAPlayer(remove = false) {
  if (!remove) {
    // Adding a player
    let button = document.createElement("button");

    button.classList.add("playerButton");
    button.textContent = `Jogador ${playersAmount + 1}`;
    playersButtonContainer.appendChild(button);
    console.log("Botão foi criado com sucesso!");
  } else {
    // Removing a player
    let buttons = playersButtonContainer.getElementsByClassName("playerButton");
    playersButtonContainer.removeChild(buttons[buttons.length - 1]);
    console.log("Último botão foi removido com sucesso!");
  }
}
function fixButtons() {
  // All of buttons logic
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

    // Colors Logics -----
    if (isGameRunning) {
      changePlayersButtonColor(true, bluePlayerButton, colorPlayerButton);
    } else {
      changePlayersButtonColor(false, greyPlayerButton);
    }

    // Players Buttons -----
}

function changePlayersButtonColor( // Change the players button color
  wannaChangeColor,
  bgColor,
  color = [255, 255, 255, 0.548]
) {
  // Convert document.styleSheets to an array
  Array.from(document.styleSheets).forEach((sheet) => {
    try {
      // Convert sheet.cssRules to an array
      Array.from(sheet.cssRules).forEach((rule) => {
        // Check if the rule matches the .playerButton class
        if (rule.selectorText === ".playerButton") {
          // Change the desired property
          rule.style.backgroundColor = rgba(bgColor);

          if (wannaChangeColor) {
            rule.style.color = rgba(color);
          }
        }
      });
    } catch (e) {
      console.warn("Algumas regras não podem ser acessadas");
    }
  });
}

chooseAPlace();

console.log(`-------- The place choosed is '${place}' --------`); // Show the place
