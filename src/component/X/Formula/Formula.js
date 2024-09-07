import Katex from 'katex';
import './Formula.css';

export default function Formula(props) {
    const {text = '', alignLeft} = props;
    const renderedText = Katex.renderToString(text, {
        output: 'html',
        strict: false,
    });
    return (
        <div
            className={`x-formula${alignLeft ? ' x-formula-left' : ''}`}
            dangerouslySetInnerHTML={{__html: renderedText}}
        />
    );
}
