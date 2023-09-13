import './BlogWrapper.css';

let oliIdx = 0;
export function addOliIdx() {
    return ++oliIdx;
}
export function setOliIdx(idx) {
    return (oliIdx = idx);
}

export default function BlogWrapper(props) {
    const {children} = props;
    oliIdx = 0;
    return <div className="x-blogwrapper">{children}</div>;
}
