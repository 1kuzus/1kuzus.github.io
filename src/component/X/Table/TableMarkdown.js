import {Children, isValidElement} from 'react';
import './Table.css';

// for mdx-components.js
export default function TableMarkdown({children, width, thead}) {
    if (width == null && thead == null) {
        return (
            <div className="x-table-wrapper">
                <table className="x-table">{children}</table>
            </div>
        );
    }

    const widthArr = Array.isArray(width)
        ? width
        : typeof width === 'string'
          ? width
                .replace(/[[\]\s]/g, '')
                .split(',')
                .filter((w) => w !== '')
                .map(Number)
          : [];

    const trs = [];
    const collectTrs = (nodes) => {
        Children.forEach(nodes, (node) => {
            if (!isValidElement(node)) return;
            if (node.type === 'tr') trs.push(node);
            else collectTrs(node.props?.children);
        });
    };
    collectTrs(children);

    return (
        <div className="x-table-wrapper">
            <table className="x-table">
                <tbody>
                    {trs.map((tr, tr_index) => {
                        const tds = Children.toArray(tr.props.children).filter(isValidElement);
                        return (
                            <tr key={tr_index}>
                                {tds.map((td, td_index) => {
                                    const isHeader =
                                        thead != null
                                            ? (tr_index === 0 && (thead === 'all' || thead === 'row')) ||
                                              (td_index === 0 && (thead === 'all' || thead === 'column'))
                                            : td.type === 'th';
                                    const Tag = isHeader ? 'th' : 'td';
                                    const textAlign = td.props.style?.textAlign;
                                    const w = widthArr[td_index] || td.props.width || undefined;
                                    return (
                                        <Tag key={td_index} style={textAlign || w ? {textAlign, width: w} : undefined}>
                                            {td.props.children}
                                        </Tag>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
