'use client';
import {useEffect, useState} from 'react';
import {getViews, increaseViews, onViewsChange} from 'src/firebase/views';
import {getLikes, increaseLikes, onLikesChange} from 'src/firebase/likes';
import {HeartIcon} from 'src/assets/svgs';
import archives from 'src/app/_archives.json';
import './index.css';

const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';

export function HomepageViewCount() {
    const [viewCount, setViewCount] = useState(0);
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
    const [likeCount, setLikeCount] = useState(0);
    useEffect(() => {
        getViews(path, isDev).then((count) => {
            setViewCount(count);
            increaseViews(path, isDev);
            increaseViews('total', isDev);
        });
        return onViewsChange(path, isDev, (views) => setViewCount(views));
    }, []);
    useEffect(() => {
        getLikes(path, isDev).then((count) => {
            setLikeCount(count);
        });
        return onLikesChange(path, isDev, (likes) => setLikeCount(likes));
    }, []);
    return (
        <div className="post-meta">
            <code className={likeCount > 0 ? '' : 'not-loaded'}>{likeCount + ' likes'}&nbsp;·&nbsp;</code>
            <code className={viewCount > 0 ? '' : 'not-loaded'}>{viewCount + ' views'}&nbsp;·&nbsp;</code>
            <code>{archives[path].time || 'longtime'}</code>
        </div>
    );
}

function myB64Enc(x) {
    return btoa(x);
}

function myB64Dec(y) {
    return atob(y);
}

function getLikedPosts() {
    try {
        const liked = localStorage.getItem('liked');
        return JSON.parse(liked ? myB64Dec(liked) : '[]');
    } catch (e) {
        localStorage.removeItem('liked');
        return [];
    }
}

function addLikedPost(path) {
    const likedPosts = getLikedPosts();
    if (likedPosts.includes(path)) return; // 重复检查一次
    likedPosts.push(path);
    localStorage.setItem('liked', myB64Enc(JSON.stringify(likedPosts)));
}

function isLiked(path) {
    const likedPosts = getLikedPosts();
    return likedPosts.includes(path);
}

export function LikeButton(props) {
    const {path} = props;
    const [liked, setLiked] = useState(null);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setLiked(isLiked(path));
    }, []);
    if (liked === null) return null;
    return (
        <button
            className={`like-button${liked ? ' liked' : ''}${animate ? ' animate' : ''}`}
            onClick={() => {
                if (!liked) {
                    setLiked(true);
                    addLikedPost(path);
                    increaseLikes(path, isDev);
                }
                if (!animate) {
                    setAnimate(true);
                    setTimeout(() => setAnimate(false), 800);
                }
            }}
        >
            <HeartIcon />
        </button>
    );
}
