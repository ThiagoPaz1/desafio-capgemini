const findAnagrams = (word) => {
  let arrayWord = [];
  let anagramPairs = [];

  for (let i of word) {
    arrayWord.push(i.toLowerCase());
  }

  for (let i in word) {
    let findLetters = word.indexOf(word[i]);
    let subStringsPairs = word.slice(findLetters, Number(i) + 1); 
    
    if (findLetters != i) {
      if (subStringsPairs.length > 2) {
        anagramPairs.push(subStringsPairs);
      }
    }
  }
  
  const findLettersEquals = arrayWord.filter((letter, i) => arrayWord.indexOf(letter) != i);
  const totalQuantityAnagrams = anagramPairs.length  + findLettersEquals.length; 

  return console.log(`A palavra inserida contém ${totalQuantityAnagrams} anagramas pares.`);
}

findAnagrams('ovo');