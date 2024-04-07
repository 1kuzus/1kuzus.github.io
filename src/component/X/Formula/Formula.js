import Katex from 'katex';
import './Formula.css';

export default function Formula(props) {
    const {text = ''} = props;
    const renderedText = Katex.renderToString(text, {
        output: 'html',
        strict: false,
    });
    return <div className="x-formula" dangerouslySetInnerHTML={{__html: renderedText}} />;
}
