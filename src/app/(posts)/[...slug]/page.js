import dynamic from 'next/dynamic';
import X from 'src/component/X';
import TOC from 'src/component/TOC/TOC';
import {PostMeta, LikeButton} from 'src/component/Metadata';
import {archives} from 'src/posts-indexing';

export function generateStaticParams() {
    return Object.keys(archives)
        .map((path) => path.split('/').filter((i) => i))
        .map((slug) => ({slug}));
}

export async function generateMetadata({params}) {
    const {slug} = await params;
    const path = '/' + slug.join('/') + '/';
    return {
        title: archives[path].title + ' - 铃木的网络日记', //page title
        alternates: {
            canonical: 'https://1kuzus.github.io' + path,
        },
    };
}

export default async function Page({params}) {
    const {slug} = await params;
    const path = '/' + slug.join('/') + '/';
    const Post = dynamic(
        () => {
            return import(`src/posts${path}index.md`)
                .catch(() => import(`src/posts${path}index.mdx`))
                .catch(() => import(`src/posts${path}index.js`));
        },
        {loading: () => <p>Loading component...</p>}
    );
    return (
        <>
            <TOC />
            {X.Oli({reset: 0}) && false}
            <X.PostTitle>{archives[path].title}</X.PostTitle>
            <PostMeta path={path} />
            <Post />
            <LikeButton path={path} />
        </>
    );
}
