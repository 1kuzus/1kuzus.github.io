'use client';
import {useEffect, useState} from 'react';
import {increaseViews, getViews, onViewsChange} from 'src/firebase/views';
import archives from 'src/app/_archives.json';
import './index.css';

export function HomepageViewCount() {
    const [viewCount, setViewCount] = useState(0);
    const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';
    useEffect(() => {
        // getViews('total', isDev).then((count) => setViewCount(count));
        // return onViewsChange('total', isDev, (views) => setViewCount(views));

        function animateViewCount(start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setViewCount(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        getViews('total', isDev).then((count) => animateViewCount(0, count, 1000));
        return onViewsChange('total', isDev, (views) => setViewCount(views));
    }, []);
    return (
        <div id="homepage-view-count">
            <code>{viewCount > 0 && '- ' + viewCount + ' -'}</code>
        </div>
    );
}

export function PostMeta(props) {
    const {path} = props;
    const [viewCount, setViewCount] = useState(0);
    const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';
    useEffect(() => {
        getViews(path, isDev).then((count) => {
            setViewCount(count);
            increaseViews(path, isDev);
            increaseViews('total', isDev);
        });
    }, []);
    return (
        <div className="post-meta">
            <code className={viewCount > 0 ? '' : 'not-loaded'}>{viewCount + ' Views'}&nbsp;·&nbsp;</code>
            <code>{archives[path].time || 'longtime'}</code>
        </div>
    );
}
