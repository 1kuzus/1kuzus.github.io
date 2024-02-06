import {cloneElement} from 'react';
import Blog08b1b6 from './23c/js-array';
import Blog72aa87 from './23c/pattern-recognition-1';
import Blog699d42 from './23c/pattern-recognition-2';
import Blog2e5395 from './23c/pattern-recognition-3';
import Blog660e89 from './23d/css-auto-height-transition';
import Blog2b385d from './23d/database-3nf';
import Blog24ca9d from './23d/github-linguist-vendored';
import Blog56bda0 from './23d/learn-rnn-lstm';
import Blog837b13 from './23d/object-detection-map';
import Blog3992fa from './23d/pattern-recognition-4';
import Blog6be863 from './23d/protocols';
import Blog9e7694 from './23d/r2plus1d';
import Blog9ade12 from './24a/deepl-shortcut-setting';
import Blog009c1d from './24a/games101-01-transformation';
import Blog7fe954 from './24a/games101-02-rasterization';
import Blog996037 from './24a/games101-03-shading';
import Blog3fd68a from './24a/games101-04-geometry';
import Blog29491e from './24a/git-merge-allow-unrelated-histories';
import Blog1e216d from './24a/machine-learning-exercises';
import Blog492899 from './24a/reproduce-nerf-rpn';
import Blog60c26d from './24a/torch-numpy-topk';
import Blog79acb2 from './24a/zzz';
import Blog120c66 from './longtime/demo';
import Blog32e936 from './longtime/papers';
import Blog75d1a6 from './longtime/updates';

const categories = [
    {
        categoryName: '网络杂识',
        blogs: [
            {
                blogTitle: '数据库设计三大范式',
                path: '/23d/database-3nf/',
                time: '2023-10-17',
                component: <Blog2b385d />,
            },
            {
                blogTitle: '不统计Github仓库某个目录下的语言',
                path: '/23d/github-linguist-vendored/',
                time: '2023-12-31',
                component: <Blog24ca9d />,
            },
            {
                blogTitle: '解决：DeepL该快捷键已被使用',
                path: '/24a/deepl-shortcut-setting/',
                time: '2024-02-01',
                component: <Blog9ade12 />,
            },
            {
                blogTitle: '记录：使用--allow-unrelated-histories',
                path: '/24a/git-merge-allow-unrelated-histories/',
                time: '2024-02-02',
                component: <Blog29491e />,
            },
        ],
    },
    {
        categoryName: '深度学习',
        blogs: [
            {
                blogTitle: '论文速记',
                path: '/longtime/papers/',
                component: <Blog32e936 />,
            },
            {
                blogTitle: '行为识别R(2+1)D网络',
                path: '/23d/r2plus1d/',
                time: '2023-11-27',
                component: <Blog9e7694 />,
            },
            {
                blogTitle: '目标检测评价指标mAP',
                path: '/23d/object-detection-map/',
                time: '2023-12-15',
                component: <Blog837b13 />,
            },
            {
                blogTitle: '学习RNN和LSTM',
                path: '/23d/learn-rnn-lstm/',
                time: '2023-12-17',
                component: <Blog56bda0 />,
            },
            {
                blogTitle: '记录：复现NeRF-RPN代码',
                path: '/24a/reproduce-nerf-rpn/',
                time: '2024-01-01',
                component: <Blog492899 />,
            },
        ],
    },
    {
        categoryName: 'Python学习',
        blogs: [
            {
                blogTitle: '在pytorch和numpy中取top-k值和索引',
                path: '/24a/torch-numpy-topk/',
                time: '2024-01-10',
                component: <Blog60c26d />,
            },
        ],
    },
    {
        categoryName: '前端与JavaScript',
        blogs: [
            {
                blogTitle: 'JavaScript数组常用方法',
                path: '/23c/js-array/',
                time: '2023-09-02',
                component: <Blog08b1b6 />,
            },
            {
                blogTitle: 'CSS实现auto高度的过渡动画',
                path: '/23d/css-auto-height-transition/',
                time: '2023-12-30',
                component: <Blog660e89 />,
            },
            {
                blogTitle: '目录测试',
                path: '/24a/template/',
                time: '2023-12-30',
                component: <Blog79acb2 />,
            },
        ],
    },
    {
        categoryName: '课程',
        blogs: [
            {
                blogTitle: '【模式识别】统计决策方法',
                path: '/23c/pattern-recognition-1/',
                time: '2023-08-31',
                component: <Blog72aa87 />,
            },
            {
                blogTitle: '【模式识别】参数估计',
                path: '/23c/pattern-recognition-2/',
                time: '2023-09-12',
                component: <Blog699d42 />,
            },
            {
                blogTitle: '【模式识别】非参数估计',
                path: '/23c/pattern-recognition-3/',
                time: '2023-09-19',
                component: <Blog2e5395 />,
            },
            {
                blogTitle: '【模式识别】线性学习器与线性分类器',
                path: '/23d/pattern-recognition-4/',
                time: '2023-10-24',
                component: <Blog3992fa />,
            },
            {
                blogTitle: '【计算机网络】协议总结',
                path: '/23d/protocols/',
                time: '2023-10-26',
                component: <Blog6be863 />,
            },
            {
                blogTitle: '【机器学习】习题',
                path: '/24a/machine-learning-exercises/',
                time: '2024-01-07',
                component: <Blog1e216d />,
            },
            {
                blogTitle: '【GAMES101】Transformation',
                path: '/24a/games101-01-transformation/',
                time: '2024-01-07',
                component: <Blog009c1d />,
            },
            {
                blogTitle: '【GAMES101】Rasterization',
                path: '/24a/games101-02-rasterization/',
                time: '2024-01-13',
                component: <Blog7fe954 />,
            },
            {
                blogTitle: '【GAMES101】Shading',
                path: '/24a/games101-03-shading/',
                time: '2024-01-26',
                component: <Blog996037 />,
            },
            {
                blogTitle: '【GAMES101】Geometry',
                path: '/24a/games101-04-geometry/',
                time: '2024-01-30',
                component: <Blog3fd68a />,
            },
        ],
    },
    {
        categoryName: '其他',
        blogs: [
            {
                blogTitle: '示例',
                path: '/longtime/demo/',
                component: <Blog120c66 />,
            },
            {
                blogTitle: '更新日志',
                path: '/longtime/updates/',
                component: <Blog75d1a6 />,
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
