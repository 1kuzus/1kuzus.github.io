import NextLink from 'next/link';
import './page.css';

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

function Author() {
    return (
        <h2 id="author-wrapper">
            <span>\author</span>
            <span>&#123;</span>
            <span id="author">1kuzus</span>
            <span>&#125;</span>
        </h2>
    );
}

function HomepageNavCard(props) {
    const {titleZh, titleEn, href} = props;
    return (
        <NextLink href={href} className="homepage-nav-card">
            <h3 className="homepage-nav-card-title-zh">{titleZh}</h3>
            <div className="homepage-nav-card-title-en">{titleEn}</div>
        </NextLink>
    );
}

export const metadata = {
    title: '铃木的网络日记',
};

export default function Homepage() {
    return (
        <div id="homepage">
            <div id="homepage-banner">
                <Logo />
                <Author />
                <h1 id="homepage-title">铃木的网络日记</h1>
                <div id="homepage-subtitle">&nbsp;Rage, Perfectionism, Geek.</div>
            </div>
            <div id="homepage-navs">
                <HomepageNavCard titleZh="全部分类" titleEn="Categories." href="/categories/" />
                <HomepageNavCard titleZh="归档" titleEn="Archives." href="/archives/" />
            </div>
        </div>
    );
}
