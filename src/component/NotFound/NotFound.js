import './NotFound.css';

export default function Homepage() {
    return (
        <div id="notfound">
            <img alt="img" src={require('./cry.gif')} />
            <div id="notfound-404">404</div>
            <div id="notfound-text">Page Not Found</div>
        </div>
    );
}
