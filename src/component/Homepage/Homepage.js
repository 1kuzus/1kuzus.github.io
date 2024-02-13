import {useState, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import categories from 'src/blogs/categories';
import './Homepage.css';

function BlogList(props) {
    const {category} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`blog-list${showList ? ' showlist' : ''}`}>
            <div className="blog-list-head" onClick={() => setShowList(!showList)}>
                <h3 className="blog-list-category">{category.categoryName + ` (${category.blogs.length})`}</h3>
            </div>
            <div className="blog-list-ul-wrapper">
                <ul className="blog-list-ul">
                    {category.blogs.map((blog, index) => (
                        <li key={index} className="blog-list-li">
                            <Link className="blog-list-link" to={blog.path}>
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

function BlogLists() {
    return (
        <div id="blog-lists">
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
