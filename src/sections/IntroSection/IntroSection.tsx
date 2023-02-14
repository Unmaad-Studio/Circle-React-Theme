import { HiArrowRight, HiOutlinePlay } from "react-icons/hi";
import Button from "../../widgets/Button/Button";
import Spacer from "../../widgets/Spacer/Spacer";
import "./IntroSection.css";

// Images
import IntroImage from "../../assets/images/image-6.jpg";

/**
 * Intro Section Component, displays an image on the right and text on the left.
 * It's used on the home page at the very top.
 * 
 * Intro Section is meant to be edited right here in this file.
 * 
 * @returns The Intro Section Component
 */
export default function IntroSection() {
    return (
        // Main Wrapper for the Intro Section
        // TODO:: Improve the responsiveness of the Intro Section
        <div className="IntroSection">

            {/* The left content section */}
            <div className="IntroSectionText">
                <h1>Let's build something amazing together.</h1>
                <p>We are a team of experienced software engineers and designers who love to build great products.</p>
                <Spacer height={24} />
                <Button>
                    Get Started
                    <HiArrowRight />
                </Button>
            </div>

            {/* The right image section */}
            <div className="IntroSectionImage">
                <div className="IntroSectionImageContainer">

                    {/* Image to display */}
                    <img src={IntroImage} alt="Intro Section" />

                    {/* Change the icon of play button according to your need, or completely remove the <div> if you don't need it. */}
                    <div className="PlayButton">
                        <HiOutlinePlay />
                    </div>
                </div>
            </div>
        </div>
    );
}

// TODO:: Replace Image URL with a local image