import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/assembly-5/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>标志寄存器</X.H1>
            <X.P>标志寄存器是按位起作用的，8086CPU中没有使用标志寄存器的`1`、`3`、`5`、`12`、`13`、`14`、`15`位，这些位不具有任何含义。</X.P>
            <X.P>用来存储相关指令的某些执行结果 ; 用来为CPU执行相关指令提供行为依据 ; 用来控制CPU的相关工作方式</X.P>
            <X.Image src="fig1.jpg" width="600px" invertInDarkTheme />
            <X.Image src="fig2.jpg" width="600px" invertInDarkTheme />
            {/* todo:black white */}
            <X.H2>ZF(Zero Flag)零标志</X.H2>
            <X.HighlightBlock>
                <X.P>123</X.P>
            </X.HighlightBlock>
            {/* <X.Table
                fromText={`
                'input'|'prediction'
                'y[310]','y[311]','y[312]', ... ,'y[319]'|'pred[320]'
                'y[311]','y[312]','y[313]', ... ,'y[320]'|'pred[321]'
                'y[312]','y[313]','y[314]', ... ,'y[321]'|'pred[322]'
                ...|...
                `}
            /> */}
            <X.Table
                fromText={`
                城市|城市人口/万|123|sdfsdfsdfsdf|fsdfsdfsdf
                城sdfsdfsd|sdf城市asdasfsaf人口/万|1sdfsdf23|sf|sd
                `}
                tableStyle={{
                    align: 'llrcc',
                    // width: [200, 0, 100],
                    thead: 'row',
                }}
            />
            <X.Uli>
                <X.P>123</X.P>
                <X.P>`123`</X.P>
                <X.CodeBlock
                    language="asm8086"
                    code={`
                    mov ax,bx
                    mov cx,dx
                    `}
                />
            </X.Uli>
            <X.P>123456</X.P>
            <X.Image src="fig1.jpg"  />
        </>
    );
}
