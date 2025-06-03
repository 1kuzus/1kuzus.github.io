'use client';
import {useEffect, useState} from 'react';
import {getViews, increaseViews, onViewsChange} from 'src/firebase/views';
import {getLikes, increaseLikes, onLikesChange} from 'src/firebase/likes';
import {HeartIcon} from 'src/assets/svgs';
import archives from 'src/app/_archives.json';
import './index.css';

const isDev = typeof window === 'undefined' || window.location.hostname !== '1kuzus.github.io';
const {min, max, log, floor} = Math;

function animateCount(start, end, duration, setter) {
    let t0 = null;
    duration = max(duration, 100);
    const step = (t) => {
        if (!t0) t0 = t;
        const progress = min((t - t0) ** 0.5 / duration ** 0.5, 1);
        setter(floor(progress * (end - start) + start));
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

export function HomepageViewCount() {
    const [viewCount, setViewCount] = useState(null);
    useEffect(() => {
        getViews('total', isDev).then((count) => {
            // setViewCount(count);
            animateCount(0, count, floor(144 * log(count)), setViewCount);
            increaseViews('total', isDev);
        });
        return onViewsChange('total', isDev, (views) => setViewCount(views));
    }, []);
    return (
        <div id="homepage-view-count">
            <code className={viewCount === null ? 'not-loaded' : ''}>{viewCount + ' views'}</code>
        </div>
    );
}

export function PostMeta(props) {
    const {path} = props;
    const [viewCount, setViewCount] = useState(null);
    const [likeCount, setLikeCount] = useState(null);
    useEffect(() => {
        getViews(path, isDev).then((count) => {
            setViewCount(count);
            animateCount(0, count, floor(144 * log(count)), setViewCount);
            increaseViews(path, isDev);
            increaseViews('total', isDev);
        });
        return onViewsChange(path, isDev, (views) => setViewCount(views));
    }, []);
    useEffect(() => {
        getLikes(path, isDev).then((count) => {
            // setLikeCount(count);
            animateCount(0, count, floor(288 * log(count)), setLikeCount);
        });
        return onLikesChange(path, isDev, (likes) => setLikeCount(likes));
    }, []);
    return (
        <div className="post-meta">
            <code className={viewCount === null || !likeCount ? 'not-loaded' : ''}>
                {likeCount + ' likes'}&nbsp;·&nbsp;
            </code>
            <code className={viewCount === null ? 'not-loaded' : ''}>{viewCount + ' views'}&nbsp;·&nbsp;</code>
            <code>{archives[path].time || 'longtime'}</code>
        </div>
    );
}

function myB64Transform(s, isEncode = true) {
    let src = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let dst = '1KUzusaGmgiLwvQANpFI9Vhl76yCeDW3YOkPH5fqdbtBZM402RXxnjScrJETo8+/=';
    if (!isEncode) [src, dst] = [dst, src];
    return s
        .split('')
        .map((ch) => dst[src.indexOf(ch)])
        .join('');
}

function myB64Enc(x) {
    let result = btoa(x);
    result = myB64Transform(result, true);
    return result;
}

function myB64Dec(y) {
    let result = myB64Transform(y, false);
    result = atob(result);
    return result;
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
    return (
        <button
            className={
                'like-button' +
                (liked === null ? ' not-loaded' : '') +
                (liked ? ' liked' : '') +
                (animate ? ' animate' : '')
            }
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
