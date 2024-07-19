import Link from 'next/link';
import archives from 'src/app/_archives.json';
import './CategoryCard.css';

export default function CategoryCard(props) {
    const {category} = props;
    return (
        <div className="category-card">
            {category.categoryName}
            <ul>
                {category.posts.map((path, index) => (
                    <li key={index}>
                        <Link className="sidebar-list-link" href={path} prefetch={true}>
                            <span className="sidebar-list-title">{archives[path].title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
