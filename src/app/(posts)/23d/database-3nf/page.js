import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/23d/database-3nf/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>为了减少数据冗余，设计数据表时必须遵循一定的规则，在关系型数据库中这种规则就称为范式。\n严谨的定义可以参考维基百科@第一范式[https://zh.wikipedia.org/zh-cn/%E7%AC%AC%E4%B8%80%E6%AD%A3%E8%A6%8F%E5%8C%96]@、@第二范式[https://zh.wikipedia.org/zh-cn/%E7%AC%AC%E4%BA%8C%E6%AD%A3%E8%A6%8F%E5%8C%96]@、@第三范式[https://zh.wikipedia.org/zh-cn/%E7%AC%AC%E4%B8%89%E6%AD%A3%E8%A6%8F%E5%8C%96]@，互联网上也有很多优秀的技术博客。本文希望以简洁的语句和例子进行描述。</X.P>
            <X.H1>第一范式 - 1NF</X.H1>
            <X.HighlightBlock>
                <X.P>数据库表的每一列都是不可再分的。</X.P>
            </X.HighlightBlock>
            <X.P>下面是一个不符合第一范式的例子：</X.P>
            <X.Table
                fromText={`
                人员编号|姓名|地址|职务
                1001|李雨晨|江苏省南京市|财务部经理
                1002|张文浩|辽宁省沈阳市|财务部员工
                1003|王洪|湖北省武汉市|销售部实习生
                1004|陈宇航|吉林省长春市|销售部员工
                `}
            />
            <X.P>其中的`职务`应该再分为`部门`和`职务`两个字段，因为业务中可能会经常分别用到这两个属性！</X.P>
            <X.Table
                fromText={`
                人员编号|姓名|地址|部门|职务
                1001|李雨晨|江苏省南京市|财务部|经理
                1002|张文浩|辽宁省沈阳市|财务部|员工
                1003|王洪|湖北省武汉市|销售部实|习生
                1004|陈宇航|吉林省长春市|销售部|员工
                `}
            />
            <X.P>你可能在想`地址`字段是否应该拆分。甚至`姓名`也可以拆分成`姓`和`名`两个字段：</X.P>
            <X.Table
                fromText={`
                人员编号|姓|名|省|市|部门|职务
                1001|李|雨晨|江苏省|南京市|财务部|经理
                1002|张|文浩|辽宁省|沈阳市|财务部|员工
                1003|王|洪|湖北省|武汉市|销售部实|习生
                1004|陈|宇航|吉林省|长春市|销售部|员工
                `}
            />
            <X.P>这个例子比上一个更好吗？哪一种设计更符合第一范式？事实上，两个例子都是符合的，具体的取舍要参考具体的业务。例如`姓名`、`地址`在业务中都整体出现，那么第二个例子就是最佳选择。如果业务涉及*分别*对所属省、市的操作，那么就应该将`地址`字段拆分为`省`和`市`。</X.P>
            <X.H1>第二范式 - 2NF</X.H1>
            <X.HighlightBlock>
                <X.P>符合第一范式，且非主键字段必须完全依赖于主键字段，不能只依赖主键的一部分。（主要针对联合主键而言）</X.P>
            </X.HighlightBlock>
            <X.P>下面是一个不符合第二范式的例子：</X.P>
            <X.Table
                fromText={`
                学号(主键)|课程代码(主键)|学生姓名|成绩
                202101|001|Alice|97
                202102|001|Bob|86
                202103|001|Candy|80
                202103|003|Candy|93
                `}
            />
            <X.P>这个例子中，`成绩`是针对某一学生的某一课程而言的，因此需要`学号`和`课程代码`作为联合主键才能确定；然而学生的`学生姓名`仅由`学号`就可以唯一确定，这就叫部分依赖于主键，因此不符合第二范式。正确的做法是将`学生姓名`和`成绩`分开存放于两张表中：</X.P>
            <X.FlexRow gap="32px">
                <X.Table
                    fromText={`
                    学号(主键)|学生姓名
                    202101|Alice
                    202102|Bob
                    202103|Candy
                    `}
                />
                <X.Table
                    fromText={`
                    学号(主键)|课程代码(主键)|成绩
                    202101|001|97
                    202102|001|86
                    202103|001|80
                    202103|003|93
                    `}
                />
            </X.FlexRow>
            <X.H1>第三范式 - 3NF</X.H1>
            <X.HighlightBlock>
                <X.P>符合第二范式，且非主键列都和主键直接相关，而不能间接相关（依赖于其他非主键字段）。</X.P>
            </X.HighlightBlock>
            <X.P>即第三范式要求不存在*传递依赖*，非主键属性之间应该是独立无关的。</X.P>
            <X.P>下面是一个不符合第三范式的例子：</X.P>
            <X.Table
                fromText={`
                id|姓名|城市|城市人口/万
                1|张三|重庆市|3100
                2|李四|武汉市|1418
                3|王五|北京市|2154
                `}
            />
            <X.P>这个例子不符合第三范式，因为存在间接的传递决定关系：`id → 城市 → 城市人口`。`城市人口`字段直接依赖的是`城市`字段，而不是主键`id`。正确的做法是设计两张表：</X.P>
            <X.FlexRow gap="32px">
                <X.Table
                    fromText={`
                    id|姓名|城市
                    1|张三|重庆市
                    2|李四|武汉市
                    3|王五|北京市
                    `}
                />
                <X.Table
                    fromText={`
                    城市|城市人口/万
                    重庆市|3100
                    武汉市|1418
                    北京市|2154
                    `}
                />
            </X.FlexRow>
        </>
    );
}
