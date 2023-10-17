import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>数据库设计三大范式</X.Title>
            <X.P>
                为了减少数据冗余，设计数据表时必须遵循一定的规则，在关系型数据库中这种规则就称为范式。\n
                严谨的定义可以参考维基百科---
                @第一范式[https://zh.wikipedia.org/zh-cn/%E7%AC%AC%E4%B8%80%E6%AD%A3%E8%A6%8F%E5%8C%96]@、---
                @第二范式[https://zh.wikipedia.org/zh-cn/%E7%AC%AC%E4%BA%8C%E6%AD%A3%E8%A6%8F%E5%8C%96]@、---
                @第三范式[https://zh.wikipedia.org/zh-cn/%E7%AC%AC%E4%B8%89%E6%AD%A3%E8%A6%8F%E5%8C%96]@，---
                互联网上也有很多优秀的技术博客。本篇希望能以简洁的语句和例子进行描述。
            </X.P>

            <X.H1>第一范式 - 1NF</X.H1>
            <X.HighlightBlock bgcolor="gray">
                <X.P>数据库表的每一列都是不可再分的。</X.P>
            </X.HighlightBlock>
            <X.P>下一页</X.P>
            <X.Table>
                人员编号|姓名|地址|职务---
                1001|李雨晨|江苏省南京市|财务部经理---
                1002|张文浩|辽宁省沈阳市|财务部员工---
                1003|王洪|湖北省武汉市|销售部实习生---
                1004|陈宇航|吉林省长春市|销售部员工
            </X.Table>

            <X.H1>第二范式 - 2NF</X.H1>
            <X.HighlightBlock bgcolor="gray">
                <X.P>符合第一范式，且</X.P>
            </X.HighlightBlock>

            <X.H1>第三范式 - 3NF</X.H1>
            <X.HighlightBlock bgcolor="gray">
                <X.P>符合第二范式，且</X.P>
            </X.HighlightBlock>
        </X.BlogWrapper>
    );
}
