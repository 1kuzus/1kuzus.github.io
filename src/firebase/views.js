import firestore from '.';
import {doc, getDoc, setDoc, updateDoc, increment} from 'firebase/firestore';

export async function getViews(path, isDev) {
    const viewsRef = doc(firestore, 'views', isDev ? 'test-dev' : path.replace(/\//g, '_'));
    const docSnap = await getDoc(viewsRef);
    if (docSnap.exists()) return docSnap.data().count + 1;
    await setDoc(viewsRef, {count: 0});
    return 1;
}

export function increaseViews(path, isDev) {
    const viewsRef = doc(firestore, 'views', isDev ? 'test-dev' : path.replace(/\//g, '_'));
    return updateDoc(viewsRef, {
        count: increment(1),
    });
}
