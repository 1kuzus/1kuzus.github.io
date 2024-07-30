'use client';
import {useState} from 'react';
import Y from 'src/component/Y';
import {RightArrowIcon} from 'src/assets/svgs';
import archives from 'src/app/_archives.json';
import './CategoryCard.css';

export default function CategoryCard(props) {
    const {category, activeIndex, isSidebarCard} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`category-card${isSidebarCard ? ' sidebar-card' : ''}${showList ? ' show-list' : ''}`}>
            <div className="category-card-header">
                <div className="category-name">
                    {category.categoryName} ({category.posts.length})
                </div>
                <div className="category-rightarrow" onClick={() => setShowList((prev) => !prev)}>
                    <RightArrowIcon />
                </div>
            </div>
            <div className="category-card-ul-wrapper">
                <ul className="category-card-ul">
                    {category.posts.map((path, index) => (
                        <li key={index}>
                            <Y.Link href={path} active={activeIndex === index}>
                                <span className="post-title">{archives[path].title}</span>
                            </Y.Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
