import {useRoutes} from 'react-router-dom';
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar';
import Homepage from './component/Homepage/Homepage';
import {elements} from './blogs/categories';
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
import './assets/prism.scss';
import './assets/katex.css';
import './App.css';

const router = [
    {
        path: '/',
        element: <Homepage />,
    },
    ...elements.map(({path, element}) => ({
        path,
        element: (
            <>
                <SideBar />
                {element}
            </>
        ),
    })),
    {
        path: '*',
        element: <Homepage />,
    },
];

function App() {
    return (
        <>
            <Header />
            {useRoutes(router)}
        </>
    );
}

export default App;
