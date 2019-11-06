function inAscOrder(arr) {
    return arr.every((el, index) => arr[index+1] === undefined ? true : el <= arr[index+1]);
}
    