import {GlobalProvider} from 'src/context/GlobalContext';
import Header from 'src/component/Header/Header';
import 'src/assets/styles/fonts.css';
import 'src/assets/styles/katex.css';
import 'src/assets/styles/media.css';
import 'src/assets/styles/prism.scss';
import './globals.css';

const scriptGA = `
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-45BYSZ6WPY');
`;

/*
const currentTheme = localStorage.getItem('theme');
if (currentTheme !== 'light' && currentTheme !== 'dark') {
    localStorage.setItem('theme', 'light');
}
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('class', 'dark');
} else {
    document.documentElement.setAttribute('class', 'light');
}
*/
//初始化色彩主题
const scriptTheme =
    "const a=z=>h.getItem(z),b=(y,z)=>h.setItem(y,z),c=(y,z)=>document.documentElement.setAttribute(y,z),d='theme',e='dark',f='light',g='class',h=localStorage;a(d)!==e&&a(d)!==f&&b(d,f);a(d)===e?c(g,e):c(g,f);";

//兼容性
if (!Array.prototype.findLast) {
    Array.prototype.findLast = function (callback) {
        for (let i = this.length - 1; i >= 0; i--) {
            if (callback(this[i])) return this[i];
        }
        return undefined;
    };
}
if (!Array.prototype.findLastIndex) {
    Array.prototype.findLastIndex = function (callback) {
        for (let i = this.length - 1; i >= 0; i--) {
            if (callback(this[i])) return i;
        }
        return -1;
    };
}

export default function RootLayout({children}) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-45BYSZ6WPY" />
                <script dangerouslySetInnerHTML={{__html: scriptGA}} />
                <script dangerouslySetInnerHTML={{__html: scriptTheme}} />
            </head>
            <body>
                <GlobalProvider>
                    <Header />
                    {children}
                </GlobalProvider>
            </body>
        </html>
    );
}
