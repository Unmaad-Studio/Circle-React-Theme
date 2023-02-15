import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TypographyContainer from "../../layouts/TypographyContainer";
import PageContainer from "../../layouts/PageContainer";
import PageSection from "../../layouts/PageSection";
import Footer from "../../sections/Footer/Footer";
import NavigationBar from "../../sections/NavigationBar/NavigationBar";
import Spacer from "../../widgets/Spacer/Spacer";
import "./BlogViewPage.css";

/**
 * BlogViewPage is the page that displays a blog post.
 * 
 * @returns {JSX.Element} - The BlogViewPage component.
 */
export default function BlogViewPage() {
    return (
        <div className="BlogViewPage">
            {/* Header */}
            <NavigationBar pageSpacer />

            {/* Page Content */}
            <PageContainer>
                <PageSection>
                    <SectionHeader
                        heading="Typography Blog"
                        subHeading="Checkout our blog for more information about typography."
                    />

                    {/* Blog Container */}
                    <TypographyContainer>
                        <img src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80" alt="Random Image" />
                        <Spacer height={32} />
                        <h1>How to learn programming in a week?</h1>
                        <Spacer height={16} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
                            tincidunt lacinia, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet
                            mauris. Donec euismod, nisl nec tincidunt lacinia, nunc nisl aliquam mauris,
                            eget aliquam nisl nisl sit amet mauris. Donec euismod, nisl nec tincidunt
                            lacinia, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet mauris.
                            Donec euismod, nisl nec tincidunt lacinia, nunc nisl aliquam mauris, eget
                            aliquam nisl nisl sit amet mauris. Donec euismod, nisl nec tincidunt
                        </p>
                        <Spacer height={32} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
                            tincidunt lacinia, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet
                        </p>
                        <Spacer height={64} />
                        <h2>Other unrelated topic</h2>
                        <Spacer height={16} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
                            tincidunt lacinia, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet
                            mauris. Donec euismod, nisl nec tincidunt lacinia, nunc nisl aliquam mauris,
                        </p>
                        <Spacer height={64} />
                        <h3>Here is a list</h3>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                        <Spacer height={64} />
                        <h3>Here is a numbered list</h3>
                        <ol>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ol>
                        <Spacer height={64} />
                        <h3>Here is a table</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Header 1</th>
                                    <th>Header 2</th>
                                    <th>Header 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Row 1, Column 1</td>
                                    <td>Row 1, Column 2</td>
                                    <td>Row 1, Column 3</td>
                                </tr>
                                <tr>
                                    <td>Row 2, Column 1</td>
                                    <td>Row 2, Column 2</td>
                                    <td>Row 2, Column 3</td>
                                </tr>
                                <tr>
                                    <td>Row 3, Column 1</td>
                                    <td>Row 3, Column 2</td>
                                    <td>Row 3, Column 3</td>
                                </tr>
                            </tbody>
                        </table>
                        <Spacer height={64} />
                        <h3>Here is a code snippet</h3>
                        <pre>
                            <code>
                                {`// Props for ContentContainer
type Props = {
    id?: string; // ID for the ContentContainer - (optional)
    className?: string; // Class for the ContentContainer - (optional)
    children: React.ReactNode; // The content to be wrapped
    style?: React.CSSProperties; // Style for the ContentContainer - (optional)
}`}
                            </code>
                        </pre>
                        <Spacer height={64} />
                        <h3>Here is a blockquote</h3>
                        <blockquote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
                            tincidunt lacinia, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet
                            mauris.
                        </blockquote>
                        <Spacer height={64} />
                        <h3>Here is an image</h3>
                        <img src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80" alt="Random Image" />
                        <Spacer height={64} />
                        <h3>Here is a link</h3>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">Google</a>
                        <Spacer height={64} />
                        <h3>Here is a horizontal rule</h3>
                        <hr />
                        <Spacer height={64} />
                        <h3>Here is a paragraph</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec
                            tincidunt lacinia, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet
                            mauris. Donec euismod, nisl nec tincidunt lacinia, nunc nisl aliquam mauris,
                        </p>
                        <Spacer height={64} />
                        <h3>Here are the headings</h3>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                    </TypographyContainer>
                </PageSection>
            </PageContainer>

            {/* Footer */}
            <Footer />
        </div>
    );
}

// TODO:: Repalce images with actual images