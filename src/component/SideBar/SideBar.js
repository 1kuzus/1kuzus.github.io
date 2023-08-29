import {useState, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';
import categories from '../../blogs/categories';
import RightArrowIcon from '../../assets/rightarrow.svg';
import './SideBar.css';

function SideBarList(props) {
    const {category, currentPath} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`sidebarlist${showList ? ' showlist' : ''}`}>
            <div className="sidebarlist-head" onClick={() => setShowList(!showList)}>
                <h3 className="sidebarlist-title">{category.categoryName + `  (${category.blogs.length})`}</h3>
                <img className="sidebarlist-title-rightarrow" src={RightArrowIcon} />
            </div>
            <ul className="sidebarlist-ul" style={{height: showList ? 34 * category.blogs.length + 'px' : '0'}}>
                {category.blogs.map((blog, index) => (
                    <li key={index}>
                        <Link className={`sidebarlist-li${currentPath === blog.path ? ' active' : ''}`} to={blog.path}>
                            {blog.blogName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function SideBar() {
    const location = useLocation();
    // const [showSideBar, setShowSideBar] = useState(true);
    // function handleResize() {
    //     if (window.innerWidth < 800) setShowSideBar(false);
    //     else setShowSideBar(true);
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        // <>
        //     {showSideBar && (
        <div id="sidebar">
            {categories.map((category, index) => (
                <SideBarList key={index} category={category} currentPath={location.pathname} />
            ))}
        </div>
        // )}
        // </>
    );
}
