import Contents from 'src/component/Contents/Contents';
import Sidebar from 'src/component/Sidebar/Sidebar';
import './layout.css';

export default function BlogLayout(props) {
    const {children} = props;
    return (
        <div id="blog-layout">
            <div id="main">{children}</div>
            <Sidebar />
            <Contents />
        </div>
    );
}
