import React from "react";
import { HiCloud, HiCode, HiDeviceTablet, HiPuzzle, HiSortDescending, HiVideoCamera } from "react-icons/hi";
import Footer from "../../sections/Footer/Footer";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import IconCard from "../../components/IconCard/IconCard";
import PageContainer from "../../layouts/PageContainer";
import PageSection from "../../layouts/PageSection";
import "./HomePage.css";
import Spacer from "../../widgets/Spacer/Spacer";
import CtaBox from "../../components/CtaBox/CtaBox";
import IntroSection from "../../sections/IntroSection/IntroSection";
import GridContainer from "../../layouts/GridContainer";
import WorksSection from "../../sections/WorksSection/WorksSection";

// Images
import ctaImage from "../../assets/images/cta.png";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";
import ImageOne from "../../assets/images/image-1.jpg";
import ImageTwo from "../../assets/images/image-2.jpg";
import ImageThree from "../../assets/images/image-3.jpg";

// Client Logos
import ClientLogoOne from "../../assets/images/client-logo-1.svg";
import ClientLogoTwo from "../../assets/images/client-logo-2.svg";
import ClientLogoThree from "../../assets/images/client-logo-3.svg";
import ClientLogoFour from "../../assets/images/client-logo-4.svg";
import ClientLogoFive from "../../assets/images/client-logo-5.svg";
import ClientLogoSix from "../../assets/images/client-logo-6.svg";
import ClientLogoSeven from "../../assets/images/client-logo-7.svg";
import ClientLogoEight from "../../assets/images/client-logo-8.svg";
import Card, { CardStyle } from "../../components/Card/Card";
import Button from "../../widgets/Button/Button";


export default function HomePage() {
    return (
        <div className="HomePage">
            {/* Header */}
            <NavigationBar />

            {/* Page Content */}
            <PageContainer>

                {/* Intro Section */}
                <PageSection>
                    <IntroSection />
                </PageSection>

                {/* Services Section */}
                <PageSection>
                    <SectionHeader
                        heading="Services"
                        subHeading="We offer a wide range of services to help you achieve your goals."
                        actionUrl="/services"
                        actionText="View All"
                    />

                    <GridContainer>
                        <IconCard
                            icon={<HiCode />}
                            heading="Web Development"
                            content="We offer a wide range of services to help you achieve your goals."
                        />
                        <IconCard
                            icon={<HiSortDescending />}
                            heading="UI Design"
                            content="We offer a wide range of services to help you achieve your goals."
                        />
                        <IconCard
                            icon={<HiDeviceTablet />}
                            heading="App Development"
                            content="We offer a wide range of services to help you achieve your goals."
                        />
                        <IconCard
                            icon={<HiVideoCamera />}
                            heading="Video Production"
                            content="We offer a wide range of services to help you achieve your goals."
                        />
                        <IconCard
                            icon={<HiPuzzle />}
                            heading="Game Development"
                            content="We offer a wide range of services to help you achieve your goals."
                        />
                        <IconCard
                            icon={<HiCloud />}
                            heading="Cloud Services"
                            content="We offer a wide range of services to help you achieve your goals."
                        />
                    </GridContainer>
                </PageSection>

                <Spacer height={96} />

                {/* Portfolio */}
                <WorksSection />

                <Spacer height={96} />

                {/* Blogs */}
                <PageSection>
                    <SectionHeader
                        heading="Blogs"
                        subHeading="Read our latest blogs and articles."
                    />

                    <Spacer height={32} />

                    <GridContainer>
                        <Card
                            onClick={() => {
                                window.location.href = "blogs/single-blog-page";
                            }}
                        >
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
                            onClick={() => {
                                window.location.href = "blogs/single-blog-page";
                            }}
                        >
                            <h3>More tips on the design part</h3>
                            <Spacer height={16} />
                            <p>You need to design a website for your business. You have a budget, a deadline, and a vision. But how do you make it all come together?</p>
                            <Spacer height={16} />
                            <b>a few mins ago</b>
                        </Card>

                        <Card
                            cardImage={ImageTwo}
                            onClick={() => {
                                window.location.href = "blogs/single-blog-page";
                            }}
                        >
                            <h3>More tips on the design part</h3>
                            <Spacer height={16} />
                            <p>You need to design a website for your business. You have a budget, a deadline, and a vision. But how do you make it all come together?</p>
                            <Spacer height={16} />
                            <b>a few mins ago</b>
                        </Card>
                    </GridContainer>
                </PageSection>

                <Spacer height={96} />

                {/* Logo Carousel Section */}
                <PageSection>
                    <SectionHeader
                        heading="Our Clients"
                        subHeading="We have worked with some of the biggest brands in the world."
                    />

                    <Spacer height={32} />

                    {/* Replace Logos */}
                    <LogoCarousel
                        logos={[
                            ClientLogoOne,
                            ClientLogoTwo,
                            ClientLogoThree,
                            ClientLogoFour,
                            ClientLogoFive,
                            ClientLogoSix,
                            ClientLogoSeven,
                            ClientLogoEight,
                        ]}
                    />

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