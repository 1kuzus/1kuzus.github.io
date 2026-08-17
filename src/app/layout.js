import {GoogleAnalytics} from '@next/third-parties/google';
import Header from 'src/component/Header/Header';
import 'src/assets/styles/fonts.css';
import 'src/assets/styles/katex.css';
import 'src/assets/styles/media.css';
import 'src/assets/styles/prism.css';
import './globals.css';

export const metadata = {
    title: {
        default: '铃木的网络日记',
        template: '%s - 铃木的网络日记',
    },
    metadataBase: new URL('https://1kuzus.github.io'),
};

// 渲染前同步设置 data-theme 与宽屏侧栏折叠状态，避免首帧闪烁
const scriptInit = `
document.documentElement.dataset.theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
if (localStorage.getItem('collapse-sidebar') === 'true') document.documentElement.setAttribute('data-collapse-sidebar', '');
`;

export default function RootLayout({children}) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{__html: scriptInit}} />
            </head>
            <body>
                <Header />
                {children}
            </body>
            <GoogleAnalytics gaId="G-45BYSZ6WPY" />
        </html>
    );
}
