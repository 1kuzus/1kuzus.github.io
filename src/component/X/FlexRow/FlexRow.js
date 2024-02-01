import './FlexRow.css';

export default function FlexRow(props) {
    const {children, width, gap, justifyContent, alignItems, flex1} = props;
    return (
        <div className={`x-flexrow${flex1 ? ' flex1' : ''}`} style={{width, gap, justifyContent, alignItems}}>
            {children}
        </div>
    );
}
