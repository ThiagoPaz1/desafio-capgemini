let character = '';
let heigth = '';

const ladder = (n) => {
  let space = ' ';

  for (let i = 1; i <= n; i++) {
    heigth += '*'
    console.log(`${space.repeat(n-i)}${character += '*'}`);
  }

  return n
}

ladder(6);

module.exports = {
  character,
  heigth,
  ladder,
}