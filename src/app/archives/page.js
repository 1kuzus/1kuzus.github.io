import Y from 'src/component/Y';
import posts from 'src/app/_archives.json';

export default function Archives() {
    return (
        <Y.CenterWrapper>
            <Y.H1>Archives.</Y.H1>
            {/* <h1>{Object.keys(posts).length}</h1> */}
            <ul>
                {Object.keys(posts).map((path, index) => (
                    <li key={index}>
                        <Y.Link href={path} prefetch={true}>
                            <div className="archives-link">
                                {posts[path].time && <span className="blog-list-time">{posts[path].time}</span>}
                                {<span className="blog-list-title">{posts[path].title}</span>}
                            </div>
                        </Y.Link>
                    </li>
                ))}
            </ul>
        </Y.CenterWrapper>
    );
}
