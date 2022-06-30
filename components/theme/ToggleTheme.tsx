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
        <div className="mt-1 ml-auto flex justify-end border-gray-300">
            <div
                className="h-7 w-12 rounded-full bg-gray-300 dark:bg-[#292929] cursor-pointer flex items-center relative select-none border-gray-300 border"
                onClick={toggleTheme}
            >
                <div
                    className={`${darkMode ? 'translate-x-0' : 'translate-x-[1.4rem]'} h-6 w-6 dark:bg-[#292929] dark:hover:bg-[#242424] border bg-white hover:border-gray-500 hover:border rounded-full transform transition-transform duration-300`}
                />
                <span
                    className={`text-center text-sm flex-shrink ml-auto absolute ${darkMode ? 'right-1 mr-1/4' : 'left-1 ml-1/4'}`}
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