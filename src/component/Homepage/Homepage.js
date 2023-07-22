import React from 'react';
import './Homepage.css';
import {useNavigate} from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();
    return (
        <div id="homepage">
            <div id="homepage-content">
                <div id="logopart-wrapper">
                    <div id="logopart-x"></div>
                    <div id="logopart-y"></div>
                    <div id="logopart-vl"></div>
                    <div id="logopart-vr"></div>
                </div>
            </div>
            <ul>
                <div>list1</div>
                <li onClick={() => navigate('/blogname')}>blog1</li>
                <li onClick={() => navigate('/blogname2')}>blog2</li>
            </ul>
            <ul>
                <div>list2</div>
                <li onClick={() => navigate('/blogname')}>blog1</li>
                <li onClick={() => navigate('/blogname2')}>blog2</li>
            </ul>
        </div>
    );
}
