import SectionHeader from "../../components/SectionHeader/SectionHeader";
import PageContainer from "../../layouts/PageContainer";
import PageSection from "../../layouts/PageSection";
import Footer from "../../sections/Footer/Footer";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";

export default function EmptyPage() {
    return (
        <div className="EmptyPage">
            {/* Header */}
            <NavigationBar pageSpacer />

            {/* Page Content */}
            <PageContainer>
                <PageSection>
                    <SectionHeader
                        heading="Empty Page"
                        subHeading="This page is empty."
                    />

                </PageSection>
            </PageContainer>

            {/* Footer */}
            <Footer />
        </div>
    );
}