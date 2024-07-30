import Y from 'src/component/Y';
import posts from 'src/app/_archives.json';
import './page.css';

export const metadata = {
    title: '归档 - 铃木的网络日记',
};

export default function Archives() {
    const paths = Object.keys(posts);
    const postsByYears = {};
    for (let path of paths) {
        const y = posts[path].time?.split('-')[0] || '0';
        if (!postsByYears[y]) postsByYears[y] = [path];
        else postsByYears[y].push(path);
    }
    const years = Object.keys(postsByYears).sort((a, b) => b - a);
    return (
        <Y.CenterWrapper>
            <Y.H1>归档</Y.H1>
            <Y.H2>
                共<span id="archives-post-num">{paths.length}</span>篇文章。
            </Y.H2>
            {years.map((year, index) => (
                <div key={index}>
                    <Y.H2>{+year || '长期维护'}</Y.H2>
                    <ul>
                        {postsByYears[year].map((path, index) => (
                            <li key={index}>
                                <Y.Link href={path} prefetch={true}>
                                    {posts[path].time && <span className="archives-post-time">{posts[path].time.slice(5)}</span>}
                                    {<span className="archives-post-title">{posts[path].title}</span>}
                                </Y.Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Y.CenterWrapper>
    );
}
