## 引入

这是一个`greet`函数：

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Hello, Alice!
```

下面定义了一个高阶函数`add_goodbye`，它接收一个函数`fn`作为参数，并返回另一个新函数`wrapper_fn`。新函数的功能是先执行原函数`fn`，再打印`Goodbye!`。

```python
def add_goodbye(fn):
    def wrapper_fn(*args):
        fn(*args)
        print("Goodbye!")
    return wrapper_fn
```

`add_goodbye(greet)`返回的新函数在被调用时，会先执行`greet`函数，然后打印`Goodbye!`。

```python
greet = add_goodbye(greet)
greet("Bob")
# Hello, Bob!
# Goodbye!
```

## 装饰器

上述例子可以用装饰器的语法写为：

<!-- @xprops highlightLines="7" -->

```python
def add_goodbye(fn):
    def wrapper_fn(*args):
        fn(*args)
        print("Goodbye!")
    return wrapper_fn

@add_goodbye
def greet(name):
    print(f"Hello, {name}!")

greet("Carl")
# Hello, Carl!
# Goodbye!
```

装饰器是一种设计模式，能够在不修改原函数代码的情况下，向函数添加额外的功能。`@`就是Python中的装饰器语法糖，在`def fn():`前加上`@decorator`，就相当于执行了`fn = decorator(fn)`。

### 例：输出函数运行时间

实现一个装饰器`log_duration`，在执行函数后打印函数运行时间。

```python
import time

def log_duration(fn):
    def wrapper_fn(*args, **kwargs):
        start = time.time()
        fn(*args, **kwargs)
        end = time.time()
        print(f"Function returned after {end - start} seconds.")
    return wrapper_fn

@log_duration
def loop(n):
    for i in range(n):
        pass

loop(n=10 ** 8)
# Function returned after 0.8091847896575928 seconds.
```

## 带参装饰器

有时我们希望装饰器能够接收参数，例如，在`add_goodbye`的例子中，我们希望能够自定义打印的告别语。此时我们需要再嵌套一层装饰器，外层装饰器接收自定义参数，创建不同的内层装饰器；内层装饰器则接收原函数并返回新的函数。

<!-- @xprops highlightLines="2-6,9" -->

```python
def add_custom_goodbye(message):  # 外层装饰器
    def add_goodbye(fn):  # 内层装饰器
        def wrapper_fn(*args):
            fn(*args)
            print(message)
        return wrapper_fn
    return add_goodbye

@add_custom_goodbye(message="See you later!")
def greet(name):
    print(f"Hello, {name}!")

greet("Donald")
# Hello, Donald!
# See you later!
```

这里就相当于执行了`greet = add_custom_goodbye("See you later!")(greet)`。

### 例：retry装饰器

实现一个`retry`装饰器，接收一个整数参数`max_retries`，表示最大重试次数。其功能为：如果装饰的函数抛出异常，则重新执行函数，直到达到最大重试次数。

这个功能在处理网络请求时非常有用，本例用一个`70%`概率抛出异常的函数代替网络请求。

```python
import random

def retry(max_retries):
    def inner_decorator(fn):
        def wrapper(*args):
            count = 0
            while count < max_retries:
                try:
                    return fn(*args)
                except Exception:
                    count += 1
                    print(f"Function failed, retrying {count}/{max_retries}...")
            print(f"Function failed after {count} retries")
        return wrapper
    return inner_decorator

@retry(max_retries=3)
def fake_request():
    if random.random() < 0.7:
        raise Exception
    return {"success": True}

print(fake_request())
# Function failed, retrying 1/3...
# Function failed, retrying 2/3...
# {'success': True}
```

## 关于functools.wraps

你可能在很多装饰器教程中见到使用`functools.wraps`的代码，这是为了保留函数的元信息。

回到最初的例子：

```python
def greet(name):
    print(f"Hello, {name}!")

print(greet)  # <function greet at 0x1025e9280>
print(greet.__name__)  # greet
```

当我们使用装饰器时，原函数的元信息会被覆盖：

<!-- @xprops highlightLines="11-12" -->

```python
def add_goodbye(fn):
    def wrapper_fn(*args):
        fn(*args)
        print("Goodbye!")
    return wrapper_fn

@add_goodbye
def greet(name):
    print(f"Hello, {name}!")

print(greet)  # <function add_goodbye.<locals>.wrapper_fn at 0x100292430>
print(greet.__name__)  # wrapper_fn
```

此时可以使用`functools.wraps`来保留原函数的元信息，具体写法为：

<!-- @xprops highlightLines="4,14-15" -->

```python
import functools

def add_goodbye(fn):
    @functools.wraps(fn)
    def wrapper_fn(*args):
        fn(*args)
        print("Goodbye!")
    return wrapper_fn

@add_goodbye
def greet(name):
    print(f"Hello, {name}!")

print(greet)  # <function greet at 0x102c0e430>
print(greet.__name__)  # greet
```
