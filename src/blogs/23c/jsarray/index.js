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
            ></X.CodeBlock>

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
            ></X.CodeBlock>

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
            ></X.CodeBlock>

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
            ></X.CodeBlock>
            <X.H3>创建指定长度和内容的数组</X.H3>
            <X.CodeBlock
                language="js"
                code={`
                function getArray(len, val) {
                    return Array(len).fill(val);
                }

                console.log(getArray(3, 'some value')); //['some value', 'some value', 'some value']
                `}
            ></X.CodeBlock>

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
            ></X.CodeBlock>

            <X.H1>find系列</X.H1>
        </X.BlogWrapper>
    );
}
