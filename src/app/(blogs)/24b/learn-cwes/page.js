import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/learn-cwes/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.H1 href="https://cwe.mitre.org/index.html">关于CWE</X.H1>
            <X.P>
                *通用缺陷枚举*`(Common Weakness Enumeration, CWE)`是针对硬件和软件弱点和漏洞的分类系统。---
                该项目由美国国土安全部（DHS）网络安全和基础设施安全局（CISA）办公室赞助，由MITRE公司运营。
            </X.P>
            <X.P>
                相比于CVE记录描述产品中出现的漏洞，侧重于漏洞利用的技术影响，CWE对可能导致漏洞的常见缺陷或弱点进行分类，描述漏洞发生的根本原因。
            </X.P>
            <X.H2>术语</X.H2>
            <X.P>
                下面的内容译自@CWE Glossary[https://cwe.mitre.org/documents/glossary/]@，---
                这里只列出了几个下文可能出现的术语：
            </X.P>
            <X.Uli>
                <X.P noMarginBottom>`Behaviour`（行为）</X.P>
                <X.P>产品采取的操作，通常以代码实现或以算法表示。也可以指系统以外的其他参与者的操作。</X.P>
            </X.Uli>
            <X.Uli>
                <X.P noMarginBottom>`Resource`（资源）：</X.P>
                <X.P>
                    指在产品运行过程中被访问或修改的对象或实体，例如内存、CPU、文件或套接字。---
                    资源可以是系统级（内存或CPU）、代码级（函数或变量）或应用程序级（cookie或消息）。
                </X.P>
            </X.Uli>
            <X.Uli>
                <X.P noMarginBottom>`Property`（属性）：</X.P>
                <X.P>
                    指某个对系统预期的安全模型很重要的资源或行为，可能随时间变化。比如用户的输入最初是不受信任的，---
                    但经过系统的中和处理后，最终会被认为是受信任的。
                </X.P>
            </X.Uli>
            <X.H2>CWE分类系统</X.H2>
            <X.P>CWE有一套树型的分类系统，CWE提供了一些组织各个条目的结构化描述，例如视图和分类。</X.P>
            <X.P noMarginBottom>
                CWE Views是针对特定目的或特定受众而组织的弱点集合，大多数视图是整个CWE列表的子集。例如@CWE
                List[https://cwe.mitre.org/data/index.html]@中给出的：
            </X.P>
            <X.Uli>@View by Software Development[https://cwe.mitre.org/data/definitions/699.html]@</X.Uli>
            <X.Uli>@View by Hardware Design[https://cwe.mitre.org/data/definitions/1194.html]@</X.Uli>
            <X.Uli>@View by Research Concepts[https://cwe.mitre.org/data/definitions/1000.html]@</X.Uli>
            <X.P withMarginTop>CWE Categories是更细的划分，一个CWE分类可能包含一系列具有共同特征的CWE条目。</X.P>
            <X.P>
                CWE的不同条目也具有不同的抽象程度，有些条目描述了具体的缺陷，有些则描述了更一般的问题。---
                CWE的条目之间也存在父级子级的关系。四种抽象程度如下图所示：
            </X.P>
            <X.Image src="weakness_abstractions.png" width="600px" invertInDarkTheme />
            <X.P>这些分级在官网上也有对应的图标表示，相应的释义为：</X.P>
            <X.Table
                fromJSX={[
                    ['icon', '释义'],
                    [<X.Image src="view.png" width="16px" center />, '`View`，视图。'],
                    [
                        <X.Image src="category.png" width="16px" center />,
                        '`Category`，分类，一系列有共同特征的CWE条目。',
                    ],
                    [
                        <X.Image src="pillar.png" width="16px" center />,
                        '`Pillar`，最抽象的CWE条目类型，但与`Category`相比，仍然是从“技术上”对缺陷类型进行描述。',
                    ],
                    [
                        <X.Image src="class.png" width="16px" center />,
                        '`Class`，较为抽象的CWE条目类型，通常独立于特定的语言或技术。\\n`Class`级别的CWE通常从【行为、属性、资源】中的`1`~`2`个方面来描述问题。',
                    ],
                    [
                        <X.Image src="base.png" width="16px" center />,
                        '`Base`，较为抽象的CWE条目类型，通常也是独立于资源或技术。\\n`Base`级别的CWE通常从【行为、属性、技术、语言、资源】中的`2`~`3`个方面来描述问题。',
                    ],
                    [
                        <X.Image src="variant.png" width="16px" center />,
                        '`Variant`，通常与特定种类的产品有关系，一般包含特定的语言或技术。\\n`Variant`级别的CWE通常从【行为、属性、技术、语言、资源】中的`3`~`5`个方面来描述问题。',
                    ],
                    [
                        <X.Image src="composite.png" width="16px" center />,
                        '`Composite`，此类缺陷需要多种缺陷同时存在，才会引发潜在的安全漏洞。数量较少。',
                    ],
                    [
                        <X.Image src="chain.png" width="30px" center />,
                        '`Chain`，呈链式关系，例如缺陷X为缺陷Y的发生创造了条件。数量较少。\\n`Chain`可以涉及两个以上的弱点，在某些情况下也可能具有树状结构。',
                    ],
                ]}
            />
            <X.H1>View of CWE Top 25 (2023)</X.H1>
            <X.P>
                （2023年）前25个最危险的软件缺陷，按顺序排名。标题前的【`P`/`C`/`B`/`V`/`Compo`】标识了其抽象类型。
            </X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/787.html">【B】CWE-787: Out-of-bounds Write</X.H2>
            <X.P>越界写入，在预期缓冲区末尾之后或开头之前写入。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                int id_sequence[3];

                /* Populate the id array. */

                id_sequence[0] = 123;
                id_sequence[1] = 234;
                id_sequence[2] = 345;
                id_sequence[3] = 456;
                `}
            />
            <X.P>写入`id_sequence[3]`越界了。</X.P>
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                int returnChunkSize(void *)
                {
                    /* if chunk info is valid, return the size of usable memory,
                    * else, return -1 to indicate an error.
                    */
                    ...
                }
                int main()
                {
                    ...
                    memcpy(destBuf, srcBuf, (returnChunkSize(destBuf) - 1));
                    ...
                }
                `}
            />
            <X.P>
                `returnChunkSize()`遇到错误会返回`-1`，但是`memcpy()`假定传入的参数是`unsigned`，---
                此时负值会被转换成相当大的数值。
            </X.P>
            <X.H3>Example 3</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                char *copy_input(char *user_supplied_string)
                {
                    int i, dst_index;
                    char *dst_buf = (char *)malloc(4 * sizeof(char) * MAX_SIZE);
                    if (MAX_SIZE <= strlen(user_supplied_string))
                    {
                        die("user string too long, die evil hacker!");
                    }
                    dst_index = 0;
                    for (i = 0; i < strlen(user_supplied_string); i++)
                    {
                        if ('&' == user_supplied_string[i])
                        {
                            dst_buf[dst_index++] = '&';
                            dst_buf[dst_index++] = 'a';
                            dst_buf[dst_index++] = 'm';
                            dst_buf[dst_index++] = 'p';
                            dst_buf[dst_index++] = ';';
                        }
                        else if ('<' == user_supplied_string[i])
                        {
                            /* encode to &lt; */
                        }
                        else
                            dst_buf[dst_index++] = user_supplied_string[i];
                    }
                    return dst_buf;
                }
                `}
            />
            <X.P>
                虽然前面做了长度检查，但是后续的逻辑将`'&'`和`'&lt;'`转为HTML实体时，可能导致长度增长。---
                如果恶意构造包含大量`'&'`的输入，可能导致越界写入。
            </X.P>
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.P>
                    详见@[https://github.com/zephyrproject-rtos/zephyr/security/advisories/GHSA-fj4r-373f-9456]@。
                </X.P>
            </X.HighlightBlock>
            <X.H2 href="https://cwe.mitre.org/data/definitions/79.html">
                【B】CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')
            </X.H2>
            <X.P>跨站脚本攻击。</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.P>详见@Learn XSS[/24b/cross-site-scripting/]@。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://cwe.mitre.org/data/definitions/89.html">
                【B】CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')
            </X.H2>
            <X.P>
                SQL注入，如果用户可控的输入没有被正确的过滤其中可能包含的SQL语法，那么用这部分输入作为完整SQL命令的一部分时，可能发生预期之外的结果。---
                这可用于更改查询逻辑以绕过安全检查，或插入修改后端数据库的其他语句，包括执行系统命令。
            </X.P>
            <X.H3>Example 1</X.H3>
            <X.P>如果一个SQL由用户输入拼接而成，最终的大致示意如下，其中`userName`是用户名，`itemName`由用户输入：</X.P>
            <X.CodeBlock
                language="text"
                code="SELECT * FROM items WHERE owner = <userName> AND itemname = <itemName>;"
            />
            <X.P>此时如果用户名`wiley`输入的`itemName`是`name' OR 'a'='a`，则拼接后的SQL语句是：</X.P>
            <X.CodeBlock
                language="sql"
                code="SELECT * FROM items WHERE owner = 'wiley' AND itemname = 'name' OR 'a'='a';"
            />
            <X.P>这条语句等价于：</X.P>
            <X.CodeBlock language="sql" code="SELECT * FROM items;" />
            <X.H3>Example 2</X.H3>
            <X.P>
                还是上面的例子，这次假设用户`wiley`输入的`itemName`是`name'; DELETE FROM items; --`，---
                则SQL语句等价于下面的两个请求：
            </X.P>
            <X.CodeBlock
                language="sql"
                code={`
                SELECT * FROM items WHERE owner = 'wiley' AND itemname = 'name';
                DELETE FROM items;
                --'
                `}
            />
            <X.H3>Example 3</X.H3>
            <X.CodeBlock
                language="php"
                code={`
                $id = $_COOKIE["mid"];
                mysql_query("SELECT MessageID, Subject FROM messages WHERE MessageID = '$id'");
                `}
            />
            <X.P>
                由于cookie是可以在本地修改的，这仍然是一个输入用户可控的例子。注意到PHP语句中的单引号包裹着`$id`，---
                一个可以注入的载荷是`1432' or '1' = '1`。请求会变成：
            </X.P>
            <X.CodeBlock
                language="sql"
                code="SELECT MessageID, Subject FROM messages WHERE MessageID = '1432' or '1' = '1'"
            />
            <X.H2 href="https://cwe.mitre.org/data/definitions/416.html">【V】CWE-416: Use After Free</X.H2>
            <X.P>使用释放过的指针可能会导致未知的行为发生。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                #include <stdio.h>
                #include <unistd.h>
                #define BUFSIZER1 512
                #define BUFSIZER2 ((BUFSIZER1 / 2) - 8)
                int main(int argc, char **argv)
                {
                    char *buf1R1;
                    char *buf2R1;
                    char *buf2R2;
                    char *buf3R2;
                    buf1R1 = (char *)malloc(BUFSIZER1);
                    buf2R1 = (char *)malloc(BUFSIZER1);
                    free(buf2R1);
                    buf2R2 = (char *)malloc(BUFSIZER2);
                    buf3R2 = (char *)malloc(BUFSIZER2);
                    strncpy(buf2R1, argv[1], BUFSIZER1 - 1);
                    free(buf1R1);
                    free(buf2R2);
                    free(buf3R2);
                }
                `}
            />
            <X.P>`buf2R1`已经被释放过了。</X.P>
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                char *ptr = (char *)malloc(SIZE);
                if (err)
                {
                    abrt = 1;
                    free(ptr);
                }
                ...
                if (abrt)
                {
                    logError("operation aborted before commit", ptr);
                }
                `}
            />
            <X.P>在发生异常时指针已经释放，但随后又在`logError`错误地使用。</X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/78.html">
                【B】CWE-78: Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection')
            </X.H2>
            <X.P noMarginBottom>操作系统命令注入，类似地，只不过此时是操作系统命令。通常这有两种子类型：</X.P>
            <X.Uli>程序执行某个固定的程序，但是接收外部输入作为程序的参数。</X.Uli>
            <X.Uli>程序将整个输入作为命令重定向到操作系统。</X.Uli>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="php"
                code={`
                $userName = $_POST["user"];
                $command = 'ls -l /home/' . $userName;
                system($command);
                `}
            />
            <X.P>如果缺乏相应的认证，攻击者可以通过命令分隔符执行攻击命令，例如参数传入`;rm -rf /`，命令就等价于：</X.P>
            <X.CodeBlock language="bash" code="ls -l /home/;rm -rf /" />
            <X.H2 href="https://cwe.mitre.org/data/definitions/20.html">【C】CWE-20: Improper Input Validation</X.H2>
            <X.P>
                输入验证不当，程序接收输入或数据，但没有验证或者错误地验证输入是否具有安全正确地处理数据所需的属性。
            </X.P>
            <X.H3>Example 1</X.H3>
            <X.P>没有输入验证。</X.P>
            <X.CodeBlock
                language="php"
                code={`
                $birthday = $_GET['birthday'];
                $homepage = $_GET['homepage'];
                echo "生日：$birthday<br>主页：<a href=$homepage>点击此处</a>"
                `}
            />
            <X.P>
                这段程序展示用户的生日和主页，但由于这些参数来自于HTTP请求，攻击者可以构造一个含有`script`标签的钓鱼链接，---
                并通过参数传入，导致恶意脚本在客户端上执行。
            </X.P>
            <X.P>尽管开发者可以限制输入为整数和破折号，攻击者仍有可能提供以下形式的字符串：</X.P>
            <X.CodeBlock language="text" code="2009-01-09--" />
            <X.P>
                如果在SQL语句中使用这些数据，它会将语句的其余部分视为注释。注释可能会禁用语句中其他与安全相关的逻辑。
            </X.P>
            <X.P>XSS攻击或SQL注入只是输入验证不当可能出现的后果中的一小部分。</X.P>
            <X.H3>Example 2</X.H3>
            <X.P>有问题的输入验证。</X.P>
            <X.CodeBlock
                language="java"
                code={`
                private void buildList(int untrustedListSize)
                {
                    if (0 > untrustedListSize)
                    {
                        die("Negative value supplied for list size, die evil hacker!");
                    }
                    Widget[] list = new Widget[untrustedListSize];
                    list[0] = new Widget();
                }
                `}
            />
            <X.P>
                这个示例尝试根据用户指定的值构建列表，并判断了提供值为负的情况，但还是忽略了输入`0`值的情况，可能导致后续抛出异常。
            </X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/125.html">【B】CWE-125: Out-of-bounds Read</X.H2>
            <X.P>越界读取，在预期缓冲区末尾之后或开头之前读取。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                int getValueFromArray(int *array, int len, int index)
                {
                    int value;

                    // check that the array index is less than the maximum
                    // length of the array
                    if (index < len)
                    {
                
                        // get the value at the specified index of the array
                        value = array[index];
                    }

                    // if array index is invalid then output error message
                    // and return value indicating error
                    else
                    {
                        printf("Value is: %d\\n", array[index]);
                        value = -1;
                    }

                    return value;
                }
                `}
            />
            <X.P>这段代码只检查了`index &lt; len`的情况；在判断条件中还应加入`index &gt;= 0`。</X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/22.html">
                【B】CWE-22: Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')
            </X.H2>
            <X.P>
                “路径遍历”，产品使用外部输入来构建路径名，该路径名旨在识别位于受限父目录下的文件或目录。但通过使用特殊元素---
                如`../`序列，如果没有经过中和处理，攻击者可能会访问到受限目录之外的文件。
            </X.P>
            <X.P>
                上述风险称为“相对路径遍历”，路径遍历还包括使用绝对路径名，例如`/usr/local/bin`，这称为“绝对路径遍历”。
            </X.P>
            <X.P>
                在许多编程语言中，注入空字节可能允许攻击者截断生成的文件名，以扩大攻击范围。例如，产品可能会将`".txt"`---
                添加到路径名后以限制攻击者只能访问文本文件，但空注入可能会有效地消除此限制。
            </X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="perl"
                code={`
                my $dataPath = "/users/cwe/profiles";
                my $username = param("user");
                my $profilePath = $dataPath."/".$username;

                open(my $fh, "<", $profilePath) || ExitError("profile read error: $profilePath");
                print "<ul>\\n";
                while (<$fh>)
                {
                    print "<li>$_</li>\\n";
                }
                print "</ul>\\n";
                `}
            />
            <X.P>`$username`参数没有验证，攻击者可以构造：</X.P>
            <X.CodeBlock language="text" code="user=../../../etc/passwd" />
            <X.P>最终生成以下路径：</X.P>
            <X.CodeBlock language="text" code="/users/cwe/profiles/../../../etc/passwd" />
            <X.P>等同于访问`/etc/passwd`。</X.P>
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="python"
                code={`
                import os
                import sys
                def main():
                    filename = sys.argv[1]
                    path = os.path.join(os.getcwd(), filename)
                    try:
                        with open(path,'r') as f:
                            file_data = f.read()
                    except FileNotFoundError as    e:
                        print("Error - file not found")
                main()
                `}
            />
            <X.P>
                上述代码会导致“绝对路径遍历”，`os.path.join`如果第二个参数传入绝对路径，则会弃用第一个参数`os.getcwd()`，---
                直接使用第二个参数`filename`。那么传入`/etc/passwd`就可能导致同样的攻击。
            </X.P>
            <X.P>一个正确的做法是：</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="5"
                code={`
                import os
                import sys
                def main():
                    filename = sys.argv[1]
                    path = os.path.normpath(f"{os.getcwd()}{os.sep}{filename}")
                    try:
                        with open(path,'r') as f:
                            file_data = f.read()
                    except FileNotFoundError as    e:
                        print("Error - file not found")
                main()
                `}
            />
            <X.H2 href="https://cwe.mitre.org/data/definitions/352.html">
                【Compo】CWE-352: Cross-Site Request Forgery (CSRF)
            </X.H2>
            <X.P>跨站请求伪造。</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.P>详见@Learn CSRF[/24b/cross-site-request-forgery/]@。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://cwe.mitre.org/data/definitions/434.html">
                【B】CWE-434: Unrestricted Upload of File with Dangerous Type
            </X.H2>
            <X.P>缺少对上传文件类型的验证。</X.P>
            <X.H3>Example 1</X.H3>
            <X.P>
                下面的代码中，前端希望用户上传一个图片，`upload_picture.php`处理上传的文件，并尝试储存在`pictures/`中。
            </X.P>
            <X.CodeBlock
                language="html"
                code={`
                <form action="upload_picture.php" method="post" enctype="multipart/form-data">
                    Choose a file to upload:
                    <input type="file" name="filename"/>
                    <br/>
                    <input type="submit" name="submit" value="Submit"/>
                </form>
                `}
            />
            <X.CodeBlock
                language="php"
                code={`
                //upload_picture.php
                ...
                // Define the target location where the picture being
                // uploaded is going to be saved.
                $target = "pictures/" . basename($_FILES['uploadedfile']['name']);
                
                // Move the uploaded file to the new location.
                if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target))
                {
                    echo "The picture has been successfully uploaded.";
                }
                else
                {
                    echo "There was an error uploading the picture, please try again.";
                }
                `}
            />
            <X.P>
                上述代码的问题是没有检查传入的文件类型，以至于攻击者可以上传一份`malicious.php`，并且用它来执行系统代码：
            </X.P>
            <X.CodeBlock
                language="php"
                code={`
                <?php
                    //malicious.php
                    system($_GET['cmd']);
                ?>
                `}
            />
            <X.P>上传成功后通过类似以下形式的URL调用：</X.P>
            <X.CodeBlock language="text" code="http://server.example.com/upload_dir/malicious.php?cmd=ls%20-l" />
            <X.H2 href="https://cwe.mitre.org/data/definitions/862.html">【C】CWE-862: Missing Authorization</X.H2>
            <X.P>缺少授权，没有验证用户是否有权访问资源。</X.P>
            <X.HighlightBlock>
                <X.H3>Authentication & Authorization</X.H3>
                <X.Uli>
                    `Authentication (AuthN)`，身份认证，通常在授权之前完成，是验证“用户是谁”的过程。---
                    一般通过账号密码、人脸识别的方式。\n例如：员工通过输入用户名和密码登录公司网络。
                </X.Uli>
                <X.Uli>
                    `Authorization (AuthZ)`，授权，是确认用户是否有权访问资源。---
                    一般通过角色规则（管理员、普通用户）等方式。\n
                    例如：普通员工登录公司网络后，不能访问公司较为敏感的数据。
                </X.Uli>
            </X.HighlightBlock>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="php"
                code={`
                function runEmployeeQuery($dbName, $name)
                {
                    mysql_select_db($dbName,$globalDbHandle) or die("Could not open Database".$dbName);
                    //Use a prepared statement to avoid CWE-89
                    $preparedStatement = $globalDbHandle->prepare('SELECT * FROM employees WHERE name = :name');
                    $preparedStatement->execute(array(':name' => $name));
                    return $preparedStatement->fetchAll();
                }
                ...
                $employeeRecord = runEmployeeQuery('EmployeeDB',$_GET['EmployeeName']);
                `}
            />
            <X.P>
                这段代码小心地检查了SQL注入风险（通过`prepare`函数），但却没有验证执行数据库操作的用户是否具有权限。
            </X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/476.html">【B】CWE-476: NULL Pointer Dereference</X.H2>
            <X.P>对空指针解引用（取内容），也就是`*`运算符。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                void host_lookup(char *user_supplied_addr)
                {
                    struct hostent *hp;
                    in_addr_t *addr;
                    char hostname[64];
                    in_addr_t inet_addr(const char *cp);

                    /*routine that ensures user_supplied_addr is in the right format for conversion */

                    validate_addr_form(user_supplied_addr);
                    addr = inet_addr(user_supplied_addr);
                    hp = gethostbyaddr(addr, sizeof(struct in_addr), AF_INET);
                    strcpy(hostname, hp->h_name);
                }
                `}
            />
            <X.P>
                如果`gethostbyaddr`返回`NULL`，`hp`就是空指针，`strcpy`会导致空指针解引用。程序缺少对其返回值的检查。
            </X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/287.html">【C】CWE-287: Improper Authentication</X.H2>
            <X.P>身份认证不当，当声明拥有某个身份时，程序不足以证明该声明是正确的。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="perl"
                code={`
                my $x = new CGI;

                if ($x->cookie('loggedin') ne "true")
                {
                    if (!AuthenticateUser($x->param('username'), $x->param('password')))
                    {
                        ExitError("Error: you need to log in first");
                    }
                    else
                    {
                        #Set loggedin and user cookies.
                        $x->cookie(
                            -name = > 'loggedin',
                            -value = > 'true');
                
                        $x->cookie(
                            -name = > 'user',
                            -value = > $x->param('username'));
                    }
                }

                if ($x->cookie('user') eq "Administrator")
                {
                    DoAdministratorTasks();
                }
                `}
            />
            <X.P>使用cookie做认证，是可以直接被绕过的！</X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/190.html">
                【B】CWE-190: Integer Overflow or Wraparound
            </X.H2>
            <X.P>
                整数溢出或整数回绕，当有符号数相加超过正负值上限时可能发生溢出；当无符号数相加超过上限就会从`0`开始“回绕”；---
                或者计算`unsigned(0) - 1`时，会得到最大值。
            </X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                img_t table_ptr; /*struct containing img data, 10kB each*/
                int num_imgs;
                ...
                num_imgs = get_num_imgs();
                table_ptr = (img_t *)malloc(sizeof(img_t) * num_imgs);
                ...
                `}
            />
            <X.P>随着`num_imgs`增大，乘积计算结果可能发生回绕，导致最终分配了一个很小的内存空间。</X.P>
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                short int bytesRec = 0;
                char buf[SOMEBIGNUM];

                while (bytesRec < MAXGET)
                {
                    bytesRec += getFromInput(buf + bytesRec);
                }
                `}
            />
            <X.P>
                `bytesRec`定义为`short int`类型，当`MAXGET`很大时，很可能导致`bytesRec`溢出（永远小于`MAXGET`），---
                循环不会终止，并不断地覆盖`buf`中的内容。
            </X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/502.html">
                【B】CWE-502: Deserialization of Untrusted Data
            </X.H2>
            <X.P>反序列化不受信任的数据，也就是没有检查反序列化后的结果是否是有效的。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="java"
                code={`
                try
                {
                    File file = new File("object.obj");
                    ObjectInputStream in = new ObjectInputStream(new FileInputStream(file));
                    javax.swing.JButton button = (javax.swing.JButton)in.readObject();
                    in.close();
                }
                `}
            />
            <X.P>如果攻击者替换了文件内容，可能导致风险。`readObject()`应当做如下改进：</X.P>
            <X.CodeBlock
                language="java"
                code={`
                private final void readObject(ObjectInputStream in) throws java.io.IOException
                {
                    throw new java.io.IOException("Cannot be deserialized");
                }
                `}
            />
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="python"
                code={`
                class ExampleProtocol(protocol.Protocol):
                    def dataReceived(self, data):
                        # Code that would be here would parse the incoming data
                        # After receiving headers, call confirmAuth() to authenticate
                        pass

                    def confirmAuth(self, headers):
                        try:
                            token = cPickle.loads(base64.b64decode(headers['AuthToken']))
                            if not check_hmac(token['signature'], token['data'], getSecretKey()):
                                raise AuthFail
                            self.secure_data = token['data']
                        except:
                            raise AuthFail
                `}
            />
            <X.P>
                这段代码没有验证传入数据是否合法。攻击者可以构造一个非法的序列化对象`AuthToken`，该对象通过实例化Python的子进程之一来执行任意命令。---
                例如，攻击者可以构建一个利用Python子进程模块的`pickle`，该模块会生成新进程并包含许多用于各种用途的参数。---
                由于`Pickle`库允许对象定义如何`unpickle`，因此攻击者可以指示`unpickle`进程在子进程模块中调用`Popen`并执行`/bin/sh`。
            </X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/77.html">
                【C】CWE-77: Improper Neutralization of Special Elements used in a Command ('Command Injection')
            </X.H2>
            <X.P>命令注入，用户输入没有被中和，或错误地中和处理，导致执行的预期命令被修改。</X.P>
            <X.P noMarginBottom>命令注入漏洞通常发生在以下情况：</X.P>
            <X.Uli>数据从不受信任的来源进入应用程序。</X.Uli>
            <X.Uli>数据是字符串的一部分，由应用程序作为命令执行。</X.Uli>
            <X.Uli>通过执行命令，应用程序为攻击者提供了其原本无法拥有的权限或能力。</X.Uli>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                int main(int argc, char **argv)
                {
                    char cmd[CMD_MAX] = "/usr/bin/cat ";
                    strcat(cmd, argv[1]);
                    system(cmd);
                }
                `}
            />
            <X.P>
                上述程序出于对运维人员的教学目的将会以管理员权限执行。此时有命令注入的风险，例如传入`";rm -rf /"`。
            </X.P>
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="java"
                code={String.raw`
                String btype = request.getParameter("backuptype");
                String cmd = new String("cmd.exe /K \" c:\\util\\rmanDB.bat "
                    +btype+
                    "&&c:\\utl\\cleanup.bat\""
                )
                
                System.Runtime.getRuntime().exec(cmd);
                `}
            />
            <X.P>原因是类似的，`btype`参数有被注入的风险。</X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/119.html">
                【C】CWE-119: Improper Restriction of Operations within the Bounds of a Memory Buffer
            </X.H2>
            <X.P>
                缓冲区范围内的操作限制不当，产品对内存缓冲区执行操作，但它可以从缓冲区预期边界之外的内存位置读取或写入。
            </X.P>
            <X.P>包括前面提到的越界读取和越界写入。范围较为广泛，这里不详细展开了。</X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/798.html">
                【B】CWE-798: Use of Hard-coded Credentials
            </X.H2>
            <X.P>使用硬编码的凭证，即凭证在源代码中直接出现。</X.P>
            <X.H3>Example 1</X.H3>
            <X.P>下面的代码硬编码了用户名和密码去连接数据库：</X.P>
            <X.CodeBlock
                language="java"
                code={`
                ...
                DriverManager.getConnection(url, "scott", "tiger");
                ...
                `}
            />
            <X.P>
                有权限访问到此源码的员工可以利用这点闯入系统。更坏的情况是如果攻击者能够访问到程序的字节码，---
                可以使用`javap -c`命令反汇编，得到明文密码，例如：
            </X.P>
            <X.CodeBlock
                language="text"
                code={`
                javap -c ConnMngr.class
                22: ldc #36; //String jdbc:mysql://ixne.com/rxsql
                24: ldc #38; //String scott
                26: ldc #17; //String tiger
                `}
            />
            <X.H3>Example 2</X.H3>
            <X.P>硬编码的用于加密的密钥同样是有问题的。理由同上，只要在源程序中明文出现，都会有很大的风险。</X.P>
            <X.CodeBlock
                language="c"
                code={`
                int VerifyAdmin(char *password)
                {
                    if (strcmp(password, "68af404b513073584c4b6f22b6c63e6b"))
                    {
                        printf("Incorrect Password!\\n");
                        return (0);
                    }
                    printf("Entering Diagnostic Mode...\\n");
                    return (1);
                }
                `}
            />
            <X.H2 href="https://cwe.mitre.org/data/definitions/918.html">
                【B】CWE-918: Server-Side Request Forgery (SSRF)
            </X.H2>
            <X.P>
                服务端请求伪造，攻击者通过伪造服务器发起的请求，使服务器端的应用程序访问受信任的第三方服务器或资源。---
                通常，攻击者利用此漏洞访问内部系统。SSRF可以看作一种跳板攻击。
            </X.P>
            <X.Image src="ssrf.jpg" width="800px" invertInDarkTheme />
            <X.H2 href="https://cwe.mitre.org/data/definitions/306.html">
                【B】CWE-306: Missing Authentication for Critical Function
            </X.H2>
            <X.P>重要功能没有做权限认证。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="java"
                highlightLines="1,3-9,15"
                code={`
                private boolean isUserAuthentic = false;

                public boolean authenticateUser(String username, String password)
                {
                    // authenticate user,
                    // if user is authenticated then set variable to true
                    // otherwise set variable to false
                    ...
                }

                public BankAccount createNewBankAccount(String accountNumber, String accountType, String accountName, String accountSSN, double balance)
                {
                    BankAccount account = null;
                
                    if (isUserAuthentic)
                    {
                        account = new BankAccount();
                        account.setAccountNumber(accountNumber);
                        account.setAccountType(accountType);
                        account.setAccountOwnerName(accountName);
                        account.setAccountOwnerSSN(accountSSN);
                        account.setBalance(balance);
                    }
                    return account;
                }
                `}
            />
            <X.P>上面代码中高亮的部分是*正确*的做法。如果忽视了验证，就存在风险了。</X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/362.html">
                【C】CWE-362: Concurrent Execution using Shared Resource with Improper Synchronization ('Race
                Condition')
            </X.H2>
            <X.P>
                数据竞争，某段代码需要对共享资源进行临时、独占访问，但存在一个时间窗口，在该时间窗口内共享资源可被同时运行的另一个代码片段修改。
            </X.P>
            <X.P noMarginBottom>数据竞争违反了以下两个原则：</X.P>
            <X.Uli>
                排他性：代码序列被赋予对共享资源的排他性访问权限，即在原始序列完成执行之前，其他代码序列不能修改共享资源的属性。
            </X.Uli>
            <X.Uli>
                <X.P noMarginBottom>
                    原子性：代码序列被视为一个单一的操作，即在执行期间不会被中断，也不会被其他代码序列中断。
                </X.P>
                <X.P>
                    程序员可能会认为某些代码序列执行得太快，不会受到干扰代码序列的影响，但事实并非如此。---
                    例如，单个`x++`语句在代码层可能看起来是原子的，但在指令层实际上是非原子的，因为它涉及读取`x`的原始值、---
                    计算`x+1`、最后将结果赋值给`x`。
                </X.P>
            </X.Uli>
            <X.P withMarginTop>
                干扰代码序列可以是可信的或不可信的。受信任的干扰代码序列出现在产品内部，攻击者无法修改，只能间接调用。---
                不受信任的干扰代码序列可由攻击者直接编写，通常在易受攻击产品的外部。
            </X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="perl"
                code={`
                $transfer_amount = GetTransferAmount();
                $balance = GetBalanceFromDatabase();
                
                if ($transfer_amount < 0)
                {
                    FatalError("Bad Transfer Amount");
                }
                $newbalance = $balance - $transfer_amount;
                if (($balance - $transfer_amount) < 0)
                {
                    FatalError("Insufficient Funds");
                }
                SendNewBalanceToDatabase($newbalance);
                NotifyUser("Transfer of $transfer_amount succeeded.");
                NotifyUser("New balance: $newbalance");
                `}
            />
            <X.P>这个例子中`GetBalanceFromDatabase()`和`SendNewBalanceToDatabase()`可能会发生数据竞争。</X.P>
            <X.P noMarginBottom>假设初始余额`balance`是`100.00`，一个攻击可以构造如下：</X.P>
            <X.Oli>攻击者调起两个程序，`PROGRAM-1`和`PROGRAM-2`，使用同一账户。</X.Oli>
            <X.Oli>`PROGRAM-1`请求转账`80.00`，此时`PROGRAM-1`计算出`$newbalance`为`20.00`。</X.Oli>
            <X.Oli>`PROGRAM-1`调用`SendNewBalanceToDatabase(20.00)`，但是*受到了延迟*。</X.Oli>
            <X.Oli>`PROGRAM-2`请求转账`1.00`，同理计算出`$newbalance`为`99.00`。</X.Oli>
            <X.Oli>`PROGRAM-2`调用`SendNewBalanceToDatabase(99.00)`。</X.Oli>
            <X.Oli>`PROGRAM-1`调用的`SendNewBalanceToDatabase(20.00)`提交到数据库。</X.Oli>
            <X.Oli>`PROGRAM-2`调用的`SendNewBalanceToDatabase(99.00)`提交到数据库。</X.Oli>
            <X.P withMarginTop>最后导致数据库记录的余额是错误的。</X.P>
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="c"
                code={`
                void f(pthread_mutex_t *mutex)
                {
                    pthread_mutex_lock(mutex);
                    
                    /* access shared resource */ 
                    
                    pthread_mutex_unlock(mutex);
                }
                `}
            />
            <X.P>
                上面的函数尝试获取锁，以便对共享资源执行操作。不过上述函数没有检查`pthread_mutex_lock()`是否正常返回。---
                如果因为一些原因导致`pthread_mutex_lock()`失败，那么这个例子会导致数据竞争。
            </X.P>
            <X.P>正确的做法是：</X.P>
            <X.CodeBlock
                language="c"
                code={`
                int f(pthread_mutex_t *mutex)
                {
                    int result;
                
                    result = pthread_mutex_lock(mutex);
                    if (0 != result)
                        return result;
                
                    /* access shared resource */
                
                    return pthread_mutex_unlock(mutex);
                }
                `}
            />
            <X.H2 href="https://cwe.mitre.org/data/definitions/269.html">
                【C】CWE-269: Improper Privilege Management
            </X.H2>
            <X.P>权限管理不当，程序没有正确地管理用户的权限。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="python"
                code={`
                def makeNewUserDir(username):
                    if invalidUsername(username):
                        #avoid CWE-22 and CWE-78
                        print('Usernames cannot contain invalid characters')
                        return False

                    try:
                        raisePrivileges()
                        os.mkdir('/home/' + username)
                        lowerPrivileges()
                    except OSError:
                        print('Unable to create new user directory for user:' + username)
                        return False

                    return True
                `}
            />
            <X.P>
                上述代码先提高权限以创建文件夹，然后立刻降回来。但如果`os.mkdir()`发生了异常，就不会调用`lowerPrivileges()`，---
                这时程序会在提高的权限下运行，可能导致进一步被利用。
            </X.P>
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="java"
                code={`
                public enum Roles
                {
                    ADMIN,OPERATOR,USER,GUEST
                }

                public void resetPassword(User requestingUser, User user, String password)
                {
                    if (isAuthenticated(requestingUser))
                    {
                        switch (requestingUser.role)
                        {
                        case GUEST:
                            System.out.println("You are not authorized to perform this command");
                            break;
                
                        case USER:
                            System.out.println("You are not authorized to perform this command");
                            break;
                
                        default:
                            setPassword(user, password);
                            break;
                        }
                    }
                    else
                    {
                        System.out.println("You must be logged in to perform this command");
                    }
                }
                `}
            />
            <X.P>
                这个系统定义了不同等级的用户，`ADMIN`和`OPERATOR`都可以重置密码。系统设计的初衷是想让`OPERATOR`拥有稍弱于`ADMIN`的权限；---
                然而既然`OPERATOR`可以修改密码，那么就可以通过重置`ADMIN`账号的密码来控制一个管理员账号。此例的权限管理是有缺陷的。
            </X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/94.html">
                【B】CWE-94: Improper Control of Generation of Code ('Code Injection')
            </X.H2>
            <X.P>
                当产品允许用户输入包含代码语法的内容时，攻击者有可能以改变产品预期控制流的方式编写代码。这种改变可能导致任意代码的执行。
            </X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="php"
                code={`
                $MessageFile = "messages.out";
                if ($_GET["action"] == "NewMessage")
                {
                    $name = $_GET["name"];
                    $message = $_GET["message"];
                    $handle = fopen($MessageFile, "a+");
                    fwrite($handle, "<b>$name</b> says '$message'<hr>\n");
                    fclose($handle);
                    echo "Message Saved!<p>\n";
                }
                else if ($_GET["action"] == "ViewMessages")
                {
                    include($MessageFile);
                }
                `}
            />
            <X.P>
                这段代码尝试将用户消息写入消息文件并允许用户查看它们。开发者可能希望文件只包含数据，然而攻击者可以构造以下参数：
            </X.P>
            <X.CodeBlock
                language="text"
                code={`
                name=h4x0r
                message=%3C?php%20system(%22/bin/ls%20-l%22);?%3E
                `}
            />
            <X.P>这会被解析成：</X.P>
            <X.CodeBlock language="php" code='<?php system("/bin/ls -l");?>' />
            <X.P>这将导致用户查看他们的时候，PHP代码被解析执行。注意这种情况下，同样存在XSS漏洞风险。</X.P>
            <X.H3>Example 2</X.H3>
            <X.CodeBlock
                language="python"
                code={`
                def main():
                    sum = 0
                    numbers = eval(input("Enter a space-separated list of numbers: "))
                    for num in numbers:
                        sum = sum + num
                    print(f"Sum of {numbers} = {sum}")
                main()
                `}
            />
            <X.P>
                `eval`函数会执行用户输入的代码，一个可以注入的载荷是`__import__('subprocess').getoutput('rm -r *')`。
            </X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/863.html">【C】CWE-863: Incorrect Authorization</X.H2>
            <X.P>错误的授权，没有正确验证用户是否有权访问资源。</X.P>
            <X.H3>Example 1</X.H3>
            <X.CodeBlock
                language="php"
                highlightLines="1"
                code={`
                $role = $_COOKIES['role'];
                if (!$role)
                {
                    $role = getRole('user');
                    if ($role)
                    {
                        // save the cookie to send out in future responses
                        setcookie("role", $role, time() + 60 * 60 * 2);
                    }
                    else
                    {
                        ShowLoginScreen();
                        die("\\n");
                    }
                }
                if ($role == 'Reader')
                {
                    DisplayMedicalHistory($_POST['patient_ID']);
                }
                else
                {
                    die("You are not Authorized to view this record\\n");
                }
                `}
            />
            <X.P>修改cookie即可绕过授权。</X.P>
            <X.H2 href="https://cwe.mitre.org/data/definitions/276.html">
                【B】CWE-276: Incorrect Default Permissions
            </X.H2>
            <X.P>
                错误的默认权限。指软件系统、应用程序、文件或资源在创建时被分配了不适当的默认权限。这些默认权限可能过于宽松，---
                允许未授权的用户或进程进行不必要或有害的访问和操作，从而导致潜在的安全漏洞。
            </X.P>
            <X.H3>Example 1</X.H3>
            <X.P>
                软件在安装或初始化时，通常会创建一些文件、目录或资源。这些资源会被分配默认的权限（读、写、执行权限等）。
            </X.P>
            <X.P>
                如果这些默认权限设置得过于宽松，比如允许所有用户都具有读写权限，那么未授权的用户可能会访问、修改或删除这些文件，导致数据泄露、篡改或破坏。
            </X.P>
            {/* xss，csrf portswig */}
            {/* highlight */}
            {/* real-world project */}
        </>
    );
}
