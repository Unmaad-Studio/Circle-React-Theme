import React from "react";
import Footer from "../sections/Footer/Footer";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import PageContainer from "../layouts/PageContainer";
import PageSection from "../layouts/PageSection";
import "./Documentation.css";

// SVGs
import cursorCircleImage from "../assets/documentation/cursor-circle.svg";
import themeImage from "../assets/documentation/theme.svg";
import emptyPageImage from "../assets/documentation/empty-page.svg";
import emptyPageRouteImage from "../assets/documentation/empty-page-route.svg";
import routesImage from "../assets/documentation/routes.svg";
import servicesCodeImage from "../assets/documentation/services-code-image.svg";
import iconCardPropsImage from "../assets/documentation/icon-card-props.svg";

interface IDocumentationPageProps { };

interface IDocumentationPageState {
    activeSection: string;
    scrollPosition: number;
};

export default class DocumentationPage extends React.Component<IDocumentationPageProps, IDocumentationPageState> {
    constructor(props: IDocumentationPageProps) {
        super(props);
        this.state = {
            activeSection: "introduction",
            scrollPosition: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll(".PageSection");
        const sectionIds = Array.from(sections).map(section => section.id);
        console.log(sectionIds);
        const activeSection = sectionIds.filter(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;
                return scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100;
            }
            return false;
        })[0];
        this.setState({ activeSection, scrollPosition });

        console.log(activeSection);

