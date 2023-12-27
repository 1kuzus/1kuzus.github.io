import './Table.css';

export default function Table(props) {
    const {fromText, children} = props;
    if (fromText) {
        const trs = fromText.trim().split('\n');
        return (
            <table className="x-table" cellSpacing="0">
                <tbody>
                    {trs.map((tr, tr_index) => (
                        <tr key={tr_index}>
                            {tr
                                .trim()
                                .split('|')
                                .map((td, td_index) =>
                                    tr_index ? <td key={td_index}>{td}</td> : <th key={td_index}>{td}</th>
                                )}
                        </tr>
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
