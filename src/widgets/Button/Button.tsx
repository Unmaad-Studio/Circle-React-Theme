import React from "react";
import "./Button.css";

// Button types
export enum ButtonType {
    Primary = "primary",
    Soft = "soft",
    Outlined = "outlined",
}

// Props for Button
type Props = {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    type?: ButtonType;
    style?: React.CSSProperties;
};

/**
 * Button component. This component is responsible for rendering a button.
 * @param props The props for the button component
 * @returns {JSX.Element}
 */
export default function Button(props: Props): JSX.Element {
    const type = props.type ? props.type : ButtonType.Primary;
    const typeClass = type ? "Button " + type : "Button primary" + props.className ? " " + props.className : "";

    return (
        <button id={props.id} className={typeClass} style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    );
}