import {useState, useLayoutEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {useGlobalContext} from 'src/context/GlobalContext';
import {LogoIcon, LightThemeIcon, DarkThemeIcon, GithubIcon, RightArrowIcon} from 'src/assets/svgs';
import './Header.css';

export default function Header() {
    const {showSidebar, setShowSidebar} = useGlobalContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [isDarkTheme, setIsDarkTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : true
    );
    useLayoutEffect(() => {
        //预渲染时不加载色彩主题属性
        if (navigator.userAgent === 'ReactSnap') return;
        if (isDarkTheme) {
            document.documentElement.setAttribute('class', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('class', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]);
    return (
        <div id="header" className={showSidebar ? ' show-sidebar' : ''}>
            <div id="header-left-wrapper">
                <div
                    id="header-logo-bg"
                    onClick={() => {
                        navigate('/');
                        document.documentElement.scrollTo({top: 0});
                    }}
                >
                    <LogoIcon />
                </div>
                {location.pathname !== '/' ? (
                    <div
                        id="header-archive"
                        onClick={() => {
                            setShowSidebar(!showSidebar);
                        }}
                    >
                        <h3 id="header-archive-text">归档</h3>
                        <div className="header-archive-rightarrow">
                            <RightArrowIcon />
                        </div>
                    </div>
                ) : null}
            </div>
            <div id="header-right-wrapper">
                <div id="header-theme-bg" onClick={() => setIsDarkTheme(!isDarkTheme)}>
                    {isDarkTheme ? <DarkThemeIcon /> : <LightThemeIcon />}
                </div>
                <a href="https://github.com/1kuzus/1kuzus.github.io" target="_blank" rel="noreferrer">
                    <div id="header-github-bg">
                        <GithubIcon />
                    </div>
                </a>
            </div>
        </div>
    );
}
