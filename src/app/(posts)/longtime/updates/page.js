import X from 'src/component/X';
import Confetto from './Confetto';
import Version from './Version';
import metas from 'src/app/_metas';

const path = '/longtime/updates/';
export const {metadata} = metas[path];

function UpdateLog() {
    const logs = [
        {date: '2023-07-02', description: '@创建仓库[https://github.com/1kuzus/1kuzus.github.io]@！'},
        {date: '2023-07-11', description: '首次推送'},
        {date: '2023-07-22', description: '搭建页面框架，测试路由'},
        {date: '2023-07-23', description: '设计首页logo和顶栏'},
        {date: '2023-07-29', description: '首页博客列表组件'},
        {date: '2023-07-30', description: '博客页侧栏导航组件'},
        {date: '2023-08-03', description: '创建`X`组件库\\n新组件`Title``H1``H2``H3`'},
        {date: '2023-08-09', description: '开始设计暗色主题'},
        {date: '2023-08-13', description: '新组件`P`，自动解析行内高亮'},
        {date: '2023-08-16', description: '段落组件自动解析加粗、换行、超链接和转义字符'},
        {date: '2023-08-20', description: '新组件`PostWrapper``CodeBlock`'},
        {date: '2023-08-29', description: '由于`highlight.js`库对jsx的高亮支持不好，决定采用`prism.js`作为代码高亮库'},
        {
            date: '2023-08-30',
            description: '新组件`Formula`，使用`Katex`作为公式渲染库\\n修改路由表定义逻辑，根据分类目录文件导入路由项',
        },
        {
            date: '2023-08-31',
            description: '新组件`Br``Divider``Uli``Oli`\\n新组件`HighlightBlock`\\n创建第1篇博客 - @模式识别 · 统计决策方法[/23c/pattern-recognition-1/]@',
        },
        {date: '2023-09-02', description: '调整亮色、暗色两套代码高亮配色'},
        {date: '2023-09-03', description: '部署后遇到刷新404问题，将`BrowserRouter`改为`HashRouter`'},
        {date: '2023-09-04', description: '新组件`Table`'},
        {date: '2023-09-06', description: '新组件`FlexRow``Image`'},
        {date: '2023-09-13', description: '段落组件支持解析行内公式'},
        {date: '2023-09-14', description: '取消了切换主题时背景颜色的过渡动画'},
        {date: '2023-09-19', description: '解决代码编辑器里文本自动换行导致HTML文档插入空格'},
        {date: '2023-09-27', description: '博客目录'},
        {date: '2023-10-17', description: '加入`vscode snippets`'},
        {date: '2023-10-22', description: '加入`Google Analytics`'},
        {date: '2023-11-15', description: '通过后部署脚本解决刷新404问题'},
        {
            date: '2023-11-19',
            description: '后部署脚本中加入生成`@sitemap.xml[/sitemap.xml]@`\\n用`noscript`标签作为临时SEO方案',
        },
        {date: '2023-12-01', description: '优化目录生成逻辑，同一博客内标题可以重复'},
        {date: '2023-12-02', description: '图片组件新增可选的在暗色模式下自动反转颜色的功能'},
        {date: '2023-12-05', description: '标题组件`H1``H2``H3`支持超链接'},
        {date: '2023-12-06', description: '博客标题自动从分类目录文件同步'},
        {date: '2023-12-17', description: '支持直接在列表项中写含有段落组件特殊格式的纯字符串`children`'},
        {
            date: '2023-12-29',
            description: '更新了表格组件样式\\n优化了首页博客列表和侧栏导航列表高度自动过渡的实现方法',
        },
        {date: '2023-12-30', description: '略微调整首页博客列表样式'},
        {version: '1.0'},
        {date: '2024-01-08', description: '新的SEO方案：使用`react-snap`作预渲染\\n加入`404`页面'},
        {date: '2024-01-22', description: '更新`404`页面'},
        {date: '2024-01-23', description: '迁移项目到`non-ejected`版'},
        {date: '2024-01-26', description: '使用语义化更佳的路由方案'},
        {date: '2024-01-27', description: '支持直接在列表项中写含有jsx表达式的`children`'},
        {date: '2024-02-01', description: '`HighlightBlock`组件支持`bgcolor="blue"`'},
        {version: '1.1'},
        {
            date: '2024-02-12',
            description: '删除了`PostWrapper`组件，布局功能集成到新组件`PostLayout`\\n响应式设计移动端适配',
        },
        {date: '2024-02-15', description: '调整了暗色模式配色等部分页面设计\\n顶栏新增半透明效果'},
        {date: '2024-02-17', description: '优化了侧栏导航布局\\n`react-like`'},
        {date: '2024-02-27', description: '`CodeBlock`组件支持代码行高亮'},
        {version: '2.0'},
        {date: '2024-04-07', description: '使用`Next.js`重构'},
        {date: '2024-04-24', description: '优化了部分移动端样式'},
        {date: '2024-06-07', description: '`Image`组件支持`center`属性\\n`Table`组件支持`fromJSX`属性'},
        {
            date: '2024-06-10',
            description: '`HighlightBlock`组件支持`bgcolor="green"`\\n通过高亮背景色作为`diff`高亮方案',
        },
        {version: '3.0'},
        {date: '2024-07-04', description: '更新目录生成逻辑'},
        {date: '2024-07-21', description: '创建`Y`组件库，作文章外的站点公用组件'},
        {date: '2024-07-24', description: '重构布局逻辑\\n`/categories`页与`/archives`页'},
        {date: '2024-07-27', description: '重构主页\\n全局`css`变量从组件命名改为颜色命名'},
        {version: '3.1'},
        {date: '2024-07-30', description: '规范化'},
    ];
    return (
        <>
            {logs.reverse().map((log, index) => (
                <div key={index}>
                    {log.version ? (
                        <X.H3>Ver {log.version}</X.H3>
                    ) : (
                        <X.FlexRow gap="16px">
                            <X.P style={{minWidth: '96px'}}>`{log.date}`</X.P>
                            <X.P>{log.description}</X.P>
                        </X.FlexRow>
                    )}
                </div>
            ))}
        </>
    );
}

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <Confetto>
                <Version version="3.2" />
            </Confetto>
            <UpdateLog />
        </>
    );
}
