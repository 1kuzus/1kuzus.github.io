import NextImage from 'next/image';
import './Image.css';

export default function Image(props) {
    const {src, alt, width, themeAdaptive} = props;
    if (typeof src === 'string') {
        // 本地图片的src在构建期均已被改写为静态import对象
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
