import L from '../Line/Line';
import './Paragraph.css';

export default function P(props) {
    const {children = ''} = props;
    return <L classNames={['x-p']}>{children}</L>;
}
