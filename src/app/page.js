import BlogLists from 'src/component/BlogLists/BlogLists';
import './page.css';

export const metadata = {
    title: '铃木的网络日记',
    description: '铃木的网络日记',
};

export default function Homepage() {
    return (
        <>
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
        </>
    );
}
