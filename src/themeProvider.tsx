import { ReactNode, createContext, useContext, useState } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}