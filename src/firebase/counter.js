import database from '.';
import {ref, get, set, update, increment, onValue} from 'firebase/database';

const isDev = process.env.NODE_ENV === 'development';
const pathRef = (path) => ref(database, path.replace(/\//g, '_'));
const fieldRef = (path, field) => ref(pathRef(path), field);

function increaseCount(path, field) {
    return update(pathRef(path), {[field]: increment(1)});
}

function onCountChange(path, field, callback) {
    return onValue(fieldRef(path, field), (snapshot) => {
        callback(snapshot.exists() ? snapshot.val() : 0);
    });
}

export async function increaseViews(path) {
    if (!isDev) return increaseCount(path, 'views'); // 开发阶段不自增views
    const viewsRef = fieldRef(path, 'views');
    const snapshot = await get(viewsRef);
    if (!snapshot.exists()) await set(viewsRef, 1);
}

export const increaseLikes = (path) => increaseCount(path, 'likes');
export const onViewsChange = (path, callback) => onCountChange(path, 'views', callback);
export const onLikesChange = (path, callback) => onCountChange(path, 'likes', callback);
