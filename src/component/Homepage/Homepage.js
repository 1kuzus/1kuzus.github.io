import React, {useState} from 'react';
import './Homepage.css';
import {useNavigate} from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();
    const [logoExpand, setLogoExpand] = useState(true);
    return (
        <div id="homepage">
            <div id="homepage-content">
                <div
                    id="logopart-wrapper"
                    onMouseEnter={() => setLogoExpand(!logoExpand)}
                    className={logoExpand && 'logo-expand'}
                >
                    <div id="logopart-x"></div>
                    <div id="logopart-y"></div>
                    <div id="logopart-vl"></div>
                    <div id="logopart-vr"></div>
                </div>
                <h1 id="homepage-title">Write anything here</h1>
            </div>
            <ul>
                <div>list1</div>
                <li onClick={() => navigate('/blogname')}>blog1</li>
                <li onClick={() => navigate('/blogname2')}>blog2</li>W
            </ul>
            <ul>
                <div>list2</div>
                <li onClick={() => navigate('/blogname')}>blog1</li>
                <li onClick={() => navigate('/blogname2')}>blog2</li>
            </ul>
        </div>
    );
}
