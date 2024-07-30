'use client';
import {usePathname} from 'next/navigation';
import CategoryCard from 'src/component/CategoryCard/CategoryCard';
import {useGlobalContext} from 'src/context/GlobalContext';
import categories from 'src/app/_categories.json';
import './Sidebar.css';

export default function Sidebar() {
    const pathname = usePathname();
    const {showSidebar, setShowSidebar} = useGlobalContext();
    return (
        <>
            <div id="sidebar" className={showSidebar ? 'show-sidebar' : null}>
                <div id="sidebar-width-wrapper">
                    {categories.map((category, index) => {
                        const activeIndex = category.posts.findIndex((path) => path === pathname);
                        return <CategoryCard key={index} category={category} activeIndex={activeIndex} isSidebarCard />;
                    })}
                </div>
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
