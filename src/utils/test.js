const arr1 = [2, 5, 14, 8, 1];
const arr2 = arr1.sort();

console.log(arr1); //[1, 14, 2, 5, 8]
arr2[0] = 99;
console.log(arr1); //[99, 14, 2, 5, 8]

arr1.sort((a, b) => a - b);
console.log(arr1); //[2, 5, 8, 14, 99]
