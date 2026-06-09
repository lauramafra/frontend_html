//Criando Arraylist
let usuarios = [10, "Ana", "Carlos","Maria"]
console.log(usuarios)

//Acessando itens
console.log(usuarios[1])

//Adicionando item no final da array
//push()

usuarios.push("Pedro");
console.log(usuarios);

//Remove o primeiro item
//shift

usuarios.shift()
console.log(usuarios)

//Remover o último item
//pop()
usuarios.pop()
console.log(usuarios)

//Remover o primeiro item
//shift()
usuarios.shift()
console.log(usuarios)

//mostrar a quantidade de itens
//length()

console.log(usuarios.length)

//Verifica se um item existe
//includes()

console.log(usuarios.includes("Maria"))

//Mostra a posição do item
//indexOf()
console.log(usuarios.indexOf("Maria"))

//Remove ou adciona itens
//splice()

usuarios.splice(0 , 1)
console.log(usuarios)

//Copia parte do array
//slice

//sintaxe:
//array.slice(inicio, fim)

usuarios2 = [10 , "Carlos" , "Maria", "Pedro", "Joao"]

let novoArrays = usuarios2.slice(0 , 2)
console.log(novoArrays)

//Inverter Ordem
//reverse()

usuarios2.reverse()
console.log(usuarios2)

//Ordena em ordem alfabética
//sort()

usuarios2.sort()
console.log(usuarios2)

//forEach()
//Percorre a Array

usuarios.forEach(function(usuarios){
    console.log(usuario)
})

//for OF
//outra forma de percorrer 
//o for...of percorre os valores do array r ignora os indices e pega apenas os valores

for(let usuario of usuarios2){
    console.log(usuario)
}

//for in
//mais atualizado
//percorre ps indices (posições), podemos acessar o valor e o indice
for(let indice in usuarios){
    console.log(indice)
    console.log(usuarios[indice])

}

//mais atualzado
//o lenght informa a quantidade de eçementos que existe no array 
for (let i = 0; i < usuarios.length; i++){
    console.log(i)
    console.log(usuarios2[i])
}

//join()
//transforma array em texto
//metodo join("-") percorre tpdos os elemmentos e coloca "-" entre eles.
let nomes = usuarios2.join(" - ");
console.log(nomes);

//concat
// Junta arrays
let admin = ["Admin1", "Admin2"]