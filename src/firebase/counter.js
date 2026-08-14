import database from '.';
import {ref, get, set, update, increment, onValue} from 'firebase/database';

const toRefPath = (path) => path.replace(/\//g, '_');

async function getCount(path, field) {
    const countRef = ref(database, toRefPath(path) + '/' + field);
    const countSnapshot = await get(countRef);
    if (!countSnapshot.exists()) {
        await set(countRef, 0);
        return 0;
    }
    return countSnapshot.val();
}

function increaseCount(path, field) {
    const pathRef = ref(database, toRefPath(path));
    return update(pathRef, {[field]: increment(1)});
}

// 返回值为取消订阅函数
function onCountChange(path, field, callback) {
    const countRef = ref(database, toRefPath(path) + '/' + field);
    return onValue(countRef, (countSnapshot) => {
        callback(countSnapshot.val());
    });
}

// views的展示值包含本次浏览即将触发的自增，因此读到的值+1
export async function getViews(path) {
    const views = await getCount(path, 'views');
    return views + 1;
}
export const increaseViews = (path) => increaseCount(path, 'views');
export const onViewsChange = (path, callback) => onCountChange(path, 'views', callback);

export const getLikes = (path) => getCount(path, 'likes');
export const increaseLikes = (path) => increaseCount(path, 'likes');
export const onLikesChange = (path, callback) => onCountChange(path, 'likes', callback);
