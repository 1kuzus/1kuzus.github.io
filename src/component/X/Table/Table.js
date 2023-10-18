import './Table.css';

export default function Table(props) {
    const {fasttext, children} = props;

    if (fasttext) {
        const trs = fasttext.trim().split('\n');
        return (
            <table className="x-table" cellSpacing="0">
                <tbody>
                    {trs.map((tr, tr_idx) => (
                        <tr key={tr_idx}>
                            {tr
                                .trim()
                                .split('|')
                                .map((td, td_idx) =>
                                    tr_idx ? <td key={td_idx}>{td}</td> : <th key={td_idx}>{td}</th>
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
