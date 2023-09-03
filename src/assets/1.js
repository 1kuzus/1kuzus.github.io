const arr = [1, 2, ['a', 'b', [88, 99, ['xx', 'yy']]], 3];

console.log(arr.flat());         //[1, 2, 'a', 'b', [88, 99, ['xx', 'yy']], 3]
console.log(arr.flat(2));        //[1, 2, 'a', 'b', 88, 99, ['xx', 'yy'], 3]
console.log(arr.flat(Infinity)); //[1, 2, 'a', 'b', 88, 99, 'xx', 'yy', 3]
