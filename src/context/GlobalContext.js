'use client';
import {useState, createContext, useContext} from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export const GlobalProvider = (props) => {
    const {children} = props;

    //用于侧栏显示/隐藏
    const [showSidebar, setShowSidebar] = useState(false);

    //用于目录
    const [titleNodeRefs, setTitleNodeRefs] = useState([]);
    const removeTitleNodeRefs = (ref) => {
        setTitleNodeRefs((prev) => prev.filter((r) => r !== ref));
    };

    const value = {
        showSidebar,
        setShowSidebar,
        setTitleNodeRefs,
        removeTitleNodeRefs,
        titleNodes: titleNodeRefs
            .map((r) => r.current)
            .filter((i) => i)
            .sort((i, j) => i.offsetTop - j.offsetTop),
    };
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
