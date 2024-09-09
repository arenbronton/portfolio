import { useState, useEffect } from "react";

import Sun from '/icons/decorative/sun.png';
import Moon from '/icons/decorative/moon.png';

import './ThemeSwitcher.scss'

export default function ThemeSwitcher() {

    const [theme, setTheme] = useState('dark');

    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        window.document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <button className="theme-switcher-button" onClick={handleChangeTheme}>
            <img src={theme === 'light' ? Sun : Moon} alt="" />
        </button>
    )
}