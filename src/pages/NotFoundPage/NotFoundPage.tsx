import Footer from "../../sections/Footer/Footer";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import PageContainer from "../../layouts/PageContainer";
import "./NotFoundPage.css";

/**
 * 404 Page Component
 * 
 * @returns {JSX.Element} The 404 Page Component
 */
export default function NotFoundPage() {
    return (
        <div className="NotFoundPage">
            {/* Header */}
            <NavigationBar pageSpacer />

            {/* Page Content */}
            <PageContainer>
                <section className='PageSection'>
                    <SectionHeader
                        heading="404, Oops!"
                        subHeading="The page you are looking for does not exist."
                        actionUrl="/"
                        actionText="Go Home"
                        centerContent
                    />
                </section>
            </PageContainer>

            {/* Footer */}
            <Footer />
        </div>
    );
}