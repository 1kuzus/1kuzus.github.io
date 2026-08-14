'use client';
import {useEffect, useState} from 'react';
import {increaseViews, onViewsChange, increaseLikes, onLikesChange} from 'src/firebase/counter';
import {HeartIcon} from 'src/assets/svgs';
import {archives} from 'src/posts-indexing';
import './index.css';

const {min, max, log, floor} = Math;

function animateCount(start, end, duration, setter) {
    let t0 = null;
    let cancelled = false;
    duration = max(duration, 100);
    const step = (t) => {
        if (cancelled) return;
        if (!t0) t0 = t;
        const progress = min((t - t0) ** 0.5 / duration ** 0.5, 1);
        setter(floor(progress * (end - start) + start));
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
    return () => {
        cancelled = true;
    };
}

function listenCount(subscribe, setter, durationFn) {
    let cancelAnim;
    let introDone = false;
    const unsubscribe = subscribe((value) => {
        if (!introDone) {
            if (value <= 0) {
                setter(0);
                return;
            }
            introDone = true;
            cancelAnim = animateCount(0, value, durationFn(value), setter);
            return;
        }
        cancelAnim && cancelAnim();
        setter(value);
    });
    return () => {
        cancelAnim && cancelAnim();
        unsubscribe();
    };
}

function listenAfter(before, subscribe, setter, durationFn) {
    let stop = () => {};
    let dead = false;
    before().then(() => {
        if (!dead) stop = listenCount(subscribe, setter, durationFn);
    });
    return () => {
        dead = true;
        stop();
    };
}

export function HomepageViewCount() {
    const [viewCount, setViewCount] = useState(null);
    useEffect(
        () =>
            listenAfter(
                () => increaseViews('total'),
                (cb) => onViewsChange('total', cb),
                setViewCount,
                (n) => floor(144 * log(n)),
            ),
        [],
    );
    return <div id="homepage-view-count">{viewCount > 0 && <code>{viewCount + ' views'}</code>}</div>;
}

export function PostMeta(props) {
    const {path} = props;
    const [viewCount, setViewCount] = useState(null);
    const [likeCount, setLikeCount] = useState(null);
    useEffect(
        () =>
            listenAfter(
                () => {
                    const article = increaseViews(path);
                    article.then(() => increaseViews('total'));
                    return article;
                },
                (cb) => onViewsChange(path, cb),
                setViewCount,
                (n) => floor(144 * log(n)),
            ),
        [path],
    );
    useEffect(
        () =>
            listenCount(
                (cb) => onLikesChange(path, cb),
                setLikeCount,
                (n) => floor(288 * log(n)),
            ),
        [path],
    );
    const parts = [];
    if (likeCount > 0) parts.push(likeCount + ' likes');
    if (viewCount > 0) parts.push(viewCount + ' views');
    if (archives[path].time) parts.push(archives[path].time);
    return (
        <div className="post-meta">
            <code>{parts.join(' · ')}</code>
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
    }, [path]);
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
                    increaseLikes(path);
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
