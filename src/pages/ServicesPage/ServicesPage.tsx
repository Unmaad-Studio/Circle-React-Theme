import { HiArrowRight, HiCloud, HiCode, HiDeviceTablet, HiPencil, HiPuzzle, HiSortDescending, HiVideoCamera } from "react-icons/hi";
import CtaBox from "../../components/CtaBox/CtaBox";
import Footer from "../../sections/Footer/Footer";
import IconCard from "../../components/IconCard/IconCard";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GridContainer from "../../layouts/GridContainer";
import PageContainer from "../../layouts/PageContainer";
import PageSection from "../../layouts/PageSection";
import Spacer from "../../widgets/Spacer/Spacer";
import "./ServicesPage.css";

// Images
import ctaImage from "../../assets/images/cta.png";
import Faqs from "../../components/Faqs/Faqs";
import FaqItem from "../../components/Faqs/FaqItem";
import Button from "../../widgets/Button/Button";
import PricingCard from "../../components/PricingCard/PricingCard";

/**
 * Services page component.
 */
export default function ServicesPage() {
    return (
        <>
            <div className="ServicesPage">
                {/* Header */}
                <NavigationBar />

                {/* Page Content */}
                <PageContainer>

                    {/* Services Section */}
                    <PageSection>
                        <SectionHeader
                            heading="Our Services"
                            subHeading="We offer a wide range of services to help you achieve your goals."
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

                    {/* Pricing Section */}
                    <PageSection>
                        <SectionHeader
                            heading="Pricing"
                            subHeading="We offer a wide range of services to help you achieve your goals."
                        />

                        <GridContainer>
                            <PricingCard
                                icon={<HiCode />}
                                title="Basic"
                                price="$9.99"
                                features={[
                                    "1GB Storage",
                                    "10GB Bandwidth",
                                    "1 Domain",
                                    "1 Email Account",
                                    "24/7 Support",
                                ]}
                                actions={<Button>Get Started <HiArrowRight /></Button>}
                            />

                            <PricingCard
                                icon={<HiPencil />}
                                title="Standard"
                                price="$19.99"
                                features={[
                                    "5GB Storage",
                                    "50GB Bandwidth",
                                    "5 Domains",
                                    "5 Email Accounts",
                                    "24/7 Support",
                                ]}
                                actions={<Button>Get Started<HiArrowRight /></Button>}
                            />

                            <PricingCard
                                icon={<HiPuzzle />}
                                title="Premium"
                                price="$29.99"
                                features={[
                                    "10GB Storage",
                                    "100GB Bandwidth",
                                    "10 Domains",
                                    "10 Email Accounts",
                                    "24/7 Support",
                                ]}
                                actions={<Button>Get Started<HiArrowRight /></Button>}
                            />
                        </GridContainer>
                    </PageSection>

                    <Spacer height={96} />

                    {/* Faq Section */}
                    <PageSection>
                        <SectionHeader
                            heading="Frequently Asked Questions"
                            subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel quam et tellus tincidunt fermentum. Nulla facilisi."
                        />

                        {/* List of Faqs */}
                        <Faqs>
                            <FaqItem
                                question="What is Lorem Ipsum?"
                                answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />
                            <FaqItem
                                question="Why do we use it?"
                                answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                            />
                            <FaqItem
                                question="Where does it come from?"
                                answer="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                            />
                            <FaqItem
                                question="Where can I get some?"
                                answer="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                            />
                        </Faqs>

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
        </>
    );
}