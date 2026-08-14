import {GoogleAnalytics} from '@next/third-parties/google';
import Header from 'src/component/Header/Header';
import {GlobalProvider} from 'src/context/GlobalContext';
import 'src/assets/styles/fonts.css';
import 'src/assets/styles/katex.css';
import 'src/assets/styles/media.css';
import 'src/assets/styles/prism.scss';
import './globals.css';

// 初始化色彩主题
// const a=z=>h.getItem(z),b=(y,z)=>h.setItem(y,z),c=(y,z)=>document.documentElement.setAttribute(y,z),d='theme',e='dark',f='light',g='class',h=localStorage;a(d)!==e&&a(d)!==f&&b(d,f);a(d)===e?c(g,e):c(g,f);
const scriptTheme = `
const currentTheme = localStorage.getItem('theme');
if (currentTheme !== 'light' && currentTheme !== 'dark') {
    localStorage.setItem('theme', 'light');
}
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('class', 'dark');
} else {
    document.documentElement.setAttribute('class', 'light');
}
`;

export default function RootLayout({children}) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
