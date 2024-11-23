'use client';
import NextLink from 'next/link';
import {useGlobalContext} from 'src/context/GlobalContext';
import {LogoIcon, LightThemeIcon, DarkThemeIcon, GithubIcon} from 'src/assets/svgs';
import './Header.css';

function LogoButton() {
    return (
        <NextLink href="/">
            <div id="header-logo-bg">
                <LogoIcon />
            </div>
        </NextLink>
    );
}

function ShowSidebarButton() {
    const {showSidebar, setShowSidebar} = useGlobalContext();
    return (
        <button
            id="header-show-sidebar-button"
            className="header-button-bg"
            onClick={() => {
                setShowSidebar((prev) => !prev);
            }}
        >
            <div className={showSidebar ? 'show-sidebar' : null} />
        </button>
    );
}

function ThemeButton() {
    return (
        <button
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
        </button>
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
