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
        @text[url]@ 超链接
    */
    const {children = ''} = props;

    let htmlContent = Array.isArray(children) ? children.join('') : children;

    htmlContent = htmlContent.replace(/\\ /g, '&#160;');
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

    return <p className="x-p" dangerouslySetInnerHTML={{__html: htmlContent}} />;
}
export function Br() {
    return <div className="x-br" />;
}
export function Divider() {
    return <div className="x-divider" />;
}
export function Uli(props) {
    const {children} = props;
    return (
        <div className="x-uli">
            <div className="x-uli-marker">
                <div className="x-uli-marker-dot"></div>
            </div>
            {children}
        </div>
    );
}
//Oli将在BlogWrapper组件中完成列表序号的渲染
export function Oli(props) {
    const {children} = props;
    return <>{children}</>;
}
// export function FlexH(props) {
//     const {children,} = props;
//     return <div className="x-flex" style={{
//         flexDirection:''
//     }}>{children}</div>;
// }
