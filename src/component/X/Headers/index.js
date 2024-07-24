import './index.css';

export function Title(props) {
    const {children} = props;
    return <h1 className="x-title">{children}</h1>;
}

export function H1(props) {
    const {href, excludeFromContents, children} = props;
    return (
        <h2 className={`x-h1${excludeFromContents ? ' exclude-from-contents' : ''}`}>
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
    return (
        <h3 className={`x-h2${excludeFromContents ? ' exclude-from-contents' : ''}`}>
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
