import {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import categories from '@/blogs/categories';
import './SideBar.css';

function RightArrowIcon() {
    return (
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M761.056 532.128c.512-.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84L335.2 813.632c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c.672-.672.928-1.6 1.6-2.304.512-.48 1.056-.832 1.568-1.344 2.72-2.848 4.16-6.336 6.016-9.6z"
                fill="#50505c"
            />
        </svg>
    );
}

function SideBarList(props) {
    const {category, currentPath} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`sidebarlist${showList ? ' showlist' : ''}`}>
            <div className="sidebarlist-head" onClick={() => setShowList(!showList)}>
                <h3 className="sidebarlist-title">{category.categoryName + ` (${category.blogs.length})`}</h3>
                <div className="sidebarlist-title-rightarrow">
                    <RightArrowIcon />
                </div>
            </div>
            <ul className="sidebarlist-ul" style={{height: showList ? 34 * category.blogs.length + 'px' : '0'}}>
                {category.blogs.map((blog, index) => (
                    <li key={index}>
                        <Link className={`sidebarlist-li${currentPath === blog.path ? ' active' : ''}`} to={blog.path}>
                            {blog.blogTitle}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function SideBar() {
    const location = useLocation();
    return (
        <div id="sidebar">
            {categories.map((category, index) => (
                <SideBarList key={index} category={category} currentPath={location.pathname} />
            ))}
        </div>
    );
}
