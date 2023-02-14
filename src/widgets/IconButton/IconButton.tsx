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
    id?: string;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    type?: IconButtonType;
    style?: React.CSSProperties;
};


/**
 * Icon button component. This component is responsible for rendering an icon
 * button.
 * @param props The props for the icon button component
 * @returns {JSX.Element}
 */
export default function IconButton(props: Props): JSX.Element {
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