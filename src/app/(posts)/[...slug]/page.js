import {notFound} from 'next/navigation';
import X from 'src/component/X';
import TOC from 'src/component/TOC/TOC';
import {PostMeta, LikeButton} from 'src/component/Metadata';
import {activeArchives} from 'src/posts-indexing';

export function generateStaticParams() {
    return Object.keys(activeArchives)
        .map((path) => path.split('/').filter((i) => i))
        .map((slug) => ({slug}));
}

export async function generateMetadata({params}) {
    const {slug} = await params;
    const path = '/' + slug.join('/') + '/';
    if (!activeArchives[path]) return {title: '404 - 铃木的网络日记'};
    return {
        title: activeArchives[path].title + ' - 铃木的网络日记', //page title
        alternates: {
            canonical: 'https://1kuzus.github.io' + path,
        },
    };
}

export default async function Page({params}) {
    const {slug} = await params;
    const path = '/' + slug.join('/') + '/';
    if (!activeArchives[path]) notFound();
    const {default: Post} = await import(`src/posts${path}index.md`)
        .catch(() => import(`src/posts${path}index.mdx`))
        .catch(() => import(`src/posts${path}index.js`));
    return (
        <>
            <TOC />
            <X.PostTitle>{activeArchives[path].title}</X.PostTitle>
            <PostMeta path={path} />
            <Post />
            <LikeButton path={path} />
        </>
    );
}
