// 4. Sistema de Equipes
let equipeFrontend = ["Lucas", "Ana"];
let equipeBackend = ["Carlos", "Fernanda"];

// 1. Une as equipes com concat()
let equipeCompleta = equipeFrontend.concat(equipeBackend);

// 2. Exibe todos os integrantes
console.log("Equipe completa:", equipeCompleta);

// 3. Quantidade total de colaboradores
console.log("Total de colaboradores:", equipeCompleta.length);

// 4. Percorre a equipe com forEach()
console.log("Integrantes (forEach):");
equipeCompleta.forEach(function(nome) {
  console.log(nome);
});