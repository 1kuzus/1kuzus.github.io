import Sidebar from 'src/component/Sidebar/Sidebar';
import {resetOliIndex} from 'src/component/X/ListItem';
import './layout.css';

export default function BlogLayout(props) {
    const {children} = props;
    resetOliIndex(0);
    return (
        <div id="blog-layout">
            <div id="main">{children}</div>
            <Sidebar />
        </div>
    );
}
