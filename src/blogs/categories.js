import B0000 from './2308/demo';
import Behwl from './2308/pr1';

const categories = [
    {
        categoryName: '课程',
        blogs: [
            {
                blogName: '「模式识别」统计决策方法',
                path: '/behwl',
                time: '2023-8-31',
                component: <Behwl />,
            },
        ],
    },
    {
        categoryName: '其他',
        blogs: [
            {
                blogName: '示例',
                path: '/b0000',
                time: '2023-8-30',
                component: <B0000 />,
            },
        ],
    },
];

export default categories;
export const elements = categories
    .map((i) => i.blogs)
    .reduce((acc, cur) => [...acc, ...cur])
    .map((i) => ({
        path: i.path,
        element: i.component,
    }));
