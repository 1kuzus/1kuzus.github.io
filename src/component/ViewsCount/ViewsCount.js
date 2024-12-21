'use client';
import {useEffect, useState} from 'react';
import {increaseViews, getViews, viewsOnValue} from 'src/firebase/views';
import './ViewsCount.css';

export default function ViewsCount(props) {
    const {path} = props;
    const [viewsCount, setViewsCount] = useState(0);
    const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';
    const isHomepage = path === 'total';
    useEffect(() => {
        getViews(path, isDev).then((count) => {
            setViewsCount(count);
            increaseViews(path, isDev);
            if (!isHomepage) increaseViews('total', isDev);
        });
        // 主页动态监听总数
        if (isHomepage) return viewsOnValue('total', isDev, (views) => setViewsCount(views));
    }, []);
    return (
        <div className="views-count">
            <span className="views-count-views">&nbsp;{viewsCount > 0 && viewsCount + ' Views.'}</span>
        </div>
    );
}
