import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import LogoIcon from '../../assets/logo.svg';
import GithubIcon from '../../assets/github.svg';
import './Header.css';

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (isDarkMode) document.documentElement.setAttribute('class','dark');
        else document.documentElement.setAttribute('class','light');
    });
    return (
        <div id="header">
            <img id="header-logo" src={LogoIcon} onClick={() => navigate('/')} />
            <button onClick={() => setIsDarkMode(!isDarkMode)}>go to {isDarkMode ? 'light' : 'dark'}</button>
            <a href="https://github.com/1kuzus" target="_blank">
                <div id="header-github-bg">
                    <img id="header-github" src={GithubIcon} />
                </div>
            </a>
        </div>
    );
}
