import dynamic from 'next/dynamic';
import {Suspense} from 'react';
import X from 'src/component/X';
import Y from 'src/component/Y';
import Sidebar from 'src/component/Sidebar/Sidebar';
import metas from 'src/app/_metas';
import archives from 'src/app/_archives.json';
import './page.css';
import PostMeta from './postmeta';
// 1.dynamic params
// 2.image
// 3.new 脚本
// 3. code: font --- 统一
export function generateStaticParams() {
    return Object.keys(archives)
        .map((path) => path.split('/').filter((i) => i))
        .map((slug) => ({slug}));
}
const BASE_URL = 'https://1kuzus.github.io';
export function generateMetadata({params}) {
    const path = '/' + params.slug.join('/') + '/';
    return {
        title: archives[path].title, //post title
        metadata: {
            title: archives[path].title + ' - 铃木的网络日记', //page title
            alternates: {
                canonical: BASE_URL + path,
            },
        },
    };
}

export default function Page({params}) {
    const path = '/' + params.slug.join('/') + '/';
    const PPost = dynamic(() => import(`../../../../local/posts/${params.slug.join('/')}`), {
        loading: () => <p>Loading component...</p>,
        fallback: true,
    });
    // useEffect(() => {
    //     console.log("123");
    //     // getViews().then((count) => {
    //     //     increaseViews();
    //     //     setViewsCount(count);
    //     // });
    // }, []);
    return (
        <>
            <div id="post-layout">
                {X.Oli({reset: 0}) && false}
                <Y.CenterWrapper id="main">
                    <X.TOC />
                    <X.Title>{metas[path].title}</X.Title>
                    <PostMeta />
                    <Suspense fallback={<p>Loading...</p>}>
                        <PPost />
                    </Suspense>
                </Y.CenterWrapper>
                <Sidebar />
            </div>
        </>
    );
}
