import './CenterWrapper.css';

export default function CenterWrapper(props) {
    const {id, children} = props;
    return (
        <div id={id} className="center-wrapper">
            {children}
        </div>
    );
}
