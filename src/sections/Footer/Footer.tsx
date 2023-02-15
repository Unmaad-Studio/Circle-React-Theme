import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import SocialMediaRow, { SocialMediaItem } from "../../widgets/SocialMeidaRow/SocialMediaRow";
import "./Footer.css";

// Icons
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

/**
 * Footer Section Component, displays a footer at the bottom of the page.
 * 
 * Footer Section is meant to be edited right here in this file.
 * 
 * @returns The Footer Section Component
 */
export default function Footer() {
    return (
        // Main Wrapper for the Footer Section
        // Footer is divided into two parts, Top Footer and Bottom Footer
        <footer className="Footer">

            {/* Top Footer */}
            <div className="FooterContainer">

                {/* Left Content */}
                <div className="FooterLeft">
                    <h2>Circle Theme</h2>
                    <p>1234 Main Street<br />Anytown, USA<br />12345</p>
                    <SocialMediaRow>
                        <SocialMediaItem
                            icon={<BsFacebook />}
                            link="https://www.facebook.com"
                        />
                        <SocialMediaItem
                            icon={<BsTwitter />}
                            link="https://www.twitter.com"
                        />
                        <SocialMediaItem
                            icon={<BsInstagram />}
                            link="https://www.instagram.com"
                        />
                        <SocialMediaItem
                            icon={<BsGithub />}
                            link="https://www.github.com"
                        />
                    </SocialMediaRow>
                </div>

                {/* Right Content */}
                {/* Right content is further divided into multiple rows by direct children */}
                <div className="FooterRight">

                    {/* Row 1 */}
                    <div className="FooterNav">
                        <h3>Site</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/blogs">Blogs</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Row 2 */}
                    <div className="FooterNav">
                        <h3>Information</h3>
                        <ul>
                            <li><a href="/">Terms and Conditions</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/documentation">Documentation</a></li>
                        </ul>
                    </div>

                    {/* Row 3 */}
                    <div className="FooterNav">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="tel:123-456-7890"><HiPhone /><span>123-456-7890</span></a></li>
                            <li><a href="mailto:"><HiMail /><span>contact@company.com</span></a></li>
                            <li><a href="https://www.google.com/maps"><HiLocationMarker /><span>1234 Main Street, Anytown, USA</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="FooterBottom">
                <p>© 2023 Circle Theme by <a href="http://unmaad.studio" target="_blank" rel="noreferrer">Unmaad Studio</a>. All Rights Reserved.</p>
            </div>
        </footer>
    );
}