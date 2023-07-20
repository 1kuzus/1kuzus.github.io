import Homepage from './component/Homepage/Homepage';
import Header from './component/Header/Header';

import {useRoutes} from 'react-router-dom';
import './App.css';

import Blog1 from '../src/blogs/b1-blogname'
import Blog2 from '../src/blogs/b2-blogname2'

const router = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/blogname',
        element: <Blog1 />,
    },
    {
        path: '/blogname2',
        element: <Blog2 />,
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
