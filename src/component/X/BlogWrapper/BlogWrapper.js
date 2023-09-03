import {Children, useLayoutEffect} from 'react';
import Prism from 'prismjs';
import {Oli} from '../basics';
import './BlogWrapper.css';

export default function BlogWrapper(props) {
    const {children} = props;
    let oliIdx = 0;

    const processedChild = Children.map(children, (child) => {
        if (child.type === Oli) {
            return (
                <div className="x-oli">
                    <div className="x-oli-number">{(child.props.reset ? (oliIdx = 1) : ++oliIdx) + '.'}</div>
                    {child}
                </div>
            );
        } else return child;
    });

    useLayoutEffect(() => {
        Prism.highlightAll();
    }, []);

    return <div className="x-blogwrapper">{processedChild}</div>;
}
