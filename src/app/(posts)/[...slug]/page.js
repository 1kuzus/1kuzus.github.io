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
    const post = activeArchives[path];
    if (!post) notFound();
    return {
        title: post.title,
        alternates: {
            canonical: path,
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
            <PostMeta path={path} time={activeArchives[path].time} />
            <article className="post-flow">
                <Post />
            </article>
            <LikeButton path={path} />
        </>
    );
}
