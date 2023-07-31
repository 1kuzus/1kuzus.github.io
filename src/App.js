import Homepage from './component/Homepage/Homepage';
import Header from './component/Header/Header';

import {useRoutes} from 'react-router-dom';
import './App.css';

import Blog1 from './blogs/b1-blogname';
import Blog2 from './blogs/b2-blogname2';
import SideBar from './component/SideBar/SideBar';

const router = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/blogname',
        element: (
            <>
                <SideBar />
                <Blog1 />
            </>
        ),
    },
    {
        path: '/blogname2',
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
