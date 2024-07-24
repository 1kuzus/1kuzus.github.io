import Y from 'src/component/Y';
import posts from 'src/app/_archives.json';
import './page.css';

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
            <Y.H1>Archives.</Y.H1>
            <Y.H2>共{paths.length}篇文章。</Y.H2>
            {years.map((year, index) => (
                <div key={index}>
                    <Y.H2>{+year || '长期维护'}</Y.H2>
                    <ul>
                        {postsByYears[year].map((path, index) => (
                            <li key={index}>
                                <Y.Link href={path} prefetch={true}>
                                    {posts[path].time && (
                                        <span className="archives-post-time">{posts[path].time.slice(5)}</span>
                                    )}
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
