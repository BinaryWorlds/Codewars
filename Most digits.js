function findLongest(array){
    return array.reduce((prev, curr) => prev.toString().length >= curr.toString().length ? prev : curr);
}
    