'use client';
import NextImage from 'next/image';
import {usePathname} from 'next/navigation';
import './Image.css';

export default function Image(props) {
    const {src, alt, width, themeAdaptive} = props;
    const pathname = usePathname();
    return (
        <NextImage
            className={`x-image${themeAdaptive ? ' x-image-invert' : ''}`}
            src={require('src/posts' + pathname + src)}
            alt={alt || 'image'}
            style={{width: width, height: 'auto'}}
        />
    );
}
