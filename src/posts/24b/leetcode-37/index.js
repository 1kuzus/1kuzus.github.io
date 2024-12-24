import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.HighlightBlock>
                <X.P>原题链接：@解数独[https://leetcode.cn/problems/sudoku-solver/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>练习一下位运算和DFS。注意这个题目找到唯一解之后，就要通过`halt`判断终止，在回溯时直接返回，否则会把填好的数值改回成`.`。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                class Solution {
                public:
                    int visr[9],visc[9],viss[9];
                    int rc2s(int r,int c){return r/3*3+c/3;}//行列号转宫号
                    int nxtr(int r,int c){return c!=8?r:r+1;}
                    int nxtc(int r,int c){return c!=8?c+1:0;}
                    void vis(int r,int c,int x)
                    {
                        visr[r]|=(1<<x);
                        visc[c]|=(1<<x);
                        viss[rc2s(r,c)]|=(1<<x);
                        return;
                    }
                    void erase(int r,int c,int x)
                    {
                        visr[r]&=511^(1<<x);
                        visc[c]&=511^(1<<x);
                        viss[rc2s(r,c)]&=511^(1<<x);
                        return;
                    }
                    bool halt=false;
                    void dfs(vector<vector<char>>& board,int r,int c)
                    {
                        if(r>8) halt=true;
                        if(halt) return;
                        if(board[r][c]!='.')
                        {
                            dfs(board,nxtr(r,c),nxtc(r,c));
                            return;
                        }
                        int valid=511^(visr[r]|visc[c]|viss[rc2s(r,c)]);
                        for(int x=0;valid;x++,valid>>=1)
                        {
                            if(valid&1)
                            {
                                board[r][c]=x+'0'+1;
                                vis(r,c,x);
                                dfs(board,nxtr(r,c),nxtc(r,c));
                                if(halt) return;//如果回溯时算法已经停止，则退出程序
                                board[r][c]='.';
                                erase(r,c,x);
                            }
                        }
                    }
                    void solveSudoku(vector<vector<char>>& board) {
                        for(int r=0;r<9;r++)
                        {
                            for(int c=0;c<9;c++)
                            {
                                if(board[r][c]=='.') continue;
                                int x=board[r][c]-'0'-1;
                                vis(r,c,x);
                            }
                        }
                        dfs(board,0,0);
                        return;
                    }
                };
                `}
            />
        </>
    );
}
