import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import LogoIcon from '../../assets/logo.svg';
import GithubIcon from '../../assets/github.svg';
import LightThemeIcon from '../../assets/light_theme.svg';
import DarkThemeIcon from '../../assets/dark_theme.svg';
import './Header.css';

export default function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (isDarkTheme) document.documentElement.setAttribute('class', 'dark');
        else document.documentElement.setAttribute('class', 'light');
    });
    return (
        <div id="header">
            <div id="header-logo-bg">
                <img id="header-logo" src={LogoIcon} onClick={() => navigate('/')} />
            </div>
            <div id="header-right-wrapper">
                <div id="header-theme-bg">
                    <img
                        src={isDarkTheme ? DarkThemeIcon : LightThemeIcon}
                        onClick={() => setIsDarkTheme(!isDarkTheme)}
                    />
                </div>
                <a href="https://github.com/1kuzus" target="_blank">
                    <div id="header-github-bg">
                        <img src={GithubIcon} />
                    </div>
                </a>
            </div>
        </div>
    );
}
