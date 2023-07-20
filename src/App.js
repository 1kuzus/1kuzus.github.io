import Homepage from './pages/Homepage';
import Testblog from './component/Testblog/Testblog';
import Header from './component/Header/Header';

import {useRoutes, BrowserRouter} from 'react-router-dom';
import './App.css';

const router = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/list',
        element: <Testblog />,
    },
    // {
    //     path: '/',
    //     element: <Layout />,
    //     children: [
    //         {
    //             path: 'dashboard',
    //             element: withLoadingComponent(<Dashboard />),
    //         },
    //         {
    //             path: 'content',
    //             element: withLoadingComponent(<Content />),
    //         },
    //     ],
    // },
    // {
    //     path: '*',
    //     element: <Navigate to="/dashboard" />,
    // },
];

function App() {
    return <>
    <Header></Header>
    {useRoutes(router)}
    </>;
}

export default App;
