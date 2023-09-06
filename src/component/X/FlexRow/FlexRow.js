import './FlexRow.css';

export default function FlexRow(props) {
    const {children, width, gap} = props;
    return (
        <div className="x-flexrow" style={{width, gap}}>
            {children}
        </div>
    );
}
