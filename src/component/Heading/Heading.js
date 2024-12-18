import './heading.css';

// export function H1(props) {
//     const {children} = props;
//     return <h2 className="y-h1">{children}</h2>;
// }

// export function H2(props) {
//     const {children} = props;
//     return <h3 className="y-h2">{children}</h3>;
// }

export default function Heading(props) {
    const {children, level = 1} = props;
    if (level === 1) {
        return <h2 className="heading-h1">{children}</h2>;
    } else if (level === 2) {
        return <h3 className="heading-h2">{children}</h3>;
    }
}
