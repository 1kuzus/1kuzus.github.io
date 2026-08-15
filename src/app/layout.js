import {GoogleAnalytics} from '@next/third-parties/google';
import Header from 'src/component/Header/Header';
import {GlobalProvider} from 'src/context/GlobalContext';
import 'src/assets/styles/fonts.css';
import 'src/assets/styles/katex.css';
import 'src/assets/styles/media.css';
import 'src/assets/styles/prism.css';
import './globals.css';

// 初始化色彩主题：渲染前同步设置data-theme，避免暗色主题首帧闪烁
const scriptTheme = `
document.documentElement.dataset.theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
`;

export default function RootLayout({children}) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{__html: scriptTheme}} />
            </head>
            <body>
                <GlobalProvider>
                    <Header />
                    {children}
                </GlobalProvider>
            </body>
            <GoogleAnalytics gaId="G-45BYSZ6WPY" />
        </html>
    );
}
