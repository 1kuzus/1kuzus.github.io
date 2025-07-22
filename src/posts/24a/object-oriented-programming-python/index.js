import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.P>本文对面向对象的基本理论（为什么要有类、什么是属性、什么是方法等）不多做解释，重点在Python中的编程实现。</X.P>
            <X.H1>基本操作</X.H1>
            <X.H2>定义一个类</X.H2>
            <X.CodeBlock
                language="python"
                highlightLines="3-7"
                code={`
                class Unit:
                    # 初始化方法/构造函数
                    def __init__(self, name, hp, damage):
                        # 实例属性
                        self.name = name
                        self.hp = hp
                        self.damage = damage

                    # 实例方法
                    def sayhi(self):
                        print(f"hi, I'm {self.name}")

                u1 = Unit("u1", 100, 20)
                u2 = Unit("u2", 200, 10)

                u1.sayhi()  # Hi, I'm u1
                print(u1.hp)  # 100
                print(u1.damage)  # 20
                `}
            />
            <X.P>上面的代码定义了一个`Unit`类，这个例子中暂且理解为一个游戏中的作战单位，每个单位具有名字`name`、生命值`hp`、攻击力`damage`这些属性。</X.P>
            <X.P>`__init__`方法称作类的*初始化方法*/*构造函数*，实例本身会作为函数的第一个参数`self`被传入。从这个角度理解，实际上`__init__`方法是将传入的参数“绑定”到新创建的实例上。</X.P>
            <X.H2>类属性和实例属性</X.H2>
            <X.P>我们在类下直接定义了一个属性`utype`，它是一个`类属性`；与之对应的是`__init__`方法为实例创建的属性，我们称之为`实例属性`。</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="3"
                code={`
                class Unit:
                    # 类属性，占用同一块地址
                    utype = "unit"

                    def __init__(self, name, hp, damage):
                        # 实例属性，独属于每个实例
                        self.name = name
                        self.hp = hp
                        self.damage = damage

                    def sayhi(self):
                        print("hi, I'm %s" % self.name)

                u1 = Unit("u1", 100, 20)
                u2 = Unit("u2", 200, 10)
                `}
            />
            <X.P>访问实例属性时，把它们当作普通变量就好了；实例属性也可以在`__init__`方法之外动态的添加。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                print(u1.hp)  # 100
                print(u1.damage)  # 20
                u1.level = 1
                print(u1.level)  # 1
                `}
            />
            <X.P>类属性可以在类上取得，也可以在实例上取得。类属性共享内存地址。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                print(Unit.utype, u1.utype, u2.utype)  # unit unit unit
                print(id(Unit.utype))  # 2197356757808
                print(id(u1.utype))    # 2197356757808
                print(id(u2.utype))    # 2197356757808
                `}
            />
            <X.P>由于共享内存地址，因此修改类属性具有全局性：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                Unit.utype = "spell"
                print(Unit.utype, u1.utype, u2.utype)  # spell spell spell
                `}
            />
            <X.HighlightBlock>
                <X.H3>注意</X.H3>
                <X.CodeBlock
                    language="python"
                    code={`
                    u1.utype = "hero"
                    print(Unit.utype, u1.utype, u2.utype)  # spell hero spell
                    `}
                />
                <X.P>如果同样的属性名称同时出现在实例和类中，则属性查找会优先选择实例属性。上面的例子相当于给`u1`添加了一个与类属性同名实例属性，`u1.utype`访问到的不是类属性。</X.P>
                <X.P>要想访问`u1`的类属性，可以通过`__class__`访问：</X.P>
                <X.CodeBlock language="python" code="print(u1.__class__.utype)  # spell" />
            </X.HighlightBlock>
            <X.H1>继承</X.H1>
            <X.H2>实现一个子类</X.H2>
            <X.P>我们还是定义一个`Unit`类，并实现两个方法：`info`用于输出自身基本信息，`attack`模拟攻击另一个单位。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Unit:
                    def __init__(self, name, hp, damage):
                        self.name = name
                        self.hp = hp
                        self.damage = damage

                    def info(self):
                        print(f"name: {self.name}, hp: {self.hp}, damage: {self.damage}")

                    def attack(self, unit):
                        unit.hp -= self.damage
                        print(f"{self.name} attacks {unit.name}, {unit.name}.hp = {unit.hp}")
                `}
            />
            <X.P>现在我们希望实现一个`GroundUnit`类，表示地面单位，并且地面单位具有特有的伤害加成，用属性`buff`定义。显然，会有大量的逻辑与`Unit`类是重复的。这时可以通过继承来实现：</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="3"
                code={`
                class GroundUnit(Unit):
                    def __init__(self, name, hp, damage, buff):
                        super().__init__(name, hp, damage)
                        # 子类新增的实例属性
                        self.buff = buff

                    # 重写父类方法
                    def attack(self, unit):
                        unit.hp -= self.damage * (1 + self.buff)
                        print(f"{self.name} attacks {unit.name}, {unit.name}.hp = {unit.hp}")

                gu1 = GroundUnit("gu1", 100, 20, 0.2)
                gu2 = GroundUnit("gu2", 200, 10, 0.2)

                gu2.info()  # name: gu2, hp: 200, damage: 10
                gu1.attack(gu2)  # gu1 attacks gu2, gu2.hp = 176.0
                gu2.info()  # name: gu2, hp: 176.0, damage: 10
                `}
            />
            <X.P>定义类时，用`class 子类(父类):`表示继承。如果子类有自己的构造函数，会覆盖父类的构造函数；否则会继承父类的构造函数。</X.P>
            <X.P>代码中`super()`函数可以找到父类，高亮的代码等价于`Unit.__init__(self, name, hp, damage)`。</X.P>
            <X.P>如果子类需要对父类的方法进行重写，只需要在子类下定义同名方法，然后重写逻辑。其他父类的方法会被继承到子类中，例如这个例子中的`info()`。</X.P>
            <X.H2>isinstance函数</X.H2>
            <X.P>`isinstance(实例,类)`可以判断一个实例是否属于给定的类。*子类的实例同时也是父类的实例*。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                u1 = Unit("u1", 100, 20)
                gu1 = GroundUnit("gu1", 100, 20, 0.2)

                print(isinstance(u1, Unit))         # True
                print(isinstance(u1, GroundUnit))   # False
                print(isinstance(gu1, Unit))        # True
                print(isinstance(gu1, GroundUnit))  # True
                `}
            />
            <X.H2>多继承</X.H2>
            <X.P>假设我们的游戏复杂起来，引入了稀有度系统，每个单位有一个所属的稀有度，例如普通、稀有、史诗、传奇等等。以史诗级为例，假设对于这些不同稀有度的单位有着其他独特的机制，以至于我们不得不新创建一个`EpicRarity`类：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class EpicRarity:
                    def __init__(self, level):
                        self.level = level

                    def info(self):
                        print(f"This is a lv.{self.level} epic unit")
                `}
            />
            <X.P>当然，为了便于演示，我们只定义了一个`level`属性和`info`方法。</X.P>
            <X.P>现在，我们想实现`EpicGroundUnit`子类，表示史诗级地面单位。显然它需要同时继承父类`EpicRarity`和`GroundUnit`，这就是*多继承*。</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="3-4"
                code={`
                class EpicGroundUnit(EpicRarity, GroundUnit):
                    def __init__(self, name, hp, damage, buff, level):
                        GroundUnit.__init__(self, name, hp, damage, buff)
                        EpicRarity.__init__(self, level)

                egu1 = EpicGroundUnit("egu1", 100, 20, 0.2, 1)

                egu1.info()  # This is a lv.1 epic unit
                `}
            />
            <X.P>在构造函数中我们需要分别对父类进行初始化。</X.P>
            <X.P>注意到两个父类都实现了`info`方法并且没有被子类重写。调用之后我们发现，子类继承的是`EpicRarity`的`info`方法。如果代码改写为：</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="1"
                code={`
                class EpicGroundUnit(GroundUnit, EpicRarity):
                    def __init__(self, name, hp, damage, buff, level):
                        GroundUnit.__init__(self, name, hp, damage, buff)
                        EpicRarity.__init__(self, level)

                egu1 = EpicGroundUnit("egu1", 100, 20, 0.2, 1)

                egu1.info()  # name: egu1, hp: 100, damage: 20
                `}
            />
            <X.P>就会发现，调换父类的顺序后，现在子类继承的是`GroundUnit`的`info`方法。这就引出了下一节的内容：*方法解析顺序*。</X.P>
            <X.H2>方法解析顺序MRO</X.H2>
            <X.P>对于多继承情况下的同名方法，如何从父类中找应该优先使用哪个父类的方法就叫*方法解析顺序*`(Method Resolution Order, MRO)`。 Python采用@C3线性化[https://zh.wikipedia.org/zh-cn/C3%E7%BA%BF%E6%80%A7%E5%8C%96]@算法来计算线性化列表，保证继承顺序列表中每个类只出现一次。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class A:
                    def test(self):
                        print('A')

                class B:
                    def test(self):
                        print('B')

                class C(A, B):
                    pass

                class D(C, B):
                    pass

                obj = D()
                obj.test()  # A
                `}
            />
            <X.P>上述代码描述了一个如下图所示的复杂继承关系：</X.P>
            <X.Image src="mro.jpg" width="300px" filterDarkTheme />
            <X.P>可以通过`mro()`函数得到类的方法解析顺序：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                # 注意是类名，不是实例名
                print(D.mro())  # [<class '__main__.D'>, <class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>]
                `}
            />
            <X.P>输出的列表中，从左到右的顺序为查找方法的顺序。上述例子中，`D`和`C`类都没有定义`test`方法，因此顺次使用了`A`类的`test`方法。</X.P>
            <X.HighlightBlock>
                <X.H3>注意</X.H3>
                <X.P>MRO顺序不是简单的深度优先或广度优先！</X.P>
            </X.HighlightBlock>
            <X.H1>封装</X.H1>
            <X.P>在前面`Unit`类的例子中，我们可以通过直接访问`u1.hp`修改其值，这样并不安全（这岂不是像外挂一样）！*封装*的目的是为了保护数据，不让外部直接访问和修改。在Python中，约定通过在属性名称前加两个下划线`__`来将属性私有化。这种命名约定会使Python解释器修改变量名为`_类名__属性名`的形式，使其在类外部变得难以访问。</X.P>
            <X.H2>将实例属性私有化</X.H2>
            <X.CodeBlock
                language="python"
                highlightLines="5-6"
                code={`
                class Unit:
                    def __init__(self, name, hp, damage):
                        self.name = name
                        # 私有属性
                        self.__hp = hp
                        self.__damage = damage

                    def attack(self, unit):
                        unit.__hp -= self.__damage
                        print(f"{self.name} attacks {unit.name}, {unit.name}.__hp = {unit.__hp}")

                    # 通过公有方法访问私有属性
                    def get_hp(self):
                        return self.__hp
                `}
            />
            <X.P>在定义私有属性后，对外开放一个公有方法`get_hp`，通过这个公有方法可以间接的访问到`__hp`属性。这样相当于让此属性对外部“只读”。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                u1 = Unit("u1", 100, 20)
                print(u1.get_hp())  # 100
                print(u1.__hp)  # AttributeError: 'Unit' object has no attribute '__hp'
                `}
            />
            <X.P>通过`_类名__属性名`的形式可以强制访问私有属性：</X.P>
            <X.CodeBlock language="python" code="print(u1._Unit__hp)  # 100" />
            <X.HighlightBlock>
                <X.H3>注意</X.H3>
                <X.P>在类外绑定的双下划线变量是公有的。</X.P>
                <X.CodeBlock
                    language="python"
                    code={`
                    u1.__var = 1
                    print(u1.__var)  # 1
                    `}
                />
            </X.HighlightBlock>
            <X.H2>类比于C++</X.H2>
            <X.P>C++中的封装有三种：`public`、`protected`、`private`；Python中没有这些关键字，但是可以通过属性名命名约定来实现。</X.P>
            <X.Uli>`public`：公有变量，可以在*类的内部和外部*访问，正常命名即可。</X.Uli>
            <X.Uli>`protected`：保护变量，只能在*类内和子类*访问，属性名前加单下划线`_`。这只是一种命名约定，实际上是可以访问的。</X.Uli>
            <X.Uli>`private`：私有变量，只能在*类的内部*访问，属性名前加双下划线`__`，这样会使Python解释器修改变量名为`_类名__属性名`的形式。</X.Uli>
            <X.CodeBlock
                language="python"
                code={`
                class A:
                    def __init__(self, x, y, z):
                        # 公有变量
                        self.x = x
                        # 保护变量
                        self._y = y
                        # 私有变量
                        self.__z = z

                class B(A):
                    def __init__(self, x, y, z):
                        super().__init__(x, y, z)

                    def info_x(self):
                        print(f"x: {self.x}")

                    def info_y(self):
                        print(f"y: {self._y}")

                    def info_z(self):
                        print(f"z: {self.__z}")

                b = B(1, 2, 3)
                b.info_x()  # x: 1
                b.info_y()  # y: 2
                b.info_z()  # AttributeError: 'B' object has no attribute '_B__z'. Did you mean: '_A__z'?
                `}
            />
            <X.HighlightBlock>
                <X.H3>注意</X.H3>
                <X.P>C++中的`protected`关键字是一种严格的访问控制机制，而Python中的单下划线变量只是一种命名约定，不具有强制性，实际上是可以访问的。只不过有时违反了这样的约定时，有些代码编辑器会给出警告。</X.P>
                <X.CodeBlock language="python" code="print(b._y)  # 2" />
            </X.HighlightBlock>
            <X.H1>多态</X.H1>
            <X.H2>举个例子</X.H2>
            <X.P>多态是当一个类继承自另一个类并重写了其方法时，可以在不改变原有接口的情况下，根据对象的实际类型来调用不同的方法实现。这听起来有些复杂，我们来举一个具体的例子：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Unit:
                    def __init__(self, name, hp, damage):
                        self.name = name
                        self.hp = hp
                        self.damage = damage

                    def info(self):
                        print(f"name: {self.name}, hp: {self.hp}, damage: {self.damage}")

                class GroundUnit(Unit):
                    def info(self):
                        print("This is a ground unit.")

                class AirUnit(Unit):
                    def info(self):
                        print("This is an air unit.")

                def show_info(unit):
                    unit.info()

                gu1 = GroundUnit("gu1", 100, 20)
                au1 = AirUnit("au1", 100, 20)
                show_info(gu1)  # This is a ground unit.
                show_info(au1)  # This is an air unit.
                `}
            />
            <X.P>这个例子中，`show_info`函数接受一个`Unit`类型的参数，但是我们传入的是其子类`GroundUnit`和`AirUnit`类型的实例。子类重写了父类的`info`方法，相当于共用了父类的接口，但是子类又通过继承重写了接口，从而实现了不同的功能。</X.P>
            <X.H2>通过抽象类实现多态</X.H2>
            <X.P>*抽象类*是指包含*抽象方法*的类；抽象类只能被继承，不能被实例化。\n抽象方法是指只有声明，没有实现的方法，它存在的意义是让子类重写这个方法。</X.P>
            <X.P>上面的例子中，如果我们将`Unit`类的`info`方法定义为：</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="8-9"
                code={`
                class Unit:
                    def __init__(self, name, hp, damage):
                        self.name = name
                        self.hp = hp
                        self.damage = damage

                    # 这是一个抽象方法，子类必须重写这个方法，否则在调用时会报错
                    def info(self):
                        raise NotImplementedError("Subclasses must implement abstract method.")
                `}
            />
            <X.P>这时子类如果没有重写`info`方法，就会继承父类中的方法，在调用的时候就会报错。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class UnitWithoutInfo(Unit):
                    pass

                u = UnitWithoutInfo("u", 100, 20)
                u.info()  # NotImplementedError: Subclasses must implement abstract method.
                `}
            />
            <X.H2>Python中的abc模块</X.H2>
            <X.P>Python的`abc`模块中定义了*抽象基类*`ABC (Abstract Base Classes)`，可以强制其子类必须实现某些方法。</X.P>
            <X.P>上面的例子使用`abc`模块可以改写为：</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="1,3,9-11"
                code={`
                from abc import ABC, abstractmethod

                class Unit(ABC):
                    def __init__(self, name, hp, damage):
                        self.name = name
                        self.hp = hp
                        self.damage = damage

                    @abstractmethod
                    def info(self):
                        pass
                `}
            />
            <X.P>这时子类如果没有重写`info`方法，在实例化时就会报错！</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class UnitWithoutInfo(Unit):
                    pass

                # 在实例化时就会报错
                u = UnitWithoutInfo("u", 100, 20)  # TypeError: Can't instantiate abstract class UnitWithoutInfo with abstract method info
                `}
            />
            <X.H1>三大方法</X.H1>
            <X.H2>类方法</X.H2>
            <X.P>类方法用装饰器`@classmethod`定义，传入的第一个参数是类本身而不是实例，通常命名为`cls`。通过它可以访问到类属性。</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="9-12"
                code={`
                class Unit:
                    utype = "unit"

                    def __init__(self, name, hp, damage):
                        self.name = name
                        self.hp = hp
                        self.damage = damage

                    @classmethod
                    def show_type(cls):
                        # 可以访问到类属性
                        print(f"This is a {cls.utype}.")

                u1 = Unit("u1", 100, 20)
                u1.show_type()  # This is a unit.
                `}
            />
            <X.H3>类方法的应用：自动计算实例数</X.H3>
            <X.P>假如我们希望每创建一个类时，都可以自动计数当前类的实例数量。这个功能可以由类方法实现。</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="9"
                code={`
                class Unit:
                    type = "unit"
                    __unit_num = 0  # 声明为私有类属性

                    def __init__(self, name, hp, damage):
                        self.name = name
                        self.hp = hp
                        self.damage = damage
                        self.add_unit_num()

                    @classmethod
                    def add_unit_num(cls):
                        cls.__unit_num += 1

                    @classmethod
                    def get_unit_num(cls):
                        return cls.__unit_num

                u1 = Unit("u1", 100, 20)
                u2 = Unit("u2", 200, 10)
                print(u1.get_unit_num())  # 2
                print(u2.get_unit_num())  # 2

                u3 = Unit("u3", 300, 30)
                print(u3.get_unit_num())  # 3
                print(Unit.get_unit_num())  # 3
                `}
            />
            <X.P>我们在`__init__`方法中调用一次类方法`add_unit_num()`，就可以把总实例数统计到类属性`__unit_num`中。</X.P>
            <X.H2>静态方法</X.H2>
            <X.P>静态方法用装饰器`@staticmethod`定义。静态方法不能访问类属性，也不能访问实例属性。静态方法可以在类的命名空间内定义一些功能性代码，通常用于实现一些与类相关的工具函数。</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="9-11"
                code={`
                class Unit:
                    type = "unit"

                    def __init__(self, name, hp, damage):
                        self.name = name
                        self.hp = hp
                        self.damage = damage

                    @staticmethod
                    def calc_hp_after_attack(hp, damage):  # 没有隐式的第一参数
                        return hp - damage

                u1 = Unit("u1", 100, 20)
                u2 = Unit("u2", 200, 10)
                print(u1.calc_hp_after_attack(u1.hp, u2.damage))  # 90
                `}
            />
            <X.H2>属性方法</X.H2>
            <X.P>属性方法以方法的形式定义，但是可以像属性一样进行访问，其作用是支持对属性的灵活操作。</X.P>
            <X.P>属性方法相当于允许更细致的设置一个属性的*访问*、*更改*、*删除*操作，具体的做法是：实现属性的`getter`、`setter`、`deleter`方法。</X.P>
            <X.P>假设我们有这样的需求：定义一个`Circle`类，它具有直径`diameter`和半径`radius`两个属性。我们希望修改其中一个属性时，另外一个属性也随之变化。也就是：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                circle = Circle(5)
                print(circle.radius)  # 5
                print(circle.diameter)  # 10

                circle.diameter = 14
                print(circle.radius)  # 7.0

                circle.radius = 12
                print(circle.diameter)  # 24
                `}
            />
            <X.P>用此前的知识似乎无法实现这样的功能，但属性方法可以解决：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Circle:
                    def __init__(self, radius):
                        self.__radius = radius
                        self.__diameter = 2 * radius

                    # 属性的getter方法
                    @property
                    def radius(self):
                        return self.__radius

                    # 属性的setter方法
                    @radius.setter
                    def radius(self, value):
                        self.__radius = value
                        self.__diameter = value * 2

                    @property
                    def diameter(self):
                        return self.__diameter

                    @diameter.setter
                    def diameter(self, value):
                        self.__diameter = value
                        self.__radius = value * 0.5
                `}
            />
            <X.P>将访问、修改属性的操作定义为函数，就允许了我们除了获取、修改变量本身之外，还可以做一些其他的手脚。</X.P>
            <X.P>上面的例子没有体现属性的`deleter`方法。它的一般实现可以是：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Circle:
                    ...

                    # 属性的deleter方法
                    @radius.deleter
                    def radius(self):
                        print("delete radius")
                        del self.__radius

                    @diameter.deleter
                    def diameter(self):
                        print("delete diameter")
                        del self.__diameter

                del circle.diameter  # delete diameter
                # print(circle.diameter)  # AttributeError: 'Circle' object has no attribute '_Circle__diameter'
                `}
            />
            <X.H1>反射</X.H1>
            <X.H2>Python中的反射</X.H2>
            <X.P>在计算机科学中*反射*`(reflection)`是指计算机程序在运行时可以检查、访问、和修改它本身状态或行为的一种能力。表现在Python面向对象编程中有四个内置函数：`getattr()`、`setattr()`、`hasattr()`和`delattr()`，可以通过字符串的形式操作对象的属性和方法。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class A:
                    def __init__(self, x, y, z):
                        self.x = x
                        self.y = y
                        self.z = z

                    def info_x(self):
                        print(f"x: {self.x}")

                    def info_y(self):
                        print(f"y: {self.y}")

                    def info_z(self):
                        print(f"z: {self.z}")

                a = A(10, 20, 30)
                `}
            />
            <X.P>`hasattr()`函数用于判断对象是否包含对应的属性或方法：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                print(hasattr(a, "x"))  # True
                print(hasattr(a, "info_x"))  # True
                print(hasattr(a, "info_w"))  # False
                `}
            />
            <X.P>`getattr()`函数用于获取对象的属性或方法：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                print(getattr(a, "x"))  # 10
                info_x = getattr(a, "info_x")
                info_x()  # x: 10
                `}
            />
            <X.P>`setattr()`函数用于设置对象的属性或方法：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                setattr(a, "x", 100)
                print(getattr(a, "x"))  # 100
                `}
            />
            <X.P>`delattr()`函数用于删除对象的属性或方法：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                delattr(a, "y")
                print(getattr(a, "y"))  # AttributeError: 'A' object has no attribute 'y'
                `}
            />
            <X.H2>反射的应用</X.H2>
            <X.P>假如我们现在想创建一个类`A2Z`，它具有`a`-`z``26`个属性与`info_a()`到`info_z()``26`个方法，手动创建这些属性和方法是非常繁琐的。这时我们可以利用反射来动态的创建它们：</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="10,16"
                code={`
                a_to_z = "abcdefghijklmnopqrstuvwxyz"

                class A2Z:
                    pass

                a2z = A2Z()

                for ch in a_to_z:
                    # 动态的创建属性
                    setattr(a2z, ch, ord(ch) - ord('a') + 1)

                    # 动态的创建方法
                    def info_ch():
                        print(f"{ch}: {getattr(a2z, ch)}")

                    setattr(a2z, f"info_{ch}", info_ch)

                print(a2z.d)  # 4
                a2z.info_z()  # z: 26
                `}
            />
            <X.H1>魔术方法</X.H1>
            <X.P>魔术方法通常以双下划线包围，用于实现类的特殊行为。下面以一个`Vector3d`类为例，介绍一些常用的魔术方法。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Vector3d:
                    def __init__(self, x, y, z):
                        self.x = x
                        self.y = y
                        self.z = z

                v1 = Vector3d(3, 4, 5)
                v2 = Vector3d(1, 2, 3)
                `}
            />
            <X.H2>__len__</X.H2>
            <X.P>`len(obj)`时调用。`__len__`方法的返回值只能是整数。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Vector3d:
                    ...

                    def __len__(self):
                        return 3

                print(len(v1))  # 3
                `}
            />
            <X.H2>__repr__和__str__</X.H2>
            <X.P>`__repr__`方法的返回值应该是一个*可以用来重新创建对象*的字符串。\n`__str__`方法在`str(obj)`时调用，应当返回实例格式良好、可读性强的字符串表示。</X.P>
            <X.P>在`print(obj)`时会优先使用`__str__`方法的返回值，如果没有定义`__str__`方法，则会使用`__repr__`方法。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Vector3d:
                    ...

                    def __repr__(self):
                    return f"Vector3d({self.x}, {self.y}, {self.z})"

                    def __str__(self):
                        return f"({self.x}, {self.y}, {self.z})"

                print(str(v1))  # (3, 4, 5)
                print(repr(v1))  # Vector3d(3, 4, 5)
                # 会优先调用__str__方法
                print(v1)  # (3, 4, 5)
                `}
            />
            <X.H2>__call__</X.H2>
            <X.P>`__call__`方法使得实例可以像函数一样被调用。</X.P>
            <X.P>这个例子中我们约定，调用`obj(x, y, z)`时设置向量的`x`，`y`，`z`分量。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Vector3d:
                    ...

                    def __call__(self, x, y, z):
                        self.x = x
                        self.y = y
                        self.z = z

                v2(2, -2, 1)
                print(v2)  # (2, -2, 1)
                `}
            />
            <X.H2>运算符重载</X.H2>
            <X.P>我们为`Vector3d`类定义加法、减法、乘法操作。这个例子中我们约定，加减法就是普通的按元素加减，而乘法满足：</X.P>
            <X.Uli>`obj*常数`时返回缩放后的向量</X.Uli>
            <X.Uli>`obj1*obj2`时返回点乘数值</X.Uli>
            <X.CodeBlock
                language="python"
                code={`
                class Vector3d:
                    ...

                    # 重载加号运算符，obj1+obj2时调用
                    def __add__(self, other):
                        return Vector3d(self.x + other.x, self.y + other.y, self.z + other.z)

                    # 重载减号运算符，obj1-obj2时调用
                    def __sub__(self, other):
                        return Vector3d(self.x - other.x, self.y - other.y, self.z - other.z)

                    # 重载乘号运算符
                    def __mul__(self, other):
                        if isinstance(other, (int, float)):
                            return Vector3d(self.x * other, self.y * other, self.z * other)
                        else:
                            return self.x * other.x + self.y * other.y + self.z * other.z

                print(v1)  # (3, 4, 5)
                print(v2)  # (2, -2, 1)
                print(v1 + v2)  # (5, 2, 6)
                print(v1 - v2)  # (1, 6, 4)
                print(v1 * v2)  # 3
                print(v1 * 2)  # (6, 8, 10)
                `}
            />
            <X.H2>反运算（右侧运算）</X.H2>
            <X.P>如果只有上述运算符重载，下面的代码会报错：</X.P>
            <X.CodeBlock language="python" code="print(2 * v1)  # TypeError: unsupported operand type(s) for *: 'int' and 'Vector3d'" />
            <X.P>这是因为整数类型的乘法不适用。解决这个问题需要定义`Vector3d`类的右侧乘法`__rmul__`：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Vector3d:
                    ...

                    def __rmul__(self, other):
                        return self.__mul__(other)

                print(2 * v1)  # (6, 8, 10)
                `}
            />
            <X.H2>__getitem__和__setitem__</X.H2>
            <X.P>`__getitem__`在取`obj[key]`时调用，这个例子中我们约定`obj[key]`返回向量第`i`个分量；</X.P>
            <X.P>`__setitem__`在设置`obj[key]=value`时调用，这个例子中我们约定`obj[key]=value`设置向量第`i`个分量。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Vector3d:
                    ...

                    def __getitem__(self, key):
                    if key == 0:
                        return self.x
                    elif key == 1:
                        return self.y
                    elif key == 2:
                        return self.z
                    else:
                        raise IndexError(f"index out of range: {key}")

                    def __setitem__(self, key, value):
                        if key == 0:
                            self.x = value
                        elif key == 1:
                            self.y = value
                        elif key == 2:
                            self.z = value
                        else:
                            raise IndexError(f"index out of range: {key}")

                print(v1[0], v1[1], v1[2])  # 18 -24 15
                v1[0] = 2
                print(v1)  # (2, -24, 15)
                `}
            />
        </>
    );
}
