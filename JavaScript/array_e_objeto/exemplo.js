//Criando arrays
let usuarios = {
    nome:"fulano",
    idade:20,
    cidade:"joinville"
}
console.log(usuario)

console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.cidade)

usuario.email = "fulano@email.com"
console.log(usuario)

let usuario = [

{
    id: 1,
    nome: "Carlos",
    idade: 20
},
{
    id: 2,
    nome: "ana",
    idade:25
},
{
    id: 3,
    nome: "julia",
    idade:35
}
]
console.log(usuarios)
console.log(usuarios[2])

console.log(usuarios[0].nome)

console.log(usuarios[0].idade)

for(let i=0; i<usuarios.length;i++){
    console.log(usuario[i])
}

usuario.push(
    {
        id: 4,
        nome: "maria",
        idade:45
    }
)
console.log(usuarios)

for(let i = 0 ; i <usuarios.length ; i++){
    if(usuarios[i].id === 2){
        console.log("usuario encontrado")
        console.log(usuarios[i])
    }
}
console.log(usuarios)