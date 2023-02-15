import { useEffect, useState } from "react";
import { HiCubeTransparent, HiX } from "react-icons/hi";
import Button from "../Button/Button";
import Seperator from "../Seperator/Seperator";
import "./ThemeSwitcher.css";

// Theme Object, used to define a theme
export type AppTheme = {
    name: string; // Name of theme
    fileName: string; // Filename of theme
}

// Props for theme switcher
type Props = {
    themes: AppTheme[];
    defaultTheme: AppTheme;
};

/**
 * Theme switcher component. This component is responsible for switching
 * between themes.
 * @param props Props for the theme switcher
 * @returns {JSX.Element}
 */
export default function ThemeSwitcher(props: Props): JSX.Element {
    // State
    const [themeSwitcherOpen, setThemeSwitcherOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(props.defaultTheme);

    // Methods
    const handleThemeSwitch = (theme: AppTheme) => {
        // Replace the filename in the link tag in the head
        const linkTag = document.querySelector("link[href*='theme.css']") as HTMLLinkElement;

        // Replace the filename in the link tag
        linkTag.href = linkTag.href.replace(/[^/]*$/, theme.fileName);

        // Save the theme to local storage
        localStorage.setItem("theme", theme.fileName);

        // Update the state
        setCurrentTheme(theme);
        setThemeSwitcherOpen(false);
    }

    const loadTheme = () => {
        // Get the theme from local storage
        const theme = localStorage.getItem("theme");

        // If there is a theme, switch to it
        if (theme) {
            handleThemeSwitch({
                name: "",
                fileName: theme
            });
        }
    }

    useEffect(() => {
        // Load the theme from local storage
        loadTheme();
    }, []);

    return (
        <>
            {
                // If the theme switcher is open, show the themes
                themeSwitcherOpen ? (
                    <div className="AppThemes">
                        <h3>Themes</h3>
                        {
                            props.themes.map((theme, index) => (
                                <Button onClick={() => {
                                    handleThemeSwitch(theme);
                                }} key={index}>
                                    {theme.name}
                                </Button>
                            ))
                        }

                        <Seperator spacing={12} />
                        {/* Dismiss Button */}
                        <Button onClick={() => {
                            setThemeSwitcherOpen(false);
                        }}>
                            <HiX />
                            Dismiss
                        </Button>
                    </div>
                ) : (
                    // Otherwise, show the open button
                    <div className="AppThemesOpenButton" onClick={() => {
                        setThemeSwitcherOpen(true);
                    }}>
                        <HiCubeTransparent />
                    </div>
                )
            }
        </>
    );
}