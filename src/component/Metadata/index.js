'use client';
import {useEffect, useState} from 'react';
import {increaseViews, onViewsChange, increaseLikes, onLikesChange} from 'src/firebase/counter';
import {HeartIcon} from 'src/assets/svgs';
import {archives} from 'src/posts-indexing';
import './index.css';

const {min, max, log, floor, abs} = Math;

function animateCount(start, end, duration, setter) {
    let t0 = null;
    let cancelled = false;
    duration = max(duration, 100);
    const step = (t) => {
        if (cancelled) return;
        if (!t0) t0 = t;
        const progress = min(((t - t0) / duration) ** 0.5, 1);
        setter(floor(progress * (end - start) + start));
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
    return () => {
        cancelled = true;
    };
}

function useAnimatedCount(subscribe, path, durationScale) {
    const [count, setCount] = useState(null);
    useEffect(() => {
        let shown = 0;
        let cancelAnim;
        const unsubscribe = subscribe(path, (value) => {
            cancelAnim && cancelAnim();
            cancelAnim = animateCount(shown, value, durationScale * log(max(abs(value - shown), 1)), (v) => {
                shown = v;
                setCount(v);
            });
        });
        return () => {
            cancelAnim && cancelAnim();
            unsubscribe();
        };
    }, [subscribe, path, durationScale]);
    return count;
}

export function HomepageViewCount() {
    const viewCount = useAnimatedCount(onViewsChange, 'total', 144);
    useEffect(() => {
        increaseViews('total');
    }, []);
    return <div id="homepage-view-count">{viewCount > 0 && <code>{viewCount + ' views'}</code>}</div>;
}

export function PostMeta(props) {
    const {path} = props;
    const viewCount = useAnimatedCount(onViewsChange, path, 144);
    const likeCount = useAnimatedCount(onLikesChange, path, 288);
    useEffect(() => {
        increaseViews(path);
        increaseViews('total');
    }, [path]);
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

const S = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const D = '1KUzusaGmgiLwvQANpFI9Vhl76yCeDW3YOkPH5fqdbtBZM402RXxnjScrJETo8+/=';
const encodeLiked = (s) => btoa(s).replace(/./g, (ch) => D[S.indexOf(ch)]);
const decodeLiked = (s) => atob(s.replace(/./g, (ch) => S[D.indexOf(ch)]));

function getLikedPosts() {
    try {
        const liked = localStorage.getItem('liked');
        return JSON.parse(liked ? decodeLiked(liked) : '[]');
    } catch {
        localStorage.removeItem('liked');
        return [];
    }
}

function addLikedPost(path) {
    const likedPosts = getLikedPosts();
    if (likedPosts.includes(path)) return; // 重复检查一次
    likedPosts.push(path);
    localStorage.setItem('liked', encodeLiked(JSON.stringify(likedPosts)));
}

export function LikeButton(props) {
    const {path} = props;
    const [liked, setLiked] = useState(null);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setLiked(getLikedPosts().includes(path));
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
