import React from "react";
import "./IconButton.css";

// Button types
export enum IconButtonType {
    Primary = "primary",
    Solid = "solid",
    Soft = "soft",
    Outlined = "outlined",
}

// Props for IconButton
type Props = {
    id?: string; // The id of the button (optional)
    className?: string; // The class name of the button (optional)
    children: React.ReactNode; // The content for the button
    onClick?: () => void; // The click handler for the button (optional)
    type?: IconButtonType; // The type of the button (optional)
    style?: React.CSSProperties; // The style of the button (optional)
};


/**
 * Icon button component. This component is responsible for rendering an icon
 * button.
 * 
 * @param children The content for the button
 * @param onClick The click handler for the button
 * @param type The type of the button
 * 
 * @returns {JSX.Element} The icon button component
 */
export default function IconButton(props: Props) {
    const type = props.type ? props.type : IconButtonType.Primary;

    const typeClass = type ? "IconButton " + type : "IconButton primary" + props.className ? " " + props.className : "";

    return (
        <button
            id={props.id}
            className={typeClass}
            onClick={props.onClick}
            style={props.style}
        >
            {props.children}
        </button>
    );
}