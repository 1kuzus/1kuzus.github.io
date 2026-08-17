import './Heading.css';

export default function Heading(props) {
    const {children, level = 1} = props;
    if (level === 1) {
        return <h1 className="heading-h1">{children}</h1>;
    } else if (level === 2) {
        return <h2 className="heading-h2">{children}</h2>;
    }
}
