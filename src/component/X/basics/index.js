import {useLayoutEffect, useRef} from 'react';
import {useGlobalContext} from 'src/context/GlobalContext';
import './index.css';

export function Title(props) {
    const {children} = props;
    useLayoutEffect(() => {
        document.title = children;
    }, [children]);
    return <h1 className="x-title">{children}</h1>;
}

export function H1(props) {
    const {href, excludeFromContents, children} = props;
    const h1Ref = useRef();
    const {setTitleNodeRefs, removeTitleNodeRefs} = useGlobalContext();
    useLayoutEffect(() => {
        if (excludeFromContents) return;
        setTitleNodeRefs((prev) => [...prev, h1Ref]);
        return () => removeTitleNodeRefs(h1Ref);
    }, [children, excludeFromContents]);
    return (
        <h2 className="x-h1" ref={h1Ref}>
            {href ? (
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            ) : (
                children
            )}
        </h2>
    );
}

export function H2(props) {
    const {href, excludeFromContents, children} = props;
    const h2Ref = useRef();
    const {setTitleNodeRefs, removeTitleNodeRefs} = useGlobalContext();
    useLayoutEffect(() => {
        if (excludeFromContents) return;
        setTitleNodeRefs((prev) => [...prev, h2Ref]);
        return () => removeTitleNodeRefs(h2Ref);
    }, [children, excludeFromContents]);
    return (
        <h3 className="x-h2" ref={h2Ref}>
            {href ? (
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            ) : (
                children
            )}
        </h3>
    );
}

export function H3(props) {
    const {href, children} = props;
    return (
        <h4 className="x-h3">
            {href ? (
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            ) : (
                children
            )}
        </h4>
    );
}

export function Br() {
    return <div className="x-br" />;
}

export function Divider() {
    return <div className="x-divider" />;
}
