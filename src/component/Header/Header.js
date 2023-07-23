import React from 'react';
import LogoIcon from '../../assets/logo.svg';
import GithubIcon from '../../assets/github.svg';
import './Header.css';

export default function Header() {
    return (
        <div id="header">
            <img src={LogoIcon} id="header-logo" />
            <img src={GithubIcon} id="header-github" />
        </div>
    );
}
