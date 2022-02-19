const { testPassword } = require('../questao2');

describe('Teste da questão 2', () => {
  test('A senha deve conter no minimo 6 caracteres', () => {
    const valueActual = testPassword.length >= 6;

    expect(valueActual).toBe(true);
  });
});