const placesArray = [
  "Hospital",
  "Escola",
  "Universidade",
  "Tribunal",
  "Estação de Metrô",
  "Museu",
  "Biblioteca",
  "Escola Municipal",
  "Delegacia de Polícia",
  "Agência dos Correios",
  "Banco",
  "Santuário",
  "Parque",
  "Aeroporto",
  "Rodoviária",
  "Shopping Center",
  "Clínica",
  "Embaixada",
  "Câmara Municipal",
  "Prefeitura",
  "Tribunal Eleitoral",
  "Teatro",
  "Fundação",
  "Centro Cultural",
  "Supermercado",
  "Estádio",
  "Praça",
  "Instituto",
  "Ministério",
  "Fórum",
  "Receita Federal",
  "Faculdade",
  "Jardim Botânico",
  "Zoológico",
  "Escola Técnica",
  "Senado",
  "Comunidade",
  "INSS",
  "Centro Comercial",
  "Centro de Convenções",
  "Subprefeitura",
  "Associação",
  "Academia de Ginástica",
  "Agência de Turismo",
  "Auditório",
  "Hospital Psiquiátrico",
  "Centro Esportivo",
  "Cineclube",
  "Conservatório de Música",
  "Cooperativa",
]; // The places array

// Normal Variables
let place = "";
let isGameRunning = false;
let playersAmount = 3;

// Constant Variables
const bluePlayerButton = [9, 202, 209, 0.808];
const greyPlayerButton = [23, 25, 26, 0.781];
const colorPlayerButton = [66, 80, 82, 0.973];

// DOM Navigation -----
const startButton = document.querySelector("#startButton");
const endButton = document.querySelector("#endButton");
const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");
const startModal = document.querySelector("#startModal");

addButton.onclick = function () {
  playersAmount++; // There is a new player in the game
  console.log(`${playersAmount} Players in the game`);

  if (playersAmount == 20) {
    DisableButton(addButton);
  }
};

removeButton.onclick = function () {
  if (playersAmount > 3) {
    playersAmount--; // A player have been removed

    console.log(`${playersAmount} Players in the game`);
  }
  if (playersAmount == 3) {
    DisableButton(removeButton);
  }
};

startButton.onclick = function () {
  console.log("Game Started");
  ChangePlayersButtonColor(true, bluePlayerButton, colorPlayerButton);

  isGameRunning = true; // The game started
  FixButtons();
};

endButton.onclick = function () {
  console.log("Game Ended");

  isGameRunning = false;
  FixButtons();
};

// Helper function to convert RGBA arrays to CSS strings
function rgba(colorArray) {
  return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${colorArray[3]})`;
}

function OpenInfoModal() {
  startModal.showModal();
}

function ChooseAPlace() {
  // When called return a Place
  let randomIndexNumber = Math.floor(Math.random() * 50);
  place = placesArray[randomIndexNumber];

  return place;
}

function DisableButton(button) {
  button.disabled = true;
  button.classList.add("disabled");
}

function AbleButton(button) {
  button.classList.remove("disabled");
  button.disabled = false;
}

function FixButtons() {
  // All of buttons logic
  if (isGameRunning && startButton.disabled == false)
    DisableButton(startButton);
  if (isGameRunning && addButton.disabled == false) DisableButton(addButton);
  if (isGameRunning && removeButton.disabled == false)
    DisableButton(removeButton);
  if (!isGameRunning && endButton.disabled == false) DisableButton(endButton);
  else {
    AbleButton(endButton);
  }
}

function ChangePlayersButtonColor( // Change the players button color
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
      console.warn("Cannot access cssRules for stylesheet:", sheet.href, e);
    }
  });
}

ChooseAPlace();

console.log(`The place choosed is '${place}'`); // Show the place
