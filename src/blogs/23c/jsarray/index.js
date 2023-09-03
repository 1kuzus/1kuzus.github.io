import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>JavaScript 数组常用方法</X.Title>

            <X.H1>at()</X.H1>
            <X.P>
                `at()`方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
            </X.P>
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
                const array1 = [1, 30, 39, 29, 10, 13];
                const array2 = [1, 30, 39, 88];
                const isBelow50 = (num) => num < 50;

                console.log(array1.every(isBelow50)); //true
                console.log(array2.every(isBelow50)); //false                
                `}
            />

            <X.H1>fill()</X.H1>
            <X.P>
                `fill()`方法用一个固定值填充数组中从起始索引（默认为`0`）到终止索引（默认为`array.length`）内的全部元素，返回修改后的数组。
            </X.P>
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
            <X.H3>创建指定长度和内容的数组</X.H3>
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
            <X.P>
                `filter()`方法用一个固定值填充数组中从起始索引（默认为`0`）到终止索引（默认为`array.length`）内的全部元素，返回修改后的数组。
            </X.P>
            <X.CodeBlock
                language="js"
                code={`
                const arr = [1, 5, 7, 13, 45, 66];
                console.log(arr.filter((i) => i > 10)); //[13, 45, 66]
                `}
            />

            <X.H1>find系列</X.H1>
            <X.Uli>
                <X.P>`find()`方法返回数组中满足提供的测试函数的第一个元素的值。否则返回`undefined`。</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>
                    `findIndex()`方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回`-1`。
                </X.P>
            </X.Uli>
            <X.Uli>
                <X.P>
                    `findLast()`方法反向迭代数组，并返回满足提供的测试函数的第一个元素的值。如果没有找到对应元素，则返回`undefined`。
                </X.P>
            </X.Uli>
            <X.Uli>
                <X.P>
                    `findLastIndex()`方法反向迭代数组，并返回满足所提供的测试函数的第一个元素的索引。若没有找到对应元素，则返回`-1`。
                </X.P>
            </X.Uli>
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
        </X.BlogWrapper>
    );
}
