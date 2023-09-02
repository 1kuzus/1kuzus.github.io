import B0000 from './23c/demo';
import Behwl from './23c/pr1';
import Bj23k from './23c/jsarray';

const categories = [
    {
        categoryName: '语言碎片',
        blogs: [
            {
                blogName: 'JavaScript 数组常用方法',
                path: '/bj23k',
                time: '2023-9-2',
                component: <Bj23k />,
            },
        ],
    },
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
