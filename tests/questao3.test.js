const  { findAnagrams }  = require('../questao3');

describe('Teste da questão 3', () => {
  test('A função deve retorna o número de pares de anagramas.', () => {
    const checkType = typeof findAnagrams('atual') == typeof 0;
    const valueActual = findAnagrams('atual') >= 0 && checkType;

    expect(valueActual).toBe(true);
  });
});