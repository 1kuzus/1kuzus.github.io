import database from '.';
import {ref, get, set, update, increment, onValue} from 'firebase/database';

export async function getLikes(path) {
    const refPath = path.replace(/\//g, '_');
    const likesRef = ref(database, refPath + '/likes');
    const likesSnapshot = await get(likesRef);
    if (!likesSnapshot.exists()) {
        await set(likesRef, 0);
        return 0;
    }
    return likesSnapshot.val();
}

export async function increaseLikes(path) {
    const refPath = path.replace(/\//g, '_');
    const pathRef = ref(database, refPath);
    return update(pathRef, {likes: increment(1)});
}

export function onLikesChange(path, callback) {
    const refPath = path.replace(/\//g, '_');
    const likesRef = ref(database, refPath + '/likes');
    // 返回值为取消订阅函数
    return onValue(likesRef, (likesSnapshot) => {
        const likes = likesSnapshot.val();
        callback(likes);
    });
}
