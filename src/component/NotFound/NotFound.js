import {useLayoutEffect} from 'react';
import './NotFound.css';

export default function Homepage() {
    useLayoutEffect(() => {
        document.title = '找不到页面 - 铃木的网络日记';
    }, []);
    return (
        <div id="notfound">
            <img alt="img" src={require('./cry.gif')} />
            <div id="notfound-404">404</div>
            <div id="notfound-text">Page Not Found</div>
        </div>
    );
}
