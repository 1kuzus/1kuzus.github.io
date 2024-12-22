import Heading from 'src/component/Heading/Heading';
import CategoryCard from 'src/component/CategoryCard/CategoryCard';
import CenterWrapper from 'src/component/CenterWrapper/CenterWrapper';
import categories from 'src/app/_categories.json';

export const metadata = {
    title: '全部分类 - 铃木的网络日记',
};

export default function Categories() {
    return (
        <CenterWrapper>
            <Heading>全部分类</Heading>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <CategoryCard category={category} />
                    </li>
                ))}
            </ul>
        </CenterWrapper>
    );
}
