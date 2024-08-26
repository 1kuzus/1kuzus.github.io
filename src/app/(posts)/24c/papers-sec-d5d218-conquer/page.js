import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/papers-sec-d5d218-conquer/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>论文链接：</X.P>
            <X.Uli>@Do Not Give A Dog Bread Every Time He Wags His Tail: Stealing Passwords through Content Queries (CONQUER) Attack[https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f5_paper.pdf]@</X.Uli>
            <X.H1>1.Introduction</X.H1>
            <X.P>论文提出了一种攻击方法：CONQUER`(*Con*tent *Quer*ies)`，利用Android系统辅助模式的`findAccessibilityNodeInfosByText(text)`API来查询密码输入框节点包含的文本，从而逐位枚举出用户输入的密码。</X.P>
            <X.H1>2.Background</X.H1>
            <X.H2>Android Accessibility Service</X.H2>
            <X.P>Android系统提供的辅助功能，本意是帮助残障人士使用手机，但是也可以被恶意应用利用。其中提供的一个API是`findAccessibilityNodeInfosByText(text)`，该API会返回一系列`AccessibilityNodeInfo`对象，代表包含`text`的UI组件。</X.P>
            <X.H2>关于Accessibility Service的攻击与防御</X.H2>
            <X.Uli>被动攻击：被动地嗅探无障碍事件，并收集泄露的凭证；被动攻击往往对环境要求较高，一般性受限。</X.Uli>
            <X.Uli>主动攻击：攻击者主动与系统或应用程序交互，甚至诱导用户在攻击者控制的环境下输入敏感信息。这类攻击通常涉及更多的操作，如劫持输入输出通道，或用精心构造的组件覆盖在输入框的上层；通常更易被用户察觉。</X.Uli>
            <X.H1>3.Observation And Threat Model</X.H1>
            <X.H2>关键发现</X.H2>
            <X.P>Android并没有阻止`findAccessibilityNodeInfosByText(text)`搜索密码输入框，也没有向用户发出警报。攻击者可以检查API返回的列表是否包含密码输入框来查询`text`是否在用户的密码中。</X.P>
            <X.H2>威胁模型和假设</X.H2>
            <X.P>攻击目标是窃取密码；假设用户已经安装了恶意软件，并已经授予其无障碍服务的权限；用户使用最新安卓系统（旧版存在一些更易实现的攻击手段）；假设用户关闭了“使密码可见”（否则可以通过无障碍事件直接访问到密码）。</X.P>
            <X.H1>4.Overview Of CONQUER Attack</X.H1>
            <X.H2>攻击流程</X.H2>
            <X.Oli>恶意软件注册无障碍服务来获取目标事件；（事件由输入密码触发）</X.Oli>
            <X.Oli>用户输入密码时恶意软件将收到通知，并能够确定相关事件；</X.Oli>
            <X.Oli>当恶意软件确定用户输入了密码的特定字符，将会尽可能枚举可能的组合来推断该字符；</X.Oli>
            <X.Oli>用户点击“登录”时恶意软件能够感知到，并知晓此时用户输入已结束。</X.Oli>
            <X.H2>挑战和解决</X.H2>
            <X.H3>区别密码和描述</X.H3>
            <X.P>无障碍服务提供了一些内容描述标签，查询结果同样会考虑这些标签，因此可能会与密码字符混淆在一起；解决方案是论文提出的*惰性查询*`(Lazy Queries)`算法。</X.P>
            <X.H3>绕过防御机制</X.H3>
            <X.P>某些应用程序通过阻止与密码输入相关的辅助功能事件来防御攻击，使得攻击者无法被动接收密码输入的通知；解决方案是只需找到密码输入框，然后主动监控长度的变化来确定用户是否输入了密码。</X.P>
            <X.H3>区分大小写</X.H3>
            <X.P>前文提到的API在查询时不区分大小写；解决方案是利用其他的侧信道来重放用户的行为（如大小写切换），例如时间维度上输入一个大写字母后往往需要花费更多时间输入下一个字符。</X.P>
            <X.H1>5.Detail Design of CONQUER</X.H1>
            <X.H2>惰性查询算法</X.H2>
            <X.P>这里举一个例子来解释，考虑输入的密码是`tendollar`，有干扰的描述是`enter`：</X.P>
            <X.Oli reset>首先得到描述的字符集是{`$\\{e,n,r,t\\}$`}，记为$S_c$；</X.Oli>
            <X.Oli>输入密码时在补集{`$\\bar{S_c}$`}中查找，显然密码的前三位`t`、`e`、`n`都找不到；</X.Oli>
            <X.Oli>再输入第四位`d`时，{`$\\bar{S_c}$`}命中；此时遍历$S_c$中的字符回推上一位，也就是查询`ed`、`nd`、`rd`、`td`，找到`nd`；</X.Oli>
            <X.Oli>重复此过程，最终找到`tend`。</X.Oli>
            <X.P>注：仍需考虑一些罕见情况（如密码是描述的子串），此处略。</X.P>
            <X.H2>主动查询以绕过防御</X.H2>
            <X.P>首先找到密码输入框并获取视图ID，然后通过`findAccessibilityNodeInfosByViewId(id)`找到，然后对这个节点（假设是`n`）重复调用`n.getText().length()`来判断用户输入。</X.P>
            <X.H2>侧信道</X.H2>
            <X.H3>基于时间的侧信道 - 检测大小写切换</X.H3>
            <X.Oli reset>
                每个人的输入习惯都有很大差别，因此很难设定一个绝对的时间间隙作为标准；因此研究使用相对指标`z score`，如果向量{`$\\bm{t}$`}代表所有按键的时间间隔，那么`z score`为{`$\\frac{\\bm{t}-\\mu_{\\bm{t}}}{\\sigma_{\\bm{t}}}$`}，即“与均值相差几个标准差”。然后进一步定义了一个`z score`的阈值，使得大小写切换`(case switches)`真阳性率$TRPCS$和非大小写切换`(non case switches)`真阳性率$TPRNCS$的乘积最大。
            </X.Oli>
            <X.Oli>考虑密码是`dot#COM`，`#`和`C`之间的切换间隔会干扰到期望得到的最一般情况下的输入间隔，因此计算`z score`时只包括字母输入的间隔，以进一步提高稳定性。</X.Oli>
            <X.H3>基于状态机的侧信道 - 恢复用户行为</X.H3>
            <X.Image src="1.jpg" width="100%" filterDarkTheme />
            <X.P>总体而言本节介绍一个利用有限自动机来恢复包含大小写切换的用户输入的方法。</X.P>
            <X.P>基于时间维度的检测仍然有一些功能无法实现，例如无法区分是使用`CapsLock`还是`Shift`做切换。自动机设计了三种状态：</X.P>
            <X.Uli>小写状态`(Lowercase State)`：默认状态</X.Uli>
            <X.Uli>切换状态`(Switching State)`：单击`Shift`，下一个输入字符为大写，但输入完成后立即变为小写状态</X.Uli>
            <X.Uli>大写状态`(Uppercase State)`：双击`Shift`/按下`CapsLock`，后续输入的字符均为大写</X.Uli>
            <X.P>要注意的是，状态机的初始状态不确定，检测到大小写切换后可能转移的状态也不唯一，为此会给每一种可能的状态都创建一个副本（类似树形增长）。论文在此处用数学方法证明了随着大小写切换被检测到的次数$n_s$增加，总的可能性增长规律符合斐波那契数列；不过此处想表达的中心思想是：尽管总的可能性呈指数增长，但前人关于密码习惯的调查表明通常大写字母是很少的，也就是$n_s$其实并不会很大。</X.P>
            <X.P>上图中的红色箭头标识一个键盘切换`(keyboard switches)`（有些复杂的密码可能需要在字母键盘和符合键盘等等之间反复切换），每次检测到键盘切换后，会为相同的当前密码创建三个不同状态的副本以覆盖所有的可能性。</X.P>
            <X.P>论文在@Rockyou[https://www.skullsecurity.org/wiki/Passwords]@数据集上观察到，对于`99.65%`的用户密码，大小写切换和键盘切换的次数都很少。此外，对于那些包含字母的密码，其中有`99.55%`都符合以下三个简单模式：</X.P>
            <X.Uli>全是小写字母</X.Uli>
            <X.Uli>全是大写字母</X.Uli>
            <X.Uli>仅首字母是大写的</X.Uli>
            <X.P>这些观察到的结果也被用于改善攻击的效率。</X.P>
            <X.H1>6.Evaluation</X.H1>
            <X.P>略。</X.P>
            <X.H1>7.Discussion</X.H1>
            <X.H2>源码级别的根因分析</X.H2>
            <X.P>论文参考了`findAccessibilityNodeInfosByText`的请求处理器Android源码：</X.P>
            <X.CodeBlock
                language="java"
                code={`
                private void findAccessibilityNodeInfosByTextUiThread(Message message) {
                    final int flags = message.arg1;
                    // ...
                    // ...
                    final int accessibilityViewId = args.argi1;
                    final int virtualDescendantId = args.argi2;
                    // ...
                    List<AccessibilityNodeInfo> infos = null;
                    try {
                        // ...
                        final View root = findViewByAccessibilityId(accessibilityViewId);
                        if (root != null && isShown(root)) {
                            AccessibilityNodeProvider provider = root.getAccessibilityNodeProvider();
                            if (provider != null) {
                                infos = provider.findAccessibilityNodeInfosByText(text, virtualDescendantId);
                            } else if (virtualDescendantId == AccessibilityNodeProvider.HOST_VIEW_ID) {
                                ArrayList<View> foundViews = mTempArrayList;
                                foundViews.clear();
                                root.findViewsWithText(foundViews, text,
                                        View.FIND_VIEWS_WITH_TEXT |
                                        View.FIND_VIEWS_WITH_CONTENT_DESCRIPTION |
                                        View.FIND_VIEWS_WITH_ACCESSIBILITY_NODE_PROVIDERS);
                                // ...
                            }
                        }
                    } finally {
                        // ...
                    }
                }
                `}
            />
            <X.P>默认情况下`View`的`getAccessibilityNodeProvider()`会返回`null`，此时会调用`findViewsWithText()`。对于`View`，这个函数是仅在描述标签中搜索的，因此不会受到本文提出的攻击；然而其子类`TextView`重写了这个函数，使得其可以搜索自身的文本，并且`TextView`并没有重写`getAccessibilityNodeProvider()`（所以会进入`else if`逻辑），因此`TextView`和所有`TextView`的子类都会收到CONQUER攻击的影响。</X.P>
            <X.H2>可能的对策</X.H2>
            <X.Uli>系统级：一种选择是在API中强制进行安全检查，不允许一个`password`节点被搜索，但由于存在自定义密码输入框，这种限制通常有遗漏；另一种是使得此API仅搜索内容描述标签，然而这种限制可能会阻碍无障碍的部分功能。</X.Uli>
            <X.Uli>应用级：开发人员不使用基于`TextView`的类作为密码字段。或者，如果密码字段是从`TextView`直接或间接继承的，则应该重写`findViewsWithText()`以确保不会在密码文本中搜索；或重写`getAccessibilityNodeProvider()`让其返回一个自定义的基于`AccessibilityNodeProvider`类的对象。</X.Uli>
            <X.H2>一些局限</X.H2>
            <X.P>意外输入错误、特殊的打字习惯、使用密码管理器自动填写密码等。</X.P>
            <X.H1>8.Related Work</X.H1>
            <X.Uli>Android无障碍服务利用</X.Uli>
            <X.Uli>基于无障碍服务的密码窃取攻击</X.Uli>
            <X.Uli>Android无障碍服务防御</X.Uli>
            <X.Uli>基于侧信道的按键推断</X.Uli>
            <X.H1>9.Conclusion</X.H1>
            <X.P>文章提出了一种基于内容查询的密码窃取攻击，并克服了区分密码和描述、区分大小写等难点。</X.P>
        </>
    );
}
