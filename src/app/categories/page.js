import Y from 'src/component/Y';
import CategoryCard from 'src/component/CategoryCard/CategoryCard';
import categories from 'src/app/_categories.json';

export const metadata = {
    title: '全部分类 - 铃木的网络日记',
};

export default function Categories() {
    return (
        <Y.CenterWrapper>
            <Y.H1>全部分类</Y.H1>
            <ul>
                {categories.map((category) => (
                    <CategoryCard category={category} />
                ))}
            </ul>
        </Y.CenterWrapper>
    );
}
