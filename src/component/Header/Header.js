import React from 'react';
import LogoIcon from '../../assets/logo.svg';
import GithubIcon from '../../assets/github.svg';
import './Header.css';

export default function Header() {
    return (
        <div id="header">
            <img id="header-logo" src={LogoIcon} />
            <a href='https://github.com/1kuzus'>

            <img id="header-github" src={GithubIcon} />
            </a>
        </div>
    );
}
