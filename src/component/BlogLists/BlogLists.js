'use client';
import {useState} from 'react';
import Link from 'next/link';
import archives from 'src/app/_archives';
import './BlogLists.css';

function BlogList(props) {
    const {category} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`blog-list${showList ? ' show-list' : ''}`}>
            <div className="blog-list-head" onClick={() => setShowList(!showList)}>
                <h3 className="blog-list-category">{category.categoryName + ` (${category.blogs.length})`}</h3>
            </div>
            <div className="blog-list-ul-wrapper">
                <ul className="blog-list-ul">
                    {category.blogs.map((blog, index) => (
                        <li key={index} className="blog-list-li">
                            <Link className="blog-list-link" href={blog.path}>
                                {<span className="blog-list-title">{blog.title}</span>}
                                {blog.time && <span className="blog-list-time">{blog.time}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function BlogLists() {
    return (
        <div id="blog-lists">
            {archives.map((category, index) => (
                <BlogList key={index} category={category} />
            ))}
        </div>
    );
}
