import CtaBox from "../../components/CtaBox/CtaBox";
import Footer from "../../sections/Footer/Footer";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GridContainer from "../../layouts/GridContainer";
import PageContainer from "../../layouts/PageContainer";
import PageSection from "../../layouts/PageSection";
import Spacer from "../../widgets/Spacer/Spacer";
import "./BlogsPage.css";

// Images
import ctaImage from "../../assets/images/cta.png";
import ImageOne from "../../assets/images/image-1.jpg";
import ImageTwo from "../../assets/images/image-2.jpg";
import ImageThree from "../../assets/images/image-3.jpg";
import ImageFour from "../../assets/images/image-4.jpg";
import Card, { CardStyle } from "../../components/Card/Card";
import Button from "../../widgets/Button/Button";
import { HiArrowDown } from "react-icons/hi";

/**
 * Blogs Page
 * 
 * @returns {JSX.Element} Blogs Page
 */
export default function BlogsPage() {
    return (
        <div className="BlogsPage">
            {/* Header */}
            <NavigationBar />

            {/* Page Content */}
            <PageContainer>

                {/* Section 1 */}
                <PageSection>
                    <SectionHeader
                        heading="Blogs"
                        subHeading="Read our latest blogs and articles."
                    />
                    <Spacer height={32} />

                    {/* List of blogs */}
                    <GridContainer>

                        <Card cardImage={ImageOne}>
                            <h3>How to design the perfect website</h3>
                            <Spacer height={16} />
                            <p>You need to design a website for your business. You have a budget, a deadline, and a vision. But how do you make it all come together?</p>
                            <Spacer height={16} />
                            <b>a few mins ago</b>
                        </Card>

                        <Card>
                            <h3>How to design the perfect website within few minutes?</h3>
                            <Spacer height={16} />
                            <p>
                                You need to design a website for your business. You have a budget, a deadline, and a vision. But how do you make it all come together?
                                A website is the face of your business. It’s the first thing people see when they visit your company. It’s the first thing they see when they search for your business online. It’s the first thing they see when they visit your social media pages.
                                A website is the face of your business. It’s the first thing people see when they visit your company. It’s the first thing they see when they search for your business online. It’s the first thing they see when they visit your social media pages.
                            </p>
                            <Spacer height={16} />
                            <b>a few mins ago</b>
                        </Card>

                        <Card cardImage={ImageTwo}>
                            <h3>More tips on the design part</h3>
                            <Spacer height={16} />
                            <p>You need to design a website for your business. You have a budget, a deadline, and a vision. But how do you make it all come together?</p>
                            <Spacer height={16} />
                            <b>a few mins ago</b>
                        </Card>

                        <Card>
                            <h3>How to design the perfect website within few minutes?</h3>
                            <Spacer height={16} />
                            <p>
                                You need to design a website for your business. You have a budget, a deadline, and a vision. But how do you make it all come together?
                                A website is the face of your business. It’s the first thing people see when they visit your company. It’s the first thing they see when they search for your business online. It’s the first thing they see when they visit your social media pages.
                            </p>
                            <Spacer height={16} />
                            <b>a few mins ago</b>
                        </Card>

                        <Card
                            cardImage={ImageThree}
                            cardStyle={CardStyle.ContentOverlay}
                        >
                            <h3>More tips on the design part</h3>
                            <Spacer height={16} />
                            <p>You need to design a website for your business. You have a budget, a deadline, and a vision. But how do you make it all come together?</p>
                            <Spacer height={16} />
                            <b>a few mins ago</b>
                        </Card>

                        <Card
                            cardImage={ImageFour}
                            cardStyle={CardStyle.ContentOverlayVisible}
                        >
                            <h3>More tips on the design part</h3>
                            <Spacer height={16} />
                            <p>You need to design a website for your business. You have a budget, a deadline, and a vision. But how do you make it all come together?</p>
                            <Spacer height={16} />
                            <b>a few mins ago</b>
                        </Card>

                    </GridContainer>

                    <Spacer height={72} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button>
                            Load More
                            <HiArrowDown />
                        </Button>
                    </div>
                </PageSection>

                <Spacer height={96} />

                {/* CTA Section */}
                <PageSection>
                    <CtaBox
                        title="Ready to get started?"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel quam et tellus tincidunt fermentum. Nulla facilisi."
                        image={ctaImage}
                        button={
                            <Button
                                onClick={() => {
                                    window.location.href = "/contact";
                                }}
                            >
                                Get Started
                            </Button>
                        }
                    />
                </PageSection>

            </PageContainer>

            {/* Footer */}
            <Footer />
        </div>
    );
}