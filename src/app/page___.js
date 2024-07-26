import NextLink from 'next/link';
import Y from 'src/component/Y';
import './page.css';
import {CategoriesIcon} from 'src/assets/svgs';

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
    const {titleZh, titleEn, href} = props;
    return (
        <NextLink href={href}>
            <div className="homepage-nav-card">
                <h3 className="homepage-nav-card-title-zh">{titleZh}</h3>
                <div className="homepage-nav-card-title-en">{titleEn}</div>
                <div className="homepage-nav-card-icon">{/* <CategoriesIcon /> */}</div>
            </div>
        </NextLink>
    );
}

export default function Homepage() {
    return (
        <div id="homepage">
            <div id="homepage-banner">
                <Logo />
                <h2 id="homepage-author">
                    <span>\author</span>
                    <span>&#123;</span>
                    <span className="author">1kuzus</span>
                    <span>&#125;</span>
                </h2>
                <div id="homepage-subtitle">&nbsp;Rage, Perfectionism, Geek.</div>
                <h1 id="homepage-title">铃木的网络日记</h1>
            </div>
            <div className="ddd123">
                <div className="d45"></div>
                <div className="d67"></div>
            </div>
            {/* <Y.CenterWrapper id="homepage-categories">
                <div id="homepage-navs">
                    <HomepageNavCard titleZh="全部分类" titleEn="Categories." href="/categories/" />
                    <HomepageNavCard titleZh="归档" titleEn="Archives." href="/archives/" />
                </div>
            </Y.CenterWrapper> */}
        </div>
    );
}
