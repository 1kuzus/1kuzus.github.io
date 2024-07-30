import {useEffect, useState} from 'react';

export default function useLocalStorage(key, initialValue) {
    const [val, setVal] = useState(() => {
        const jsonVal = localStorage.getItem(key);
        if (jsonVal != null) {
            return JSON.parse(jsonVal);
        }
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(val));
        console.log(val);
    }, [val]);

    return [val, setVal];
}
