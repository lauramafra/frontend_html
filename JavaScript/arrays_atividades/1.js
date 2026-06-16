// 1. Cadastro de Participantes de Evento
let participantes = ["Marcos", "Fernanda", "Juliana"];

// 1. Exibe a lista completa
console.log("Lista completa:", participantes);

// 2. Adiciona "Gabriel" ao final
participantes.push("Gabriel");
console.log("Após adicionar Gabriel:", participantes);

// 3. Adiciona "Patrícia" no início
participantes.unshift("Patrícia");
console.log("Após adicionar Patrícia:", participantes);

// 4. Quantidade total de participantes
console.log("Total de participantes:", participantes.length);

// 5. Verifica se "Juliana" está inscrita
console.log("Juliana está inscrita?", participantes.includes("Juliana"));

// 6. Verifica se "Carlos" está inscrito
console.log("Carlos está inscrito?", participantes.includes("Carlos"));

// 7. Posição de "Fernanda"
console.log("Posição de Fernanda:", participantes.indexOf("Fernanda"));

// 8. Remove o último participante
participantes.pop();
console.log("Após remover o último:", participantes);

// 9. Exibe lista atualizada
console.log("Lista atualizada:", participantes);

// 10. Transforma em string com join
console.log("Lista em string:", participantes.join(" | "));