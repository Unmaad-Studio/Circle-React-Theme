import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import Footer from "../../sections/Footer/Footer";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import IconCard from "../../components/IconCard/IconCard";
import PageContainer from "../../layouts/PageContainer";
import PageSection from "../../layouts/PageSection";
import "./ContactPage.css";
import Spacer from "../../widgets/Spacer/Spacer";
import GridContainer from "../../layouts/GridContainer";

/**
 * Contact Page
 * 
 * @returns {JSX.Element} Contact Page
 */
export default function ContactPage() {
    return (
        <div className="ContactPage">
            {/* Header */}
            <NavigationBar pageSpacer />

            {/* Page Content */}
            <PageContainer>

                {/* Contact Us */}
                <PageSection>
                    <SectionHeader
                        heading="Contact Us"
                        subHeading="Contact us using the information below or send us a message using the form at the bottom of the page."
                    />

                    <GridContainer>
                        <IconCard
                            icon={<HiLocationMarker />}
                            heading="Address"
                            content="1234 Main Street Anytown, USA 12345"
                            centerContent
                        />
                        <IconCard
                            icon={<HiPhone />}
                            heading="Call Us"
                            content="(123) 456-7890"
                            centerContent
                        />
                        <IconCard
                            icon={<HiMail />}
                            heading="Drop Us a Line"
                            content="contact.circletheme@gmail.com"
                            centerContent
                        />
                    </GridContainer>
                </PageSection>

                {/* Spacer between two sections */}
                <Spacer height={96} />

                {/* Write us a message */}
                <PageSection>
                    <SectionHeader
                        heading="Write Us a Message"
                        subHeading="You can also send us a message using the form below."
                    />


                    <div className="ContactFormContainer">

                        {/* Contact Form */}
                        <form className="ContactForm">
                            <div className="ContactFormRow">
                                <div className="ContactFormCol">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your name.." />
                                </div>
                                <div className="ContactFormCol">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" name="email" placeholder="Your email address.." />
                                </div>
                            </div>
                            <div className="ContactFormRow">
                                <div className="ContactFormCol">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Subject.." />
                                </div>
                            </div>
                            <div className="ContactFormRow">
                                <div className="ContactFormCol">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                                </div>
                            </div>
                            <div className="ContactFormRow">
                                <div className="ContactFormCol">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>

                        {/* Contact Map */}
                        <div className="ContactMap">

                            {/* Uncomment the iframe to embed your map */}
                            {/* <iframe
                                title="Contact Map"
                                src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                                        &q=Space+Needle,Seattle+WA"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                referrerPolicy="no-referrer-when-downgrade"
                                loading="lazy"
                                allowFullScreen
                            >
                            </iframe> */}

                            <div className="ContactMapPlaceholder">
                                Map Placeholder
                            </div>
                        </div>
                    </div>

                </PageSection>

            </PageContainer>

            {/* Footer */}
            <Footer />
        </div>
    );
}