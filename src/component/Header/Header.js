import {useNavigate} from 'react-router-dom';
import LogoIcon from '../../assets/logo.svg';
import GithubIcon from '../../assets/github.svg';
import './Header.css';

export default function Header() {
    const navigate = useNavigate();
    return (
        <div id="header">
            <img id="header-logo" src={LogoIcon} onClick={() => navigate('/')} />
            <button onClick={()=>console.log(121)}>go to night</button>
            <a href="https://github.com/1kuzus" target="_blank">
                <div id="header-github-bg">
                    <img id="header-github" src={GithubIcon} />
                </div>
            </a>
        </div>
    );
}
