import React from 'react';
import './Testblog.css';

export default function Testblog() {
    return (
        <div className="conta">
            <h1>使用</h1>
            <pre>
                <code class="code">
                    <View
                        className={classnames('myself_setting_popup_wrapper', {
                            myself_setting_popup_wrapper_show: isShow,
                        })}
                    >
                        <View
                            className="myself_setting_popup"
                            onClick={(evt) => {
                                evt.stopPropagation();
                            }}
                        >
                            {settleData.map((item, index) => (
                                <View
                                    className={`${
                                        index === 0 ? '' : 'ai-settle-content'
                                    }`}
                                    style={{
                                        width: '100%',
                                        paddingTop: index === 0 ? 0 : '',
                                        ...(index === 0
                                            ? {marginTop: '0'}
                                            : {}),
                                    }}
                                    key={index}
                                >
                                    <Settle settleItem={item} />
                                </View>
                            ))}
                        </View>
                    </View>
                </code>
            </pre>
        </div>
    );
}
