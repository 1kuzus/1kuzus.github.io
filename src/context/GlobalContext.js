'use client';
import {useState, createContext, useContext} from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export const GlobalProvider = (props) => {
    const {children} = props;

    //用于侧栏显示/隐藏
    const [showSidebar, setShowSidebar] = useState(true);

    const value = {
        showSidebar,
        setShowSidebar,
    };
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
