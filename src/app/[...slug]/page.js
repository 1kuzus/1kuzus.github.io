import dynamic from 'next/dynamic';
import X from 'src/component/X';
import TOC from 'src/component/TOC/TOC';
import Sidebar from 'src/component/Sidebar/Sidebar';
import ViewCount from 'src/component/ViewCount/ViewCount';
import CenterWrapper from 'src/component/CenterWrapper/CenterWrapper';
import archives from 'src/app/_archives.json';
import './page.css';

export function generateStaticParams() {
    return Object.keys(archives)
        .map((path) => path.split('/').filter((i) => i))
        .map((slug) => ({slug}));
}

export function generateMetadata({params}) {
    const path = '/' + params.slug.join('/') + '/';
    return {
        title: archives[path].title + ' - 铃木的网络日记', //page title
        alternates: {
            canonical: 'https://1kuzus.github.io' + path,
        },
    };
}

export default function Page({params}) {
    const path = '/' + params.slug.join('/') + '/';
    const Post = dynamic(() => import('src/posts' + path), {
        loading: () => <p>Loading component...</p>
    });
    return (
        <>
            <TOC />
            <div id="post-layout">
                {X.Oli({reset: 0}) && false}
                <CenterWrapper id="main">
                    <h1 className="post-title">{archives[path].title}</h1>
                    {archives[path].time}<ViewCount path={path} />
                    <Post />
                </CenterWrapper>
                <Sidebar />
            </div>
        </>
    );
}
