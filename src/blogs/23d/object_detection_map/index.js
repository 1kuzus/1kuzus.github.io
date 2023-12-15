import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>H1</X.H1>
            <X.H2>H2</X.H2>
            <X.HighlightBlock bgcolor="gray">
                <X.Uli>1</X.Uli>
                <X.P noMarginBottom>p</X.P>
                <X.Oli reset={2}>2</X.Oli>
                <X.P withMarginTop>p</X.P>
            </X.HighlightBlock>
            <X.FlexRow gap="32px" width="50%">
                <X.Table
                    fromText={`
                    A|B|C
                    1|2|3
                    `}
                />
                <X.Formula text="1+1=2" />
                {/* <X.Image src={require('./img.jpg')} width="100%" invertInDarkTheme/> */}
            </X.FlexRow>
        </X.BlogWrapper>
    );
}
