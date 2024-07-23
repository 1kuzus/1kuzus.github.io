import Y from 'src/component/Y';
import Sidebar from 'src/component/Sidebar/Sidebar';
import {resetOliIndex} from 'src/component/X/ListItem';
import './layout.css';

export default function BlogLayout(props) {
    const {children} = props;
    resetOliIndex(0);
    return (
        <div id="blog-layout">
            <Y.CenterWrapper id="main">{children}</Y.CenterWrapper>
            <Sidebar />
        </div>
    );
}
