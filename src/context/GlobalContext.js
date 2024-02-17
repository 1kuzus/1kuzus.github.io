import {useState, useRef, createContext, useContext} from 'react';

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
        setTitleNodeRefs((prev) => prev.filter((r) => r != ref));
    };

    //用于有序列表项
    const oliIndexRef = useRef(0);
    const addOliIndex = () => {
        oliIndexRef.current += 1;
        return oliIndexRef.current;
    };
    const resetOliIndex = (idx) => {
        oliIndexRef.current = idx;
        return idx;
    };

    const value = {
        showSidebar,
        setShowSidebar,
        setTitleNodeRefs,
        removeTitleNodeRefs,
        titleNodes: titleNodeRefs.map((r) => r.current).sort((i, j) => i.offsetTop - j.offsetTop),
        addOliIndex,
        resetOliIndex,
    };
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
