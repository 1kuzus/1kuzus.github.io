import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/23c/js-array/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>at()</X.H1>
            <X.P>`at()`方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [5, 12, 8, 130, 44];
                console.log(arr[2]); //8
                console.log(arr.at(2)); //8
                console.log(arr.at(-1)); //44
                `}
            />
            <X.H1>concat()</X.H1>
            <X.P>`concat()`方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr1 = [1, 2, 3];
                const arr2 = ['a', 'b', 'c'];
                const arr3 = arr1.concat(99, arr2);

                arr1[0] = 5; //不会影响arr3
                console.log(arr3); //[1, 2, 3, 99, 'a', 'b', 'c']
                `}
            />
            <X.H1>every()</X.H1>
            <X.P>`every()`方法测试一个数组内的所有元素是否都能通过指定函数的测试，返回一个布尔值。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr1 = [1, 30, 39, 29, 10, 13];
                const arr2 = [1, 30, 39, 88];
                const isBelow50 = (num) => num < 50;

                console.log(arr1.every(isBelow50)); //true
                console.log(arr2.every(isBelow50)); //false
                `}
            />
            <X.H1>some()</X.H1>
            <X.P>`some()`方法测试数组中是否至少有一个元素能通过指定函数的测试，返回一个布尔值。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr1 = [1, 30, 39, 29, 10, 13];
                const arr2 = [1, 30, 39, 88];
                const isOver80 = (num) => num > 80;

                console.log(arr1.some(isOver80)); //false
                console.log(arr2.some(isOver80)); //true
                `}
            />
            <X.H1>fill()</X.H1>
            <X.P>`fill()`方法用一个固定值填充数组中从起始索引（默认为`0`）到终止索引（默认为`array.length`）内的全部元素，返回修改后的数组。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 2, 3, 4, 5];

                // fill(value)
                console.log(arr.fill(9)); //[9, 9, 9, 9, 9]

                // fill(value, start)
                console.log(arr.fill('a', 2)); //[ 9, 9, 'a', 'a', 'a']

                arr[0] = 1;

                // fill(value, start, end)
                console.log(arr.fill('b', 1, 3)); //[1, 'b', 'b', 'a', 'a']
                `}
            />
            <X.H2>创建指定长度和内容的数组</X.H2>
            <X.CodeBlock
                language="js"
                code={`
                function getArray(len, val) {
                    return Array(len).fill(val);
                }

                console.log(getArray(3, 'some value')); //['some value', 'some value', 'some value']
                `}
            />
            <X.H1>filter()</X.H1>
            <X.P>`filter()`方法用一个固定值填充数组中从起始索引（默认为`0`）到终止索引（默认为`array.length`）内的全部元素，返回修改后的数组。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 5, 7, 13, 45, 66];
                console.log(arr.filter((i) => i > 10)); //[13, 45, 66]
                `}
            />
            <X.H1>find系列</X.H1>
            <X.Uli>`find()`方法返回数组中满足提供的测试函数的第一个元素的值。否则返回`undefined`。</X.Uli>
            <X.Uli>`findIndex()`方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回`-1`。</X.Uli>
            <X.Uli>`findLast()`方法反向迭代数组，并返回满足提供的测试函数的第一个元素的值。如果没有找到对应元素，则返回`undefined`。</X.Uli>
            <X.Uli>`findLastIndex()`方法反向迭代数组，并返回满足所提供的测试函数的第一个元素的索引。若没有找到对应元素，则返回`-1`。</X.Uli>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 15, 7, 33, 5, 66, 47, 9, 5];
                const cond = (x) => x > 30;

                console.log(arr.find(cond)); //33
                console.log(arr.findIndex(cond)); //3
                console.log(arr.findLast(cond)); //47
                console.log(arr.findLastIndex(cond)); //6
                `}
            />
            <X.H1>flat()</X.H1>
            <X.P>`flat()`方法创建一个新的数组，并根据指定深度递归地将所有子数组元素拼接到新的数组中。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 2, ['a', 'b', [88, 99, ['xx', 'yy']]], 3];

                console.log(arr.flat());         //[1, 2, 'a', 'b', [88, 99, ['xx', 'yy']], 3]
                console.log(arr.flat(2));        //[1, 2, 'a', 'b', 88, 99, ['xx', 'yy'], 3]
                console.log(arr.flat(Infinity)); //[1, 2, 'a', 'b', 88, 99, 'xx', 'yy', 3]
                `}
            />
            <X.H1>forEach()</X.H1>
            <X.P>`forEach()`方法对数组的每个元素执行一次给定的函数。</X.P>
            <X.CodeBlock language="js" code="arr.forEach(callbackFn)" />
            <X.P>`callbackFn`为数组中每个元素执行的函数，并会丢弃它的返回值。该函数被调用时将传入以下参数：</X.P>
            <X.Uli>`value`：数组中正在处理的当前元素</X.Uli>
            <X.Uli>`index`：数组中正在处理的当前元素的索引</X.Uli>
            <X.Uli>`array`：调用了`forEach()`的数组本身</X.Uli>
            <X.CodeBlock
                language="js"
                code={`
                const arr = ['a', 'b', 'c'];

                arr.forEach((value, index, array) => console.log(value, index, array));
                // a 0 ['a', 'b', 'c']
                // b 1 ['a', 'b', 'c']
                // c 2 ['a', 'b', 'c']
                `}
            />
            <X.H1>includes()</X.H1>
            <X.P>`includes()`方法用来判断一个数组是否包含一个指定的值。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                arr.includes(searchElement)
                arr.includes(searchElement, fromIndex) //开始搜索的索引
                `}
            />
            <X.CodeBlock
                language="js"
                code={`
                console.log([1, 2, 3].includes(2)); //true
                console.log([1, 2, 3].includes(4)); //false
                console.log([1, 2, 3].includes(1, 2)); //false

                //负索引从数组末尾开始计数,但仍然从前往后进行搜索
                console.log([1, 2, 3].includes(3, -2)); //true

                console.log([1, 2, NaN].includes(NaN)); //true
                console.log(['1', '2', '3'].includes(3)); //false
                `}
            />
            <X.H1>indexOf()</X.H1>
            <X.P>`indexOf()`方法返回数组中第一次出现给定元素的下标，如果不存在则返回`-1`。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                arr.indexOf(searchElement)
                arr.indexOf(searchElement, fromIndex) //开始搜索的索引
                `}
            />
            <X.CodeBlock
                language="js"
                code={`
                const arr = [0, 1, 2, 3, 2];
                console.log(arr.indexOf(2)); //2
                console.log(arr.indexOf(2, 3)); //4
                console.log(arr.indexOf(9)); //-1
                `}
            />
            <X.H2>lastIndexOf()</X.H2>
            <X.P>`lastIndexOf()`方法返回数组中给定元素最后一次出现的索引，如果不存在则返回`-1`。该方法从`fromIndex`开始向前搜索数组。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                arr.lastIndexOf(searchElement)
                arr.lastIndexOf(searchElement, fromIndex) //开始搜索的索引
                `}
            />
            <X.CodeBlock
                language="js"
                code={`
                const arr = [0, 1, 2, 3, 2];
                console.log(arr.lastIndexOf(2)); //4
                console.log(arr.lastIndexOf(2, 3)); //2
                console.log(arr.lastIndexOf(9)); //-1
                `}
            />
            <X.H1>join()</X.H1>
            <X.P>`join()`方法将一个数组的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const elements = ['Fire', 'Air', 'Water'];
                console.log(elements.join()); //Fire,Air,Water
                console.log(elements.join('')); //FireAirWater
                console.log(elements.join('-')); //Fire-Air-Water
                `}
            />
            <X.H1>map()</X.H1>
            <X.P>`map()`方法创建一个*新数组*，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。</X.P>
            <X.CodeBlock language="js" code="arr.map(callbackFn)" />
            <X.P>`callbackFn`为数组中每个元素执行的函数，它的返回值作为一个元素被添加为新数组中。该函数被调用时将传入以下参数：</X.P>
            <X.Uli>`value`：数组中正在处理的当前元素</X.Uli>
            <X.Uli>`index`：数组中正在处理的当前元素的索引</X.Uli>
            <X.Uli>`array`：调用了`map()`的数组本身</X.Uli>
            <X.CodeBlock
                language="js"
                code={`
                const numbers = [1, 4, 9];
                const roots = numbers.map((num) => Math.sqrt(num));

                console.log(numbers); //[1, 4, 9]
                console.log(roots); //[1, 2, 3]
                `}
            />
            <X.H1>pop()和push()</X.H1>
            <X.P>`pop()`方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。\n`push()`方法将指定的元素添加到数组的末尾，并返回新的数组长度。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 2, 3];

                arr.push(50);
                const res1 = arr.push(98, 99);
                console.log(res1, arr); //6 [1, 2, 3, 50, 98, 99]

                const res2 = arr.pop();
                console.log(res2, arr); //99 [1, 2, 3, 50, 98]

                console.log([].pop()); //undefined
                `}
            />
            <X.H1>reduce()</X.H1>
            <X.P>`reduce()`方法对数组中的每个元素按序执行一个提供的`reducer`函数，每一次运行`reducer`会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。</X.P>
            <X.P>第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为`0`的元素开始执行，则需要传递初始值。否则，数组索引为`0`的元素将被用作初始值，迭代器将从索引为`1`的元素开始执行。\n下面是一个使用`reduce()`的例子，计算数组所有元素的总和：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 2, 3, 4];
                const initialValue = 7;
                const sum = arr.reduce((sum, currentValue) => sum + currentValue, initialValue);
                console.log(sum); //17
                `}
            />
            <X.H2>使用 .reduce() 替代 .filter().map()</X.H2>
            <X.P>使用`filter()`和`map()`会遍历数组两次，但是你可以使用`reduce()`只遍历一次并实现相同的效果。\n下面这个例子中，希望筛选出数组中的正数并将其乘`2`：</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const numbers = [-5, 6, 2, -1];

                console.log(
                    numbers.filter((n) => n > 0).map((n) => n * 2)
                ); //[12, 4]

                console.log(
                    numbers.reduce((result, n) => (n > 0 ? [...result, n * 2] : result), [])
                ); //[12, 4]
                `}
            />
            <X.H1>reverse()</X.H1>
            <X.P>`reverse()`方法反转数组中的元素，并返回同一数组的引用。\n改变返回的数组也会改变原始数组。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 2, 3];

                const res = arr.reverse();
                console.log(arr); //[3, 2, 1]

                res[0] = 99;
                console.log(res, arr); //[99, 2, 1] [99, 2, 1]
                `}
            />
            <X.P>如果希望`reverse()`不改变原始数组，可以在调用之前做一个浅拷贝。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 2, 3];

                const res = [...arr].reverse(); //在调用之前做浅拷贝
                console.log(arr); //[1, 2, 3]

                res[0] = 99;
                console.log(res, arr); //[99, 2, 1] [1, 2, 3]
                `}
            />
            <X.H1>shift()和unshift()</X.H1>
            <X.P>`shift()`方法从数组中删除第一个元素，并返回该元素的值。此方法会更改数组的长度。\n`unshift()`方法将指定元素添加到数组的开头，并返回新的数组长度。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 2, 3];

                arr.unshift(50);
                const res1 = arr.unshift(98, 99);
                console.log(res1, arr); //6 [98, 99, 50, 1, 2, 3]

                const res2 = arr.shift();
                console.log(res2, arr); //98 [99, 50, 1, 2, 3]

                console.log([].shift()); //undefined
                `}
            />
            <X.H1>slice()</X.H1>
            <X.P>`slice()`方法返回一个新的数组对象，该对象为原数组的一段，包括`start`，不包括`end`。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                arr.slice()
                arr.slice(start)
                arr.slice(start, end)
                `}
            />
            <X.CodeBlock
                language="js"
                code={`
                const arr = [0, 1, 2, 3, 4, 5];

                console.log(arr.slice()); //[0, 1, 2, 3, 4, 5]
                console.log(arr.slice(2)); //[2, 3, 4, 5]
                console.log(arr.slice(2, 4)); //[2, 3]

                //支持负数索引
                console.log(arr.slice(-2)); //[4, 5]
                console.log(arr.slice(-6, 4)); //[[0, 1, 2, 3]
                console.log(arr.slice(-5, -1)); //[1, 2, 3, 4]

                //end超出范围会提取所有元素直到末尾
                console.log(arr.slice(-5, 99)); //[1, 2, 3, 4, 5]
                `}
            />
            <X.H1>sort()</X.H1>
            <X.P>`sort()`方法*就地*对数组的元素进行排序，并返回对相同数组的引用。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                arr.sort()
                arr.sort(compareFn)
                `}
            />
            <X.HighlightBlock background="red">
                <X.P>如果省略`compareFn`，数组元素会被转换为字符串，然后根据每个字符的Unicode码位值进行排序。</X.P>
            </X.HighlightBlock>
            <X.CodeBlock
                language="js"
                code={`
                const arr1 = [2, 5, 14, 8, 1];
                const arr2 = arr1.sort();

                console.log(arr1); //[1, 14, 2, 5, 8]
                arr2[0] = 99;
                console.log(arr1); //[99, 14, 2, 5, 8]

                arr1.sort((a, b) => a - b);
                console.log(arr1); //[2, 5, 8, 14, 99]
                `}
            />
            <X.H1>splice()</X.H1>
            <X.P>`splice()`方法通过移除或者替换已存在的元素和/或添加新元素*就地*改变一个数组的内容。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                arr.splice(start)
                arr.splice(start, deleteCount)
                arr.splice(start, deleteCount, item1)
                arr.splice(start, deleteCount, item1, item2, itemN)
                `}
            />
            <X.P>参数说明：</X.P>
            <X.Uli>`start`：表示要开始改变数组的位置</X.Uli>
            <X.Uli>`deleteCount`：数组中要从`start`开始删除的元素数量</X.Uli>
            <X.Uli>`item1 ... itemN`：从`start`开始要加入到数组中的元素</X.Uli>
            <X.P>如果省略了`deleteCount`，或者其值大于或等于由`start`指定的位置到数组末尾的元素数量，那么从`start`到数组末尾的所有元素将被删除。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

                arr.splice(6);
                console.log(arr); //[0, 1, 2, 3, 4, 5]

                arr.splice(2, 2);
                console.log(arr); //[0, 1, 4, 5]

                arr.splice(1, 2, 'a');
                console.log(arr); //[0, 'a', 5]

                arr.splice(0, 0, 'hello', 'world');
                console.log(arr); //['hello', 'world', 0, 'a', 5]
                `}
            />
            <X.H1>Array.isArray()</X.H1>
            <X.P>`Array.isArray()`静态方法用于确定传递的值是否是一个`Array`。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                console.log(Array.isArray([1, 2, 3])); //true
                console.log(Array.isArray('123')); //false
                `}
            />
            <X.P>更多示例：`@Array.isArray()[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray]@`</X.P>
            <X.H1>Array.from()</X.H1>
            <X.P>`Array.from()`静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。\n转换异步的可迭代对象到数组，可以使用`@Array.fromAsync()[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync]@`。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                console.log(Array.from('hello')); //['h', 'e', 'l', 'l', 'o']
                console.log(Array.from([1, 2, 3], (x) => x * x)); //[1, 4, 9]
                `}
            />
            <X.P>`Array.from()`可以通过以下方式来创建数组对象：</X.P>
            <X.Uli>可迭代对象（例如`@Map[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map]@`和`@Set[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set]@`对象）</X.Uli>
            <X.Uli>类数组对象（带有`length`属性和索引元素的对象）</X.Uli>
            <X.H1>Array.of()</X.H1>
            <X.P>`Array.of()`静态方法通过可变数量的参数创建一个新的`Array`实例。\n`Array()`构造函数会因为参数数量不同导致重载，`Array.of()`行为更加统一。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                console.log(Array(5)); //[<5 empty items>]
                console.log(Array(98, 99)); //[98, 99]

                console.log(Array.of(5)); //[5]
                console.log(Array.of(98, 99)); //[98, 99]
                `}
            />
        </>
    );
}
