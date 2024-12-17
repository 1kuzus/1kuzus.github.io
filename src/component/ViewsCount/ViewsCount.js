'use client';
import {useEffect, useState} from 'react';
import {increaseViews, getViews} from 'src/firebase/views';
import './ViewsCount.css';

export default function ViewsCount(props) {
    const {path, homepage=false} = props;
    const [viewsCount, setViewsCount] = useState(0);
    const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';
    useEffect(() => {
        getViews(path, isDev).then((count) => {
            increaseViews(path, isDev);
            setViewsCount(count);
        });
    }, []);
    return (
        <div className="views-count">
            <span className="views-count-views">{viewsCount} Views.</span>
        </div>
    );
}
