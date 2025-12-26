import Link from 'src/component/Link/Link';
import Heading from 'src/component/Heading/Heading';
import CenterWrapper from 'src/component/CenterWrapper/CenterWrapper';
import {activeArchives} from 'src/posts-indexing';
import './page.css';

export const metadata = {
    title: '归档 - 铃木的网络日记',
};

export default function Archives() {
    const paths = Object.keys(activeArchives);
    const postsByYears = {};
    for (let path of paths) {
        const y = activeArchives[path].time?.split('-')[0] || '0';
        if (!postsByYears[y]) postsByYears[y] = [path];
        else postsByYears[y].push(path);
    }
    const years = Object.keys(postsByYears).sort((a, b) => b - a);
    return (
        <CenterWrapper>
            <Heading>归档</Heading>
            <Heading level={2}>
                共<span id="archives-post-num">{paths.length}</span>篇文章。
            </Heading>
            {years.map((year, index) => (
                <div key={index}>
                    <Heading level={2}>{year}</Heading>
                    <ul>
                        {postsByYears[year].map((path, index) => (
                            <li key={index}>
                                <Link href={path} prefetch={true}>
                                    {activeArchives[path].time && (
                                        <code className="archives-post-time">{activeArchives[path].time.slice(5)}</code>
                                    )}
                                    {<span className="archives-post-title">{activeArchives[path].title}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </CenterWrapper>
    );
}
