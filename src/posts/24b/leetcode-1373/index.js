import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.HighlightBlock>
                <X.P>原题链接：@二叉搜索子树的最大键值和[https://leetcode.cn/problems/maximum-sum-bst-in-binary-tree/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>一次DFS即可，维护四个信息：子树和、子树节点的最大值、子树节点的最大值、子树是否是合法的二叉搜索树。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                /**
                 * Definition for a binary tree node.
                 * struct TreeNode {
                 *     int val;
                 *     TreeNode *left;
                 *     TreeNode *right;
                 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
                 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
                 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
                 * };
                 */
                class Solution {
                public:
                    int ans;
                    struct INFO{
                        int sum;
                        int mx,mi;
                        bool valid;
                    };
                    INFO dfs(TreeNode *p)
                    {
                        TreeNode *l=p->left;
                        TreeNode *r=p->right;
                        int sum,mx,mi;
                        bool valid;
                        if(l==nullptr&&r==nullptr)
                        {
                            sum=mx=mi=p->val;
                            valid=true;
                        }
                        else if(l==nullptr)
                        {
                            INFO info=dfs(r);
                            sum=p->val+info.sum;
                            mx=info.mx;
                            mi=p->val;
                            valid=p->val<info.mi&&info.valid;
                        }
                        else if(r==nullptr)
                        {
                            INFO info=dfs(l);
                            sum=p->val+info.sum;
                            mx=p->val;
                            mi=info.mi;
                            valid=p->val>info.mx&&info.valid;
                        }
                        else
                        {
                            INFO il=dfs(l),ir=dfs(r);
                            sum=p->val+il.sum+ir.sum;
                            mx=ir.mx;
                            mi=il.mi;
                            valid=il.mx<p->val&&p->val<ir.mi&&il.valid&&ir.valid;
                        }
                        if(valid) ans=max(ans,sum);
                        return (INFO){sum,mx,mi,valid};
                    }
                    int maxSumBST(TreeNode* root) {
                    dfs(root);
                    return ans;
                    }
                };
                `}
            />
            <X.P>一个更简洁的做法是利用类似哨兵节点的思想，不再需要分类讨论叶子节点。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                /**
                 * Definition for a binary tree node.
                 * struct TreeNode {
                 *     int val;
                 *     TreeNode *left;
                 *     TreeNode *right;
                 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
                 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
                 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
                 * };
                 */
                #define INF 2147483647
                class Solution {
                public:
                    int ans;
                    struct INFO{
                        int sum;
                        int mx,mi;
                        bool valid;
                    };
                    INFO dfs(TreeNode *p)
                    {
                        if(p==nullptr) return (INFO){0,-INF,INF,true};
                        INFO il=dfs(p->left),ir=dfs(p->right);
                        int mx=max(p->val,ir.mx),mi=min(p->val,il.mi);
                        int sum=p->val+il.sum+ir.sum;
                        bool valid=
                            il.mx<p->val&&
                            p->val<ir.mi&&
                            il.valid&&
                            ir.valid;
                        if(valid) ans=max(ans,sum);
                        return (INFO){sum,mx,mi,valid};
                    }
                    int maxSumBST(TreeNode* root) {
                       dfs(root);
                       return ans;
                    }
                };
                `}
            />
        </>
    );
}
