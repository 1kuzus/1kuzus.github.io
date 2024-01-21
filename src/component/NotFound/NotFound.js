import {useLayoutEffect} from 'react';
import './NotFound.css';

export default function Homepage() {
    useLayoutEffect(() => {
        document.title = '找不到页面';
    }, []);
    return (
        <div id="notfound">
            <div id="notfound-404">
                <span id="notfound-4l">4</span>
                <img alt="0" src={require('./cry.gif')} />
                <span id="notfound-4r">4</span>
            </div>
            <div id="notfound-text">Page Not Found</div>
        </div>
    );
}
