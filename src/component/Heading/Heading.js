import './Heading.css';

export default function Heading(props) {
    const {children, level = 1} = props;
    if (level === 1) {
        return <h2 className="heading-h1">{children}</h2>;
    } else if (level === 2) {
        return <h3 className="heading-h2">{children}</h3>;
    }
}
