"use strict";(self.webpackChunkgithubiov2=self.webpackChunkgithubiov2||[]).push([[6525],{8e3:(e,n,r)=>{r.r(n),r.d(n,{default:()=>s});var l=r(8433),o=r(6417);function s(e){let{title:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z.Title,{children:n}),(0,o.jsx)(l.Z.H1,{children:"at()"}),(0,o.jsx)(l.Z.P,{children:"`at()`\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u6574\u6570\u503c\u5e76\u8fd4\u56de\u8be5\u7d22\u5f15\u5bf9\u5e94\u7684\u5143\u7d20\uff0c\u5141\u8bb8\u6b63\u6570\u548c\u8d1f\u6570\u3002\u8d1f\u6574\u6570\u4ece\u6570\u7ec4\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u5f00\u59cb\u5012\u6570\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [5, 12, 8, 130, 44];\n                console.log(arr[2]); //8\n                console.log(arr.at(2)); //8\n                console.log(arr.at(-1)); //44\n                "}),(0,o.jsx)(l.Z.H1,{children:"concat()"}),(0,o.jsx)(l.Z.P,{children:"`concat()`\u65b9\u6cd5\u7528\u4e8e\u5408\u5e76\u4e24\u4e2a\u6216\u591a\u4e2a\u6570\u7ec4\u3002\u6b64\u65b9\u6cd5\u4e0d\u4f1a\u66f4\u6539\u73b0\u6709\u6570\u7ec4\uff0c\u800c\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr1 = [1, 2, 3];\n                const arr2 = ['a', 'b', 'c'];\n                const arr3 = arr1.concat(99, arr2);\n\n                arr1[0] = 5; //\u4e0d\u4f1a\u5f71\u54cdarr3\n                console.log(arr3); //[1, 2, 3, 99, 'a', 'b', 'c']\n                "}),(0,o.jsx)(l.Z.H1,{children:"every()"}),(0,o.jsx)(l.Z.P,{children:"`every()`\u65b9\u6cd5\u6d4b\u8bd5\u4e00\u4e2a\u6570\u7ec4\u5185\u7684\u6240\u6709\u5143\u7d20\u662f\u5426\u90fd\u80fd\u901a\u8fc7\u6307\u5b9a\u51fd\u6570\u7684\u6d4b\u8bd5\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr1 = [1, 30, 39, 29, 10, 13];\n                const arr2 = [1, 30, 39, 88];\n                const isBelow50 = (num) => num < 50;\n\n                console.log(arr1.every(isBelow50)); //true\n                console.log(arr2.every(isBelow50)); //false\n                "}),(0,o.jsx)(l.Z.H1,{children:"some()"}),(0,o.jsx)(l.Z.P,{children:"`some()`\u65b9\u6cd5\u6d4b\u8bd5\u6570\u7ec4\u4e2d\u662f\u5426\u81f3\u5c11\u6709\u4e00\u4e2a\u5143\u7d20\u80fd\u901a\u8fc7\u6307\u5b9a\u51fd\u6570\u7684\u6d4b\u8bd5\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr1 = [1, 30, 39, 29, 10, 13];\n                const arr2 = [1, 30, 39, 88];\n                const isOver80 = (num) => num > 80;\n\n                console.log(arr1.some(isOver80)); //false\n                console.log(arr2.some(isOver80)); //true\n                "}),(0,o.jsx)(l.Z.H1,{children:"fill()"}),(0,o.jsx)(l.Z.P,{children:"`fill()`\u65b9\u6cd5\u7528\u4e00\u4e2a\u56fa\u5b9a\u503c\u586b\u5145\u6570\u7ec4\u4e2d\u4ece\u8d77\u59cb\u7d22\u5f15\uff08\u9ed8\u8ba4\u4e3a`0`\uff09\u5230\u7ec8\u6b62\u7d22\u5f15\uff08\u9ed8\u8ba4\u4e3a`array.length`\uff09\u5185\u7684\u5168\u90e8\u5143\u7d20\uff0c\u8fd4\u56de\u4fee\u6539\u540e\u7684\u6570\u7ec4\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 2, 3, 4, 5];\n\n                // fill(value)\n                console.log(arr.fill(9)); //[9, 9, 9, 9, 9]\n\n                // fill(value, start)\n                console.log(arr.fill('a', 2)); //[ 9, 9, 'a', 'a', 'a']\n\n                arr[0] = 1;\n\n                // fill(value, start, end)\n                console.log(arr.fill('b', 1, 3)); //[1, 'b', 'b', 'a', 'a']\n                "}),(0,o.jsx)(l.Z.H2,{children:"\u521b\u5efa\u6307\u5b9a\u957f\u5ea6\u548c\u5185\u5bb9\u7684\u6570\u7ec4"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                function getArray(len, val) {\n                    return Array(len).fill(val);\n                }\n\n                console.log(getArray(3, 'some value')); //['some value', 'some value', 'some value']\n                "}),(0,o.jsx)(l.Z.H1,{children:"filter()"}),(0,o.jsx)(l.Z.P,{children:"`filter()`\u65b9\u6cd5\u7528\u4e00\u4e2a\u56fa\u5b9a\u503c\u586b\u5145\u6570\u7ec4\u4e2d\u4ece\u8d77\u59cb\u7d22\u5f15\uff08\u9ed8\u8ba4\u4e3a`0`\uff09\u5230\u7ec8\u6b62\u7d22\u5f15\uff08\u9ed8\u8ba4\u4e3a`array.length`\uff09\u5185\u7684\u5168\u90e8\u5143\u7d20\uff0c\u8fd4\u56de\u4fee\u6539\u540e\u7684\u6570\u7ec4\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 5, 7, 13, 45, 66];\n                console.log(arr.filter((i) => i > 10)); //[13, 45, 66]\n                "}),(0,o.jsx)(l.Z.H1,{children:"find\u7cfb\u5217"}),(0,o.jsx)(l.Z.Uli,{children:"`find()`\u65b9\u6cd5\u8fd4\u56de\u6570\u7ec4\u4e2d\u6ee1\u8db3\u63d0\u4f9b\u7684\u6d4b\u8bd5\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u503c\u3002\u5426\u5219\u8fd4\u56de`undefined`\u3002"}),(0,o.jsx)(l.Z.Uli,{children:"`findIndex()`\u65b9\u6cd5\u8fd4\u56de\u6570\u7ec4\u4e2d\u6ee1\u8db3\u63d0\u4f9b\u7684\u6d4b\u8bd5\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\u3002\u82e5\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u5143\u7d20\u5219\u8fd4\u56de`-1`\u3002"}),(0,o.jsx)(l.Z.Uli,{children:"`findLast()`\u65b9\u6cd5\u53cd\u5411\u8fed\u4ee3\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u6ee1\u8db3\u63d0\u4f9b\u7684\u6d4b\u8bd5\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u503c\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u5143\u7d20\uff0c\u5219\u8fd4\u56de`undefined`\u3002"}),(0,o.jsx)(l.Z.Uli,{children:"`findLastIndex()`\u65b9\u6cd5\u53cd\u5411\u8fed\u4ee3\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u6ee1\u8db3\u6240\u63d0\u4f9b\u7684\u6d4b\u8bd5\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\u3002\u82e5\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u5143\u7d20\uff0c\u5219\u8fd4\u56de`-1`\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 15, 7, 33, 5, 66, 47, 9, 5];\n                const cond = (x) => x > 30;\n                \n                console.log(arr.find(cond)); //33\n                console.log(arr.findIndex(cond)); //3\n                console.log(arr.findLast(cond)); //47\n                console.log(arr.findLastIndex(cond)); //6\n                "}),(0,o.jsx)(l.Z.H1,{children:"flat()"}),(0,o.jsx)(l.Z.P,{children:"`flat()`\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\uff0c\u5e76\u6839\u636e\u6307\u5b9a\u6df1\u5ea6\u9012\u5f52\u5730\u5c06\u6240\u6709\u5b50\u6570\u7ec4\u5143\u7d20\u62fc\u63a5\u5230\u65b0\u7684\u6570\u7ec4\u4e2d\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 2, ['a', 'b', [88, 99, ['xx', 'yy']]], 3];\n\n                console.log(arr.flat());         //[1, 2, 'a', 'b', [88, 99, ['xx', 'yy']], 3]\n                console.log(arr.flat(2));        //[1, 2, 'a', 'b', 88, 99, ['xx', 'yy'], 3]\n                console.log(arr.flat(Infinity)); //[1, 2, 'a', 'b', 88, 99, 'xx', 'yy', 3]\n                "}),(0,o.jsx)(l.Z.H1,{children:"forEach()"}),(0,o.jsx)(l.Z.P,{children:"`forEach()`\u65b9\u6cd5\u5bf9\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u6b21\u7ed9\u5b9a\u7684\u51fd\u6570\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"arr.forEach(callbackFn)"}),(0,o.jsx)(l.Z.P,{noMarginBottom:!0,children:"`callbackFn`\u4e3a\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u7684\u51fd\u6570\uff0c\u5e76\u4f1a\u4e22\u5f03\u5b83\u7684\u8fd4\u56de\u503c\u3002\u8be5\u51fd\u6570\u88ab\u8c03\u7528\u65f6\u5c06\u4f20\u5165\u4ee5\u4e0b\u53c2\u6570\uff1a"}),(0,o.jsx)(l.Z.Uli,{children:"`value`\uff1a\u6570\u7ec4\u4e2d\u6b63\u5728\u5904\u7406\u7684\u5f53\u524d\u5143\u7d20"}),(0,o.jsx)(l.Z.Uli,{children:"`index`\uff1a\u6570\u7ec4\u4e2d\u6b63\u5728\u5904\u7406\u7684\u5f53\u524d\u5143\u7d20\u7684\u7d22\u5f15"}),(0,o.jsx)(l.Z.Uli,{children:"`array`\uff1a\u8c03\u7528\u4e86`forEach()`\u7684\u6570\u7ec4\u672c\u8eab"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = ['a', 'b', 'c'];\n\n                arr.forEach((value, index, array) => console.log(value, index, array));\n                // a 0 ['a', 'b', 'c']\n                // b 1 ['a', 'b', 'c']\n                // c 2 ['a', 'b', 'c']\n                "}),(0,o.jsx)(l.Z.H1,{children:"includes()"}),(0,o.jsx)(l.Z.P,{children:"`includes()`\u65b9\u6cd5\u7528\u6765\u5224\u65ad\u4e00\u4e2a\u6570\u7ec4\u662f\u5426\u5305\u542b\u4e00\u4e2a\u6307\u5b9a\u7684\u503c\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                arr.includes(searchElement)\n                arr.includes(searchElement, fromIndex) //\u5f00\u59cb\u641c\u7d22\u7684\u7d22\u5f15\n                "}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                console.log([1, 2, 3].includes(2)); //true\n                console.log([1, 2, 3].includes(4)); //false\n                console.log([1, 2, 3].includes(1, 2)); //false\n\n                //\u8d1f\u7d22\u5f15\u4ece\u6570\u7ec4\u672b\u5c3e\u5f00\u59cb\u8ba1\u6570,\u4f46\u4ecd\u7136\u4ece\u524d\u5f80\u540e\u8fdb\u884c\u641c\u7d22\n                console.log([1, 2, 3].includes(3, -2)); //true\n\n                console.log([1, 2, NaN].includes(NaN)); //true\n                console.log(['1', '2', '3'].includes(3)); //false\n                "}),(0,o.jsx)(l.Z.H1,{children:"indexOf()"}),(0,o.jsx)(l.Z.P,{children:"`indexOf()`\u65b9\u6cd5\u8fd4\u56de\u6570\u7ec4\u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0\u7ed9\u5b9a\u5143\u7d20\u7684\u4e0b\u6807\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8fd4\u56de`-1`\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                arr.indexOf(searchElement)\n                arr.indexOf(searchElement, fromIndex) //\u5f00\u59cb\u641c\u7d22\u7684\u7d22\u5f15\n                "}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [0, 1, 2, 3, 2];\n                console.log(arr.indexOf(2)); //2\n                console.log(arr.indexOf(2, 3)); //4\n                console.log(arr.indexOf(9)); //-1\n                "}),(0,o.jsx)(l.Z.H2,{children:"lastIndexOf()"}),(0,o.jsx)(l.Z.P,{children:"`lastIndexOf()`\u65b9\u6cd5\u8fd4\u56de\u6570\u7ec4\u4e2d\u7ed9\u5b9a\u5143\u7d20\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u7684\u7d22\u5f15\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8fd4\u56de`-1`\u3002\u8be5\u65b9\u6cd5\u4ece`fromIndex`\u5f00\u59cb\u5411\u524d\u641c\u7d22\u6570\u7ec4\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                arr.lastIndexOf(searchElement)\n                arr.lastIndexOf(searchElement, fromIndex) //\u5f00\u59cb\u641c\u7d22\u7684\u7d22\u5f15\n                "}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [0, 1, 2, 3, 2];\n                console.log(arr.lastIndexOf(2)); //4\n                console.log(arr.lastIndexOf(2, 3)); //2\n                console.log(arr.lastIndexOf(9)); //-1\n                "}),(0,o.jsx)(l.Z.H1,{children:"join()"}),(0,o.jsx)(l.Z.P,{children:"`join()`\u65b9\u6cd5\u5c06\u4e00\u4e2a\u6570\u7ec4\u7684\u6240\u6709\u5143\u7d20\u8fde\u63a5\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u8fd9\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u9017\u53f7\u6216\u6307\u5b9a\u7684\u5206\u9694\u7b26\u5b57\u7b26\u4e32\u5206\u9694\u3002\u5982\u679c\u6570\u7ec4\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\u5c06\u8fd4\u56de\u8be5\u5143\u7d20\u800c\u4e0d\u4f7f\u7528\u5206\u9694\u7b26\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const elements = ['Fire', 'Air', 'Water'];\n                console.log(elements.join()); //Fire,Air,Water\n                console.log(elements.join('')); //FireAirWater\n                console.log(elements.join('-')); //Fire-Air-Water\n                "}),(0,o.jsx)(l.Z.H1,{children:"map()"}),(0,o.jsx)(l.Z.P,{children:"`map()`\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a*\u65b0\u6570\u7ec4*\uff0c\u8fd9\u4e2a\u65b0\u6570\u7ec4\u7531\u539f\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u8c03\u7528\u4e00\u6b21\u63d0\u4f9b\u7684\u51fd\u6570\u540e\u7684\u8fd4\u56de\u503c\u7ec4\u6210\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"arr.map(callbackFn)"}),(0,o.jsx)(l.Z.P,{noMarginBottom:!0,children:"`callbackFn`\u4e3a\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u7684\u51fd\u6570\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u4e00\u4e2a\u5143\u7d20\u88ab\u6dfb\u52a0\u4e3a\u65b0\u6570\u7ec4\u4e2d\u3002\u8be5\u51fd\u6570\u88ab\u8c03\u7528\u65f6\u5c06\u4f20\u5165\u4ee5\u4e0b\u53c2\u6570\uff1a"}),(0,o.jsx)(l.Z.Uli,{children:"`value`\uff1a\u6570\u7ec4\u4e2d\u6b63\u5728\u5904\u7406\u7684\u5f53\u524d\u5143\u7d20"}),(0,o.jsx)(l.Z.Uli,{children:"`index`\uff1a\u6570\u7ec4\u4e2d\u6b63\u5728\u5904\u7406\u7684\u5f53\u524d\u5143\u7d20\u7684\u7d22\u5f15"}),(0,o.jsx)(l.Z.Uli,{children:"`array`\uff1a\u8c03\u7528\u4e86`map()`\u7684\u6570\u7ec4\u672c\u8eab"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const numbers = [1, 4, 9];\n                const roots = numbers.map((num) => Math.sqrt(num));\n\n                console.log(numbers); //[1, 4, 9]\n                console.log(roots); //[1, 2, 3]\n                "}),(0,o.jsx)(l.Z.H1,{children:"pop()\u548cpush()"}),(0,o.jsx)(l.Z.P,{children:"`pop()`\u65b9\u6cd5\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u8be5\u5143\u7d20\u7684\u503c\u3002\u6b64\u65b9\u6cd5\u4f1a\u66f4\u6539\u6570\u7ec4\u7684\u957f\u5ea6\u3002\\n `push()`\u65b9\u6cd5\u5c06\u6307\u5b9a\u7684\u5143\u7d20\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u672b\u5c3e\uff0c\u5e76\u8fd4\u56de\u65b0\u7684\u6570\u7ec4\u957f\u5ea6\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 2, 3];\n\n                arr.push(50);\n                const res1 = arr.push(98, 99);\n                console.log(res1, arr); //6 [1, 2, 3, 50, 98, 99]\n\n                const res2 = arr.pop();\n                console.log(res2, arr); //99 [1, 2, 3, 50, 98]\n\n                console.log([].pop()); //undefined\n                "}),(0,o.jsx)(l.Z.H1,{children:"reduce()"}),(0,o.jsx)(l.Z.P,{children:"`reduce()`\u65b9\u6cd5\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u6309\u5e8f\u6267\u884c\u4e00\u4e2a\u63d0\u4f9b\u7684`reducer`\u51fd\u6570\uff0c\u6bcf\u4e00\u6b21\u8fd0\u884c`reducer`\u4f1a\u5c06\u5148\u524d\u5143\u7d20\u7684\u8ba1\u7b97\u7ed3\u679c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u6700\u540e\u5c06\u5176\u7ed3\u679c\u6c47\u603b\u4e3a\u5355\u4e2a\u8fd4\u56de\u503c\u3002"}),(0,o.jsx)(l.Z.P,{children:"\u7b2c\u4e00\u6b21\u6267\u884c\u56de\u8c03\u51fd\u6570\u65f6\uff0c\u4e0d\u5b58\u5728\u201c\u4e0a\u4e00\u6b21\u7684\u8ba1\u7b97\u7ed3\u679c\u201d\u3002\u5982\u679c\u9700\u8981\u56de\u8c03\u51fd\u6570\u4ece\u6570\u7ec4\u7d22\u5f15\u4e3a`0`\u7684\u5143\u7d20\u5f00\u59cb\u6267\u884c\uff0c\u5219\u9700\u8981\u4f20\u9012\u521d\u59cb\u503c\u3002--- \u5426\u5219\uff0c\u6570\u7ec4\u7d22\u5f15\u4e3a`0`\u7684\u5143\u7d20\u5c06\u88ab\u7528\u4f5c\u521d\u59cb\u503c\uff0c\u8fed\u4ee3\u5668\u5c06\u4ece\u7d22\u5f15\u4e3a`1`\u7684\u5143\u7d20\u5f00\u59cb\u6267\u884c\u3002\\n \u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528`reduce()`\u7684\u4f8b\u5b50\uff0c\u8ba1\u7b97\u6570\u7ec4\u6240\u6709\u5143\u7d20\u7684\u603b\u548c\uff1a"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 2, 3, 4];\n                const initialValue = 7;\n                const sum = arr.reduce((sum, currentValue) => sum + currentValue, initialValue);\n                console.log(sum); //17\n                "}),(0,o.jsx)(l.Z.H2,{children:"\u4f7f\u7528 .reduce() \u66ff\u4ee3 .filter().map()"}),(0,o.jsx)(l.Z.P,{children:"\u4f7f\u7528`filter()`\u548c`map()`\u4f1a\u904d\u5386\u6570\u7ec4\u4e24\u6b21\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u4f7f\u7528`reduce()`\u53ea\u904d\u5386\u4e00\u6b21\u5e76\u5b9e\u73b0\u76f8\u540c\u7684\u6548\u679c\u3002\\n \u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5e0c\u671b\u7b5b\u9009\u51fa\u6570\u7ec4\u4e2d\u7684\u6b63\u6570\u5e76\u5c06\u5176\u4e58`2`\uff1a"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const numbers = [-5, 6, 2, -1];\n\n                console.log(\n                    numbers.filter((n) => n > 0).map((n) => n * 2)\n                ); //[12, 4]\n\n                console.log(\n                    numbers.reduce((result, n) => (n > 0 ? [...result, n * 2] : result), [])\n                ); //[12, 4]\n                "}),(0,o.jsx)(l.Z.H1,{children:"reverse()"}),(0,o.jsx)(l.Z.P,{children:"`reverse()`\u65b9\u6cd5\u53cd\u8f6c\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u540c\u4e00\u6570\u7ec4\u7684\u5f15\u7528\u3002\\n\u6539\u53d8\u8fd4\u56de\u7684\u6570\u7ec4\u4e5f\u4f1a\u6539\u53d8\u539f\u59cb\u6570\u7ec4\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 2, 3];\n\n                const res = arr.reverse();\n                console.log(arr); //[3, 2, 1]\n\n                res[0] = 99;\n                console.log(res, arr); //[99, 2, 1] [99, 2, 1]\n                "}),(0,o.jsx)(l.Z.P,{children:"\u5982\u679c\u5e0c\u671b`reverse()`\u4e0d\u6539\u53d8\u539f\u59cb\u6570\u7ec4\uff0c\u53ef\u4ee5\u5728\u8c03\u7528\u4e4b\u524d\u505a\u4e00\u4e2a\u6d45\u62f7\u8d1d\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 2, 3];\n\n                const res = [...arr].reverse(); //\u5728\u8c03\u7528\u4e4b\u524d\u505a\u6d45\u62f7\u8d1d\n                console.log(arr); //[1, 2, 3]\n\n                res[0] = 99;\n                console.log(res, arr); //[99, 2, 1] [1, 2, 3]\n                "}),(0,o.jsx)(l.Z.H1,{children:"shift()\u548cunshift()"}),(0,o.jsx)(l.Z.P,{children:"`shift()`\u65b9\u6cd5\u4ece\u6570\u7ec4\u4e2d\u5220\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u8be5\u5143\u7d20\u7684\u503c\u3002\u6b64\u65b9\u6cd5\u4f1a\u66f4\u6539\u6570\u7ec4\u7684\u957f\u5ea6\u3002\\n `unshift()`\u65b9\u6cd5\u5c06\u6307\u5b9a\u5143\u7d20\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u5f00\u5934\uff0c\u5e76\u8fd4\u56de\u65b0\u7684\u6570\u7ec4\u957f\u5ea6\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [1, 2, 3];\n\n                arr.unshift(50);\n                const res1 = arr.unshift(98, 99);\n                console.log(res1, arr); //6 [98, 99, 50, 1, 2, 3]\n\n                const res2 = arr.shift();\n                console.log(res2, arr); //98 [99, 50, 1, 2, 3]\n\n                console.log([].shift()); //undefined\n                "}),(0,o.jsx)(l.Z.H1,{children:"slice()"}),(0,o.jsx)(l.Z.P,{children:"`slice()`\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e3a\u539f\u6570\u7ec4\u7684\u4e00\u6bb5\uff0c\u5305\u62ec`start`\uff0c\u4e0d\u5305\u62ec`end`\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                arr.slice()\n                arr.slice(start)\n                arr.slice(start, end)\n                "}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [0, 1, 2, 3, 4, 5];\n\n                console.log(arr.slice()); //[0, 1, 2, 3, 4, 5]\n                console.log(arr.slice(2)); //[2, 3, 4, 5]\n                console.log(arr.slice(2, 4)); //[2, 3]\n\n                //\u652f\u6301\u8d1f\u6570\u7d22\u5f15\n                console.log(arr.slice(-2)); //[4, 5]\n                console.log(arr.slice(-6, 4)); //[[0, 1, 2, 3]\n                console.log(arr.slice(-5, -1)); //[1, 2, 3, 4]\n\n                //end\u8d85\u51fa\u8303\u56f4\u4f1a\u63d0\u53d6\u6240\u6709\u5143\u7d20\u76f4\u5230\u672b\u5c3e\n                console.log(arr.slice(-5, 99)); //[1, 2, 3, 4, 5]\n                "}),(0,o.jsx)(l.Z.H1,{children:"sort()"}),(0,o.jsx)(l.Z.P,{children:"`sort()`\u65b9\u6cd5*\u5c31\u5730*\u5bf9\u6570\u7ec4\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u8fd4\u56de\u5bf9\u76f8\u540c\u6570\u7ec4\u7684\u5f15\u7528\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                arr.sort()\n                arr.sort(compareFn)\n                "}),(0,o.jsx)(l.Z.HighlightBlock,{bgcolor:"red",children:(0,o.jsx)(l.Z.P,{children:"\u5982\u679c\u7701\u7565`compareFn`\uff0c\u6570\u7ec4\u5143\u7d20\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u6839\u636e\u6bcf\u4e2a\u5b57\u7b26\u7684Unicode\u7801\u4f4d\u503c\u8fdb\u884c\u6392\u5e8f\u3002"})}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr1 = [2, 5, 14, 8, 1];\n                const arr2 = arr1.sort();\n\n                console.log(arr1); //[1, 14, 2, 5, 8]\n                arr2[0] = 99;\n                console.log(arr1); //[99, 14, 2, 5, 8]\n\n                arr1.sort((a, b) => a - b);\n                console.log(arr1); //[2, 5, 8, 14, 99]\n                "}),(0,o.jsx)(l.Z.H1,{children:"splice()"}),(0,o.jsx)(l.Z.P,{children:"`splice()`\u65b9\u6cd5\u901a\u8fc7\u79fb\u9664\u6216\u8005\u66ff\u6362\u5df2\u5b58\u5728\u7684\u5143\u7d20\u548c/\u6216\u6dfb\u52a0\u65b0\u5143\u7d20*\u5c31\u5730*\u6539\u53d8\u4e00\u4e2a\u6570\u7ec4\u7684\u5185\u5bb9\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                arr.splice(start)\n                arr.splice(start, deleteCount)\n                arr.splice(start, deleteCount, item1)\n                arr.splice(start, deleteCount, item1, item2, itemN)\n                "}),(0,o.jsx)(l.Z.P,{noMarginBottom:!0,children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),(0,o.jsx)(l.Z.Uli,{children:"`start`\uff1a\u8868\u793a\u8981\u5f00\u59cb\u6539\u53d8\u6570\u7ec4\u7684\u4f4d\u7f6e"}),(0,o.jsx)(l.Z.Uli,{children:"`deleteCount`\uff1a\u6570\u7ec4\u4e2d\u8981\u4ece`start`\u5f00\u59cb\u5220\u9664\u7684\u5143\u7d20\u6570\u91cf"}),(0,o.jsx)(l.Z.Uli,{children:"`item1 ... itemN`\uff1a\u4ece`start`\u5f00\u59cb\u8981\u52a0\u5165\u5230\u6570\u7ec4\u4e2d\u7684\u5143\u7d20"}),(0,o.jsx)(l.Z.P,{children:"\u5982\u679c\u7701\u7565\u4e86`deleteCount`\uff0c\u6216\u8005\u5176\u503c\u5927\u4e8e\u6216\u7b49\u4e8e\u7531`start`\u6307\u5b9a\u7684\u4f4d\u7f6e\u5230\u6570\u7ec4\u672b\u5c3e\u7684\u5143\u7d20\u6570\u91cf\uff0c\u90a3\u4e48\u4ece`start`\u5230\u6570\u7ec4\u672b\u5c3e\u7684\u6240\u6709\u5143\u7d20\u5c06\u88ab\u5220\u9664\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];\n\n                arr.splice(6);\n                console.log(arr); //[0, 1, 2, 3, 4, 5]\n\n                arr.splice(2, 2);\n                console.log(arr); //[0, 1, 4, 5]\n\n                arr.splice(1, 2, 'a');\n                console.log(arr); //[0, 'a', 5]\n\n                arr.splice(0, 0, 'hello', 'world');\n                console.log(arr); //['hello', 'world', 0, 'a', 5]\n                "}),(0,o.jsx)(l.Z.H1,{children:"Array.isArray()"}),(0,o.jsx)(l.Z.P,{children:"`Array.isArray()`\u9759\u6001\u65b9\u6cd5\u7528\u4e8e\u786e\u5b9a\u4f20\u9012\u7684\u503c\u662f\u5426\u662f\u4e00\u4e2a`Array`\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                console.log(Array.isArray([1, 2, 3])); //true\n                console.log(Array.isArray('123')); //false\n                "}),(0,o.jsx)(l.Z.P,{children:"\u66f4\u591a\u793a\u4f8b\uff1a`@Array.isArray()[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray]@`"}),(0,o.jsx)(l.Z.H1,{children:"Array.from()"}),(0,o.jsx)(l.Z.P,{children:"`Array.from()`\u9759\u6001\u65b9\u6cd5\u4ece\u53ef\u8fed\u4ee3\u6216\u7c7b\u6570\u7ec4\u5bf9\u8c61\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6d45\u62f7\u8d1d\u7684\u6570\u7ec4\u5b9e\u4f8b\u3002\\n \u8f6c\u6362\u5f02\u6b65\u7684\u53ef\u8fed\u4ee3\u5bf9\u8c61\u5230\u6570\u7ec4\uff0c\u53ef\u4ee5\u4f7f\u7528`@Array.fromAsync()[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync]@`\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                console.log(Array.from('hello')); //['h', 'e', 'l', 'l', 'o']\n                console.log(Array.from([1, 2, 3], (x) => x * x)); //[1, 4, 9]\n                "}),(0,o.jsx)(l.Z.P,{noMarginBottom:!0,children:"`Array.from()`\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u521b\u5efa\u6570\u7ec4\u5bf9\u8c61\uff1a"}),(0,o.jsx)(l.Z.Uli,{children:"\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff08\u4f8b\u5982`@Map[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map]@`\u548c`@Set[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set]@`\u5bf9\u8c61\uff09"}),(0,o.jsx)(l.Z.Uli,{children:"\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff08\u5e26\u6709`length`\u5c5e\u6027\u548c\u7d22\u5f15\u5143\u7d20\u7684\u5bf9\u8c61\uff09"}),(0,o.jsx)(l.Z.H1,{children:"Array.of()"}),(0,o.jsx)(l.Z.P,{children:"`Array.of()`\u9759\u6001\u65b9\u6cd5\u901a\u8fc7\u53ef\u53d8\u6570\u91cf\u7684\u53c2\u6570\u521b\u5efa\u4e00\u4e2a\u65b0\u7684`Array`\u5b9e\u4f8b\u3002\\n `Array()`\u6784\u9020\u51fd\u6570\u4f1a\u56e0\u4e3a\u53c2\u6570\u6570\u91cf\u4e0d\u540c\u5bfc\u81f4\u91cd\u8f7d\uff0c`Array.of()`\u884c\u4e3a\u66f4\u52a0\u7edf\u4e00\u3002"}),(0,o.jsx)(l.Z.CodeBlock,{language:"js",code:"\n                console.log(Array(5)); //[<5 empty items>]\n                console.log(Array(98, 99)); //[98, 99]\n\n                console.log(Array.of(5)); //[5]\n                console.log(Array.of(98, 99)); //[98, 99]\n                "})]})}},8433:(e,n,r)=>{r.d(n,{Z:()=>Z});var l={};r.r(l),r.d(l,{Br:()=>x,Divider:()=>g,H1:()=>i,H2:()=>t,H3:()=>d,Title:()=>a});var o=r(7313),s=r(7575),c=r(6417);function a(e){const{children:n}=e;return(0,o.useLayoutEffect)((()=>{document.title=n}),[n]),(0,c.jsx)("h1",{className:"x-title",children:n})}function i(e){const{href:n,excludeFromContents:r,children:l}=e,a=(0,o.useRef)(),{setTitleNodeRefs:i,removeTitleNodeRefs:t}=(0,s.b)();return(0,o.useLayoutEffect)((()=>{if(!r)return i((e=>[...e,a])),()=>t(a)}),[l,r]),(0,c.jsx)("h2",{className:"x-h1",ref:a,children:n?(0,c.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:l}):l})}function t(e){const{href:n,excludeFromContents:r,children:l}=e,a=(0,o.useRef)(),{setTitleNodeRefs:i,removeTitleNodeRefs:t}=(0,s.b)();return(0,o.useLayoutEffect)((()=>{if(!r)return i((e=>[...e,a])),()=>t(a)}),[l,r]),(0,c.jsx)("h3",{className:"x-h2",ref:a,children:n?(0,c.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:l}):l})}function d(e){const{href:n,children:r}=e;return(0,c.jsx)("h4",{className:"x-h3",children:n?(0,c.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:r}):r})}function x(){return(0,c.jsx)("div",{className:"x-br"})}function g(){return(0,c.jsx)("div",{className:"x-divider"})}var h=r(9803),u=r.n(h);var j=r(2038);function f(e){const{withMarginTop:n=!1,noMarginBottom:r=!1,children:l=""}=e;let o=Array.isArray(l)?l.join(""):l;return o=o.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,((e,n)=>j.Z.renderToString(n,{output:"html",strict:!1}))),(0,c.jsx)("p",{className:"x-p".concat(n?" with-margin-top":"").concat(r?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:o}})}function m(e){return"string"===typeof e||!!Array.isArray(e)&&e.every((e=>"string"===typeof e))}const Z={...l,CodeBlock:function(e){const n=(0,o.useRef)(),{language:r,code:l,highlightLines:s}=e;let a=l.split("\n").map((e=>e.trimRight()));a[0]||(a=a.slice(1));const i=a[0].length-a[0].trimStart().length;a=a.map((e=>e.slice(i)));const t="linear-gradient(180deg"+(s?s.split(",").map((e=>e.includes("-")?[e.split("-")[0]-1,+e.split("-")[1]]:[e-1,+e])):[]).map((e=>{let[n,r]=e;return", transparent ".concat(24*n,"px, ")+"var(--bg-transparent-golden) ".concat(24*n,"px ").concat(24*r,"px, ")+"transparent ".concat(24*r,"px")})).join("")+")";return(0,o.useLayoutEffect)((()=>{u().highlightElement(n.current)}),[l]),(0,c.jsx)("div",{className:"x-codeblock",children:(0,c.jsx)("pre",{style:{background:s?t:null},children:(0,c.jsx)("code",{className:r&&"lang-".concat(r),ref:n,children:a.join("\n")})})})},FlexRow:function(e){const{children:n,width:r,gap:l,justifyContent:o,alignItems:s,flex1:a}=e;return(0,c.jsx)("div",{className:"x-flexrow".concat(a?" flex1":""),style:{width:r,gap:l,justifyContent:o,alignItems:s},children:n})},Formula:function(e){const n=(0,o.useRef)(),{text:r=""}=e;return(0,o.useLayoutEffect)((()=>{j.Z.render(r,n.current,{output:"html",strict:!1})}),[r]),(0,c.jsx)("div",{className:"x-formula",ref:n})},HighlightBlock:function(e){const{children:n,bgcolor:r="golden"}=e;return(0,c.jsx)("div",{className:"x-highlightblock".concat(" highlight-background-"+r),children:n})},Image:function(e){const{invertInDarkTheme:n,...r}=e;return(0,c.jsx)("div",{className:"x-image-wrapper".concat(n?" x-image-invert":""),children:(0,c.jsx)("img",{alt:"img",loading:"lazy",...r})})},Uli:function(e){const{children:n}=e;return(0,c.jsxs)("div",{className:"x-uli",children:[(0,c.jsx)("div",{className:"x-uli-marker",children:(0,c.jsx)("div",{className:"x-uli-marker-dot"})}),(0,c.jsx)("div",{className:"x-uli-content-wrapper",children:m(n)?(0,c.jsx)(f,{children:n}):n})]})},Oli:function(e){const{reset:n,children:r}=e,{addOliIndex:l,resetOliIndex:o}=(0,s.b)();return(0,c.jsxs)("div",{className:"x-oli",children:[(0,c.jsx)("div",{className:"x-oli-number",children:(void 0!==n?o(+n):l())+"."}),(0,c.jsx)("div",{className:"x-oli-content-wrapper",children:m(r)?(0,c.jsx)(f,{children:r}):r})]})},P:f,Table:function(e){const{fromText:n,children:r}=e;if(n){const e=n.trim().split("\n");return(0,c.jsx)("table",{className:"x-table",children:(0,c.jsx)("tbody",{children:e.map(((e,n)=>(0,c.jsx)("tr",{children:e.trim().split("|").map(((e,r)=>n?(0,c.jsx)("td",{children:e},r):(0,c.jsx)("th",{children:e},r)))},n)))})})}return(0,c.jsx)("table",{className:"x-table",children:(0,c.jsx)("tbody",{children:r})})}}}}]);