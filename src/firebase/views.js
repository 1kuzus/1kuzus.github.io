import database from '.';
import {ref, get, set, update, increment} from 'firebase/database';

export async function getViews(path, isDev) {
    const refPath = isDev ? 'test-dev' : path.replace(/\//g, '_');
    const viewsRef = ref(database, refPath);
    const snapshot = await get(viewsRef);
    if (!snapshot.exists()) {
        await set(viewsRef, {views: 0});
        return 1;
    }
    return snapshot.val().views + 1;
}

export function increaseViews(path, isDev) {
    const refPath = isDev ? 'test-dev' : path.replace(/\//g, '_');
    const viewsRef = ref(database, refPath);
    return update(viewsRef, {views: increment(1)});
}
