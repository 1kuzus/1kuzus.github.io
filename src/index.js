import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// if (window.history.scrollRestoration) {
//     window.history.scrollRestoration = 'manual';
// }

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
