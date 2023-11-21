import './Image.css';

export default function Image(props) {
    const {...rest} = props;
    //todo: 做预览的时候记得加上禁止预览的选择
    return (
        <div className="x-img-wrapper">
            <img alt="img" {...rest}></img>
        </div>
    );
}
