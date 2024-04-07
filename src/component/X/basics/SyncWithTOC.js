'use client';
import {useLayoutEffect, useRef} from 'react';
import {useGlobalContext} from 'src/context/GlobalContext';

export default function SyncWithTOC(props) {
    const {excludeFromContents, children} = props;
    const headerRef = useRef();
    const {setTitleNodeRefs, removeTitleNodeRefs} = useGlobalContext();
    useLayoutEffect(() => {
        if (excludeFromContents) return;
        setTitleNodeRefs((prev) => [...prev, headerRef]);
        return () => removeTitleNodeRefs(headerRef);
    }, [children, excludeFromContents]);
    return <span ref={headerRef}>{children}</span>;
}
