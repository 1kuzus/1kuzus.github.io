import NextLink from 'next/link';
import './Link.css';

export default function Link(props) {
    const {href, active, children} = props;
    return (
        <NextLink href={href} className={`link${active ? ' active' : ''}`}>
            {children}
        </NextLink>
    );
}
