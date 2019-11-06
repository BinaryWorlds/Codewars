function correctPolishLetters (string) {
  const diacritics = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];//no uppercase
  const replaced = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
  
  return [...string] /* now i know about replace */
          .map(el =>{
            let index = diacritics.indexOf(el);
            return -1 == index ? el : replaced[index];
          })
          .join('');
}
  