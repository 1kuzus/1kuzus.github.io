import React from 'react';
import LogoIcon from '../../assets/logo.svg';
import './Header.css';

export default function Header() {
    return (
        <div id="header">
            <img src={LogoIcon} />
        </div>
    );
}
