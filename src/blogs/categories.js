import {cloneElement} from 'react';
import B0000 from './23c/demo';
import Bj23k from './23c/jsarray';
import Behwl from './23c/pattern_recognition1';
import Bco21 from './23c/pattern_recognition2';
import Bjjj5 from './23c/pattern_recognition3';
import Bykl9 from './23d/db3nf';
import Bnwt2 from './23d/lstm';
import B24fa from './23d/object_detection_map';
import Bo8sr from './23d/papers';
import B2fph from './23d/pattern_recognition4';
import Blnrj from './23d/protocols';
import B97t6 from './23d/r2plus1d';
import B0001 from './23d/update_log';

const categories = [
    {
        categoryName: '网络杂识',
        blogs: [
            {
                blogTitle: '数据库设计三大范式',
                path: '/bykl9/',
                time: '2023-10-17',
                component: <Bykl9 />,
            },
        ],
    },
    {
        categoryName: '深度学习',
        blogs: [
            {
                blogTitle: '论文速记',
                path: '/bo8sr/',
                component: <Bo8sr />,
            },
            {
                blogTitle: '行为识别R(2+1)D网络',
                path: '/b97t6/',
                time: '2023-11-27',
                component: <B97t6 />,
            },
            {
                blogTitle: '目标检测评价指标mAP',
                path: '/b24fa/',
                time: '2023-12-15',
                component: <B24fa />,
            },
            {
                blogTitle: '学习RNN和LSTM',
                path: '/bnwt2/',
                time: '2023-12-17',
                component: <Bnwt2 />,
            },
        ],
    },
    {
        categoryName: '前端与JavaScript',
        blogs: [
            {
                blogTitle: 'JavaScript数组常用方法',
                path: '/bj23k/',
                time: '2023-9-2',
                component: <Bj23k />,
            },
        ],
    },
    {
        categoryName: '课程',
        blogs: [
            {
                blogTitle: '【模式识别】统计决策方法',
                path: '/behwl/',
                time: '2023-8-31',
                component: <Behwl />,
            },
            {
                blogTitle: '【模式识别】参数估计',
                path: '/bco21/',
                time: '2023-9-12',
                component: <Bco21 />,
            },
            {
                blogTitle: '【模式识别】非参数估计',
                path: '/bjjj5/',
                time: '2023-9-19',
                component: <Bjjj5 />,
            },
            {
                blogTitle: '【模式识别】线性学习器与线性分类器',
                path: '/b2fph/',
                time: '2023-10-24',
                component: <B2fph />,
            },
            {
                blogTitle: '【计算机网络】协议总结',
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
                blogTitle: '示例',
                path: '/b0000/',
                component: <B0000 />,
            },
            {
                blogTitle: '更新日志',
                path: '/b0001/',
                component: <B0001 />,
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
        element: cloneElement(i.component, {blogTitle: i.blogTitle}),
    }));
