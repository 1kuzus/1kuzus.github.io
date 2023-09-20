const arr = [1, 2, 3];

arr.push(50);
const res1 = arr.push(98, 99);
console.log(res1, arr); //6 [1, 2, 3, 50, 98, 99]

const res2 = arr.pop();
console.log(res2, arr); //99 [1, 2, 3, 50, 98]

console.log([].pop()); //undefined
