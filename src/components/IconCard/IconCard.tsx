import React from "react";
import "./IconCard.css";

// Props for the IconCard component
type Props = {
    id?: string;
    className?: string;
    icon: React.ReactNode;
    heading: string;
    content: string;
    onClick?: () => void;
    centerContent?: boolean;
    style?: React.CSSProperties;
};

/**
 * IconCard component for displaying an icon, heading, and content.
 * @param props The props of the component.
 * @returns {JSX.Element}
 */
export default function IconCard(props: Props) {
    // Class name
    const className = "IconCard " + (props.className ? props.className : "") + (props.centerContent ? " CenterContent" : "");

    return (
        <div
            id={props.id}
            className={className}
            onClick={props.onClick}
            style={props.style}
        >
            <div className="IconCardIcon">
                {props.icon}
            </div>
            <div className="IconCardContent">
                <h3>{props.heading}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    );
}