import X from 'src/component/X';
import styles from './imm.module.css';

export function Demo1() {
    return (
        <X.FlexRow gap="32px">
            <div className={styles['wrapper1']}>
                <h4>hover me!</h4>
                <div className={styles['content1']}>
                    <p>Hello, World!</p>
                    <p>Hello, World!</p>
                    <p>Hello, World!</p>
                    <p>Hello, World!</p>
                </div>
            </div>
            <div>
                <X.H3>HTML</X.H3>
                <X.CodeBlock
                    language="html"
                    code={`
                    <div className="wrapper">
                        <h4>hover me!</h4>
                        <div className="content">
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                        </div>
                    </div>
                    `}
                />
            </div>
            <div>
                <X.H3>CSS</X.H3>
                <X.CodeBlock
                    language="css"
                    code={`
                    #wrapper {
                        width: 240px;
                        padding: 16px 24px;
                        border-radius: 12px;
                    }
                    #content p {
                        line-height: 32px;
                    }
                    #content {
                        height: 0;
                        overflow: hidden;
                        /*不起作用*/
                        transition: height 500ms;
                    }
                    #wrapper:hover #content {
                        height: auto;
                    }
                    `}
                />
            </div>
        </X.FlexRow>
    );
}

export function Demo2() {
    return (
        <X.FlexRow gap="32px">
            <div className={styles['wrapper2']}>
                <h4>hover me!</h4>
                <div className={styles['content2']}>
                    <p>Hello, World!</p>
                    <p>Hello, World!</p>
                    <p>Hello, World!</p>
                    <p>Hello, World!</p>
                </div>
            </div>
            <div>
                <X.H3>HTML</X.H3>
                <X.CodeBlock
                    language="html"
                    code={`
                    <div className="wrapper">
                        <h4>hover me!</h4>
                        <div className="content">
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                        </div>
                    </div>
                    `}
                />
            </div>
            <div>
                <X.H3>CSS</X.H3>
                <X.CodeBlock
                    language="css"
                    code={`
                    #wrapper {
                        width: 240px;
                        padding: 16px 24px;
                        border-radius: 12px;
                    }
                    #content p {
                        line-height: 32px;
                    }
                    #content {
                        /*起始高度*/
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 500ms;
                    }
                    #wrapper:hover #content {
                        /*确保大于content最大可能高度*/
                        max-height: 600px;
                    }
                    `}
                />
            </div>
        </X.FlexRow>
    );
}

export function Demo3() {
    return (
        <X.FlexRow gap="32px">
            <div className={styles['wrapper3']}>
                <h4>hover me!</h4>
                <div className={styles['content3']}>
                    <div>
                        <p>Hello, World!</p>
                        <p>Hello, World!</p>
                        <p>Hello, World!</p>
                        <p>Hello, World!</p>
                    </div>
                </div>
            </div>
            <div>
                <X.H3>HTML</X.H3>
                <X.CodeBlock
                    language="html"
                    code={`
                <div className="wrapper">
                    <h4>hover me!</h4>
                    <div className="content">
                        <div>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                        </div>
                    </div>
                </div>
                `}
                />
            </div>
            <div>
                <X.H3>CSS</X.H3>
                <X.CodeBlock
                    language="css"
                    code={`
                    #wrapper {
                        width: 240px;
                        padding: 16px 24px;
                        border-radius: 12px;
                    }
                    #content p {
                        line-height: 32px;
                    }
                    #content {
                        display: grid;
                        grid-template-rows: 0fr;
                        transition:
                            grid-template-rows 500ms;
                    }
                    #content > div {
                        /*使子元素动画与父元素保持一致*/
                        grid-row: 1 / span 2;
                        /*overflow也设置给子元素*/
                        overflow: hidden;
                    }
                    #wrapper:hover #content {
                        grid-template-rows: 1fr;
                    }
                    `}
                />
            </div>
        </X.FlexRow>
    );
}

export function Demo4() {
    return (
        <X.FlexRow gap="32px">
            <div>
                <X.H3>不使用</X.H3>
                <div className={styles['wrapper4']}>
                    <h4>hover me!</h4>
                    <div className={styles['content4']}>
                        <div>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <X.H3>使用</X.H3>
                <div className={styles['wrapper5']}>
                    <h4>hover me!</h4>
                    <div className={styles['content5']}>
                        <div>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                            <p>Hello, World!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['flex-spacer']} />
        </X.FlexRow>
    );
}
