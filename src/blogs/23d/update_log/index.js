import {useEffect} from 'react';
import X from '@/component/X';
import './index.css';

function Version() {
    return (
        <>
            <canvas id="b0001-canvas" />
            <div id="b0001-trigger">
                <X.HighlightBlock>
                    <X.FlexRow justifyContent="space-around">
                        <X.Image id="b0001-cheer-gif" src={require('./cheer.gif')} width="150" />
                        <div id="b0001-dance-version-wrapper">
                            <X.Image src={require('./version.png')} width="100%" invertInDarkTheme />
                        </div>
                        <X.Image id="b0001-dance-gif" src={require('./dance.gif')} width="128" />
                    </X.FlexRow>
                </X.HighlightBlock>
            </div>
        </>
    );
}

function UpdateLog() {
    const logs = [
        {date: '2023-07-02', description: '@创建仓库[https://github.com/1kuzus/1kuzus.github.io]@！'},
        {date: '2023-07-11', description: '首次推送'},
        {date: '2023-07-22', description: '搭建页面框架，测试路由'},
        {date: '2023-07-23', description: '设计首页logo和顶栏'},
        {date: '2023-07-29', description: '首页博客列表组件'},
        {date: '2023-07-30', description: '博客页侧栏组件'},
        {date: '2023-08-03', description: '创建`X`组件库\\n新组件`Title``H1``H2``H3`'},
        {date: '2023-08-09', description: '开始设计暗色主题'},
        {date: '2023-08-13', description: '新组件`P`，自动解析行内高亮'},
        {date: '2023-08-16', description: '段落组件自动解析加粗、换行、超链接和转义字符'},
        {date: '2023-08-20', description: '新组件`BlogWrapper``CodeBlock`'},
        {date: '2023-08-29', description: '由于`highlight.js`库对jsx的高亮支持不好，决定采用`prism.js`作为代码高亮库'},
        {
            date: '2023-08-30',
            description: '新组件`Formula`，使用`katex`作为公式渲染库\\n修改路由表定义逻辑，根据分类目录文件导入路由项',
        },
        {
            date: '2023-08-31',
            description:
                '新组件`Br``Divider``Uli``Oli`\\n新组件`HighlightBlock`\\n创建第1篇博客 - @模式识别 · 统计决策方法[/behwl/]@',
        },
        {date: '2023-09-02', description: '调整亮色、暗色两套代码高亮配色'},
        {date: '2023-09-03', description: '部署后遇到刷新404问题，将`BrowserRouter`改为`HashRouter`'},
        {date: '2023-09-04', description: '新组件`Table`'},
        {date: '2023-09-06', description: '新组件`FlexRow``Image`'},
        {date: '2023-09-13', description: '段落组件支持解析行内公式'},
        {date: '2023-09-14', description: '取消了切换主题时背景颜色的过渡动画'},
        {date: '2023-09-19', description: '解决代码编辑器里文本自动换行导致html文档插入空格'},
        {date: '2023-09-27', description: '博客目录'},
        {date: '2023-10-17', description: '加入`vscode snippets`'},
        {date: '2023-10-22', description: '加入`Google Analytics`'},
        {date: '2023-11-15', description: '通过后部署脚本解决刷新404问题'},
        {date: '2023-11-19', description: '后部署脚本中加入生成`@sitemap.xml[/sitemap.xml]@`\\n用`<noscript>`标签作为临时SEO方案'},
        {date: '2023-12-01', description: '优化目录生成逻辑，不要求同一博客内标题不重复'},
        {date: '2023-12-02', description: '图片组件新增可选的在暗色模式下自动反转颜色的功能'},
        {date: '2023-12-05', description: '标题组件`H1``H2``H3`支持超链接'},
        {date: '2023-12-06', description: '博客标题自动从分类目录文件同步'},
        {date: '2023-12-17', description: '支持直接在列表项中写含有段落组件特殊格式的文本'},
        {date: '2023-12-29', description: '更新了表格组件样式'},
    ];
    return (
        <>
            {logs.reverse().map((log, index) => (
                <div key={index}>
                    <X.FlexRow gap="16px">
                        <X.P>`{log.date}`</X.P>
                        <X.P>{log.description}</X.P>
                    </X.FlexRow>
                </div>
            ))}
        </>
    );
}

export default function Blog({blogTitle}) {
    useEffect(() => {
        const trigger = document.getElementById('b0001-trigger');
        const canvas = document.getElementById('b0001-canvas');
        const cheerGif = document.getElementById('b0001-cheer-gif');
        const danceGif = document.getElementById('b0001-dance-gif');
        const ctx = canvas.getContext('2d');
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
        const confettiCount = 30;
        const gravityConfetti = 0.3;
        const dragConfetti = 0.06;
        const terminalVelocity = 3;
        let confetti = [];
        let done = true;
        const colors = [
            {front: '#ff5252a0', back: '#c41c00c0'}, //Red
            {front: '#feee6ba0', back: '#fbc442c0'}, //Yellow
            {front: '#ab47bca0', back: '#7b1fa2c0'}, //Purple
            {front: '#00b8d0a0', back: '#0088acc0'}, //Cyan
            {front: '#4caf50a0', back: '#388e3cc0'}, //Green
        ];
        const randomRange = (min, max) => Math.random() * (max - min) + min;
        const initConfettoVelocity = (xRange, yRange) => {
            const x = randomRange(xRange[0], xRange[1]);
            const range = yRange[1] - yRange[0] + 1;
            let y = yRange[1] - Math.abs(randomRange(-range, range));
            if (y >= yRange[1] - 1) y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
            return {x: x, y: -y};
        };
        function Confetto() {
            this.randomModifier = randomRange(0, 99);
            this.color = colors[Math.floor(randomRange(0, colors.length))];
            this.dimensions = {
                x: randomRange(5, 9),
                y: randomRange(8, 15),
            };
            this.position = {
                x: randomRange(canvas.width / 2 - 30, canvas.width / 2 + 30),
                y: randomRange(380 + 20, 380 - 20),
            };
            this.rotation = randomRange(0, 2 * Math.PI);
            this.scale = {
                x: 1,
                y: 1,
            };
            this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
        }
        Confetto.prototype.update = function () {
            this.velocity.x -= this.velocity.x * dragConfetti;
            this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity);
            this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
        };
        const initBurst = () => {
            for (let i = 0; i < confettiCount; i++) confetti.push(new Confetto());
        };
        const render = () => {
            confetti = confetti.filter((confetto) => confetto.position.y < canvas.height);
            done = confetti.length === 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!done) {
                confetti.forEach((confetto) => {
                    let width = confetto.dimensions.x * confetto.scale.x;
                    let height = confetto.dimensions.y * confetto.scale.y;
                    ctx.translate(confetto.position.x, confetto.position.y);
                    ctx.rotate(confetto.rotation);
                    confetto.update();
                    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
                    ctx.fillRect(-width / 2, -height / 2, width, height);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                });
                window.requestAnimationFrame(render);
            }
        };
        const run = () => {
            initBurst();
            if (done) window.requestAnimationFrame(render);
        };
        trigger.onclick = run;
        let imageLoaded = 0;
        const onloadHandler = () => {
            imageLoaded++;
            if (imageLoaded === 2) run();
        };
        cheerGif.onload = onloadHandler;
        danceGif.onload = onloadHandler;
        const resizeHandler = () => {
            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;
        };
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <Version />
            <X.H1>历史</X.H1>
            <UpdateLog />
        </X.BlogWrapper>
    );
}
