import {useRoutes} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalContext';
import BlogLayout from './component/BlogLayout/BlogLayout';
import Header from './component/Header/Header';
import Homepage from './component/Homepage/Homepage';
import NotFound from './component/NotFound/NotFound';
import {elements} from './blogs/categories';
import 'prismjs';
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
        element: <BlogLayout>{element}</BlogLayout>,
    })),
    {
        path: '*',
        element: <NotFound />,
    },
];

function App() {
    return (
        <GlobalProvider>
            <Header />
            {useRoutes(router)}
        </GlobalProvider>
    );
}

export default App;
