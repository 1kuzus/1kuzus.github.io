import './Image.css';

export default function Image(props) {
    const {invertInDarkTheme, ...rest} = props;
    //todo: 做预览的时候记得加上禁止预览的选择
    return (
        <div className={`x-image-wrapper${invertInDarkTheme ? ' x-image-invert' : ''}`}>
            <img alt="img" loading="lazy" {...rest} />
        </div>
    );
}
