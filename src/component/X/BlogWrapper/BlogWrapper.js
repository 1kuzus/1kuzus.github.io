import {Children, useLayoutEffect} from 'react';
import Prism from 'prismjs';
import './BlogWrapper.css';

export default function BlogWrapper(props) {
    const {children} = props;
    let oliIdx = 0;
    let processedChild = Children.map(children, (child) =>
        child.type.name === 'Oli' ? (
            <div className="x-oli">
                <div className="x-oli-number">{(child.props.reset ? (oliIdx = 1) : ++oliIdx) + '.'}</div>
                {child}
            </div>
        ) : (
            child
        )
    );
    useLayoutEffect(() => {
        Prism.highlightAll();
    }, []);
    return <div className="x-blogwrapper">{processedChild}</div>;
}
