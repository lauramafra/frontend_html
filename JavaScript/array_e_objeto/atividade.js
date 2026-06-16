// ─────────────────────────────────────────────────────────────────────────────
// ATIVIDADE: OBJETO E ARRAY
// ─────────────────────────────────────────────────────────────────────────────

// ==========================================
// 1. Cadastro de Produto
// ==========================================
console.log("--- 1. CADASTRO DE PRODUTO ---");

// Crie um objeto chamado produto
let produto = {
    nome: "Teclado Mecânico",
    preco: 250.00,
    quantidade: 15
};

// Exibir o objeto completo
console.log("Objeto completo:", produto);

// Exibir apenas o nome do produto
console.log("Nome do produto:", produto.nome);

// Alterar o preço do produto
produto.preco = 220.00;

// Adicionar uma nova propriedade chamada categoria
produto.categoria = "Periféricos";

// Remover a propriedade quantidade
delete produto.quantidade;

// Exibir o objeto atualizado
console.log("Objeto atualizado:", produto);


// ==========================================
// 2. Cadastro de Filmes
// ==========================================
console.log("\n--- 2. CADASTRO DE FILMES ---");

// Crie um array de objetos chamado filmes contendo 3 filmes
let filmes = [
    { id: 1, titulo: "Inception", genero: "Ficção Científica", ano: 2010 },
    { id: 2, titulo: "O Poderoso Chefão", genero: "Drama/Crime", ano: 1972 },
    { id: 3, titulo: "Interestelar", genero: "Ficção Científica", ano: 2014 }
];

// Exibir todos os filmes
console.log("Todos os filmes:", filmes);

// Exibir apenas o título do primeiro filme
console.log("Título do primeiro filme:", filmes[0].titulo);

// Exibir apenas o gênero do segundo filme
console.log("Gênero do segundo filme:", filmes[1].genero);

// Utilizar um for para mostrar todos os filmes
console.log("Listando todos os filmes com 'for':");
for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i]);
}

// Utilizar outro for para mostrar apenas os títulos
console.log("Listando apenas os títulos com 'for':");
for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i].titulo);
}


// ==========================================
// 3. Sistema de Alunos
// ==========================================
console.log("\n--- 3. SISTEMA DE ALUNOS ---");

// Crie um array de objetos chamado alunos (pelo menos 4 alunos)
let alunos = [
    { matricula: 101, nome: "Ana Silva", nota: 8.5 },
    { matricula: 102, nome: "Bruno Costa", nota: 7.0 },
    { matricula: 103, nome: "Carla Souza", nota: 9.2 },
    { matricula: 104, nome: "Diego Lima", nota: 6.5 }
];

// Exibir todos os alunos
console.log("Lista inicial de alunos:", alunos);

// Adicionar um novo aluno utilizando push()
alunos.push({ matricula: 105, nome: "Elena Pereira", nota: 8.0 });

// Exibir a lista atualizada
console.log("Lista após o push():", alunos);

// Remover o último aluno utilizando pop()
alunos.pop();

// Exibir novamente a lista
console.log("Lista após o pop():", alunos);

// Utilizar um for para mostrar apenas os nomes dos alunos
console.log("Nomes dos alunos na lista:");
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome);
}


// ==========================================
// 4. Busca de Funcionário
// ==========================================
console.log("\n--- 4. BUSCA DE FUNCIONÁRIO ---");

// Crie um array de objetos chamado funcionarios (pelo menos 4 funcionários)
let funcionarios = [
    { id: 1, nome: "Carlos", cargo: "Desenvolvedor" },
    { id: 2, nome: "Mariana", cargo: "Designer" },
    { id: 3, nome: "Roberto", cargo: "Gerente de Projetos" },
    { id: 4, nome: "Juliana", cargo: "Analista de QA" }
];

// Exibir todos os funcionários
console.log("Todos os funcionários:", funcionarios);

// Utilizar um for para procurar o funcionário com id = 3
for (let i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].id === 3) {
        console.log("Funcionário encontrado:");
        console.log(funcionarios[i]); // Exibe os dados completos do funcionário encontrado
        break; // Interrompe o loop pois já encontrou o funcionário
    }
}


// ==========================================
// 5. Simulando uma API de Livros
// ==========================================
console.log("\n--- 5. SIMULANDO UMA API DE LIVROS ---");

// Crie um array de objetos chamado livros contendo pelo menos 3 livros
let livros = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
    { id: 2, titulo: "1984", autor: "George Orwell" },
    { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis" }
];

// Crie um objeto chamado respostaAPI
let respostaAPI = {
    status: true,
    mensagem: "Livros encontrados",
    dados: livros
};

// Exibir o objeto respostaAPI
console.log("Objeto respostaAPI:", respostaAPI);

// Exibir apenas o conteúdo de dados
console.log("Conteúdo de 'dados':", respostaAPI.dados);

// Exibir o título do primeiro livro
console.log("Título do primeiro livro:", respostaAPI.dados[0].titulo);

// Utilizar um for para mostrar todos os títulos dos livros
console.log("Títulos de todos os livros:");
for (let i = 0; i < respostaAPI.dados.length; i++) {
    console.log(respostaAPI.dados[i].titulo);
}

// Adicionar um novo livro utilizando push()
respostaAPI.dados.push({ id: 4, titulo: "O Alquimista", autor: "Paulo Coelho" });

// Exibir novamente a resposta da API
console.log("Resposta da API atualizada:", respostaAPI);


// ==========================================
// 6. Sistema de Cadastro (Jogos)
// ==========================================
console.log("\n--- 6. SISTEMA DE CADASTRO DE JOGOS ---");

// Array de objetos para armazenar vários jogos
let jogosCadastrados = [];

// Função auxiliar para cadastrar jogos facilmente usando push() e Objeto interno
function cadastrarJogo(id, nome, categoria) {
    let novoJogo = { id: id, nome: nome, categoria: categoria };
    jogosCadastrados.push(novoJogo);
}

// Cadastrando alguns jogos de exemplo
cadastrarJogo(1, "The Witcher 3", "RPG");
cadastrarJogo(2, "FIFA 24", "Esportes");
cadastrarJogo(3, "Counter-Strike 2", "FPS");

// 'for' para listar todos os jogos
console.log("Listando todos os jogos:");
for (let i = 0; i < jogosCadastrados.length; i++) {
    console.log(jogosCadastrados[i]);
}

// Busca de um jogo pelo id (Exemplo: buscando id = 2)
let idBusca = 2;
console.log(`Buscando jogo com ID = ${idBusca}:`);for (let i = 0; i < jogosCadastrados.length; i++) {
    if (jogosCadastrados[i].id === idBusca) {
        console.log("Jogo encontrado:", jogosCadastrados[i]);
        break;
    }
}

// Exibição apenas do nome e da categoria dos jogos cadastrados
console.log("Nomes e Categorias dos jogos:");
for (let i = 0; i < jogosCadastrados.length; i++) {
console.log(`Jogo: ${jogosCadastrados[i].nome} | Categoria: ${jogosCadastrados[i].categoria}`);}