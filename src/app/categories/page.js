import Y from 'src/component/Y';
import CategoryCard from 'src/component/CategoryCard/CategoryCard';
import categories from 'src/app/_categories.json';

export default function Categories() {
    return (
        <Y.CenterWrapper>
            <Y.H1>Categories.</Y.H1>
            <ul className="blog-category-ul">
                {categories.map((category) => (
                    <CategoryCard category={category} />
                ))}
            </ul>
        </Y.CenterWrapper>
    );
}
