import './FlexRow.css';

export default function FlexRow(props) {
    const {children, width} = props;
    return (
        <div className="x-flexrow" style={{width}}>
            {children}
        </div>
    );
}
