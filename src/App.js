import Homepage from './component/Homepage/Homepage';
import Testblog from './component/Testblog/Testblog';
import Header from './component/Header/Header';

import {useRoutes} from 'react-router-dom';
import './App.css';

import Blog1 from '../src/blogs/b1-blogname'

const router = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/blogname',
        element: <Testblog />,
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
