import './BlogWrapper.css';
import {H1, H2} from '../basics';

let oliIdx = 0;
export function addOliIdx() {
    return ++oliIdx;
}
export function setOliIdx(idx) {
    return (oliIdx = idx);
}

function BlogContent(props) {
    const {titles} = props;
    console.log(titles);
    return <div className="x-blogcontent">{123}</div>;
}

export default function BlogWrapper(props) {
    const {children} = props;
    oliIdx = 0;

    return (
        <div className="x-blogwrapper">
            {children}
            <BlogContent
                titles={children.reduce((titles, current) => {
                    if (current.type === H1) return [...titles, {h1Name: current.props.children, h2Names: []}];
                    else if (current.type === H2) {
                        titles[titles.length - 1].h2Names.push(current.props.children);
                        return titles;
                    } else return titles;
                }, [])}
            />
        </div>
    );
}
