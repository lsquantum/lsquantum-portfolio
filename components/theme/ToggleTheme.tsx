import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";

function ToggleTheme() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(colorTheme === "light" ? false : true);
    function toggleTheme() {
        setTheme(darkMode ? "dark" : "light");
        setDarkMode((prev) => !prev);
    }
    return (
        <div className="mt-1 ml-auto flex justify-end shadow-xl">
            <div
                className="w-12 rounded-full h-6 bg-gray-400 cursor-pointer flex items-center px-1/2 relative select-none"
                onClick={toggleTheme}
            >
                <div
                    className={`${darkMode ? 'translate-x-0' : 'translate-x-6'} h-6 w-6 bg-white hover:border-gray-500 hover:border rounded-full transform transition-transform duration-300`}
                />
                <span
                    className={`text-center text-sm flex-shrink mt-5 ml-auto absolute -translate-y-1/2 ${darkMode ? 'right-1 mr-1/4' : 'left-1 ml-1/4'}`}
                    role="img"
                    aria-label="theme emoji"
                >
                    {darkMode ? '🌞' : '🌜'}
                </span>
            </div>
        </div>
    );
}

export default ToggleTheme;