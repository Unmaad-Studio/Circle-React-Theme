import { HiCode, HiDeviceTablet, HiSortDescending, HiVideoCamera } from "react-icons/hi";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import WorksContainer from "../../components/WorkCategories/WorksContainer";
import PageSection from "../../layouts/PageSection";
import Spacer from "../../widgets/Spacer/Spacer";

// Images
import ImageOne from "../../assets/images/image-1.jpg";
import ImageTwo from "../../assets/images/image-2.jpg";
import ImageThree from "../../assets/images/image-3.jpg";
import ImageFour from "../../assets/images/image-4.jpg";
import ImageFive from "../../assets/images/image-5.jpg";
import ImageSix from "../../assets/images/image-6.jpg";

/**
 * Section that displays the works.
 * 
 * @returns {JSX.Element} The WorksSection component
 */
export default function WorksSection() {
    return (
        <PageSection>
            <SectionHeader
                heading="Works"
                subHeading="Check out our latest works."
            />

            <Spacer height={32} />

            <WorksContainer
                categories={[
                    {
                        categoryId: "web-development",
                        icon: <HiCode />,
                        title: "Web Development"
                    },
                    {
                        categoryId: "mobile-development",
                        icon: <HiDeviceTablet />,
                        title: "Mobile Development"
                    },
                    {
                        categoryId: "ui-ux-design",
                        icon: <HiSortDescending />,
                        title: "UI/UX Design"
                    },
                    {
                        categoryId: "video-production",
                        icon: <HiVideoCamera />,
                        title: "Video Production"
                    }
                ]}
                cardsData={[
                    {
                        categoryId: "web-development",
                        title: "How to design the perfect website",
                        image: ImageFour,
                        link: "/blogs/single-blog"
                    },
                    {
                        categoryId: "mobile-development",
                        title: "How to design the perfect website",
                        image: ImageFive,
                        link: "/blogs/single-blog"
                    },
                    {
                        categoryId: "web-development",
                        title: "I made a website in 5 minutes",
                        image: ImageSix,
                        link: "/blogs/single-blog"
                    },
                    {
                        categoryId: "web-development",
                        title: "Designing a website for your business",
                        image: ImageOne,
                        link: "/blogs/single-blog"
                    },
                    {
                        categoryId: "mobile-development",
                        title: "How to design the perfect website",
                        image: ImageTwo,
                        link: "/blogs/single-blog"
                    },
                    {
                        categoryId: "mobile-development",
                        title: "How to design the perfect website",
                        image: ImageThree,
                        link: "/blogs/single-blog"
                    },
                ]}
            />
        </PageSection>
    );
}