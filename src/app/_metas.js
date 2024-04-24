import archives from './_archives';

const metadata = {
    '/23d/protocols/': {
        pagetitle: '【计算机网络】协议总结 - 链路层 网络层 运输层',
    },
    '/24a/cpp-stl/': {
        pagetitle: 'C++中STL的基本使用 - string vector map set queue stack priority_queue',
    },
    '/24a/csp-2016-04/': {
        pagetitle: 'CSP 201604 T1-T4题解 - 折点计数 俄罗斯方块 路径解析 游戏',
    },
    '/24a/csp-2018-03/': {
        pagetitle: 'CSP 201803 T1-T4题解 - 跳一跳 碰撞的小球 URL映射 棋局评估',
    },
    '/24a/csp-2020-06/': {
        pagetitle: 'CSP 202006 T1-T4题解 - 线性分类器 稀疏向量 Markdown渲染器 1246',
    },
    '/24a/csp-2020-09/': {
        pagetitle: 'CSP 202009 T1-T4题解 - 称检测点查询 风险人群筛查 点亮数字人生 星际旅行',
    },
    '/24a/csp-2020-12/': {
        pagetitle: 'CSP 202012 T1-T5题解 - 期末预测之安全指数 期末预测之最佳阈值 带配额的文件系统 食材运输 星际旅行',
    },
    '/24a/csp-2022-06/': {
        pagetitle: 'CSP 202206 T1-T5题解 - 归一化处理 寻宝！大冒险！ 角色授权 光线追踪 PS无限版',
    },
    '/24a/csp-2023-05/': {
        pagetitle: 'CSP 202305 T1-T4题解 - 重复局面 矩阵运算 解压缩 电力网络',
    },
    '/24a/csp-2023-09/': {
        pagetitle: 'CSP 202309 T1-T4题解 - 坐标变换（其一） 坐标变换（其二） 梯度求解 阴阳龙',
    },
};

const metas = archives
    .map((i) => i.blogs)
    .reduce((acc, cur) => [...acc, ...cur])
    .reduce((acc, cur) => {
        acc[cur.path] = {
            blogtitle: cur.title,
            pagetitle: (metadata?.[cur.path]?.pagetitle || cur.title) + ' - 铃木的网络日记',
        };
        return acc;
    }, {});

metas.baseurl = 'https://1kuzus.github.io';

export default metas;
