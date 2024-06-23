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

let place = "";
let isGameRunning = false;
let playersAmount = 3;

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

  isGameRunning = true; // The game started
};

endButton.onclick = function () {
  if (isGameRunning == false) {
    error("O jogo não está em andamento");
  } else {
    console.log("Game Ended");

    isGameRunning = false; // The game stopped
  }
};

function OpenStartModal() {
  startModal.showModal();
}

function ChooseAPlace() {
  // When called return a Place
  let randomIndexNumber = Math.floor(Math.random() * 50);
  place = placesArray[randomIndexNumber];

  return place;
}

function error(errorMsg) {
  console.error(errorMsg);
}

function DisableButton(button) {
  button.disabled = true;
  button.classList.add("disabled");
}

function AbleButton(button) {
    button.disabled = true;
    button.classList.remove("disabled");
}

ChooseAPlace();

console.log(`The place choosed is '${place}'`); // Show the place
