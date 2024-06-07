'use client';
import NextImage from 'next/image';
import {usePathname} from 'next/navigation';
import './Image.css';

export default function Image(props) {
    const pathname = usePathname();
    const {src, width, center, invertInDarkTheme, ...rest} = props;
    //todo: 做预览的时候记得加上禁止预览的选择
    return (
        <div
            className={`x-image-wrapper${center ? ' x-image-center' : ''}${invertInDarkTheme ? ' x-image-invert' : ''}`}
        >
            <NextImage
                src={require('src/assets/images' + pathname + src)}
                alt="img"
                style={{width: width, height: 'auto'}}
                {...rest}
            />
        </div>
    );
}
