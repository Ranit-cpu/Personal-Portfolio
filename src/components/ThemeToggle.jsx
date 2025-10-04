import { useState} from "react"
import {Moon, Sun} from "lucide-react";

export const ThemeToggle = ()=> {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            setDarkMode(false);
        }else {
            setDarkMode(true);
        }
    }

    return(
        <button onClick={toggleDarkMode}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>)}
        </button>
    );
}