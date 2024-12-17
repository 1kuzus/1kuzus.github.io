'use client';
import NextImage from 'next/image';
import {usePathname} from 'next/navigation';
import './Image.css';

export default function Image(props) {
    const pathname = usePathname();
    const {src, width, filterDarkTheme} = props;
    return (
        <NextImage
            className={`x-image${filterDarkTheme ? ' x-image-invert' : ''}`}
            src={require('src/posts' + pathname + src)}
            alt="img"
            style={{width: width, height: 'auto'}}
        />
    );
}
