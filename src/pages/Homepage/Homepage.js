import React from 'react';
import './Homepage.css';
import {useNavigate} from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate();
    return (
        <>
        <button onClick={()=>navigate('/list')} style={{marginTop:'300px'}}>to list</button>
            {/* <div className="homepage">Homepage</div>
            <div className="mask"></div>
            <div className="header"></div> */}
        </>
    );
}
