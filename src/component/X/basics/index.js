import './index.css';

export function Title(props) {
    const {children} = props;
    return <h1 className="x-title">{children}</h1>;
}
export function H1(props) {
    const {children} = props;
    return <h2 className="x-h1">{children}</h2>;
}
export function H2(props) {
    const {children} = props;
    return <h3 className="x-h2">{children}</h3>;
}
export function H3(props) {
    const {children} = props;
    return <h4 className="x-h3">{children}</h4>;
}
export function P(props) {
    /*
        `content`  行内高亮
        *content*  加粗
        @text#url@ 超链接
    */
    const {children, highlightBackground} = props;

    if (highlightBackground && !['golden', 'red'].includes(highlightBackground)) {
        throw new Error('X.P props <highlightBackground> should be a value in ["golden", "red"]');
    }

    let htmlContent = Array.isArray(children) ? children.join('') : children;

    htmlContent = htmlContent.replace(/ /g, '');
    htmlContent = htmlContent.replace(/</g, '&#60;').replace(/>/g, '&#62;');
    htmlContent = htmlContent.replace(/\\\\/g, '&#92;');
    htmlContent = htmlContent.replace(/\\`/g, '&#96;');
    htmlContent = htmlContent.replace(/\\\*/g, '&#42;');
    htmlContent = htmlContent.replace(/\\@/g, '&#64;');
    htmlContent = htmlContent.replace(/\\n/g, '<br/>');
    htmlContent = htmlContent.replace(/`(.*?)`/g, '<span class="x-inline-highlight">$1</span>');
    htmlContent = htmlContent.replace(/\*(.*?)\*/g, '<span class="x-inline-strong">$1</span>');
    htmlContent = htmlContent.replace(/@(.*?)\[(.*?)\]@/g, '<a href="$2" target="_blank" class="x-inline-link">$1</a>');

    return (
        <p
            className={`x-p${highlightBackground ? ' highlight-p highlight-background-' + highlightBackground : ''}`}
            dangerouslySetInnerHTML={{__html: htmlContent}}
        ></p>
    );
}
