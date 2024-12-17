'use client';
import './PostMeta.css';
import {increaseViews, getViews} from 'src/firebase/views';
import {useEffect, useState} from 'react';

export default function PostMeta() {
    const [viewsCount, setViewsCount] = useState(0);
    useEffect(() => {
        getViews().then((count) => {
            increaseViews();
            setViewsCount(count);
        });
    }, []);
    return (
            <div className="x-post-meta">
                <span className="x-post-meta-views">Views: {viewsCount}</span>
            </div>
    );
}