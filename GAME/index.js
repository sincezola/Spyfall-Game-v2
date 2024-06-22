let place = "";

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

function ChooseAPlace() {
  // When called return a Place
  let randomIndexNumber = Math.floor(Math.random() * 50);
  place = placesArray[randomIndexNumber];

  return place;
}

ChooseAPlace();

console.log(`The place choosed is ${place}`); // Show the place
