const login = (usuario, senha) => {
    if (usuario === "admin" && senha === "1234") {
        return "Login realizado";
    } else {
        return "Usuário ou senha incorretos";
    }
};

// Testando a função:
console.log(login("admin", "1234"));       // Saída: Login realizado
console.log(login("usuario_X", "1234"));   // Saída: Usuário ou senha incorretos
console.log(login("admin", "senhaErrada")); // Saída: Usuário ou senha incorretos