import Button, { ButtonType } from "../../widgets/Button/Button";

// Import the icons that will be used in the navigation bar
import { HiChat, HiCloud } from "react-icons/hi";
import IconButton, { IconButtonType } from "../../widgets/IconButton/IconButton";
import Navigation from "../../components/Navigation/Navigation";

type Props = {
    pageSpacer?: boolean;
};

/**
 * This is the navigation bar that will be displayed at the top of every page.
 * It will contain the logo, the menu, and the actions.
 * 
 * @returns The navigation bar component.
 */
export default function NavigationBar(props: Props): JSX.Element {
    return (
        <Navigation
            title="Circle Theme"
            menuItems={[
                {
                    label: "Home",
                    href: "/"
                },
                {
                    label: "Services",
                    href: "/services"
                },
                {
                    label: "About",
                    href: "/about"
                },
                {
                    label: "Blogs",
                    href: "/blogs"
                },
                {
                    label: "Contact",
                    href: "/contact"
                }
            ]}
            actions={[
                <Button
                    type={ButtonType.Outlined}
                    onClick={() => {
                        // Redirect to the GitHub repository in a new tab
                        window.open("https://github.com/Unmaad-Studio/Circle-React-Theme", "_blank");
                    }}
                >
                    Download Now
                    <HiCloud />
                </Button>,
                <IconButton type={IconButtonType.Solid}>
                    <HiChat />
                </IconButton>
            ]}
            pageSpacer={props.pageSpacer}
        />
    );
}