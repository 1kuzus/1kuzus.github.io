import P from '../Paragraph/Paragraph';
import {isStringOrStringArray} from 'src/utils/utils';
import './Table.css';

export default function Table(props) {
    const {fromText, fromJSX, children} = props;
    if (fromText)
        return (
            <div className="x-table-wrapper">
                <table className="x-table">
                    <tbody>
                        {fromText
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
                            ))}
                    </tbody>
                </table>
            </div>
        );
    if (fromJSX)
        return (
            <div className="x-table-wrapper">
                <table className="x-table">
                    <tbody>
                        {fromJSX.map((tr, tr_index) => (
                            <tr key={tr_index}>
                                {tr.map((td, td_index) => {
                                    const child = isStringOrStringArray(td) ? <P>{td}</P> : td;
                                    return tr_index ? <td key={td_index}>{child}</td> : <th key={td_index}>{child}</th>;
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    return (
        <div className="x-table-wrapper">
            <table className="x-table">
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}
