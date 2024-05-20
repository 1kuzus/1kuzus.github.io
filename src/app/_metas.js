import archives from './_archives';

const metadata = {
    '/23d/protocols/': {
        addition: '链路层 网络层 运输层',
    },
    '/24a/cpp-stl/': {
        addition: 'string vector map set queue stack priority_queue',
    },
    '/24a/csp-2016-04/': {
        addition: '折点计数 俄罗斯方块 路径解析 游戏',
    },
    '/24a/csp-2018-03/': {
        addition: '跳一跳 碰撞的小球 URL映射 棋局评估',
    },
    '/24a/csp-2020-06/': {
        addition: '线性分类器 稀疏向量 Markdown渲染器 1246',
    },
    '/24a/csp-2020-09/': {
        addition: '称检测点查询 风险人群筛查 点亮数字人生 星际旅行',
    },
    '/24a/csp-2020-12/': {
        addition: '期末预测之安全指数 期末预测之最佳阈值 带配额的文件系统 食材运输 星际旅行',
    },
    '/24a/csp-2022-06/': {
        addition: '归一化处理 寻宝！大冒险！ 角色授权 光线追踪 PS无限版',
    },
    '/24a/csp-2023-05/': {
        addition: '重复局面 矩阵运算 解压缩 电力网络',
    },
    '/24a/csp-2023-09/': {
        addition: '坐标变换（其一） 坐标变换（其二） 梯度求解 阴阳龙',
    },
    '/24b/rank-inequality/': {
        addition: 'r(A) + r(B) - n <= r(AB) <= min r(A), r(B)',
    },
    '/24b/injective-surjective-bijective/': {
        addition: 'injective surjective bijective',
    },
};

const metas = archives
    .map((i) => i.blogs)
    .reduce((acc, cur) => [...acc, ...cur])
    .reduce((acc, cur) => {
        acc[cur.path] = {
            blogtitle: cur.title,
            pagetitle: [cur.title, metadata?.[cur.path]?.addition, '铃木的网络日记'].filter((i) => i).join(' - '),
        };
        return acc;
    }, {});

metas.baseurl = 'https://1kuzus.github.io';

export default metas;
