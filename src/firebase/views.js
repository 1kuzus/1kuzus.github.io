import database from '.';
import {ref, get, set, update, increment, onValue} from 'firebase/database';

export async function getViews(path, isDev) {
    const refPath = isDev ? 'test-dev' : path.replace(/\//g, '_');
    const viewsRef = ref(database, refPath + '/views');
    const viewsSnapshot = await get(viewsRef);
    if (!viewsSnapshot.exists()) {
        await set(viewsRef, 0);
        return 1;
    }
    return viewsSnapshot.val() + 1;
}

export function increaseViews(path, isDev) {
    const refPath = isDev ? 'test-dev' : path.replace(/\//g, '_');
    const pathRef = ref(database, refPath);
    update(pathRef, {views: increment(1)});
}

export function viewsOnValue(path, isDev, callback) {
    const refPath = isDev ? 'test-dev' : path.replace(/\//g, '_');
    const viewsRef = ref(database, refPath + '/views');
    // 返回值为取消订阅函数
    return onValue(viewsRef, (viewsSnapshot) => {
        const views = viewsSnapshot.val();
        console.log('onvalue', views);
        callback(views);
    });
}
