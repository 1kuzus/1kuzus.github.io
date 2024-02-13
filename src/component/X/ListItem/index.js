import {addOliIdx, setOliIdx} from 'src/component/BlogLayout/BlogLayout';
import P from '../Paragraph/Paragraph';
import './index.css';

function isStringOrStringArray(x) {
    if (typeof x === 'string') return true;
    else if (Array.isArray(x)) {
        return x.every((i) => typeof i === 'string');
    }
    return false;
}

export function Uli(props) {
    const {children} = props;
    return (
        <div className="x-uli">
            <div className="x-uli-marker">
                <div className="x-uli-marker-dot" />
            </div>
            <div className="x-uli-content-wrapper">
                {isStringOrStringArray(children) ? <P>{children}</P> : children}
            </div>
        </div>
    );
}

export function Oli(props) {
    const {reset, children} = props;
    return (
        <div className="x-oli">
            <div className="x-oli-number">{(reset !== undefined ? setOliIdx(+reset) : addOliIdx(1)) + '.'}</div>
            <div className="x-oli-content-wrapper">
                {isStringOrStringArray(children) ? <P>{children}</P> : children}
            </div>
        </div>
    );
}
