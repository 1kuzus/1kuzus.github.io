import B0000 from './23c/demo';
import Bj23k from './23c/jsarray';
import Behwl from './23c/pattern_recognition1';
import Bco21 from './23c/pattern_recognition2';
import Bjjj5 from './23c/pattern_recognition3';
import Bykl9 from './23d/db3nf';
import B2fph from './23d/pattern_recognition4';
import Blnrj from './23d/protocols';

const categories = [
    {
        categoryName: '语言碎片',
        blogs: [
            {
                blogName: 'JavaScript 数组常用方法',
                path: '/bj23k/',
                time: '2023-9-2',
                component: <Bj23k />,
            },
        ],
    },
    {
        categoryName: '赛博杂识',
        blogs: [
            {
                blogName: '数据库设计三大范式',
                path: '/bykl9/',
                time: '2023-10-17',
                component: <Bykl9 />,
            },
        ],
    },
    {
        categoryName: '课程',
        blogs: [
            {
                blogName: '模式识别 · 统计决策方法',
                path: '/behwl/',
                time: '2023-8-31',
                component: <Behwl />,
            },
            {
                blogName: '模式识别 · 参数估计',
                path: '/bco21/',
                time: '2023-9-12',
                component: <Bco21 />,
            },
            {
                blogName: '模式识别 · 非参数估计',
                path: '/bjjj5/',
                time: '2023-9-19',
                component: <Bjjj5 />,
            },
            {
                blogName: '模式识别 · 线性学习器与线性分类器',
                path: '/b2fph/',
                time: '2023-10-24',
                component: <B2fph />,
            },
            {
                blogName: '计算机网络 · 协议总结',
                path: '/blnrj/',
                time: '2023-10-26',
                component: <Blnrj />,
            },
        ],
    },
    {
        categoryName: '其他',
        blogs: [
            {
                blogName: '示例',
                path: '/b0000/',
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
