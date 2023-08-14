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
    const {children} = props;
    let htmlContent = Array.isArray(children) ? children.join('') : children;
    htmlContent = htmlContent.replace(/</g, '&#60;\n').replace(/>/g, '&#62;');
    // const styled = children.replace(/`(.*?)`/g, '<span class="x-inline-highlight">$1</span>');
    console.log(children);
    console.log(htmlContent);
    return <p className="x-p" dangerouslySetInnerHTML={{__html: htmlContent}}></p>;
}
