import * as React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { getTheme } from '../lib/theme'
import useIsClient from "../lib/useIsClient"

const ThemeToggle = () => {
    const { isClient, key } = useIsClient();

    const [dark_theme, setDarkTheme] = useState(getTheme())

    useEffect(() => {
        if (dark_theme) {
          document.body.classList.add("dark");
          document.body.classList.remove("light");
          localStorage.setItem('theme', 'dark');
          document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0e1117');
        } else {
          document.body.classList.remove("dark");
          document.body.classList.add("light");
          localStorage.setItem('theme', 'light');
          document.querySelector('meta[name="theme-color"]').setAttribute("content", '#3164dc');
        }
    }, [dark_theme])

    if ( !isClient ) return null;
    return ( 
        // ADD FRAMER MOTION!!
        <div>
            <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: .2 },
                }}
                whileTap={{ scale: 0.7 }}
                onClick={() => setDarkTheme(!dark_theme)}
                aria-label='toggle between light and dark theme.'
            >
            {dark_theme ? (
                <svg className="w-8 h-8 md:w-9 md:h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
                </svg>
            ) : (
                <svg className="w-8 h-8 md:w-9 md:h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
                </svg>
            )}
            </motion.button>
        </div>
    )
};

export default ThemeToggle