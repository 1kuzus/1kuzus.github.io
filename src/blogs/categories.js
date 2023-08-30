import B0000 from './b23830demo';
import Behwl from './b23831test';

const categories = [
    {
        categoryName: '示例',
        blogs: [
            {
                blogName: '测试Blog',
                path: '/b0000',
                time: '2023-8-30',
                component: <B0000 />,
            },
        ],
    },
    {
        categoryName: 'React',
        blogs: [
            {
                blogName: '组件的渲染时机',
                path: '/blog1',
                time: '2023-8-1',
                component: <Behwl />,
            },
            {
                blogName: '为什么列表生成组件时需要传入key?',
                path: '/blog2',
                time: '2023-8-1',
                component: <Behwl />,
            },
            {
                blogName: '使用useMemo',
                path: '/blog3',
                time: '2024-7-56',
                component: <Behwl />,
            },
            {
                blogName: '关于useEffect',
                path: '/blog4',
                time: '2023-8-1',
                component: <Behwl />,
            },
            {
                blogName: '为什么列表生成组件时需要传入key?',
                path: '/blog5',
                time: '2023-8-1',
                component: <Behwl />,
            },
            {
                blogName: '使用useCallback',
                path: '/blog6',
                time: '2023-8-1',
                component: <Behwl />,
            },
        ],
    },
    {
        categoryName: 'JavaScript',
        blogs: [
            {
                blogName: '组件的渲染时机',
                path: '/blog7',
                time: '2023-8-1',
                component: <Behwl />,
            },
            {
                blogName: '为什么列表生成组件时需要传入key?',
                path: '/blog8',
                time: '2023-8-1',
                component: <Behwl />,
            },
        ],
    },
    {
        categoryName: 'Python & 爬虫',
        blogs: [
            {
                blogName: '关于useEffect',
                path: '/blog9',
                time: '2023-8-11',
                component: <Behwl />,
            },
            {
                blogName: '为什么列表生成组件时需要传入key?',
                path: '/blog10',
                time: '2023-8-1',
                component: <Behwl />,
            },
            {
                blogName: '使用useCallback',
                path: '/blog11',
                time: '2023-12-13',
                component: <Behwl />,
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
