import L from '../Line/Line';
import {isStringOrStringArray} from 'src/utils/utils';
import './Table.css';

export default function Table(props) {
    const {fromText, fromData, tableStyle, children} = props;
    const data =
        fromData ||
        (fromText &&
            fromText
                .trim()
                .split('\n')
                .map((tr) =>
                    tr
                        .trim()
                        //Table组件如果通过fromText传入数据，则用单引号(')代替反引号(`)功能，以避免与模板字符串冲突
                        .replace(/'/g, '`')
                        .split('|')
                        .map((td) => td.trim())
                ));
    const {align = '', thead = 'row', width = []} = tableStyle || {};
    return (
        <div className="x-table-wrapper">
            <table className="x-table">
                <tbody>
                    {data
                        ? data.map((tr, tr_index) => (
                              <tr key={tr_index}>
                                  {tr.map((td, td_index) => {
                                      const child = isStringOrStringArray(td) ? <L>{td}</L> : td;
                                      const fmt = align[td_index];
                                      const className = fmt === 'l' || fmt === 'r' ? 'x-cell-align-' + fmt : null;
                                      const w = width[td_index] && tr_index === 0 ? width[td_index] : null;
                                      return (tr_index === 0 && (thead === 'all' || thead === 'row')) ||
                                          (td_index === 0 && (thead === 'all' || thead === 'column')) ? (
                                          <th key={td_index} className={className} width={w}>
                                              {child}
                                          </th>
                                      ) : (
                                          <td key={td_index} className={className} width={w}>
                                              {child}
                                          </td>
                                      );
                                  })}
                              </tr>
                          ))
                        : children}
                </tbody>
            </table>
        </div>
    );

    if (0 && data)
        <div className="x-table-wrapper">
            <table className="x-table">
                <tbody>
                    {fromData.map((tr, tr_index) => (
                        <tr key={tr_index}>
                            {tr.map((td, td_index) => {
                                const child = isStringOrStringArray(td) ? <P>{td}</P> : td;
                                return tr_index ? <td key={td_index}>{child}</td> : <th key={td_index}>{child}</th>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>;
    console.log(data);
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
    if (fromData)
        return (
            <div className="x-table-wrapper">
                <table className="x-table">
                    <tbody>
                        {fromData.map((tr, tr_index) => (
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
