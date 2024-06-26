const archives = [
    {
        categoryName: '网络杂识',
        blogs: [
            {
                title: '数据库设计三大范式',
                path: '/23d/database-3nf/',
                time: '2023-10-17',
            },
            {
                title: '不统计Github仓库某个目录下的语言',
                path: '/23d/github-linguist-vendored/',
                time: '2023-12-31',
            },
            {
                title: '解决：DeepL该快捷键已被使用',
                path: '/24a/deepl-shortcut-setting/',
                time: '2024-02-01',
            },
            {
                title: '记录：使用--allow-unrelated-histories',
                path: '/24a/git-merge-allow-unrelated-histories/',
                time: '2024-02-02',
            },
            {
                title: '单射、满射、双射',
                path: '/24b/injective-surjective-bijective/',
                time: '2024-05-19',
            },
        ],
    },
    {
        categoryName: 'Web',
        blogs: [
            {
                title: 'Python登录华科统一身份认证接口',
                path: '/23d/hust-cas-login/',
                time: '2023-12-29',
            },
            {
                title: 'Learn CWEs & Real-word Examples',
                path: '/24b/learn-cwes/',
                time: '2024-06-07',
            },
            {
                title: 'Learn XSS',
                path: '/24b/cross-site-scripting/',
                time: '2024-06-10',
            },
            {
                title: 'Learn CSRF',
                path: '/24b/cross-site-request-forgery/',
                time: '2024-06-10',
            },
        ],
    },
    {
        categoryName: '算法',
        blogs: [
            {
                title: 'C++中STL的基本使用',
                path: '/24a/cpp-stl/',
                time: '2024-03-10',
            },
            {
                title: '排序算法总结与代码实现',
                path: '/24b/sorting-algorithm/',
                time: '2024-05-06',
            },
            {
                title: '最小生成树与最短路算法',
                path: '/24b/mst-and-sp/',
                time: '2024-05-19',
            },
            {
                title: 'CSP 201604 T1-T4题解',
                path: '/24a/csp-2016-04/',
                time: '2024-03-09',
            },
            {
                title: 'CSP 201803 T1-T4题解',
                path: '/24a/csp-2018-03/',
                time: '2024-03-10',
            },
            {
                title: 'CSP 202006 T1-T4题解',
                path: '/24a/csp-2020-06/',
                time: '2024-03-10',
            },
            {
                title: 'CSP 202009 T1-T4题解',
                path: '/24a/csp-2020-09/',
                time: '2024-03-13',
            },
            {
                title: 'CSP 202012 T1-T5题解',
                path: '/24a/csp-2020-12/',
                time: '2024-03-17',
            },
            {
                title: 'CSP 202206 T1-T5题解',
                path: '/24a/csp-2022-06/',
                time: '2024-03-15',
            },
            {
                title: 'CSP 202305 T1-T4题解',
                path: '/24a/csp-2023-05/',
                time: '2024-03-23',
            },
            {
                title: 'CSP 202309 T1-T4题解',
                path: '/24a/csp-2023-09/',
                time: '2024-03-19',
            },
            {
                title: 'LeetCode 4.寻找两个正序数组的中位数',
                path: '/24b/leetcode-4/',
                time: '2024-05-29',
            },
            {
                title: 'LeetCode 30.串联所有单词的子串',
                path: '/24b/leetcode-30/',
                time: '2024-05-29',
            },
            {
                title: 'LeetCode 37.解数独',
                path: '/24b/leetcode-37/',
                time: '2024-06-01',
            },
            {
                title: 'LeetCode 60.排列序列',
                path: '/24b/leetcode-60/',
                time: '2024-05-30',
            },
            {
                title: 'LeetCode 65.有效数字',
                path: '/24b/leetcode-65/',
                time: '2024-05-31',
            },
            {
                title: 'LeetCode 84.柱状图中最大的矩形',
                path: '/24b/leetcode-84/',
                time: '2024-06-30',
            },
            /*todo:注释掉时因为读不到page.title导致不能build*/
            {
                title: 'LeetCode 312.戳气球',
                path: '/24b/leetcode-312/',
                time: '2024-06-09',
            },
            {
                title: 'LeetCode 1373.二叉搜索子树的最大键值和',
                path: '/24b/leetcode-1373/',
                time: '2024-06-02',
            },
            {
                title: 'LeetCode 1739.放置盒子',
                path: '/24b/leetcode-1739/',
                time: '2024-05-29',
            },
        ],
    },
    {
        categoryName: '深度学习',
        blogs: [
            {
                title: '论文速记',
                path: '/longtime/papers/',
            },
            {
                title: '行为识别R(2+1)D网络',
                path: '/23d/r2plus1d/',
                time: '2023-11-27',
            },
            {
                title: '目标检测评价指标mAP',
                path: '/23d/object-detection-map/',
                time: '2023-12-15',
            },
            {
                title: '学习RNN和LSTM',
                path: '/23d/learn-rnn-lstm/',
                time: '2023-12-17',
            },
            {
                title: '记录：复现NeRF-RPN代码',
                path: '/24a/reproduce-nerf-rpn/',
                time: '2024-01-01',
            },
            {
                title: '解决：nms_rotated报错"THC/THC.h": No such file or directory',
                path: '/24b/yolov5-obb-nms-rotated/',
                time: '2024-04-24',
            },
        ],
    },
    {
        categoryName: 'Python学习',
        blogs: [
            {
                title: '在pytorch和numpy中取top-k值和索引',
                path: '/24a/torch-numpy-topk/',
                time: '2024-01-10',
            },
            {
                title: 'Python面向对象编程',
                path: '/24a/object-oriented-programming-python/',
                time: '2024-02-29',
            },
        ],
    },
    {
        categoryName: '前端与JavaScript',
        blogs: [
            {
                title: 'JavaScript数组常用方法',
                path: '/23c/js-array/',
                time: '2023-09-02',
            },
            {
                title: 'CSS实现auto高度的过渡动画',
                path: '/23d/css-auto-height-transition/',
                time: '2023-12-30',
            },
        ],
    },
    {
        categoryName: '课程',
        blogs: [
            {
                title: '【线性代数】对秩不等式的理解',
                path: '/24b/rank-inequality/',
                time: '2024-04-27',
            },
            {
                title: '【模式识别】统计决策方法',
                path: '/23c/pattern-recognition-1/',
                time: '2023-08-31',
            },
            {
                title: '【模式识别】参数估计',
                path: '/23c/pattern-recognition-2/',
                time: '2023-09-12',
            },
            {
                title: '【模式识别】非参数估计',
                path: '/23c/pattern-recognition-3/',
                time: '2023-09-19',
            },
            {
                title: '【模式识别】线性学习器与线性分类器',
                path: '/23d/pattern-recognition-4/',
                time: '2023-10-24',
            },
            {
                title: '【计算机网络】协议总结',
                path: '/23d/protocols/',
                time: '2023-10-26',
            },
            {
                title: '【机器学习】习题',
                path: '/24a/machine-learning-exercises/',
                time: '2024-01-07',
            },
            {
                title: '【GAMES101】Transformation',
                path: '/24a/games101-01-transformation/',
                time: '2024-01-07',
            },
            {
                title: '【GAMES101】Rasterization',
                path: '/24a/games101-02-rasterization/',
                time: '2024-01-13',
            },
            {
                title: '【GAMES101】Shading',
                path: '/24a/games101-03-shading/',
                time: '2024-01-26',
            },
            {
                title: '【GAMES101】Geometry',
                path: '/24a/games101-04-geometry/',
                time: '2024-01-30',
            },
            {
                title: '专业课复习',
                path: '/24b/by-questions/',
                time: '2024-04-18',
            },
        ],
    },
    {
        categoryName: '其他',
        blogs: [
            {
                title: '示例',
                path: '/longtime/demo/',
            },
            {
                title: '更新日志',
                path: '/longtime/updates/',
            },
        ],
    },
];
export default archives;
