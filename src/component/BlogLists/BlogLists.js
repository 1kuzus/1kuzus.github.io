import {useState} from 'react';
import {Link} from 'react-router-dom';
import categories from '@/blogs/categories';
import './BlogLists.css';

function BlogList(props) {
    const {category} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`bloglist${showList ? ' showlist' : ''}`}>
            <div className="bloglist-head" onClick={() => setShowList(!showList)}>
                <h3 className="bloglist-title">{category.categoryName + ` (${category.blogs.length})`}</h3>
            </div>
            <ul className="bloglist-ul" style={{height: showList ? 4 + 54 * category.blogs.length + 'px' : '0'}}>
                {category.blogs.map((blog, index) => (
                    <li key={index}>
                        <Link className="bloglist-li" to={blog.path}>
                            {blog.blogName}
                            {blog.time && <span className="bloglist-time">{blog.time}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function BlogLists() {
    return (
        <div id="bloglists">
            {categories.map((category, index) => (
                <BlogList key={index} category={category} />
            ))}
        </div>
    );
}
