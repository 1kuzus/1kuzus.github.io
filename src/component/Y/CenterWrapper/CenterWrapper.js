import './CenterWrapper.css';

export default function CenterWrapper(props) {
    const {id, children} = props;
    return (
        <div id={id} className="y-center-wrapper">
            {children}
        </div>
    );
}
