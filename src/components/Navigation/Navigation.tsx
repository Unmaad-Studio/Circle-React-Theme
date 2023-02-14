import { Component } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import IconButton, { IconButtonType } from "../../widgets/IconButton/IconButton";
import NavMenuItem from "./NavMenuItem";
import "./Navigation.css";

type Props = {
    title: string; // The title of the navigation bar
    menuItems: NavMenuItem[]; // The menu items that will be displayed in the navigation bar
    actions: JSX.Element[]; // The actions that will be displayed in the navigation bar on the right side
};

type State = {
    activeRoute: string; // This will be used to determine which menu item is active
    mobileMenuOpen: boolean; // This will be used to determine if the mobile menu is open or not
};

export default class Navigation extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeRoute: window.location.pathname,
            mobileMenuOpen: false
        };
    }

    render() {
        return (
            <>
                {/* The navigation bar will be displayed as a div with the class "NavigationBar" */}
                <header className="NavigationBar">

                    {/* Responsive Wrapper */}
                    <div className="NavigationBarInnerContainer">

                        {/* Logo */}
                        <div className="NavLogo">
                            <a href="/">
                                {this.props.title}
                            </a>
                        </div>

                        {/* Menu */}
                        <div className="NavMenu">
                            <ul>
                                {
                                    this.props.menuItems.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={item.href} className={this.state.activeRoute === item.href ? "active" : ""}>
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
                                    this.props.actions.map((action, index) => {
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
                                onClick={() => this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })}
                            >
                                {
                                    this.state.mobileMenuOpen ?
                                        <HiX /> :
                                        <HiMenu />
                                }
                            </IconButton>
                        </div>
                    </div>
                </header>

                {/* Mobile Nav Menu */}
                <div className={`MobileNavMenu ${this.state.mobileMenuOpen ? "open" : ""}`}>
                    <ul className="MobileNavLinks">
                        {
                            this.props.menuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.href} className={this.state.activeRoute === item.href ? "active" : ""}>
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <ul className="MobileNavActions">
                        {
                            this.props.actions.map((action, index) => {
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
                <div className="NavigationBarSpacer" />
            </>
        );
    }
}