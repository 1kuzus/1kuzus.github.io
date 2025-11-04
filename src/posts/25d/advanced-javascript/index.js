import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>参考资料</X.H1>
            <X.Uli>@The Modern JavaScript Tutorial[https://javascript.info]@ / @中文版[https://zh.javascript.info]@</X.Uli>
            <X.Uli>@You Don't Know JS - 1st Edition[https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md]@</X.Uli>
            <X.Uli>@this指向/箭头函数this指向详解[https://juejin.cn/post/7035257186565488670]@</X.Uli>
            <X.H1>this指向问题</X.H1>
            <X.H2>对象方法中</X.H2>
            <X.P>在对象的方法中，`this`通常指向调用该方法的对象。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                function hello() {
                    console.log(this.x);
                }

                const obj1 = {
                    x: 1,
                    f: hello,
                };

                const obj2 = { x: 2 };
                obj2.f = hello;

                obj1.f(); // 1
                obj2.f(); // 2
                `}
            />
            <X.H2>函数不作为对象方法调用时</X.H2>
            <X.P>如果函数不是作为对象的方法调用，`this`的值（在非严格模式下）指向全局对象（浏览器中为`window`）。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                function hello() {
                    console.log(this);
                }
                hello(); // Window {...}
                `}
            />
            <X.CodeBlock
                language="js"
                code={String.raw`
                function hello() {
                    console.log(this);
                }
                const obj = { f: (callback) => callback() };
                obj.f(hello); // Window {...}
                `}
            />
            <X.P>严格模式下，未作为对象方法调用的函数中的`this`为`undefined`。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                'use strict';
                function hello() {
                    console.log(this);
                }
                hello(); // undefined
                `}
            />
            <X.H2>this丢失</X.H2>
            <X.P>`this`的指向由*调用点*决定，当将对象的方法赋值给一个变量或作为回调函数传递时，`this`可能会丢失其原始指向。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                function hello() {
                    console.log(this);
                }

                const obj1 = {
                    x: 1,
                    f: hello,
                };

                function execute(fn) { fn() };
                execute(obj1.f); // Window {...}

                const g = obj1.f;
                g(); // Window {...}
                `}
            />
            <X.H2>箭头函数</X.H2>
            <X.P>箭头函数不遵循标准的`this`绑定规则，它会捕获其定义时所在上下文的`this`值。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                const obj = {
                    f1: function () { console.log(this) },
                    f2: () => { console.log(this) },
                }
                obj.f1(); // {f1: ƒ, f2: ƒ}
                obj.f2(); // Window {...}
                `}
            />
            <X.H1>apply/bind/call</X.H1>
            <X.P>`apply`、`bind`和`call`是JavaScript中用于改变函数执行时`this`指向的三种方法。</X.P>
            <X.P>`apply`和`call`非常相似，只是传递参数的方式不同；`apply`和`call`都会立刻执行函数，而`bind`则返回一个新的函数，供稍后调用。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                fn.apply(context, [arg1, arg2, ...])
                fn.call(context, arg1, arg2, ...)
                const f = fn.bind(context, arg1, arg2, ...)
                `}
            />
            <X.CodeBlock
                language="js"
                code={String.raw`
                function hello(key1, key2) {
                    console.log(this[key1], this[key2]);
                }

                const obj1 = { x: 1, y: 10 };
                const obj2 = { x: 2, y: 20 };
                const obj3 = { x: 3, y: 30 };

                hello("x", "y") // undefined undefined
                hello.apply(obj1, ["x", "y"]); // 1 10
                hello.call(obj2, "x", "y"); // 2 20

                const f = hello.bind(obj3, "x", "y");
                f(); // 3 30
                `}
            />
            <X.H2>apply/call与装饰器</X.H2>
            <X.P>下面的代码定义了一个简单的装饰器函数`addGoodbye`，它接收一个函数`fn`作为参数，并返回另一个新函数`wrapperFn`。新函数的功能是先执行原函数`fn`，再打印`Goodbye!`。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                function greet(text) {
                    console.log("Hello, " + text + "!");
                }
                greet("Alice");
                // Hello, Alice!

                function addGoodbye(fn) {
                    function wrapperFn(...args) {
                        fn(...args);
                        console.log("Goodbye!");
                    }
                    return wrapperFn;
                }
                greet = addGoodbye(greet);
                greet("Bob");
                // Hello, Bob!
                // Goodbye!
                `}
            />
            <X.P>上述代码在对象方法中不能正常工作。下面的例子中，把`greet`定义为对象方法，参数`text`由`this.text`取得。`addGoodbye`装饰器未做改动，但是装饰后的`obj.greet`方法在调用时丢失了`this`指向，导致`this.text`为`undefined`。</X.P>
            <X.CodeBlock
                language="js"
                highlightLines="19"
                code={String.raw`
                const obj = {
                    text: "Carl",
                    greet: function () {
                        console.log("Hello, " + this.text + "!");
                    }
                };
                obj.greet();
                // Hello, Carl!

                function addGoodbye(fn) {
                    function wrapperFn(...args) {
                        fn(...args);
                        console.log("Goodbye!");
                    }
                    return wrapperFn;
                }
                obj.greet = addGoodbye(obj.greet);
                obj.greet();
                // Hello, undefined!
                // Goodbye!
                `}
            />
            <X.P>想修复此问题，仅需将`wrapperFn`中`fn(...args)`改为`fn.call(this, ...args)`：</X.P>
            <X.CodeBlock
                language="js"
                highlightLines="12-13,20"
                code={String.raw`
                const obj = {
                    text: "Carl",
                    greet: function () {
                        console.log("Hello, " + this.text + "!");
                    }
                };
                obj.greet();
                // Hello, Carl!

                function addGoodbye(fn) {
                    function wrapperFn(...args) {
                        // fn(...args);
                        fn.call(this, ...args);
                        console.log("Goodbye!");
                    }
                    return wrapperFn;
                }
                obj.greet = addGoodbye(obj.greet);
                obj.greet();
                // Hello, Carl!
                // Goodbye!
                `}
            />
            <X.HighlightBlock>
                <X.H3>这样做的原理是什么？</X.H3>
                <X.P>最后一行调用`obj.greet()`时，实际上是在调用`wrapperFn`函数的逻辑。此时`wrapperFn`函数中的`this`指向`obj`对象。</X.P>
                <X.P>然而，倒数第二行`obj.greet`作为参数`fn`传入`addGoodbye`，又在`wrapperFn`调用`fn()`，这相当于：</X.P>
                <X.CodeBlock
                    language="js"
                    code={String.raw`
                    const fn = obj.greet;
                    fn();
                    `}
                />
                <X.P>这正是前面提到的`this`丢失的问题，由于调用点？？？？

                </X.P>
            </X.HighlightBlock>
            <X.H2>bind与偏函数</X.H2>
            <X.P>`bind`方法可以用来预设函数的部分参数，这种技术称为偏函数`(Partial Function)`。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                function mul(x, y) {
                    return x * y;
                }

                const mul2 = mul.bind(null, 2);
                console.log(mul2(3)); // 6
                `}
            />
            <X.H1>面向对象与new表达式</X.H1>
            <X.P>`new`表达式可以创建一个对象：</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                    
                `}
            />
            <X.H1>原型与原型链</X.H1>

            <X.H1>__proto__/prototype/constructor</X.H1>

            <X.H1>杂项</X.H1>
            <X.H2>创建立即执行函数</X.H2>
            <X.P>也叫立即调用函数表达式`(Immediately-Invoked Function Expressions, IIFE)`。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                (function () { console.log("hello") })();
                (function () { console.log("hello") }());
                + function () { console.log("hello") }();
                - function () { console.log("hello") }();
                ! function () { console.log("hello") }();
                (() => { console.log("hello") })();
                `}
            />
            <X.H2>Symbol</X.H2>
            <X.P>JavaScript中对象的键要么是字符串，要么是一个`Symbol`。`Symbol`表示一个独一无二的标识符，这在需要确保对象属性不会被意外覆盖时非常有用。例如，在大型代码库或使用第三方库时，使用`Symbol`作为键可以避免命名冲突的问题。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                const id = Symbol("id");
                const x1 = Symbol("x");
                const x2 = Symbol("x");
                const obj = {
                    [id]: 0,
                    [x1]: 1,
                    [x2]: 2,
                };
                console.log(obj[id]); // 0
                console.log(obj[x1]); // 1
                console.log(obj[x2]); // 2
                `}
            />
            <X.P>`Symbol`可以接收一个字符串参数作为描述，但不会影响其唯一性。即使两个`Symbol`的描述相同，它们仍然是不同的实体。</X.P>
            <X.P>`Symbol.for()`和`Symbol.keyFor()`方法用于创建和访问全局注册的`Symbol`。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                console.log(Symbol("x") === Symbol("x")); // false
                console.log(Symbol.for("x") === Symbol.for("x")); // true
                `}
            />
            <X.P>使用`Symbol`作为对象的键时，这些属性不会出现在`for...in`循环、`Object.keys()`、`JSON.stringify()`中。可以通过`Object.getOwnPropertySymbols()`和`Reflect.ownKeys()`方法访问这些`Symbol`属性。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                const id = Symbol("id");
                const obj = {
                    [id]: 0,
                    a: 1,
                };

                for (let key in obj) console.log(key); // a
                console.log(Object.keys(obj)); // ['a']
                console.log(JSON.stringify(obj)); // {"a":1}
                console.log(Object.getOwnPropertyNames(obj)); // ['a']

                console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]
                console.log(Reflect.ownKeys(obj)); // ['a', Symbol(id)]
                `}
            />
            <X.H2>var</X.H2>
            <X.P>使用`var`声明的变量具有函数作用域（或全局作用域），它们可以“穿透”块级作用域。`var`可以重复声明同一变量。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                if (1) {
                    var x = 0;
                    var x = 1;
                    let y = 0;
                    // let y = 1; // SyntaxError: Identifier 'y' has already been declared
                }

                console.log(x); // 1
                // console.log(y); // ReferenceError: y is not defined
                `}
            />
            <X.P>`var`声明的变量提升，即变量声明会被提升到其作用域的顶部，因此在声明之前访问该变量不会导致错误，而是返回`undefined`。</X.P>
            <X.CodeBlock
                language="js"
                code={String.raw`
                console.log(x); // undefined
                if (0) {
                    var x = 1;
                }
                `}
            />
        </>
    );
}

