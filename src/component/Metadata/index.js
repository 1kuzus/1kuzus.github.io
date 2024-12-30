'use client';
import {useEffect, useState} from 'react';
import {increaseViews, getViews, onViewsChange} from 'src/firebase/views';
import archives from 'src/app/_archives.json';
import './index.css';

export function HomepageViewCount() {
    const [viewCount, setViewCount] = useState(0);
    const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';
    useEffect(() => {
        const {min, floor, log} = Math;
        function animateViewCount(start, end, duration) {
            let t0 = null;
            const step = (t) => {
                if (!t0) t0 = t;
                const progress = min((t - t0) ** 0.5 / duration ** 0.5, 1);
                setViewCount(floor(progress * (end - start) + start));
                if (progress < 1) window.requestAnimationFrame(step);
            };
            window.requestAnimationFrame(step);
        }
        getViews('total', isDev).then((count) => {
            animateViewCount(0, count, floor(144 * log(count)));
            increaseViews('total', isDev);
        });
        return onViewsChange('total', isDev, (views) => setViewCount(views));
    }, []);
    return (
        <div id="homepage-view-count">
            <code className={viewCount > 0 ? '' : 'not-loaded'}>{viewCount + ' views'}</code>
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
            <code className={viewCount > 0 ? '' : 'not-loaded'}>{viewCount + ' views'}&nbsp;·&nbsp;</code>
            <code>{archives[path].time || 'longtime'}</code>
        </div>
    );
}
