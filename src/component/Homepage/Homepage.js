import {useLayoutEffect} from 'react';
import BlogLists from '../BlogLists/BlogLists';
import './Homepage.css';

export default function Homepage() {
    useLayoutEffect(() => {
        document.title = 'Blogs';
        document.documentElement.scrollTo({top: 0});
    }, []);

    return (
        <div id="homepage">
            <div id="homepage-content">
                <div id="logopart-wrapper">
                    <div id="logopart-x" />
                    <div id="logopart-y" />
                    <div id="logopart-vl" />
                    <div id="logopart-vr" />
                </div>
                <h1 style={{display: 'none'}}>铃木的网络日记</h1>
                <h1 id="homepage-title">スズキのBlogs</h1>
            </div>
            <BlogLists />
        </div>
    );
}
