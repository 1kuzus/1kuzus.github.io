import X from 'src/component/X';
import Y from 'src/component/Y';
import Sidebar from 'src/component/Sidebar/Sidebar';
import './layout.css';

export default function PostLayout(props) {
    const {children} = props;
    return (
        <div id="post-layout">
            {X.Oli({reset: 0}) && false}
            <Y.CenterWrapper id="main">{children}</Y.CenterWrapper>
            <Sidebar />
        </div>
    );
}
