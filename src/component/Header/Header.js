'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useGlobalContext} from 'src/context/GlobalContext';
import {LogoIcon, LightThemeIcon, DarkThemeIcon, GithubIcon, RightArrowIcon} from 'src/assets/svgs';
import './Header.css';

function LogoButton() {
    return (
        <Link href="/">
            <div id="header-logo-bg">
                <LogoIcon />
            </div>
        </Link>
    );
}

function ShowSidebarButton() {
    const {showSidebar, setShowSidebar} = useGlobalContext();
    return (
        <div
            id="header-show-sidebar-button"
            className="header-button-bg"
            onClick={() => {
                setShowSidebar((prev) => !prev);
            }}
        >
            <div className={showSidebar ? 'show-sidebar' : null} />
        </div>
    );
}

function ThemeButton() {
    return (
        <div
            className="header-button-bg"
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
    );
}

function GithubButton() {
    return (
        <a href="https://github.com/1kuzus/1kuzus.github.io" target="_blank" rel="noreferrer">
            <div className="header-button-bg">
                <GithubIcon />
            </div>
        </a>
    );
}

export default function Header() {
    return (
        <div id="header">
            <div id="header-left-wrapper">
                <LogoButton />
            </div>
            <div id="header-right-wrapper">
                <ShowSidebarButton />
                <ThemeButton />
                <GithubButton />
            </div>
        </div>
    );
}
