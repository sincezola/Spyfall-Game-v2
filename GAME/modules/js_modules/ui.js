// Importing functions and variables from game.js
import {
  spyNumber,
  returnLocal,
  colorPlayerButton,
  greyPlayerButton,
  bluePlayerButton,
  playersAmount,
  isGameRunning,
  rgba,
  startButton,
  basicButtonsLogicsGameRunning,
  basicButtonsLogicGameIsntRunning
} from "./game.js";

// Selecting DOM elements
const closeModalButton = document.querySelector("#closeModalButton"); // Button to close modal
const secondSpyChoice = document.querySelector("#secondSpyChoice"); // Radio button for second spy choice
const firstSpyChoice = document.querySelector("#firstSpyChoice"); // Radio button for first spy choice
const infoModal = document.querySelector("#infoModal"); // Modal element
const localNameContainer = document.querySelector("#localName"); // Container for local name
const spyRevealContainer = document.querySelector("#spyContainer"); // Container for spy reveal message
const playerNameContainer = document.querySelector("#playerName"); // Container for player name

// Creating Elements
const localName = document.createElement("p"); // Paragraph element for local name
const playerName = document.createElement("p"); // Paragraph element for player name

// Elements initially null
let spyReveal = null; // Element to display spy reveal message, initially null
let spyImage = null; // Element to display spy image, initially null

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

// Function to handle spy choices logic
function spyChoicesLogic(isFirst) {
  if (isFirst) {
    if (startButton.disabled == true && playersAmount < 4) { // Enables start button if disabled and players amount is less than 4
      enableButton(startButton);
    }
  } else {
    if (secondSpyChoice.checked && playersAmount < 4) { // Disables start button if second spy choice is checked and players amount is less than 4
      disableButton(startButton);
    }
  }
}

// Event listener for closing the modal
closeModalButton.onclick = () => {
  infoModal.close();
}

// Function to adjust button states based on game running status
function fixButtons() {
  const playerButton = document.querySelectorAll(".playerButton"); // Select all buttons with class playerButton

  playerButton.forEach(button => { // Add click event listener to each player button
    button.addEventListener('click', openModal);
  });

  if (isGameRunning) {
    // Change buttons state if game is running
    basicButtonsLogicsGameRunning(); // Apply specific logic when game is running
    changePlayersButtonColor(true, bluePlayerButton, colorPlayerButton); // Change color of player buttons if specified

    playerButton.forEach(button => {
      enableButton(button); // Enable all player buttons when game is running
    });
  } else {
    // Change buttons state if game is not running
    basicButtonsLogicGameIsntRunning(); // Apply specific logic when game isn't running
    changePlayersButtonColor(false, greyPlayerButton); // Change color of player buttons if specified

    playerButton.forEach(button => {
      disableButton(button); // Disable all player buttons when game isn't running
    });

    // Update spy choices logic
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
          rule.style.backgroundColor = rgba(bgColor); // Change background color of player buttons
          if (wannaChangeColor) {
            rule.style.color = rgba(color); // Change text color if specified
          }
        }
      });
    } catch (err) {
      console.warn("Some rules could not be accessed");
    }
  });
}

// Function to handle opening the modal and displaying player information
function openModal(event) {
  const playerButtonsArray = document.querySelectorAll(".playerButton"); // Select all player buttons
  const pressionedButton = event.target; // Get the button that was pressed

  infoModal.showModal(); // Show the modal

  disableButton(pressionedButton); // Disable the pressed button

  if (pressionedButton === playerButtonsArray[spyNumber - 1]) { // If the pressed button is the spy
    localName.textContent = ""; // Clear local name

    if (!spyReveal) {
      // Spy Message -------
      spyReveal = document.createElement("p");
      spyReveal.textContent = "ESPIÃO";

      // Spy Image -------
      spyImage = document.createElement("img") // Create the spy image

      spyImage.src = "/Spyfall-Game-v2/GAME/bin/spyImage.png"
      spyImage.alt = "Spy Image"; // The image alt message

      // Appending -------
      spyRevealContainer.appendChild(spyReveal); // Display spy reveal message
      spyRevealContainer.appendChild(spyImage); // Display spy 

      spyImage.id = "modalSpyImage";

    } else {
      spyReveal.textContent = "ESPIÃO"; // Update spy reveal message if it already exists
    }
  } else {
    localName.textContent = `Location: ${returnLocal()}`; // Display location if the pressed button is not the spy
    localNameContainer.appendChild(localName);

    if (spyReveal) {
      spyReveal.remove(); // Remove spy reveal message if it exists
      spyReveal = null; // Reset spyReveal to null after removal

      spyImage.remove();
      spyImage = null;
    }
  }

  playerName.textContent = pressionedButton.innerText; // Display player name
  playerNameContainer.appendChild(playerName);
}

// Exporting Functions
export { fixButtons, changePlayersButtonColor, disableButton, enableButton };
