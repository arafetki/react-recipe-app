import { useTheme } from "@/hooks/useTheme";
import {Sun,Moon} from 'lucide-react'
import { Button } from "@nextui-org/react";

export default function ThemeSwitcher(): JSX.Element {

    const {isDarkMode,toggleTheme} = useTheme()

    return (
        <Button
            onPress={toggleTheme}
            isIconOnly
            radius="full"
            aria-label="Theme"
            variant="flat"
        >
            {isDarkMode? <Sun size={21} strokeWidth={3} className="text-foreground-900"/> : <Moon size={21} strokeWidth={3} className="text-foreground-500" />}
        </Button>
    )
}