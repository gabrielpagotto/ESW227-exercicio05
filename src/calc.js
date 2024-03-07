sum = (a, b) => {
    return b + a
}

sub = (a, b) => {
    return a - b
}

mult = (a, b) => {
    return a * b;
}

div = () => {
    return a / b;
}

parImpar = (n) => {
    return n % 2 === 0;
}

calcularFatorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * calcularFatorial(n - 1);
}

calcularMediaPonderada = (notas, pesos) => {
    const somaNotas = notas.reduce((acc, nota, index) => acc + (nota * pesos[index]), 0);
    const somaPesos = pesos.reduce((acc, peso) => acc + peso, 0);
    return somaNotas / somaPesos;
}

ordenarNumeros = (lista) => {
    return lista.sort((a, b) => a - b);
}

calcularPotencia = (base, expoente) => {
    if (expoente === 0) 
        return 1;

    else if (expoente % 2 === 0) {
        const temp = calcularPotencia(base, expoente / 2);
        return temp * temp;
    
    } else 

        return base * calcularPotencia(base, expoente - 1);
}

gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

encontrarMenorNumero = (lista) => {
    let menor;
    for (let i = 1; i <= lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return menor;
}

module.exports = {
    sum,
    sub,
    mult,
    div,
    parImpar,
    calcularFatorial,
    calcularMediaPonderada,
    ordenarNumeros,
    calcularPotencia,
    gerarNumeroAleatorio,
    encontrarMenorNumero
};