import { createContext, useState } from "react";

export const Themes = createContext();

export const darkMode = {
    color: "white",
    background: "black"
};
export const dayMode = {
    color: "black",
    background: "white"
};

const ThemesProvider = ({ children }) => {
    const [mode, setMode] = useState(dayMode);
    const ToggleTheme = () => {
        mode === dayMode ?  setMode(darkMode) :  setMode(dayMode)
    }
    return (
        <Themes.Provider value={{ mode, setMode, ToggleTheme }}>
            {children}
        </Themes.Provider>
    )
}
export default ThemesProvider;