import './NotFound.css';

export default function Homepage() {
    return (
        <div id="notfound">
            <div id="notfound-404">
                <span id="notfound-4l">4</span>
                <img alt="img" src={require('./cry.gif')} />
                <span id="notfound-4r">4</span>
            </div>
            <div id="notfound-text">Page Not Found</div>
        </div>
    );
}
