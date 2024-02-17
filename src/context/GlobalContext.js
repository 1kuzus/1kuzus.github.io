import {useState, createContext, useContext} from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export const GlobalProvider = (props) => {
    const {children} = props;
    const [showSidebar, setShowSidebar] = useState(false);
    const [titleNodeRefs, setTitleNodeRefs] = useState([]);
    const removeTitleNodeRefs = (ref) => {
        setTitleNodeRefs((prev) => prev.filter((r) => r != ref));
    };
    const value = {
        showSidebar,
        setShowSidebar,
        setTitleNodeRefs,
        removeTitleNodeRefs,
        titleNodes: titleNodeRefs.map((r) => r.current).sort((i, j) => i.offsetTop - j.offsetTop),
    };
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
