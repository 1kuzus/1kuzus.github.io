import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24a/deepl-shortcut-setting/';
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
            <X.P>
                最近使用DeepL，想配置截屏翻译的快捷键为`Ctrl`+`Shift`+`T`，结果在我的电脑上修改时不管按什么键，都显示“该快捷键已被使用”。
            </X.P>
            <X.Image src="img1.jpg" width="100%" invertInDarkTheme />
            <X.H3>解决办法：直接修改配置文件</X.H3>
            <X.P>找到路径`C:\Users\你的用户名\AppData\Roaming\DeepL_SE`下的`settings.json`文件。</X.P>
            <X.Image src="img2.jpg" width="600px" />
            <X.P>
                打开以后（用记事本就可以）搜索字符串`ScreenCaptureShortcut`，看到快捷键的配置，`119`（十六进制为`0x77`）就是`F8`对应的键码：
            </X.P>
            <X.Image src="img3.jpg" width="500px" />
            <X.P>
                从微软的@Virtual-Key
                Codes表[https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes]@查到`T`键对应`0x54`也就是`84`；\n
                因此把`"Key"`修改为`84`；然后因为我想设置为同时使用`Ctrl`+`Shift`，还要把`"UseShiftKey"`改为`true`。
            </X.P>
            <X.CodeBlock
                language="js"
                code={`
                "ScreenCaptureShortcut": {
                    "Key": 84,
                    "UseControlKey": true,
                    "UseAltKey": false,
                    "UseShiftKey": true,
                    "UseWinKey": false,
                    "IsEmpty": false
                },
                `}
            />
            <X.HighlightBlock>
                <X.P>注意：修改配置文件的时候要退出DeepL！</X.P>
            </X.HighlightBlock>
            <X.P>修改以后保存、关闭、再打开DeepL就发现已经更改了，经测试可以正常使用。</X.P>
            <X.Image src="img4.jpg" width="100%" invertInDarkTheme />
        </>
    );
}
