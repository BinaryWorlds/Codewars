function nextHappyYear(year){ /* now i know about Set */
  let tab;
  do{
    tab = [...(++year).toString()];
  }
  while(tab.some((el, index) => undefined !== tab.slice(index+1).find(x => x == el)))
  return year;
}
  