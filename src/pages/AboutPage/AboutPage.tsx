import CtaBox from "../../components/CtaBox/CtaBox";
import Footer from "../../sections/Footer/Footer";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GridContainer from "../../layouts/GridContainer";
import PageContainer from "../../layouts/PageContainer";
import PageSection from "../../layouts/PageSection";
import Spacer from "../../widgets/Spacer/Spacer";
import "./AboutPage.css";

// Images
import teamMember1 from "../../assets/images/team-member-1.jpg";
import teamMember2 from "../../assets/images/team-member-2.jpg";
import teamMember3 from "../../assets/images/team-member-3.jpg";
import ctaImage from "../../assets/images/cta.png";
import Button from "../../widgets/Button/Button";
import Card from "../../components/Card/Card";


/**
 * AboutPage component - The about page.
 * 
 * @returns {JSX.Element} The AboutPage component.
 */
export default function AboutPage() {
    return (
        <div className="AboutPage">
            {/* Header */}
            <NavigationBar pageSpacer />

            {/* Page Content */}
            <PageContainer>

                {/* Section 1 */}
                <PageSection>
                    <SectionHeader
                        heading="About Us"
                        subHeading="We are a team of passionate individuals who love to create beautiful websites."
                    />

                    <Spacer height={32} />

                    <div className="AboutPage-Section1-Content">
                        <div className="AboutPage-Section1-Content-Image">
                            {/* <img src={aboutImage} alt="About Us" /> */}
                        </div>

                        <div className="AboutPage-Section1-Content-Text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel quam et tellus
                                tincidunt fermentum. Nulla facilisi. Sed et sapien eget lorem semper tincidunt. Donec
                                non purus ut nisl lacinia luctus. Nulla facilisi. Sed et sapien eget lorem semper
                                tincidunt. Donec non purus ut nisl lacinia luctus. Nulla facilisi.
                            </p>
                        </div>
                    </div>
                </PageSection>

                <Spacer height={96} />

                {/* Our Team */}
                <PageSection>
                    <SectionHeader
                        heading="Our Team"
                        subHeading="We are a team of passionate individuals who love to create beautiful websites."
                    />

                    <Spacer height={32} />

                    <GridContainer>
                        <Card cardImage={teamMember1}>
                            <h3>John Doe</h3>
                            <Spacer height={8} />
                            <h4 style={{ color: "var(--color-primary)" }}>CEO</h4>
                            <Spacer height={16} />
                            <p>John is the CEO of Circle Theme. He is a passionate individual who loves to create beautiful websites.</p>
                        </Card>
                        <Card cardImage={teamMember2}>
                            <h3>Jane Doe</h3>
                            <Spacer height={8} />
                            <h4 style={{ color: "var(--color-primary)" }}>Founder and CEO</h4>
                            <Spacer height={16} />
                            <p>Jane is the CEO of Circle Theme. She is a passionate individual who loves to create beautiful websites. She is also a great painter.</p>
                        </Card>
                        <Card cardImage={teamMember3}>
                            <h3>Mark Doe</h3>
                            <Spacer height={8} />
                            <h4 style={{ color: "var(--color-primary)" }}>CEO</h4>
                            <Spacer height={16} />
                            <p>Mark is the Manager of Circle Theme. He is a passionate individual who loves to create beautiful websites. He is also a great cook.</p>
                        </Card>
                    </GridContainer>
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