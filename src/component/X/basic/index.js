import './index.css'

export function Title(props) {
    const {children} = props;
    return <h1 className="x-title">{children}</h1>;
}
export function H1(props) {
    const {children} = props;
    return <h2 className="x-h1">{children}</h2>;
}
export function H2(props) {
    const {children} = props;
    return <h3 className="x-h2">{children}</h3>;
}
export function H3(props) {
    const {children} = props;
    return <h4 className="x-h3">{children}</h4>;
}
