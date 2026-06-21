import {XParser} from '../Paragraph';
import {isStringOrStringArray} from 'src/utils/utils';
import './Table.css';

export default function Table(props) {
    const {fromText, fromData, align = '', width = [], thead = 'row', children} = props;
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
    return (
        <div className="x-table-wrapper">
            <table className="x-table">
                <tbody>
                    {data
                        ? data.map((tr, tr_index) => (
                              <tr key={tr_index}>
                                  {tr.map((td, td_index) => {
                                      const child = isStringOrStringArray(td) ? (
                                          <p dangerouslySetInnerHTML={{__html: XParser(td)}} />
                                      ) : (
                                          td
                                      );
                                      const isHeader =
                                          (tr_index === 0 && (thead === 'all' || thead === 'row')) ||
                                          (td_index === 0 && (thead === 'all' || thead === 'column'));
                                      const Tag = isHeader ? 'th' : 'td';
                                      const fmt = align[td_index];
                                      const className = fmt === 'l' || fmt === 'r' ? 'x-cell-align-' + fmt : null;
                                      const w = width[td_index] || null;
                                      return (
                                          <Tag key={td_index} className={className} width={w}>
                                              {child}
                                          </Tag>
                                      );
                                  })}
                              </tr>
                          ))
                        : children}
                </tbody>
            </table>
        </div>
    );
}
