import * as Basics from './basics';
import CodeBlock from './CodeBlock/CodeBlock';
import FlexRow from './FlexRow/FlexRow';
import Formula from './Formula/Formula';
import HighlightBlock from './HighlightBlock/HighlightBlock';
import Image from './Image/Image';
import * as ListItem from './ListItem';
import P from './Paragraph/Paragraph';
import Table from './Table/Table';

const X = {
    ...Basics,
    CodeBlock,
    FlexRow,
    Formula,
    HighlightBlock,
    Image,
    ...ListItem,
    P,
    Table,
};

export default X;
