import NextImage from 'next/image';
import './Image.css';

export default function Image(props) {
    const {src, alt, width, themeAdaptive} = props;
    // for []: xxx
    if (typeof src === 'string') {
        throw new Error(`[X.Image] unimplemented: external image src "${src}"`);
    }
    return (
        <NextImage
            className={`x-image${themeAdaptive ? ' x-image-invert' : ''}`}
            src={src}
            alt={alt || 'image'}
            placeholder={src.blurDataURL ? 'blur' : 'empty'}
            style={{width: width, height: 'auto'}}
        />
    );
}
