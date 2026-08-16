import './FlexRow.css';

export function FlexRow(props) {
    const {children, gap, minWidth, justifyContent, alignItems, flex1} = props;
    return (
        <div className="x-flexrow-wrapper">
            <div className={`x-flexrow${flex1 ? ' flex1' : ''}`} style={{gap, minWidth, justifyContent, alignItems}}>
                {children}
            </div>
        </div>
    );
}

export function FlexCol(props) {
    const {children} = props;
    return <div className="x-flexcol">{children}</div>;
}
