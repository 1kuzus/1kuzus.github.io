import {useRef, useLayoutEffect} from 'react';
import Katex from 'katex';
import './Formula.css';

export default function Formula(props) {
    const elementRef = useRef();
    const {text = ''} = props;

    useLayoutEffect(() => {
        Katex.render(text, elementRef.current, {
            output: 'html',
            strict: false,
        });
    }, [text]);

    return <div className="x-formula" ref={elementRef} />;
}
