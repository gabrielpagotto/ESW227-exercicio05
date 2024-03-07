require('./strings');

describe('validarEmail', () => {
    test('testa email inválido', () => {
        expect(validarEmail("gabriel")).toBeFalsy();
        expect(validarEmail("gabriel@icloud")).toBeFalsy();
    });

    test('testa email válido', () => {
        expect(validarEmail("gabriel@icloud.com")).toBeTruthy();
        expect(validarEmail("gabrielpagotto@hotmail.com.br")).toBeTruthy();
    });
});

describe('contarCaracteres', () => {
    test('testa contagem', () => {
        expect(contarCaracteres('leão')).toBe(4);
    });
});

describe('converterParaMaiusculas', () => {
    test('testa conversão para maiusculas', () => {
        const str = 'X Burger';
        expect(converterParaMaiusculas(str)).toMatch('X BURGER');
    });
});

describe('inverterString', () => {
    test('testa inversão de string', () => {
        const str = 'é o invertes';
        expect(inverterString(str)).toBe('setrevni o é');
    });
});