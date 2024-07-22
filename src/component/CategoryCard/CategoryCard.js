import Link from 'next/link';
import archives from 'src/app/_archives.json';
import './CategoryCard.css';

export default function CategoryCard(props) {
    const {category} = props;
    return (
        <div className="category-card">
            <div className="category-name">{category.categoryName}</div>
            <ul>
                {category.posts.map((path, index) => (
                    <li key={index} className="post-item">
                        {/* todo: 起名字 */}
                        <Link href={path} prefetch={true}>
                            <span className="post-title">{archives[path].title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
