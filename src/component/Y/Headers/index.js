import './index.css';

export function H1(props) {
    const {children} = props;
    return <h2 className="y-h1">{children}</h2>;
}

export function H2(props) {
    const {children} = props;
    return <h3 className="y-h2">{children}</h3>;
}
