import './Formula.css';
import Katex from 'katex';
import {useLayoutEffect, useRef} from 'react';
export default function Formula(props) {
    const elementRef = useRef();
    const {text} = props;

    useLayoutEffect(() => {
        Katex.render(text, elementRef.current, {
            output: 'html',
            strict: false,
        });
    }, [text]);

    return (
        <div className="x-formula" ref={elementRef}>
            {text}
        </div>
    );
}
