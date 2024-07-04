import Contents from 'src/component/Contents/Contents';
import Sidebar from 'src/component/Sidebar/Sidebar';
import {resetOliIndex} from 'src/component/X/ListItem';
import './layout.css';

// export function sgetData() {
//     const fs = require('fs');
//     const f = fs.readFileSync('src/app/_archives.js', 'utf-8');
//     return {
//         testnodes: [
//             {
//                 textContent: 'test1',
//                 offsetTop: f,
//             },
//             {
//                 textContent: 'test2',
//                 offsetTop: 100,
//             },
//             {
//                 textContent: 'test3',
//                 offsetTop: 1,
//             },
//         ],
//     };
// }
// import {Children} from 'react';
export default function BlogLayout(props) {
    // const getchildtree = (childrenReact) => {
    //     const children = Children.toArray(childrenReact);
    //     if (children.length === 0) {
    //         return [];
    //     }
    //     return children.map((child) => {
    //         return {
    //             name: child.type.name,
    //             children: getchildtree(child.props.children),
    //         };
    //     });
    // };
    // const data = sgetData();
    const {children} = props;
    // console.log(params);
    // console.log(Children.count(children));
    // console.log(children.props.children);
    // // console.log(getchildtypenamerecursive(children))
    resetOliIndex(0);
    return (
        <div id="blog-layout">
            <div id="main">{children}</div>
            <Sidebar />
            <Contents />
        </div>
    );
}
