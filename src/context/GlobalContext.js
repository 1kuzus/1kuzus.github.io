import React, {createContext, useState, useContext} from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export const GlobalProvider = (props) => {
    const {children} = props;
    const [showSidebar, setShowSidebar] = useState(false);
    const value = {showSidebar, setShowSidebar};
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
