import { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

function AppProvider({children}){

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    function openSidebar(){
        setIsSidebarOpen(true);
    }

    function closeSidebar(){
        setIsSidebarOpen(false);
    }

    function openSubmenu(){
        setIsSubmenuOpen(true);
    }

    function closeSubmenu(){
        setIsSubmenuOpen(false);
    }
    
    return(
        <AppContext.Provider value={{isSubmenuOpen,isSidebarOpen,openSubmenu,openSidebar,closeSubmenu,closeSidebar}} >
            {children}
        </AppContext.Provider>
    );
}

function useGlobalContext(){
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext, AppContext};