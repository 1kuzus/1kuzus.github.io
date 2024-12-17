'use client';
import {useEffect, useState} from 'react';
import {increaseViews, getViews} from 'src/firebase/views';
import './PostMeta.css';

export default function PostMeta(props) {
    const {path} = props;
    const [viewsCount, setViewsCount] = useState(0);
    const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';
    useEffect(() => {
        getViews(path, isDev).then((count) => {
            increaseViews(path, isDev);
            setViewsCount(count);
        });
    }, []);
    return (
        <div className="x-post-meta">
            <span className="x-post-meta-views">{viewsCount} Views.</span>
        </div>
    );
}
