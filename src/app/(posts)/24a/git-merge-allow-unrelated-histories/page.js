import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/git-merge-allow-unrelated-histories/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>前情提要</X.H1>
            <X.P>这个博客网站曾经是一个`Create React App`项目，此前一直在Github仓库的`master`分支开发。</X.P>
            <X.P>
                之前为了配置路径别名进行了`eject`，后来发现设置`jsconfig.json`就可以解决问题，于是一直想还原成没有`eject`的项目。---
                当然，`eject`操作是不可逆的，于是我把原来的`master`分支备份到`v1`分支，再另建一个新项目，把旧代码迁移过来，---
                然后把新项目强制`push`到`master`分支，这样就可以在`master`分支上继续新版本的开发。
            </X.P>
            <X.H1>问题</X.H1>
            <X.P>
                在新版本（暂且叫它`v2`）也就是现在的`master`分支上提交了数次`commit`后，我意识到一个问题：此前的做法导致原来`v1`---
                版本的提交记录并没有迁移到`master`分支中，当前的`master`分支相当于从零开始。
            </X.P>
            <X.Image src="fig1.png" width="600px" invertInDarkTheme />
            <X.P>我希望`master`分支仍然保留`v1`版本的提交，同时也在此基础上记录`v2`版本的提交。</X.P>
            <X.H1>解决步骤</X.H1>
            <X.P>首先找一个文件夹克隆仓库：</X.P>
            <X.CodeBlock language="bash" code="git clone https://github.com/1kuzus/1kuzus.github.io.git" />
            <X.P>切换到`v1`分支：</X.P>
            <X.CodeBlock language="bash" code="git checkout v1" />
            <X.P>然后使用`--allow-unrelated-histories`参数合并两个没有公共祖先的分支：</X.P>
            <X.CodeBlock language="bash" code="git merge master -X theirs --allow-unrelated-histories" />
            <X.P>
                上面的参数`-X theirs`是合并策略，在将`master`分支合并到`v1`分支发生冲突时选择`master`分支的更改。---
                现在，两个分支的提交记录都被保留了，但是目录下会多出仅在`master`分支中存在的文件，删掉它们即可。或者更简单地，---
                直接清空目录，把`master`分支中的内容复制过来。
            </X.P>
            <X.P>
                接下来在执行`git add`、`git commit`之后提交这次删除操作，也就是把本地的`v1`分支提交到远程的`master`：
            </X.P>
            <X.CodeBlock
                language="bash"
                code={`
                git push origin v1:master
                `}
            />
            <X.P>
                最后来到之前的开发目录，拉取最新的`master`分支。这步操作实际上并没有改变文件内容，只是多了提交记录。
            </X.P>
            <X.CodeBlock
                language="bash"
                code={`
                cd path/to/work_dir
                git pull origin master
                `}
            />
        </>
    );
}
