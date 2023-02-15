import { HiArrowDown, HiArrowRight, HiOutlinePlay } from "react-icons/hi";
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
 * @returns {JSX.Element}
 */
export default function IntroSection(): JSX.Element {
    return (
        // Main Wrapper for the Intro Section
        // TODO:: Fix the scroll down arrow on click
        <div className="IntroSection">
            <div className="IntroSectionContent">
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

            {/* The arrow to scroll down */}
            <div className="IntroSectionArrow">
                <div
                    className="IntroSectionArrowContainer"
                // onClick={() => {
                //     // Get position and height of current section [IntroSection]
                //     const introSection = document.querySelector(".IntroSection");
                //     const introSectionPosition = introSection?.getBoundingClientRect().top;
                //     const introSectionHeight = introSection?.getBoundingClientRect().height;

                //     // Scroll to [introSectionPosition + introSectionHeight]
                //     window.scrollTo({
                //         top: introSectionPosition! + introSectionHeight!,
                //         behavior: "smooth"
                //     });
                // }}
                >
                    <HiArrowDown />
                </div>
                Scroll Down
            </div>
        </div>
    );
}