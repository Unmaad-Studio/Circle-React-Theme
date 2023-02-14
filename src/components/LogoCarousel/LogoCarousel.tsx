import React from "react";
import { Component } from "react";
import "./LogoCarousel.css";

// Props for LogoCarousel
type Props = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    logos: Array<string>;
};

// State for LogoCarousel
type State = {
    scrollContainerRef: React.RefObject<HTMLDivElement>; // Reference to the scroll container
    scrollInnerRef: React.RefObject<HTMLDivElement>; // Reference to the scroll inner
    currentTranslate: number; // Current translate value
    scrollSpeed: number; // Current scroll speed
    scrollDirection: "left" | "right"; // Current scroll direction
};

/**
 * Logo Carousel Component, displays a carousel of logos.
 * Note: Logo carousel will not animate if the logos are less than the width of the carousel.
 * @param Props Props for LogoCarousel
 * @returns Logo Carousel Component
 */
export default class LogoCarousel extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            scrollContainerRef: React.createRef(),
            scrollInnerRef: React.createRef(),
            currentTranslate: 0,
            scrollSpeed: 1,
            scrollDirection: "left",
        };

        // Bind the animate function to the component
        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        // Start the animation loop
        this.animate();
    }

    /**
     * Animate the carousel
     */
    animate() {
        // Get the carousel inner
        const scrollContainer = this.state.scrollContainerRef.current;

        // Get the scroll inner
        const scrollInner = this.state.scrollInnerRef.current;

        // If the scroll container is not defined
        if (!scrollContainer || !scrollInner) {
            // Request another animation frame
            requestAnimationFrame(this.animate);

            // Return
            return;
        }

        // Calculate the width of the carousel inner based on the number of logos
        const innerWidth = scrollInner.scrollWidth;

        // Get the width of the scroll container
        const scrollContainerWidth = scrollContainer.clientWidth ?? 0;

        // Calculate the maximum scroll position
        const maxTranslate = innerWidth - scrollContainerWidth;

        if (maxTranslate <= 0) {
            // Set the current translate to half the width of max translate
            this.setState({ currentTranslate: - maxTranslate / 2 });

            // Request another animation frame
            requestAnimationFrame(this.animate);

            return;
        }

        // If the current translate is greater than the maximum translate
        if (this.state.currentTranslate > 0) {
            // Set the scroll direction to left
            this.setState({ scrollDirection: "left" });
        }

        // If the current translate is less than 0
        if (this.state.currentTranslate < -maxTranslate) {
            // Set the scroll direction to right
            this.setState({ scrollDirection: "right" });
        }

        // If the scroll direction is left
        if (this.state.scrollDirection === "left") {
            // Increase the current translate
            this.setState({
                currentTranslate: this.state.currentTranslate - this.state.scrollSpeed,
            });
        }

        // If the scroll direction is right
        if (this.state.scrollDirection === "right") {
            // Decrease the current translate
            this.setState({
                currentTranslate: this.state.currentTranslate + this.state.scrollSpeed,
            });
        }

        // Call the animate function again
        requestAnimationFrame(this.animate);
    }

    render() {
        // Calculate the width of the carousel inner based on the number of logos
        return (
            <div
                ref={this.state.scrollContainerRef}
                id={this.props.id}
                className={`LogoCarousel ${this.props.className ?? ""}`}
                style={this.props.style}
            >
                <div
                    ref={this.state.scrollInnerRef}
                    className="LogoCarousel__Inner"
                    style={{
                        transform: `translateX(${this.state.currentTranslate}px)`,
                    }}
                >
                    {this.props.logos.map((logo, i) => (
                        <div key={i} className="LogoCarousel__Logo">
                            <img src={logo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}