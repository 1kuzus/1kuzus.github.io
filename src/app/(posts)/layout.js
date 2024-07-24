import Y from 'src/component/Y';
import Sidebar from 'src/component/Sidebar/Sidebar';
import {resetOliIndex} from 'src/component/X/ListItem';
import './layout.css';

export default function PostLayout(props) {
    const {children} = props;
    resetOliIndex(0);
    return (
        <div id="post-layout">
            <Y.CenterWrapper id="main">{children}</Y.CenterWrapper>
            <Sidebar />
        </div>
    );
}
