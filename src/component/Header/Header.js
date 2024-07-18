'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useGlobalContext} from 'src/context/GlobalContext';
import {LogoIcon, LightThemeIcon, DarkThemeIcon, GithubIcon, RightArrowIcon} from 'src/assets/svgs';
import './Header.css';

function ShowSidebarButton() {
    const {showSidebar, setShowSidebar} = useGlobalContext();
    return (
        <div
            // id="header-archive"
            id="header-github-bg"
            onClick={() => {
                setShowSidebar((prev) => !prev);
            }}
        >
            <div id="header-github-bg" style={{color: 'red'}}>
                {showSidebar ? '开' : '关'}
            </div>
            {/* <h3 id="header-archive-text">归档</h3>
            <div className="header-archive-rightarrow">
                <RightArrowIcon />
            </div> */}
        </div>
    );
}

export default function Header() {
    const {showSidebar} = useGlobalContext();
    return (
        <div id="header" className={showSidebar ? 'show-sidebar' : ''}>
            {/*逻辑移动到组件props*/}
            <div id="header-left-wrapper">
                <Link href="/" prefetch={false}>
                    <div id="header-logo-bg">
                        <LogoIcon />
                    </div>
                </Link>
                {/* <ShowSidebarButton /> */}
            </div>
            <div id="header-right-wrapper">
                <ShowSidebarButton />
                <div
                    id="header-theme-bg"
                    onClick={() => {
                        if (localStorage.getItem('theme') === 'dark') {
                            localStorage.setItem('theme', 'light');
                            document.documentElement.setAttribute('class', 'light');
                        } else {
                            localStorage.setItem('theme', 'dark');
                            document.documentElement.setAttribute('class', 'dark');
                        }
                    }}
                >
                    <div id="header-dark-theme-icon">
                        <DarkThemeIcon />
                    </div>
                    <div id="header-light-theme-icon">
                        <LightThemeIcon />
                    </div>
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
