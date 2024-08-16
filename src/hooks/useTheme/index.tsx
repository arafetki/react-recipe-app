import { useLocalStorage, useIsomorphicLayoutEffect } from "usehooks-ts";
import type { Theme } from "@/types";

const root = window.document.documentElement;
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const useTheme = (storageKey: string = 'theme') => {

    const [theme,setTheme] = useLocalStorage<Theme>(storageKey,()=>(mediaQuery.matches? 'dark' : 'light'))

    const isDarkMode: boolean = theme==='dark';

    useIsomorphicLayoutEffect(()=>{

        root.classList.remove('dark','light')
        root.classList.add(theme)

    },[theme])

    const toggleTheme = () => {
        setTheme(()=>isDarkMode? 'light' : 'dark')
    }

    return {
        theme,
        isDarkMode,
        toggleTheme,
        setTheme
    }

}

export {useTheme};