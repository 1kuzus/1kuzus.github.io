'use client';
import NextImage from 'next/image';
import {usePathname} from 'next/navigation';
import './Image.css';

const postImages = require.context('../../../posts', true, /\.(png|jpe?g|gif|webp|svg)$/i);

export default function Image(props) {
    const {src, alt, width, themeAdaptive} = props;
    const pathname = usePathname();
    return (
        <NextImage
            className={`x-image${themeAdaptive ? ' x-image-invert' : ''}`}
            src={postImages('.' + pathname + src)}
            alt={alt || 'image'}
            style={{width: width, height: 'auto'}}
        />
    );
}
