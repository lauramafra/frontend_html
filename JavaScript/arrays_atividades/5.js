// 5. Mini Sistema de Biblioteca
let livros = ["Dom Casmurro", "O Pequeno Príncipe", "1984", "Harry Potter"];

// 1. Exibe todos os livros
console.log("Livros:", livros);

// 2. Verifica se "1984" existe
console.log("Existe '1984'?", livros.includes("1984"));

// 3. Posição de "Harry Potter"
console.log("Posição de 'Harry Potter':", livros.indexOf("Harry Potter"));

// 4. Remove o primeiro livro com shift()
livros.shift();
console.log("Após remover o primeiro:", livros);

// 5. Adiciona "Senhor dos Anéis" ao final
livros.push("Senhor dos Anéis");
console.log("Após adicionar 'Senhor dos Anéis':", livros);

// 6. Ordena os livros
livros.sort();
console.log("Livros ordenados:", livros);

// 7. Exibe todos com for tradicional
console.log("Livros (for tradicional):");
for (let i = 0; i < livros.length; i++) {
  console.log(i, "-", livros[i]);
}

// 8. Quantidade total de livros
console.log("Total de livros:", livros.length);