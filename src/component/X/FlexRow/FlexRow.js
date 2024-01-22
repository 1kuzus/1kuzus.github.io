import './FlexRow.css';

export default function FlexRow(props) {
    const {children, width, gap, justifyContent, flex1} = props;
    return (
        <div className={`x-flexrow${flex1 ? ' flex1' : ''}`} style={{width, gap, justifyContent}}>
            {children}
        </div>
    );
}
