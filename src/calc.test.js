require('./calc');

describe('sum', () => {
    test('testa se a soma estará correta', () => { 
        expect(sum(54, 6)).toBe(60);
    });
});

describe('sub', () => {
    test('testa se a subtração estará correta', () => { 
        expect(sub(20, 5)).toBe(15);
    });
});

describe('mult', () => {
    test('testa se a multiplicação estará correta', () => { 
        expect(mult(7, 7)).toBe(49);
    });
});

describe('div', () => {
    test('testa se a divisão estará correta', () => { 
        expect(div(9, 3)).toBe(3)
    });
});

describe('parImpar', () => {
    test('testa números pares', () => { 
        expect(parImpar(54)).toBeTruthy();
        expect(parImpar(10)).toBeTruthy();
        expect(parImpar(154)).toBeTruthy();
    });

    test('testa números ímpares', () => { 
        expect(parImpar(53)).toBeFalsy();
        expect(parImpar(15)).toBeFalsy();
        expect(parImpar(1)).toBeFalsy();
    });
});

describe('calcularFatorial', () => {
    test('testa se fatorial estará correto', () => { 
        expect(calcularFatorial(2)).toBe(2);
        expect(calcularFatorial(4)).toBe(24);
        expect(calcularFatorial(5)).toBe(120);
        expect(calcularFatorial(6)).toBe(720);
    });
});

describe('calcularMediaPonderada', () => {
    test('testa se média ponderada estará correta', () => { 
        expect(calcularMediaPonderada([2, 4, 45], [3, 1, 1])).toBe(11);
        expect(calcularMediaPonderada([4, 42, 235, 4, 1000, 1], [1, 5, 5, 10, 60, 1])).toBeCloseTo(749.15);
    });
});

describe('ordenarNumeros', () => {
    test('testa ordenação de números', () => { 
        expect(ordenarNumeros([42, 1, 30, 2, 4, 1, 10, 9])).toBe([1, 1, 2, 4, 9, 10, 30, 42]);
    });
});

describe('calcularPotencia', () => { 
    test('testa se retorna 1 quando o expoente é zero', () => {
        expect(calcularPotencia(2, 0)).toBe(1);
    });

    it('testa se retorna corretamente quando o expoente e nem não são zero', () => {
        expect(calcularPotencia(2, 3)).toBe(8);
        expect(calcularPotencia(3, 4)).toBe(81);
        expect(calcularPotencia(5, 2)).toBe(25);
    });
});

describe('gerarNumeroAleatorio', () => {
    test('testa se os valores retornados estão dentro do range informado', () => {
        const min = 1;
        const max = 10;
        const result = gerarNumeroAleatorio(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });
});

describe('encontrarMenorNumero', () => {
    it('testa se vai encontrar o menor número', () => {
        const lista = [5, 3, 8, 2, 9];
        expect(encontrarMenorNumero(lista)).toBe(2);
      });
});