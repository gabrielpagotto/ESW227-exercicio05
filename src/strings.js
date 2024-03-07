validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

contarCaracteres = (str) => {
    return str.length;
}

inverterString = (str) => {
    return str.split("").reverse().join(" ");
}

converterParaMaiusculas = (str) => {
    return str.toUpperCase();
}

module.exports = {
    validarEmail,
    contarCaracteres,
    inverterString,
    converterParaMaiusculas
};