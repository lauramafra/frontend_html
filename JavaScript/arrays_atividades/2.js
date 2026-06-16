// 2. Controle de Pedidos
let pedidos = ["Hambúrguer", "Batata Frita", "Refrigerante"];

// 1. Adiciona "Milk Shake" ao final
pedidos.push("Milk Shake");
console.log("Após adicionar Milk Shake:", pedidos);

// 2. Remove o primeiro pedido
pedidos.shift();
console.log("Após remover o primeiro:", pedidos);

// 3. Quantidade de pedidos
console.log("Quantidade de pedidos:", pedidos.length);

// 4. Exibe cada pedido com for...of
console.log("Pedidos (for...of):");
for (let pedido of pedidos) {
  console.log(pedido);
}

// 5. Exibe os índices com for...in
console.log("Índices (for...in):");
for (let indice in pedidos) {
  console.log(indice, "->", pedidos[indice]);
}