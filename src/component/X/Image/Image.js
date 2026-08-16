import './Image.css';

export default function Image(props) {
    const {src, alt, width, themeAdaptive} = props;
    return (
        <img
            className={`x-image${themeAdaptive ? ' x-image-invert' : ''}`}
            src={src}
            alt={alt || 'image'}
            loading="lazy"
            decoding="async"
            style={{width: width, height: 'auto'}}
        />
    );
}
