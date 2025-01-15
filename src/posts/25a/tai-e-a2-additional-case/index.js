import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.P>NJU程序分析@常量传播的Lab[https://tai-e.pascal-lab.net/pa2.html]@在仓库的测试用例中给出的都是比较简单的例子，有一些易错情况没有包括，这个Lab通过率比较低，自己也参考了一些博客改了几次，因此这里把一些易错的样例整理出来，便于调试。</X.P>
            <X.H1>易错情况</X.H1>
            <X.H1>测试样例</X.H1>
            <X.P>`MyCase.java`：</X.P>
            <X.CodeBlock
                language="java"
                code={`
                class MyCase {

                    private int m;

                    void WithParameter(int x) {
                        int a = x;
                        if (a < 0) {
                            a = 0;
                        }
                    }

                    void CantHoldInt() {
                        double a = 3.14;
                        a += 1;
                    }

                    void LvalNonVar() {
                        int a = 3;
                        this.m = a;
                    }

                    void OtherExpression() {
                        int a = 3;
                        int b = -a;
                    }

                    void DivisionByZero(int nac) {
                        int a = nac / 0;
                        int b = a % 0;
                        int c = 3 / 0;
                    }
                }
                `}
            />
            <X.P>`MyCase-constprop-expected.txt`：</X.P>
            <X.CodeBlock
                language="text"
                code={`
                -------------------- <MyCase: void <init>()> (constprop) --------------------
                [0@L1] invokespecial %this.<java.lang.Object: void <init>()>(); {}
                [1@L1] return; {}

                -------------------- <MyCase: void WithParameter(int)> (constprop) --------------------
                [0@L6] a = x; {a=NAC, x=NAC}
                [1@L7] %intconst0 = 0; {%intconst0=0, a=NAC, x=NAC}
                [2@L7] if (a < %intconst0) goto 4; {%intconst0=0, a=NAC, x=NAC}
                [3@L7] goto 6; {%intconst0=0, a=NAC, x=NAC}
                [4@L7] nop; {%intconst0=0, a=NAC, x=NAC}
                [5@L8] a = 0; {%intconst0=0, a=0, x=NAC}
                [6@L8] nop; {%intconst0=0, a=NAC, x=NAC}
                [7@L8] return; {%intconst0=0, a=NAC, x=NAC}

                -------------------- <MyCase: void CantHoldInt()> (constprop) --------------------
                [0@L13] a = 3.14; {}
                [1@L14] %doubleconst0 = 1.0; {}
                [2@L14] a = a + %doubleconst0; {}
                [3@L14] return; {}

                -------------------- <MyCase: void LvalNonVar()> (constprop) --------------------
                [0@L18] a = 3; {a=3}
                [1@L19] %this.<MyCase: int m> = a; {a=3}
                [2@L19] return; {a=3}

                -------------------- <MyCase: void OtherExpression()> (constprop) --------------------
                [0@L23] a = 3; {a=3}
                [1@L24] b = -a; {a=3, b=NAC}
                [2@L24] return; {a=3, b=NAC}

                -------------------- <MyCase: void DivisionByZero(int)> (constprop) --------------------
                [0@L28] %intconst0 = 0; {%intconst0=0, nac=NAC}
                [1@L28] a = nac / %intconst0; {%intconst0=0, nac=NAC}
                [2@L29] b = a % %intconst0; {%intconst0=0, nac=NAC}
                [3@L30] %intconst1 = 3; {%intconst0=0, %intconst1=3, nac=NAC}
                [4@L30] c = %intconst1 / %intconst0; {%intconst0=0, %intconst1=3, nac=NAC}
                [5@L30] return; {%intconst0=0, %intconst1=3, nac=NAC}
                `}
            />
        </>
    );
}
