import React from 'react';
import './Homepage.css';
import {useNavigate} from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();
    return (
        <div className='homepage'>
            <div className="homepage-content">homepage content</div>
            <ul>
                <li onClick={() => navigate('/blogname')}>blogname</li>
                <li onClick={() => navigate('/blogname')}>blogname</li>
            </ul>
        </div>
    );
}
