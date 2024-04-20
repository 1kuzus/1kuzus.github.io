'use client';
import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {RightArrowIcon} from 'src/assets/svgs';
import {useGlobalContext} from 'src/context/GlobalContext';
import archives from 'src/app/_archives';
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
                            <Link className="sidebar-list-link" href={blog.path} prefetch={true}>
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
    const pathname = usePathname();
    const {showSidebar, setShowSidebar} = useGlobalContext();
    return (
        <>
            <div id="sidebar" className={showSidebar ? 'show-sidebar' : null}>
                {archives.map((category, index) => (
                    <SidebarList key={index} category={category} currentPath={pathname} />
                ))}
            </div>
            <div
                id="sidebar-mask"
                className={showSidebar ? 'show-sidebar' : null}
                onClick={() => {
                    setShowSidebar((prev) => !prev);
                }}
            />
        </>
    );
}
