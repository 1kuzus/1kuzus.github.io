// import LogoIcon from '../../assets/logo.svg';
// import GithubIcon from '../../assets/github.svg';
import './Highlight.css';

export default function Hightlight(props) {
    const {children, type = 'tips'} = props;
    if (!['tips'].includes(type)) {
        throw new Error('Hightlight props <type> should be a value in ["tips", "error"]');
    }
    return <div className={'x-highlight ' + type}>{children}</div>;
}