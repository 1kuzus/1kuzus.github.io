import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>单射</X.H1>
            <X.P>函数$f$是单射当且仅当：若$f(a)=f(b)$，则$a=b$。</X.P>
            <X.Image src="in.png" width="200px" filterDarkTheme />
            <X.H1>满射</X.H1>
            <X.P>函数$f$是满射当且仅当：对于任意$y$，存在$x$使得$f(x)=y$。</X.P>
            <X.Image src="sur.png" width="200px" filterDarkTheme />
            <X.H1>双射</X.H1>
            <X.P>函数$f$是双射当且仅当：$f$既是单射又是满射。</X.P>
            <X.P>或者：对于任意$y$，存在唯一的$x$使得$f(x)=y$。</X.P>
            <X.Image src="bi.png" width="200px" filterDarkTheme />
        </>
    );
}
