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
            <X.H1>关于CWE</X.H1>
            <X.P>
                *通用缺陷枚举*`(Common Weakness Enumeration, CWE)`是针对硬件和软件弱点和漏洞的分类系统。---
                该项目由美国国土安全部（DHS）网络安全和基础设施安全局（CISA）办公室赞助，由MITRE公司运营。
            </X.P>
            <X.P>
                相比于CVE记录描述产品中出现的漏洞，侧重于漏洞利用的技术影响，CWE对可能导致漏洞的常见缺陷或弱点进行分类，描述漏洞发生的根本原因。
            </X.P>
            <X.H2>CWE分类系统</X.H2>
            <X.P>CWE有一套树型的分类系统，CWE提供了一些组织各个条目的结构化描述，例如视图和分类。</X.P>
            <X.P noMarginBottom>
                CWE Views是针对特定目的或特定受众而组织的弱点集合，大多数视图是整个CWE列表的子集。---
                例如@官网首页[https://cwe.mitre.org/]@中给出的：
            </X.P>
            <X.Uli>@View by Software Development[https://cwe.mitre.org/data/definitions/699.html]@</X.Uli>
            <X.Uli>@View by Hardware Design[https://cwe.mitre.org/data/definitions/1194.html]@</X.Uli>
            <X.Uli>@View by Research Concepts[https://cwe.mitre.org/data/definitions/1000.html]@</X.Uli>
            <X.P withMarginTop>CWE Categories是更细的划分，一个CWE分类可能包含一系列具有共同特征的CWE条目。</X.P>
            <X.P>
                CWE的不同条目也具有不同的抽象程度，有些条目描述了具体的缺陷，有些则描述了更一般的问题。四种抽象程度如下图所示：
            </X.P>
            <X.Image src="weakness_abstractions.png" width="600px" />
            <X.P>这些分级在官网上也有对应的图标表示，相应的释义为：</X.P>
            <X.Table>
                <tr>
                    <th>icon</th>
                    <th>释义</th>
                </tr>
                <tr>
                    <td>
                        <X.Image src="view.png" width="16px" center />
                    </td>
                    <td>
                        <X.P>`View`，视图</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.Image src="category.png" width="16px" center />
                    </td>
                    <td>`Category`，分类，</td>
                </tr>
                <tr>
                    <td>
                        <X.Image src="pillar.png" width="16px" center />
                    </td>
                    <td>`Pillar`，最抽象的条目类型，但与Category相比仍然是一种在技术上描述</td>
                </tr>
            </X.Table>
        </>
    );
}
