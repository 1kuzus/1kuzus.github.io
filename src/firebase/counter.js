import database from '.';
import {ref, child, get, set, update, increment, onValue} from 'firebase/database';

const isDev = process.env.NODE_ENV === 'development';
const pathRef = (path) => ref(database, path.replace(/\//g, '_'));
const fieldRef = (path, field) => child(pathRef(path), field);

function increaseCount(path, field) {
    return update(pathRef(path), {[field]: increment(1)});
}

function onCountChange(path, field, callback) {
    return onValue(fieldRef(path, field), (snapshot) => {
        callback(snapshot.exists() ? snapshot.val() : 0);
    });
}

// views 开发环境不自增
export async function increaseViews(path) {
    if (isDev) {
        const viewsRef = fieldRef(path, 'views');
        const snapshot = await get(viewsRef);
        if (!snapshot.exists()) set(viewsRef, 1);
        return;
    }
    increaseCount(path, 'views');
}

export const increaseLikes = (path) => increaseCount(path, 'likes');
export const onViewsChange = (path, callback) => onCountChange(path, 'views', callback);
export const onLikesChange = (path, callback) => onCountChange(path, 'likes', callback);
