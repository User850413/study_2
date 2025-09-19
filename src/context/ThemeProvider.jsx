import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState("light");

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;