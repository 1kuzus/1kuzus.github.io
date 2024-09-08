import './FlexRow.css';

export default function FlexRow(props) {
    const {children, gap, minWidth, justifyContent, alignItems, flex1} = props;
    return (
        <div className="x-flexrow-wrapper">
            <div className={`x-flexrow${flex1 ? ' flex1' : ''}`} style={{gap, minWidth, justifyContent, alignItems}}>
                {children}
            </div>
        </div>
    );
}
