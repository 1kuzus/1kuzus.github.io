import {cache} from 'react';

const store = cache(() => ({value: ''}));

export function setPostPath(value) {
    store().value = value;
}

export function getPostPath() {
    return store().value;
}
