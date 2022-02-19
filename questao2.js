let testPassword = '';

const validatePassword = (password) => {
  const message = `A senha deve conter no mínimo 6 caracteres, ainda falta ${6 - password.length} caracteres.`
  const characterSpecial = '!@#$%^&*()-+';

  testPassword += password;

  let newArray = [];
  
  for (let i of password) {
    newArray.push(i);
  }

  const findDigit = newArray.find(i => i == 0 || Boolean(i/2) == true);

  const findUpperCase = newArray.find((element, i) => {
    return newArray.indexOf(element.toUpperCase()) == i && Boolean(element/2) == false && element != 0;
  });

  const findLowerCase = newArray.find((element, i) => {
    return newArray.indexOf(element.toLowerCase()) == i && Boolean(element/2) == false && element != 0;
  });

  const findCharacter = newArray.find(i => characterSpecial.includes(i));

  if (password.length < 6) {
    return console.log(message);
  }

  if (!findDigit) {
    return console.log('A senha deve conter no mínimo 1 número, para ser considerada forte.');
  }

  if (!findUpperCase) {
    return console.log('A senha deve conter no mínimo 1 letra maiúsculo, para ser considerada forte.');
  }

  if (!findLowerCase) {
    return console.log('A senha deve conter no mínimo 1 letra minúsculo, para ser considerada forte.');
  }

  if (!findCharacter) {
    return console.log(
      `A senha deve conter no mínimo 1 caractere especial, para ser considerada forte.
       Os caracteres especiais são: !@#$%^&*()-+`
    );
  }

  return console.log('Senha forte e segura!');
}

validatePassword('ABDd(s1f');

module.exports = {
  testPassword,
}