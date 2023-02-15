import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import IconButton, { IconButtonType } from "../../widgets/IconButton/IconButton";
import NavMenuItem from "./NavMenuItem";
import "./Navigation.css";

type Props = {
    title: string;
    menuItems: NavMenuItem[];
    actions: JSX.Element[];
    pageSpacer?: boolean;
};

export default function Navigation(props: Props): JSX.Element {
    // State
    const activeRoute = window.location.pathname;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Event Handlers
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Effects
    window.addEventListener("scroll", handleScroll);

    // Scrolled class
    const scrolledClass = scrolled ? "scrolled" : "";

    return (
        <>
            {/* The navigation bar will be displayed as a div with the class "NavigationBar" */}
            <header className={"NavigationBar " + scrolledClass}>

                {/* Responsive Wrapper */}
                <div className="NavigationBarInnerContainer">

                    {/* Logo */}
                    <div className="NavLogo">
                        <a href="/">
                            {props.title}
                        </a>
                    </div>

                    {/* Menu */}
                    <div className="NavMenu">
                        <ul>
                            {
                                props.menuItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.href} className={activeRoute === item.href ? "active" : ""}>
                                                {item.label}
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="NavActions">
                        <ul>
                            {
                                props.actions.map((action, index) => {
                                    return (
                                        <li key={index}>
                                            {action}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    {/* Mobile Nav Button */}
                    <div className="NavMobileButton">
                        <IconButton
                            type={IconButtonType.Solid}
                            onClick={() => {
                                setMobileMenuOpen(!mobileMenuOpen);
                            }}
                        >
                            {
                                mobileMenuOpen ?
                                    <HiX /> :
                                    <HiMenu />
                            }
                        </IconButton>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Menu */}
            <div className={`MobileNavMenu ${mobileMenuOpen ? "open" : ""}`}>
                <ul className="MobileNavLinks">
                    {
                        props.menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.href} className={activeRoute === item.href ? "active" : ""}>
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                <ul className="MobileNavActions">
                    {
                        props.actions.map((action, index) => {
                            return (
                                <li key={index}>
                                    {action}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            {/* Navigation Spacer */}
            {
                props.pageSpacer && (
                    <div className="NavigationBarSpacer" />
                )
            }
        </>
    );
}