import './Table.css';

export default function Table(props) {
    const {fromText, children} = props;
    return (
        <div className="x-table-wrapper">
            <table className="x-table">
                <tbody>
                    {fromText
                        ? fromText
                              .trim()
                              .split('\n')
                              .map((tr, tr_index) => (
                                  <tr key={tr_index}>
                                      {tr
                                          .trim()
                                          .split('|')
                                          .map((td, td_index) =>
                                              tr_index ? <td key={td_index}>{td}</td> : <th key={td_index}>{td}</th>
                                          )}
                                  </tr>
                              ))
                        : children}
                </tbody>
            </table>
        </div>
    );
}
