import CtaBox from "../../components/CtaBox/CtaBox";
import Footer from "../../sections/Footer/Footer";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";
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
                        <TeamMemberCard
                            name="John Doe"
                            title="CEO"
                            image={teamMember1}
                            description="John is the CEO of Circle Theme. He is a passionate individual who loves to create beautiful websites."
                        />
                        <TeamMemberCard
                            name="Jane Doe"
                            title="Founder and CEO"
                            image={teamMember2}
                            description="Jane is the CEO of Circle Theme. She is a passionate individual who loves to create beautiful websites. She is also a great painter."
                        />
                        <TeamMemberCard
                            name="Mark Doe"
                            title="Manager"
                            image={teamMember3}
                            description="Mark is the Manager of Circle Theme. He is a passionate individual who loves to create beautiful websites. He is also a great cook."
                        />
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