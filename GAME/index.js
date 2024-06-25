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
var place = "";
var isGameRunning = false;
var playersAmount = 3;

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
const playersButtonContainer = document.querySelector("#playersButtons");

FixButtons(); // Prepare the buttons

addButton.onclick = function () {
  AddOrRemoveAPlayer(); // There is a new player in the game
  playersAmount++;

  console.log(`${playersAmount} Players in the game`);
  FixButtons();
};

removeButton.onclick = function () {
  playersAmount--;
  console.log(`${playersAmount} Players in the game`);

  FixButtons();
  AddOrRemoveAPlayer(true);
};

startButton.onclick = function () {
  console.log("Game Started");

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

function AddOrRemoveAPlayer(remove = false) {
  if (!remove) {
    // Adding a player
    var button = document.createElement("button");

    button.classList.add("playerButton");
    playersButtonContainer.appendChild(button);
    console.log(
      "Botão foi criado com sucesso!"
    );
  } else {
    // Removing a player
    var buttons = playersButtonContainer.getElementsByClassName("playerButton");
    playersButtonContainer.removeChild(buttons[buttons.length - 1]);
    console.log("Último botão foi removido com sucesso!");
  }

  console.log(playersAmount);
  button.textContent = `Jogador ${playersAmount + 1}`;
}

function FixButtons() {
  // All of buttons logic
  if (isGameRunning) {
    if (startButton.disabled == false) DisableButton(startButton);
    if (addButton.disabled == false) DisableButton(addButton);
    if (removeButton.disabled == false) DisableButton(removeButton);
    if (endButton.disabled == true) AbleButton(endButton);
  } else {
    AbleButton(startButton);
    AbleButton(addButton);
    AbleButton(removeButton);
    DisableButton(endButton);
  }

  if (playersAmount > 13) DisableButton(addButton);
  else AbleButton(addButton);
  if (playersAmount <= 3) DisableButton(removeButton);
  else AbleButton(removeButton);

  // Colors Logics -----
  if (isGameRunning) {
    ChangePlayersButtonColor(true, bluePlayerButton, colorPlayerButton);
  } else {
    ChangePlayersButtonColor(false, greyPlayerButton);
  }

  // Players Buttons -----
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
      console.warn("Algumas regras não podem ser acessadas");
    }
  });
}

ChooseAPlace();

console.log(`--------------- The place choosed is '${place}' ---------------`); // Show the place
