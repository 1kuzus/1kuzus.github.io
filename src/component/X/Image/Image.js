import './Image.css';
import postImages from './postImages';
import {getPostPath} from 'src/app/(posts)/postPathStore';

// 图片解析走两条路线
// 开发：require.context 查表换成 webpack URL，以免开发阶段需要把 src/posts 实时镜像到 public
// 线上：prebuild 同步到 public，优化打包体积

function contextLookup(key) {
    if (typeof postImages !== 'function') return null;
    try {
        return postImages(key).default.src;
    } catch {
        return null;
    }
}

function resolve(src, postPath) {
    if (typeof src !== 'string' || /^(https?:)?\/\//i.test(src)) return src;
    if (src.startsWith('/')) return contextLookup('.' + src) || src;
    return contextLookup('.' + postPath + src) || postPath + src;
}

export default function Image(props) {
    const {src, alt, width, themeAdaptive} = props;
    const url = resolve(src, getPostPath());
    return (
        <img
            className={`x-image${themeAdaptive ? ' x-image-invert' : ''}`}
            src={url}
            alt={alt || 'image'}
            loading="lazy"
            decoding="async"
            style={{width: width, height: 'auto'}}
        />
    );
}
