import './Image.css';

export default function Image(props) {
    const {...rest} = props;
    return (
        <div className="x-img-wrapper">
            <img alt="img" {...rest}></img>
        </div>
    );
}