/*

__proto__, prototype, constructor区别

- `prototype`是函数对象的一个属性，用于定义通过该函数创建的实例对象所继承的属性和方法。每个函数都有一个`prototype`属性，默认情况下，它是一个空对象。当使用`new`关键字调用函数时，创建的实例对象会继承该函数的`prototype`对象上的属性和方法。

- `__proto__`是每个JavaScript对象（包括实例对象和函数对象）内部的一个属性，指向该对象的原型对象。通过`__proto__`，可以访问和修改对象的原型链，从而实现继承和共享属性。

- `constructor`是每个对象（包括实例对象和函数对象）上的一个属性，指向创建该对象的构造函数。对于通过构造函数创建的实例对象，其`constructor`属性通常指向该构造函数本身。
*/


const objx = { x: 1 };
const objy = { y: 2 };
const objz = { z: 3 };
console.log(objx.y); // undefined

objx.__proto__ = objy;
objy.__proto__ = objz;

for (let key in objx) console.log(key); // a
console.log(Object.keys(objx)); // ['a']
console.log(JSON.stringify(objx)); // {"a":1}
console.log(Object.getOwnPropertyNames(objx)); // ['a']
console.log(Reflect.ownKeys(objx)); // ['a', Symbol(id)]


function f(val) {
    this.x = val;
    this.text = "hello";
}
const obj = new f(1);
console.log(obj); // {x: 1, text: 'hello'}