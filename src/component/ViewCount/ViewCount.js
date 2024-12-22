'use client';
import {useEffect, useState} from 'react';
import {increaseViews, getViews, onViewsChange} from 'src/firebase/views';
import './ViewCount.css';

export default function ViewCount(props) {
    const {path} = props;
    const [viewCount, setViewCount] = useState(0);
    const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';
    const isHomepage = path === 'total';
    useEffect(() => {
        getViews(path, isDev).then((count) => {
            setViewCount(count);
            increaseViews(path, isDev);
            if (!isHomepage) increaseViews('total', isDev);
        });
        // 主页动态监听总数
        if (isHomepage) return onViewsChange('total', isDev, (views) => setViewCount(views));
    }, []);
    return (
        <div className="view-count">
            <span className="view-count-views">&nbsp;{viewCount > 0 && viewCount + ' Views.'}</span>
        </div>
    );
}
