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
            <X.Image src="weakness_abstractions.png" width="600px" />
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
            <X.H1>View: CWE Top 25 (2023)</X.H1>
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
                
                    * else, return -1 to indicate an error
                
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
            <X.H2 href="https://cwe.mitre.org/data/definitions/79.html">
                【B】CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')
            </X.H2>
            <X.P>跨站脚本（XSS）攻击，用户输入未被正确处理，导致恶意代码被执行。</X.P>
            <X.P noMarginBottom>
                XSS攻击分为三种：反射型、存储型、DOM型。反射型和存储型是服务器端的漏洞，DOM型是客户端的漏洞。具体如下：
            </X.P>
            <X.Uli>
                <X.P>反射型`(Reflected XSS)`/非持久型`(Non-Persistent XSS)`</X.P>
            </X.Uli>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/89.html">
                【B】CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')
            </X.H2>
            {/* todo */}

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
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/20.html">【C】CWE-20: Improper Input Validation</X.H2>
            {/* todo */}

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
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/352.html">
                【Compo】CWE-352: Cross-Site Request Forgery (CSRF)
            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/434">
                【B】CWE-434: Unrestricted Upload of File with Dangerous Type
            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/862">【C】CWE-862: Missing Authorization</X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/476">【B】CWE-476: NULL Pointer Dereference</X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/287">【C】CWE-287: Improper Authentication</X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/190">【B】CWE-190: Integer Overflow or Wraparound</X.H2>
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
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/502">
                【B】CWE-502: Deserialization of Untrusted Data
            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/77">
                【C】CWE-77: Improper Neutralization of Special Elements used in a Command ('Command Injection')
            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/119">
                【C】CWE-119: Improper Restriction of Operations within the Bounds of a Memory Buffer
            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/798">【B】CWE-798: Use of Hard-coded Credentials</X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/918">
                【B】CWE-918: Server-Side Request Forgery (SSRF)
            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/306">
                【B】CWE-306: Missing Authentication for Critical Function
            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/362">
                
                【C】CWE-362: Concurrent Execution using Shared Resource with Improper Synchronization ('Race
                Condition')

            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/269">【C】CWE-269: Improper Privilege Management</X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/94">
                【B】CWE-94: Improper Control of Generation of Code ('Code Injection')
            </X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/863">【C】CWE-863: Incorrect Authorization</X.H2>
            {/* todo */}

            <X.H2 href="https://cwe.mitre.org/data/definitions/276">【B】CWE-276: Incorrect Default Permissions</X.H2>
            {/* todo */}

            {/* real-world project */}
        </>
    );
}
