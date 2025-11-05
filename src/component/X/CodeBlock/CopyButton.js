'use client';
import {useState} from 'react';
import {CopyIcon, SuccessfullyCopiedIcon} from 'src/assets/svgs';

export default function CopyButton(props) {
    const {className, text} = props;
    const [isCopied, setIsCopied] = useState(false);
    return (
        <button
            className={className}
            onClick={() => {
                if (isCopied) return;
                navigator.clipboard.writeText(text).then(() => {
                    // console.log('Copied!');
                    setIsCopied(true);
                    setTimeout(() => {
                        setIsCopied(false);
                    }, 2000);
                });
            }}
        >
            {isCopied ? <SuccessfullyCopiedIcon /> : <CopyIcon />}
        </button>
    );
}
