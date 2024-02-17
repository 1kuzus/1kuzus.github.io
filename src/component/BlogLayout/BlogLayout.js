import {useLayoutEffect} from 'react';
import {useGlobalContext} from 'src/context/GlobalContext';
import Contents from '../Contents/Contents';
import Sidebar from '../Sidebar/Sidebar';
import './BlogLayout.css';

export default function BlogLayout(props) {
    const {children} = props;
    const {showSidebar, setShowSidebar, titleNodes, resetOliIndex} = useGlobalContext();
    resetOliIndex(0); //todo: react-like
    useLayoutEffect(() => {
        document.documentElement.scrollTo({top: 0});
        setShowSidebar(false);
    }, [children]);
    return (
        <div id="blog-layout">
            <div id="main">{children}</div>
            <div id="sidebar" className={showSidebar ? 'show-sidebar' : null}>
                <Sidebar />
            </div>
            <div
                id="sidebar-mask"
                className={showSidebar ? 'show-sidebar' : null}
                onClick={() => {
                    setShowSidebar(!showSidebar);
                }}
            />
            {titleNodes?.length ? (
                <div id="contents">
                    <Contents titleNodes={titleNodes} />
                </div>
            ) : null}
        </div>
    );
}
