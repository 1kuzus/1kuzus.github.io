'use client';
import {usePathname} from 'next/navigation';
import {useGlobalContext} from 'src/context/GlobalContext';
import categories from 'src/app/_categories.json';
import CategoryCard from '../CategoryCard/CategoryCard';
import './Sidebar.css';

export default function Sidebar() {
    const pathname = usePathname();
    const {showSidebar, setShowSidebar} = useGlobalContext();
    return (
        <>
            <div id="sidebar" className={showSidebar ? 'show-sidebar' : null}>
                <div id="sidebar-width-wrapper">
                    {categories.map((category) => {
                        const activeIndex = category.posts.findIndex((path) => path === pathname);
                        return <CategoryCard category={category} activeIndex={activeIndex} isSidebarCard />;
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
