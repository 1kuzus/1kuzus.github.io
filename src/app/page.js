import CategoryCard from 'src/component/CategoryCard/CategoryCard';
import categories from './_categories.json';
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
                    <h1 id="homepage-title">铃木的网络日记</h1>
                    <div id="homepage-subtitle">Rage, Perfectionism, Geek.</div>
                    <div id="homepage-navs">
                        <a href="/categories" className="homepage-nav">
                            <button>全部分类</button>
                        </a>
                        <a href="/archives" className="homepage-nav">
                            <button>归档</button>
                        </a>
                    </div>
                </div>
                {categories
                    .filter((category) => category.pinned)
                    .sort((a, b) => a.pinned - b.pinned)
                    .map((category) => (
                        <CategoryCard category={category} />
                    ))}
            </div>
        </>
    );
}
