require('./structs');

describe('concatenarArrays', () => {
    test('testa se os array serão concatenados', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        expect(concatenarArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

describe('mesclarObjetos', () => {
    test('testa se será juntado dois objetos com propriedades diferentes', () => {
        const objeto1 = { a: 1, b: 2 };
        const objeto2 = { c: 3, d: 4 };
        expect(mesclarObjetos(objeto1, objeto2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
});