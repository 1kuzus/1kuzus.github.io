import {XParser} from '../Paragraph';
import {isStringOrStringArray} from 'src/utils/utils';
import './index.css';

export function Uli(props) {
    const {children} = props;
    return (
        <div className="x-uli">
            <div className="x-uli-marker">
                <div className="x-uli-marker-dot" />
            </div>
            <div className="x-uli-content-wrapper">
                {isStringOrStringArray(children) ? (
                    <p dangerouslySetInnerHTML={{__html: XParser(children)}} />
                ) : (
                    children
                )}
            </div>
        </div>
    );
}

export function Oli(props) {
    const {reset, children} = props;
    return (
        <div className={`x-oli${reset ? ' x-oli-reset' : ''}`}>
            <div className="x-oli-number" />
            <div className="x-oli-content-wrapper">
                {isStringOrStringArray(children) ? (
                    <p dangerouslySetInnerHTML={{__html: XParser(children)}} />
                ) : (
                    children
                )}
            </div>
        </div>
    );
}
