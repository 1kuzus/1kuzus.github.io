import Y from 'src/component/Y';
import CategoryCard from 'src/component/CategoryCard/CategoryCard';
import categories from './_categories.json';
import './page.css';

export const metadata = {
    title: '铃木的网络日记',
    description: '铃木的网络日记',
};

function Logo() {
    return (
        <div id="logopart-wrapper">
            <div id="logopart-x" />
            <div id="logopart-y" />
            <div id="logopart-vl" />
            <div id="logopart-vr" />
        </div>
    );
}

function HomepageNavCard(props) {
    return (
        <div className="homepage-nav-card">
            <h3 className="homepage-nav-card-title">全部分类</h3>
            <div className="homepage-nav-card-title">Categories.</div>
        </div>
    );
}

export default function Homepage() {
    return (
        <div id="homepage">
            <div id="homepage-content">
                <Logo />
                <h1 id="homepage-titlealex">1kuzus's Blog</h1>
                <h1 id="homepage-title">
                    <span className="span1">\author</span>
                    <span className="span2">&#123;</span>
                    <span className="span3">1kuzus</span>
                    <span className="span4">&#125;</span>
                </h1>
                {/*
                <h1 id="homepage-title2">铃木的网络日记</h1> */}
                {/* <div id="homepage-subtitle">Rage, Perfectionism, Geek.</div> */}
                <div id="homepage-navs">
                    <a href="/categories" className="homepage-nav">
                        <button>全部分类</button>
                    </a>
                    <a href="/archives" className="homepage-nav">
                        <button>归档</button>
                    </a>
                </div>
            </div>
            <Y.CenterWrapper id="homepage-categories">
                <HomepageNavCard />
                <HomepageNavCard />
                {/* {categories
                    .filter((category) => category.pinned)
                    .sort((a, b) => a.pinned - b.pinned)
                    .map((category) => (
                        <CategoryCard category={category} />
                    ))} */}
            </Y.CenterWrapper>
        </div>
    );
}
