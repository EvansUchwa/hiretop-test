import { createContext, useState, useContext } from 'react';
export const NavContext = createContext();
import { isMobile, isTablet } from 'react-device-detect'

export const NavbarProvider = ({ children }) => {
    const [sidebarVisible, setsidebarVisible] = useState((isMobile || isTablet) ? false : true);
    const toggleSidebar = () => {
        setsidebarVisible(!sidebarVisible);
    };


    return (
        <NavContext.Provider value={{ toggleSidebar, sidebarVisible }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNavbar = () => {
    return useContext(NavContext);
};
