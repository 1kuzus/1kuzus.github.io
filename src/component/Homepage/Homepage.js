import BlogLists from '../BlogLists/BlogLists';
import './Homepage.css';

export default function Homepage() {
    return (
        <div id="homepage">
            <div id="homepage-content">
                <div id="logopart-wrapper">
                    <div id="logopart-x" />
                    <div id="logopart-y" />
                    <div id="logopart-vl" />
                    <div id="logopart-vr" />
                </div>
                <h1 id="homepage-title">铃木のBlogs</h1>
            </div>
            <BlogLists />
        </div>
    );
}
