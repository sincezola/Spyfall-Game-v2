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

addButton.onclick = function () {
  if (isGameRunning == false) {
    if (playersAmount < 20) {
      playersAmount++; // There is a new player in the game

      console.log(`${playersAmount} Players in the game`);
    } else {
      error(
        "The player tried to add more than 20 players, throwing a new error"
      );
      alert("Maximum number of players reached");
    }
  } else {
    error(
      "The player tried to add a player while the game is running, throwing a new error"
    );
  }
};

removeButton.onclick = function () {
  if (isGameRunning == false) {
    if (playersAmount > 3) {
      playersAmount--; // A player have been removed

      console.log(`${playersAmount} Players in the game`);
    } else {
      error("The game cannot have less than 3 players, throwing a new error");
      alert("Minimum number of players reached");
    }
  } else {
    error(
      "The player tried to remove a player while the game is running, throwing a new error"
    );
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

function ChooseAPlace() {
  // When called return a Place
  let randomIndexNumber = Math.floor(Math.random() * 50);
  place = placesArray[randomIndexNumber];

  return place;
}

function error(errorMsg) {
  console.error(errorMsg);
}

ChooseAPlace();

console.log(`The place choosed is ${place}`); // Show the place
