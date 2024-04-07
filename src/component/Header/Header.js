'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useGlobalContext} from 'src/context/GlobalContext';
import {LogoIcon, LightThemeIcon, DarkThemeIcon, GithubIcon, RightArrowIcon} from 'src/assets/svgs';
import './Header.css';

function ArchiveButton() {
    const pathname = usePathname();
    const {setShowSidebar} = useGlobalContext();
    return pathname !== '/' ? (
        <div
            id="header-archive"
            onClick={() => {
                setShowSidebar((prev) => !prev);
            }}
        >
            <h3 id="header-archive-text">归档</h3>
            <div className="header-archive-rightarrow">
                <RightArrowIcon />
            </div>
        </div>
    ) : null;
}

export default function Header() {
    const {showSidebar} = useGlobalContext();
    return (
        <div id="header" className={showSidebar ? 'show-sidebar' : ''}>
            <div id="header-left-wrapper">
                <Link href="/">
                    <div id="header-logo-bg">
                        <LogoIcon />
                    </div>
                </Link>
                <ArchiveButton />
            </div>
            <div id="header-right-wrapper">
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
