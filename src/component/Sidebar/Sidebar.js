'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import CategoryCard from 'src/component/CategoryCard/CategoryCard';
import {categories} from 'src/posts-indexing';
import './Sidebar.css';

export default function Sidebar() {
    const pathname = usePathname();
    useEffect(() => {
        document.documentElement.removeAttribute('data-show-sidebar');
    }, [pathname]);
    return (
        <>
            <div id="sidebar">
                <div id="sidebar-width-wrapper">
                    {categories.map((category, index) => {
                        const activeIndex = category.posts.findIndex((path) => path === pathname);
                        return <CategoryCard key={index} category={category} activeIndex={activeIndex} isSidebarCard />;
                    })}
                </div>
            </div>
            <div
                id="sidebar-mask"
                onClick={() => {
                    document.documentElement.removeAttribute('data-show-sidebar');
                }}
            />
        </>
    );
}
