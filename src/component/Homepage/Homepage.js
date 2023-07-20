import React from 'react';
import './Homepage.css';
import {useNavigate} from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="hp">132 146576 897 76845</div>
            <button
                onClick={() => navigate('/blogname')}
                style={{marginTop: '300px'}}
            >
                blogname
            </button>
        </>
    );
}
