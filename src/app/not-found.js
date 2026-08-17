import './not-found.css';

export const metadata = {
    title: '404 Not Found',
};

export default function NotFound() {
    return (
        <div id="notfound">
            <img alt="img" src="/cry.gif" />
            <code id="notfound-404">404</code>
            <code id="notfound-text">Page Not Found</code>
        </div>
    );
}
