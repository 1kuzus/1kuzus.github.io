import {useLayoutEffect} from 'react';
import './index.css';

export function Title(props) {
    const {children} = props;
    useLayoutEffect(() => {
        document.title = children;
    }, [children]);
    return <h1 className="x-title">{children}</h1>;
}

export function H1(props) {
    const {href, children} = props;
    if (href)
        return (
            <h2 className="x-h1">
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            </h2>
        );
    return <h2 className="x-h1">{children}</h2>;
}

export function H2(props) {
    const {href, children} = props;
    if (href)
        return (
            <h3 className="x-h2">
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            </h3>
        );
    else return <h3 className="x-h2">{children}</h3>;
}

export function H3(props) {
    const {href, children} = props;
    if (href)
        return (
            <h4 className="x-h3">
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            </h4>
        );
    return <h4 className="x-h3">{children}</h4>;
}

export function Br() {
    return <div className="x-br" />;
}

export function Divider() {
    return <div className="x-divider" />;
}
