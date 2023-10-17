import './Table.css';

export default function Table(props) {
    const {children} = props;

    if (typeof children === typeof '') {
        const trs = children.split('---');
        return (
            <table className="x-table" cellSpacing="0">
                <tbody>
                    {trs.map((tr, idx) => (
                        <tr>{tr.split('|').map((td) => (idx ? <td>{td}</td> : <th>{td}</th>))}</tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return (
        <table className="x-table" cellSpacing="0">
            <tbody>{children}</tbody>
        </table>
    );
}
