import {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {RightArrowIcon} from 'src/assets/svgs';
import categories from 'src/blogs/categories';
import './Sidebar.css';

function SidebarList(props) {
    const {category, currentPath} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`sidebar-list${showList ? ' show-list' : ''}`}>
            <div className="sidebar-list-head" onClick={() => setShowList(!showList)}>
                <h3 className="sidebar-list-category">{category.categoryName + ` (${category.blogs.length})`}</h3>
                <div className="sidebar-list-category-rightarrow">
                    <RightArrowIcon />
                </div>
            </div>
            <div className="sidebar-list-ul-wrapper">
                <ul className="sidebar-list-ul">
                    {category.blogs.map((blog, index) => (
                        <li key={index} className={`sidebar-list-li${currentPath === blog.path ? ' active' : ''}`}>
                            <Link className="sidebar-list-link" to={blog.path}>
                                <span className="sidebar-list-title">{blog.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Sidebar() {
    const location = useLocation();
    return (
        <>
            {categories.map((category, index) => (
                <SidebarList key={index} category={category} currentPath={location.pathname} />
            ))}
        </>
    );
}
