const { character, heigth, ladder,} = require('../questao1');

describe('Testes da questão 1.', () => {
  test('A base da escada deve igual ao valor de n', () => {
    const n = ladder(6);
    const valueActual = character.length;
    
    expect(valueActual).toBe(n);
  });

  test('A altura da escada deve igual ao valor de n', () => {
    const n = ladder(6);
    const valueActual = heigth.length;
    
    expect(valueActual).toBe(n);
  });

  test('A última linha da escada não deve conter nenhum espaço', () => {
    const valueActual = character.includes(' ');
    
    expect(valueActual).toBe(false);
  });
});