import {useState} from 'react';
import BlogLists from '../BlogLists/BlogLists';
import './Homepage.css';

export default function Homepage() {
    const [logoExpand, setLogoExpand] = useState(false);
    return (
        <div id="homepage">
            <div id="homepage-content">
                <div
                    id="logopart-wrapper"
                    onMouseEnter={() => setLogoExpand(true)}
                    onMouseLeave={() => setLogoExpand(false)}
                    className={logoExpand ? 'logo-expand' : null}
                >
                    <div id="logopart-x" />
                    <div id="logopart-y" />
                    <div id="logopart-vl" />
                    <div id="logopart-vr" />
                </div>
                {/* <h1 id="homepage-title">铃木のBlogs</h1> */}
            </div>
            <BlogLists />
        </div>
    );
}
