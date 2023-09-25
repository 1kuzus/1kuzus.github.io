import B0000 from './23c/demo';
import Bj23k from './23c/jsarray';
import Behwl from './23c/pr1';
import Bco21 from './23c/pr2';
import Bjjj5 from './23c/pr3';

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
                blogName: '模式识别 · 统计决策方法',
                path: '/behwl',
                time: '2023-8-31',
                component: <Behwl />,
            },
            {
                blogName: '模式识别 · 参数估计',
                path: '/bco21',
                time: '2023-9-12',
                component: <Bco21 />,
            },
            {
                blogName: '模式识别 · 非参数估计',
                path: '/bjjj5',
                time: '2023-9-19',
                component: <Bjjj5 />,
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
