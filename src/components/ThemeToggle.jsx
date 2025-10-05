import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ()=> {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "dark"){
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }else{
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }
    },[])

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

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