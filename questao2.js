const validatePassword = (password) => {
  const characterSpecial = '!@#$%^&*()-+';

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
    return console.log('A senha deve conter no mínimo 6 caracteres.');
  }

  if (!findDigit) {
    return console.log('A senha deve conter no mínimo 1 número.');
  }

  if (!findUpperCase) {
    return console.log('A senha deve conter no mínimo 1 letra maiúsculo.');
  }

  if (!findLowerCase) {
    return console.log('A senha deve conter no mínimo 1 letra minúsculo.');
  }

  if (!findCharacter) {
    return console.log(
      'A senha deve conter no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+'
    );
  }

  return console.log('Senha forte e segura!');
}

validatePassword('ABDsEf1^');