        // Add active class to the current section in the sidebar
        const sidebarLinks = document.querySelectorAll(".DocumentationSidebar a");
        sidebarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${activeSection}`) {
                console.log(link);
                link.classList.add("active");
            }

            // Add active class to the parent of the current section in the sidebar
            if (link.getAttribute("href") === `#${activeSection}`) {
                link.parentElement?.classList.add("active");
            }
        });
    }

    render() {
        return (
            <div className="DocumentationPage">
                <div className="DocumentationSidebar">
                    <h2>
                        <a href="/">Visit Website</a>
                    </h2>
                    <ul>
                        <li>
                            <a href="#introduction">Introduction</a>
                        </li>
                        <li>
                            <a href="#getting_started">Getting Started</a>
                        </li>
                        <li>
                            <a href="#structure">Structure</a>
                        </li>
                        <li>
                            <a href="#customization">Customization</a>
                            <ul>
                                <li>
                                    <a href="#customization_mouse">Mouse</a>
                                </li>
                                <li>
                                    {/* TODO:: Moving themes to public directory */}
                                    <a href="#customization_theme">Theme</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#create-page">Creating a Page</a>
                        </li>
                        <li>
                            <a href="#routes">Routes</a>
                        </li>
                        <li>
                            <a href="#pages">Pages</a>
                        </li>
                        <li>
                            <a href="#layouts">Layouts</a>
                        </li>
                        <li>
                            <a href="#components">Components</a>
                        </li>
                        <li>
                            <a href="#sections">Sections</a>
                        </li>
                        <li>
                            <a href="#conclusion">Conclusion</a>
                        </li>
                    </ul>
                </div>

                <div className="DocumentationContent">
                    {/* Page Content */}
                    <PageContainer>

                        {/* Introduction */}
                        <PageSection
                            id="introduction"
                            className="section"
                        >
                            <SectionHeader
                                heading="Documentation"
                                subHeading="Get started with Circle Theme by reading the documentation below."
                            />

                            {/* Introduction */}
                            <div className="DocumentationPage__content">
                                <p>
                                    Circle Theme is a React-based theme. It is built using React,
                                    TypeScript, and CSS Modules. It is designed to be easy to use and customize.
                                    This documentation will help you get started with Circle Theme. It will
                                    cover the basics of using Circle Theme, as well as how to customize it.
                                </p>
                                <p>
                                    If you have any questions, feel free to reach out to me on Twitter <a href="https://twitter.com/cold_weathrr" target="_blank" rel="noreferrer">
                                        @cold_weathrr
                                    </a>
                                    . I'm always happy to help!
                                </p>
                            </div>
                        </PageSection>

                        {/* Getting Started */}
                        <PageSection
                            id="getting_started"
                            className="section"
                        >
                            <SectionHeader
                                heading="Getting Started"
                                subHeading="Learn how to get started with Circle Theme."
                            />

                            <div className="DocumentationPage__content">
                                <p>
                                    To get started with Circle Theme, you will need to have Node.js or
                                    Yarn installed.
                                </p>
                                <ul>
                                    <li>
                                        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                                            Node.js
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">
                                            Yarn
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    Once you have those installed, you can open up a terminal in the project
                                    directory and run the following command:
                                </p>
                                <pre>
                                    <code>
                                        yarn install
                                    </code>
                                    <span>or</span>
                                    <code>
                                        npm install
                                    </code>
                                </pre>
                                <p>
                                    Once the dependencies are installed, you can start the development server
                                    by running the following command:
                                </p>
                                <pre>
                                    <code>
                                        yarn start
                                    </code>
                                    <span>or</span>
                                    <code>
                                        npm start
                                    </code>
                                </pre>
                                <p>
                                    This will start the development server on port 3000. You can then
                                    navigate to <code>http://localhost:3000</code> to view the app.
                                </p>
                            </div>
                        </PageSection>

                        {/* Structure */}
                        <PageSection
                            id="structure"
                            className="section"
                        >
                            <SectionHeader
                                heading="Structure"
                                subHeading="Learn about the structure of Circle Theme."
                            />

                            <div className="DocumentationPage__content">
                                <p>
                                    Circle Theme is designed to be easy to customize. To customize the theme,
                                    you'll need to have a basic understanding of HTML, CSS, and JavaScript.
                                </p>
                                <p>
                                    You'll need to edit the files in the <code>src</code> directory.
                                    The <code>src</code> directory contains all of the source code for the theme.
                                    It is organized into the following subdirectories:
                                </p>
                                <ul>
                                    <li>
                                        <code>assets</code> - Contains all of the assets likes images used in the theme.
                                    </li>
                                    <li>
                                        <code>sections</code> - Contains all of the sections required to build
                                        a page.
                                    </li>
                                    <li>
                                        <code>pages</code> - Contains all of the pages, such as the home page
                                        and the about page.
                                    </li>
                                    <li>
                                        <code>styles</code> - Contains all of the styles used in the theme.
                                    </li>
                                </ul>
                                <p>
                                    There are few more directories in the <code>src</code> directory. If you are
                                    not going to be making any major changes to the theme, you will not need to
                                    edit any of the files in these directories:
                                </p>
                                <ul>
                                    <li>
                                        <code>components</code> - Components are the building blocks of the theme. They are the
                                        individual pieces that make up the theme.
                                    </li>
                                    <li>
                                        <code>widgets</code> - Contains the smallest pieces of the theme, such as
                                        buttons and inputs.
                                    </li>
                                    <li>
                                        <code>layouts</code> - Contains all of the bigger sections of the theme.
                                        Layouts are mostly used to style and position different parts of the
                                        theme. This is the least likely directory that you will need to edit.
                                    </li>
                                    <li>
                                        <code>Documentation</code> - Contains the documentation for the theme.
                                        This page you are currently reading, exists in this directory.
                                    </li>
                                </ul>
                                <p>
                                    Apart from these directories, there are a few other files in the <code>src</code> directory.
                                    These files are the entry point for the theme, <code>index.tsx</code> and
                                    the <code>App.tsx</code> file.
                                </p>
                                <p>
                                    Another file <code>themes.ts</code> is used to store the different themes
                                    and the files that are used to build each theme. You can add your own
                                    themes to this file.
                                </p>
                            </div>
                        </PageSection>

                        {/* Customization */}
                        <PageSection
                            id="customization"
                            className="section"
                        >
                            <SectionHeader
                                heading="Customization"
                                subHeading="Learn how to customize Circle Theme."
                            />

                            {/* 1. Mouse */}
                            <div className="DocumentationPage__content">
                                <h2>
                                    <a href="#customization_mouse" id="customization_mouse">
                                        Mouse
                                    </a>
                                </h2>
                                <p>
                                    The mouse is the first thing you'll want to customize. Navigate to <code>src</code> directory
                                    and open the <code>index.tsx</code> file. You'll
                                    see the following code:
                                </p>
                                <br />
                                <img src={cursorCircleImage} alt="Cursor Circle" />
                                <br />
                                <p>
                                    You can enable or disable the mouse indicator by removing
                                    or adding the <code>cursorCircle</code> attribute to the <code>App</code> component.
                                </p>
                            </div>

                            {/* 2. Theme */}
                            <div id="structure" className="DocumentationPage__content">
                                <h2>
                                    <a href="#customization_theme" id="customization_theme">
                                        Theme
                                    </a>
                                </h2>
                                <p>
                                    The theme is the next thing you'll want to customize. Navigate to <code>public/themes</code> directory
                                    and open the <code>circle-theme.css</code> file. You'll see the following code:
                                </p>
                                <br />
                                <img src={themeImage} alt="Theme" />
                                <br />
                                <p>
                                    You can change the theme by changing the values of the CSS variables. Simply
                                    change the values of the CSS variables to your liking. Try changing the
                                    <code>--color-primary</code> variable to <code>#ff4800</code> to see the changes.
                                </p>
                                <p>
                                    You can also add your own themes to the <code>themes.ts</code> file.
                                    Simply add the name of the theme and the CSS file name for the theme
                                    to it, and you're good to go. It will be automatically added to the
                                    theme switcher.
                                </p>
                            </div>

                        </PageSection>

                        {/* Creating a Page */}
                        <PageSection
                            id="create-page"
                            className="section"
                        >
                            <SectionHeader
                                heading="Creating a Page"
                                subHeading="Learn how to create a page in Circle Theme."
                            />


                            <div className="DocumentationPage__content">
                                <p>
                                    Circle Theme is designed using 'React-Routers'. To create a new page, you'll need to
                                    create a new file in the <code>src/pages</code> directory. The file name should be the
                                    name of the page. For example, if you want to create a page called 'EmptyPage', you'll need
                                    to create a file called <code>EmptyPage.tsx</code> in the <code>src/pages</code> directory.
                                </p>
                                <p>
                                    The file should contain the following code:
                                </p>
                                <br />
                                <img src={emptyPageImage} alt="Empty Page" />
                                <br />
                                <p>
                                    Adding these few lines of code will create a new page in the theme. This page will
                                    contain the header, footer, and the page container. You can add your own content
                                    inside the <code>PageContainer</code> component.
                                </p>
                                <p>
                                    To add a link to the page, you'll need to add a new route in the <code>src/Router.tsx</code> file.
                                    The route should contain the following code:
                                </p>
                                <br />
                                <img src={emptyPageRouteImage} alt="Empty Page Route" />
                                <br />
                                <p>
                                    The <code>path</code> attribute should be the name of the page. For example, if you
                                    want to create a page called 'EmptyPage', the <code>path</code> attribute should be
                                    <code>/empty-page</code>. And in the <code>component</code> attribute, you should
                                    add the page component that you created in the previous step.
                                </p>
                                <p>
                                    And that's it! You've created a new page in the theme.
                                    You can now navigate to the page by going to <code>http://localhost:3000/empty-page</code>.
                                    You can also add new components to the page. You will be learning about components in
                                    later sections.
                                </p>
                                <p>
                                    The empty page created in the previous step already contains the "SectionHeader"
                                    and "PageSection" components. You can use these components to create new sections
                                    in the page. The "SectionHeader" component is used to add a heading and a subheading
                                    to the section.
                                </p>
                            </div>
                        </PageSection>

                        {/* Routes */}
                        <PageSection
                            id="routes"
                            className="section"
                        >
                            <SectionHeader
                                heading="Routes"
                                subHeading="Learn how to use the routes in Circle Theme."
                            />


                            <div className="DocumentationPage__content">
                                <p>
                                    Just like we created a new page in the previous section, we can open
                                    the <code>src/Router.tsx</code> file and add a new route to the theme.
                                    There are already a few routes created in the theme. You can use these routes
                                    to navigate to the different pages in the theme.
                                </p>
                                <br />
                                <img src={routesImage} alt="Routes" />
                                <br />
                                <p>
                                    To learn more about "React-Router", you can visit the official documentation
                                    <a href="https://reactrouter.com" target="_blank" rel="noreferrer"> here</a>.
                                </p>
                            </div>
                        </PageSection>

                        {/* Pages */}
                        <PageSection
                            id="pages"
                            className="section"
                        >
                            <SectionHeader
                                heading="Pages"
                                subHeading="Learn how to use the pages in Circle Theme."
                            />


                            <div className="DocumentationPage__content">
                                <p>
                                    In the <code>src/pages</code> directory, you'll find a few pages already created in the theme.
                                    You can edit these pages to add your own content. You can also create new pages
                                    using the content from these pages.
                                </p>
                                <p>
                                    All pages use components to create the sections. You can use these components
                                    to create new sections in the pages. To learn more about components, after
                                    the layouts section.
                                </p>
                            </div>
                        </PageSection>

                        {/* Layouts */}
                        <PageSection
                            id="layouts"
                            className="section"
                        >
                            <SectionHeader
                                heading="Layouts"
                                subHeading="Learn how to use the layouts in Circle Theme."
                            />


                            <div className="DocumentationPage__content">
                                <p>
                                    In the <code>src/layouts</code> directory, you'll find a few layouts
                                    ready to be used in building your website. Layouts are used to
                                    arrange or position the components in the page. You can use these
                                    layouts to create new pages in the theme.
                                </p>
                                <p>
                                    Let's take a look at the layouts and what are their uses.
                                </p>
                                <ul>
                                    <li>
                                        <code>PageContainer</code> - This layout is used to wrap the content of the page.
                                        It prevents the content from expanding to the full width of the page if the
                                        window is too wide. All pages in the theme use this layout.
                                    </li>
                                    <li>
                                        <code>PageSection</code> - This layout is used to create a new section in the page.
                                        It adds a top and bottom margin to the section. All pages in the theme use this
                                        layout.
                                    </li>
                                    <li>
                                        <code>GridContainer</code> - This layout is used to arrange the components in a grid.
                                        It will arrange the components in a 3 column grid. You can also provide
                                        custom number of columns to the layout.
                                    </li>
                                </ul>
                                <p>
                                    When we created the "EmptyPage" in the previous section, we used the
                                    "PageContainer" and "PageSection" layouts. Let's take a look at the code.
                                </p>
                                <br />
                                <img src={emptyPageImage} alt="Empty Page" />
                                <br />
                            </div>
                        </PageSection>


                        {/* Components */}
                        <PageSection
                            id="components"
                            className="section"
                        >
                            <SectionHeader
                                heading="Components"
                                subHeading="Learn how to use the components in Circle Theme."
                            />


                            <div className="DocumentationPage__content">
                                <p>
                                    There are a few components already created in the theme. You can use these components
                                    to add to your newly created page. The components are located in the <code>src/components</code> directory.
                                </p>
                                <p>
                                    Let's try to add a new section to the empty page created in the previous steps. If you
                                    open the <code>src/pages/ServicesPage/ServicesPage.tsx</code> file, you'll see that the page already
                                    contains a few sections. And there is an example of using "GridContainer" layout and "IconCard" component.
                                </p>
                                <br />
                                <img src={servicesCodeImage} alt="Services Code" />
                                <br />
                                <p>
                                    And if you open the <code>src/components/IconCard/IconCard.tsx</code>
                                </p>
                                <br />
                                <img src={iconCardPropsImage} alt="Icon Card Props" />
                                <br />
                                <p>
                                    You will see an 'interface' called "IconCardProps", which contains the properties
                                    that can be passed to the component.
                                </p>
                                <p>
                                    Similar to the "IconCard" components, all other components also have an interface
                                    too which contains the properties that can be passed to the component. Now all
                                    you have to do is call the component and pass the required properties to it.
                                    And that's it, you have created a new section in the page.
                                </p>
                            </div>
                        </PageSection>


                        {/* Sections */}
                        <PageSection
                            id="sections"
                            className="section"
                        >
                            <SectionHeader
                                heading="Sections"
                                subHeading="Learn how to use the sections in Circle Theme."
                            />


                            <div className="DocumentationPage__content">
                                <p>
                                    Apart from all these components, there are a few more components that
                                    are placed in the <code>src/sections</code> directory. These components
                                    are meant to be directly edited and used in the pages, instead of calling
                                    the components directly and passing the properties to it. This is to
                                    make it easier to edit these components to suit your needs.
                                </p>
                                <p>
                                    Browse through the <code>src/sections</code> directory to see all the
                                    sections that are available in the theme.
                                </p>
                                <p>
                                    All sections are built using the components that are available in the
                                    theme, mixed with some custom code to suit the needs of the section.
                                </p>
                            </div>
                        </PageSection>

                        {/* Conclusion */}
                        <PageSection
                            id="conclusion"
                            className="section"
                        >
                            <SectionHeader
                                heading="Conclusion"
                                subHeading="Finally, you have learned how to use the theme."
                            />


                            <div className="DocumentationPage__content">
                                <p>
                                    You have learned how to use the layouts, components and sections in the theme.
                                    You can use these to create new pages in the theme. You can also use these
                                    to edit the existing pages in the theme.
                                </p>
                                <p>
                                    If you have any questions, feel free to reach out to me on Twitter <a href="https://twitter.com/cold_weathrr" target="_blank" rel="noreferrer">
                                        @cold_weathrr
                                    </a>
                                </p>
                                <p>
                                    If you like the theme, please consider rating the theme.
                                </p>
                                <p>
                                    I will be adding more components and features to the theme in the future.
                                    So stay tuned for more updates.
                                </p>
                                <p>
                                    Thank you for using Circle Theme.
                                </p>
                            </div>
                        </PageSection>

                    </PageContainer>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        );
    }
}