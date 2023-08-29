import Homepage from './component/Homepage/Homepage';
import Header from './component/Header/Header';

import {useRoutes} from 'react-router-dom';
import {useEffect} from 'react';
import './App.css';

import Blog1 from './blogs/b1-blogname';
import Blog2 from './blogs/b2-blogname2';
import SideBar from './component/SideBar/SideBar';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-bash';
//todo: 统一空行规范
const router = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/blog1',
        element: (
            <>
                <SideBar />
                <Blog1 />
            </>
        ),
    },
    {
        path: '/blog2',
        element: (
            <>
                <SideBar />
                <Blog2 />
            </>
        ),
    },
    {
        path: '*',
        element: (
            <>
                <SideBar />
                <Blog2 />
            </>
        ),
    },
];

function App() {
    return (
        <>
            <Header></Header>
            {useRoutes(router)}
        </>
    );
}

export default App;
