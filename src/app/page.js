import NextLink from 'next/link';
import {HomepageViewCount} from 'src/component/Metadata';
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
            <code>\author</code>
            <code>&#123;</code>
            <code id="author">1kuzus</code>
            <code>&#125;</code>
        </h2>
    );
}

function HomepageNavCard(props) {
    const {titleZh, href} = props;
    return (
        <NextLink href={href} className="homepage-nav-card">
            <h3>{titleZh}</h3>
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
                <code id="homepage-subtitle">&nbsp;Rage, Perfectionism, Geek.</code>
                <HomepageViewCount />
            </div>
            <div id="homepage-navs">
                <HomepageNavCard titleZh="· 全部分类 ·" href="/categories/" />
                <HomepageNavCard titleZh="· 归档 ·" href="/archives/" />
            </div>
        </div>
    );
}
