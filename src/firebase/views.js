import database from '.';
import {ref, get, set, update, increment} from 'firebase/database';

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
    return update(pathRef, {views: increment(1)});
}
