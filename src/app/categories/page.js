import Link from 'next/link';
import posts from 'src/app/_archives.json';

export default function Categories() {
    return (
        <>
            <h1>Categories.</h1>
            <ul className="blog-list-ul">
                {/* {Object.keys(posts).map((path, index) => (
                    <li key={index} className="blog-list-li">
                        <Link className="blog-list-link" href={path} prefetch={true}>
                            {<span className="blog-list-title">{posts[path].title}</span>}
                            {posts[path].time && <span className="blog-list-time">{posts[path].time}</span>}
                        </Link>
                    </li>
                ))} */}
                {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        class="vt-link-icon"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                    </svg> */}
            </ul>
        </>
    );
}
