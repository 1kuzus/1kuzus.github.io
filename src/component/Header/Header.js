'use client';
import NextLink from 'next/link';
import {LogoIcon, SidebarIcon, LightThemeIcon, DarkThemeIcon, GithubIcon} from 'src/assets/svgs';
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
    return (
        <button
            id="header-show-sidebar-button"
            className="header-button-bg"
            onClick={() => {
                if (window.matchMedia('(width <= 1440px)').matches) {
                    document.documentElement.toggleAttribute('data-show-sidebar');
                } else {
                    const collapsed = document.documentElement.toggleAttribute('data-collapse-sidebar');
                    localStorage.setItem('collapse-sidebar', String(collapsed));
                }
            }}
        >
            <SidebarIcon />
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
                    document.documentElement.dataset.theme = 'light';
                } else {
                    localStorage.setItem('theme', 'dark');
                    document.documentElement.dataset.theme = 'dark';
                }
            }}
        >
            <DarkThemeIcon />
            <LightThemeIcon />
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
