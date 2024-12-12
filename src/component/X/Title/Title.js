import './Title.css';

export default function Title(props) {
    const {children} = props;
    return <h1 className="x-title">{children}</h1>;
}
