import SyncWithTOC from './SyncWithTOC';
import './index.css';

export function Title(props) {
    const {children} = props;
    return <h1 className="x-title">{children}</h1>;
}

export function H1(props) {
    const {href, excludeFromContents, children} = props;
    return (
        <h2 className="x-h1">
            <SyncWithTOC excludeFromContents={excludeFromContents}>
                {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                        {children}
                    </a>
                ) : (
                    children
                )}
            </SyncWithTOC>
        </h2>
    );
}

export function H2(props) {
    const {href, excludeFromContents, children} = props;
    return (
        <h3 className="x-h2">
            <SyncWithTOC excludeFromContents={excludeFromContents}>
                {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                        {children}
                    </a>
                ) : (
                    children
                )}
            </SyncWithTOC>
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
