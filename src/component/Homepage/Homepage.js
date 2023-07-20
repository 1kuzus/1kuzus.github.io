import React from 'react';
import './Homepage.css';
import {useNavigate} from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();
    return (
        <div className="homepage">
            <div className="homepage-content">homepage content</div>
            <ul>
                <div>list</div>
                <li onClick={() => navigate('/blogname')}>blog1</li>
                <li onClick={() => navigate('/blogname2')}>blog2</li>
            </ul>
            <ul>
                <div>list</div>
                <li onClick={() => navigate('/blogname')}>blog1</li>
                <li onClick={() => navigate('/blogname2')}>blog2</li>
            </ul>
        </div>
    );
}
