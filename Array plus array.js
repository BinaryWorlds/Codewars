function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((prev, curr) => prev += curr);
}
  