import './CategoryCard.css';

export default function CategoryCard(props) {
    const {category} = props;
    return (
        <div className="category-card">
            {category.categoryName}
            <ul>
                {category.posts.map((post,index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
    );
}
