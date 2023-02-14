import { Component } from "react";
import { HiCubeTransparent } from "react-icons/hi";
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

// State for theme switcher
type State = {
    themeSwitcherOpen: boolean;
    currentTheme: AppTheme;
}

/**
 * Theme switcher component. This component is responsible for switching
 * between themes.
 * 
 * @param props.themes The themes to switch between
 * @param props.defaultTheme The default theme
 * 
 * @returns The theme switcher component
 */
export default class ThemeSwitcher extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            themeSwitcherOpen: false,
            currentTheme: {
                name: "Default",
                fileName: "default"
            }
        };

        // Bind methods
        this.handleThemeSwitch = this.handleThemeSwitch.bind(this);
        this.loadTheme = this.loadTheme.bind(this);
    }

    componentDidMount() {
        // Load the theme from local storage
        this.loadTheme();
    }

    /**
     * Handle theme switch
     * 
     * @param theme The theme to switch to
     */
    handleThemeSwitch = (theme: AppTheme) => {
        // Replace the filename in the link tag in the head
        const linkTag = document.querySelector("link[href*='theme.css']") as HTMLLinkElement;

        // Replace the filename in the link tag
        linkTag.href = linkTag.href.replace(/[^/]*$/, theme.fileName);

        // Save the theme to local storage
        localStorage.setItem("theme", theme.fileName);

        // Update the state
        this.setState({
            currentTheme: theme,
            themeSwitcherOpen: false
        });
    }

    /**
     * Load the theme from local storage
     */
    loadTheme = () => {
        // Get the theme from local storage
        const theme = localStorage.getItem("theme");

        // If there is a theme, switch to it
        if (theme) {
            this.handleThemeSwitch({
                name: "",
                fileName: theme
            });
        }
    }

    render() {
        return (
            <>
                {
                    // If the theme switcher is open, show the themes
                    this.state.themeSwitcherOpen ? (
                        <div className="AppThemes">
                            <h3>Themes</h3>
                            {
                                this.props.themes.map((theme, index) => (
                                    <button onClick={() => {
                                        this.handleThemeSwitch(theme);
                                    }} key={index}>
                                        {theme.name}
                                    </button>
                                ))
                            }
                        </div>
                    ) : (
                        // Otherwise, show the open button
                        <div className="AppThemesOpenButton" onClick={() => {
                            this.setState({
                                themeSwitcherOpen: true
                            });
                        }}>
                            <HiCubeTransparent />
                        </div>
                    )
                }
            </>
        );
    }
}