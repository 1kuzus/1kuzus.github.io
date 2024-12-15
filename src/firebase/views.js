import firestore from '.';
import {doc, updateDoc, increment, getDoc} from 'firebase/firestore';

export async function getViews() {
    const viewsRef = doc(firestore, 'views', 'test');
    const docSnap = await getDoc(viewsRef);
    if (docSnap.exists()) return docSnap.data().count;
    return -1;
}

export function increaseViews() {
    const viewsRef = doc(firestore, 'views', 'test');
    return updateDoc(viewsRef, {
        count: increment(1),
    });
}
