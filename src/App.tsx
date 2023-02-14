import React from "react";
import "./styles/loader.css";
import ThemeSwitcher, { AppTheme } from "./widgets/ThemeSwitcher/ThemeSwitcher";

// Props for app
interface IAppProps {
    children: React.ReactNode; // Content for app
    themes: AppTheme[]; // Themes for app
    defaultTheme: AppTheme; // Default theme for app
    showThemeSwitcher?: boolean; // Show the theme switcher
    cursorCircle?: boolean; // Show a circle following the mouse cursor
};

// State for app
interface IAppState {
    mousePosition: {
        x: number; // X position of mouse
        y: number; // Y position of mouse
    };
};

/**
 * The main app component. This component is responsible for rendering the
 * app's content and any other global components.
 * 
 * @param props.children The content for the app
 * @param props.cursorCircle Whether to show a circle following the mouse cursor
 */
export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            mousePosition: {
                x: 0,
                y: 0
            },
        };

        // Bind methods
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handlePreloader = this.handlePreloader.bind(this);
    }

    componentDidMount() {
        // Add event listener for mouse movement
        window.addEventListener("mousemove", this.handleMouseMove);

        // Remove the preloader
        this.handlePreloader();
    }

    componentWillUnmount() {
        // Remove event listener for mouse movement
        window.removeEventListener("mousemove", this.handleMouseMove);
    }

    /**
     * Handle mouse movement
     * 
     * @param event The mouse event
     */
    handleMouseMove = (event: MouseEvent) => {
        this.setState({
            mousePosition: {
                x: event.clientX,
                y: event.clientY
            }
        });
    }

    handlePreloader = () => {
        const preloader = document.querySelector(".Preloader") as HTMLElement;

        // Wait for page to load completely
        setTimeout(() => {
            // Fade out the preloader
            preloader.style.opacity = "0";

            setTimeout(() => {
                // Set display of preloader to none
                preloader.style.display = "none";
            }, 300);

            // Set display of AppContent to block
            const appContent = document.querySelector(".AppContent") as HTMLElement;
            appContent.style.display = "block";
        }, 1000);
    }

    render() {
        return (
            <div className="App">
                {/* App Themes */}
                {
                    this.props.showThemeSwitcher && (
                        <ThemeSwitcher
                            defaultTheme={this.props.themes[0]}
                            themes={this.props.themes}
                        />
                    )
                }

                {/* Mouse circle */}
                <div
                    className="MouseIcon"
                    style={{
                        display: this.props.cursorCircle ? "block" : "none",
                        left: this.state.mousePosition.x,
                        top: this.state.mousePosition.y
                    }}
                />

                {/* Preloader */}
                <div className="Preloader">
                    <div className="loader-5 center"><span></span></div>
                </div>

                {/* Content for app */}
                <div className="AppContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}