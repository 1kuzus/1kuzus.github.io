import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import LogoIcon from '@/assets/logo.svg';
import GithubIcon from '@/assets/github.svg';
import LightThemeIcon from '@/assets/light_theme.svg';
import DarkThemeIcon from '@/assets/dark_theme.svg';
import './Header.css';

export default function Header() {
    const navigate = useNavigate();
    const [isDarkTheme, setIsDarkTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : true
    );

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.setAttribute('class', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('class', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]);

    return (
        <div id="header">
            <div id="header-logo-bg">
                <img id="header-logo" src={LogoIcon} alt="logo" onClick={() => navigate('/')} />
            </div>
            <div id="header-right-wrapper">
                <div id="header-theme-bg" onClick={() => setIsDarkTheme(!isDarkTheme)}>
                    <img src={isDarkTheme ? DarkThemeIcon : LightThemeIcon} alt="theme" />
                </div>
                <a href="https://github.com/1kuzus" target="_blank" rel="noreferrer">
                    <div id="header-github-bg">
                        <img src={GithubIcon} alt="github" />
                    </div>
                </a>
            </div>
        </div>
    );
}
