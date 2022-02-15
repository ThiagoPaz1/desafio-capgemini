const ladder = (n) => {
  let character = '';
  let space = ' ';

  for (let i = 1; i <= n; i++) {
    console.log(`${space.repeat(n-i)}${character += '*'}`);
  }
}

ladder(6);