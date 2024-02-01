import {useState, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import categories from 'src/blogs/categories';
import './Homepage.css';

function BlogList(props) {
    const {category} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`bloglist${showList ? ' showlist' : ''}`}>
            <div className="bloglist-head" onClick={() => setShowList(!showList)}>
                <h3 className="bloglist-title">{category.categoryName + ` (${category.blogs.length})`}</h3>
            </div>
            <div className="bloglist-ul-wrapper">
                <ul className="bloglist-ul">
                    {category.blogs.map((blog, index) => (
                        <li key={index}>
                            <Link className="bloglist-li" to={blog.path}>
                                {blog.blogTitle}
                                {blog.time && <span className="bloglist-time">{blog.time}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function BlogLists() {
    return (
        <div id="bloglists">
            {categories.map((category, index) => (
                <BlogList key={index} category={category} />
            ))}
        </div>
    );
}

export default function Homepage() {
    useLayoutEffect(() => {
        document.title = '铃木的网络日记';
        document.documentElement.scrollTo({top: 0});
    }, []);
    return (
        <div id="homepage">
            <div id="homepage-content">
                <div id="logopart-wrapper">
                    <div id="logopart-x" />
                    <div id="logopart-y" />
                    <div id="logopart-vl" />
                    <div id="logopart-vr" />
                </div>
                <h1 style={{display: 'none'}}>铃木的网络日记</h1>
                <h1 id="homepage-title">スズキのBlogs</h1>
            </div>
            <BlogLists />
        </div>
    );
}
