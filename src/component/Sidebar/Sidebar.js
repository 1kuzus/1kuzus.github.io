'use client';
import {RightArrowIcon} from 'src/assets/svgs';
import {useGlobalContext} from 'src/context/GlobalContext';
import categories from 'src/app/_categories.json';
import CategoryCard from '../CategoryCard/CategoryCard';
import './Sidebar.css';

export default function Sidebar() {
    const {showSidebar, setShowSidebar} = useGlobalContext();
    return (
        <>
            <div id="sidebar" className={showSidebar ? 'show-sidebar' : null}>
                {categories.map((category) => (
                    <CategoryCard category={category} />
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
