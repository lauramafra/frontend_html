const media = (nota1, nota2) => {
    const resultadoMedia = (nota1 + nota2) / 2;
    return resultadoMedia >= 7 ? "Aprovado" : "Reprovado";
};

// Testando a função:
console.log(media(8, 6));   // Saída: Aprovado
console.log(media(5.5, 6)); // Saída: Reprovado