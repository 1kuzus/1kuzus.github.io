import dynamic from 'next/dynamic';
import {Suspense} from 'react';
import X from 'src/component/X';
import Y from 'src/component/Y';
import TOC from 'src/component/TOC/TOC';
import Sidebar from 'src/component/Sidebar/Sidebar';
import archives from 'src/app/_archives.json';
import ViewsCount from 'src/component/ViewsCount/ViewsCount';
import './page.css';
// 审计一下这一页 fallback
// 3. code: font --- 统一
// context & localstorage
// y组件库 headers level
// toc独立
// 代码审计：导入顺序

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
        loading: () => <p>Loading component...</p>,
        fallback: true,
    });
    return (
        <>
            <TOC />
            <div id="post-layout">
                {X.Oli({reset: 0}) && false}
                <Y.CenterWrapper id="main">
                    <X.Title>{archives[path].title}</X.Title>
                    <ViewsCount path={path} />
                    <Suspense fallback={<p>Loading...</p>}>
                        <Post />
                    </Suspense>
                </Y.CenterWrapper>
                <Sidebar />
            </div>
        </>
    );
}
