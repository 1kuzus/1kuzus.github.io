import Sidebar from 'src/component/Sidebar/Sidebar';
import CenterWrapper from 'src/component/CenterWrapper/CenterWrapper';
import './layout.css';

export default function SlugLayout({children}) {
    return (
        <div id="post-layout">
            <CenterWrapper id="main">{children}</CenterWrapper>
            <Sidebar />
        </div>
    );
}
