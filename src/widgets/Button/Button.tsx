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
    id?: string; // This is the id of the button (optional)
    className?: string; // This is the class name of the button (optional)
    children?: React.ReactNode; // This is the text that will be displayed inside the button (optional)
    onClick?: () => void; // This is the function that will be called when the button is clicked (optional)
    type?: ButtonType; // This is the type of button that will be displayed (optional)
    style?: React.CSSProperties; // This is the style of the button (optional)
};

/**
 * Button component. This component is responsible for rendering a button.
 * 
 * @param id This is the id of the button (optional)
 * @param className This is the class name of the button (optional)
 * @param children This is the text that will be displayed inside the button (optional)
 * @param onClick This is the function that will be called when the button is clicked (optional)
 * @param type This is the type of button that will be displayed (optional)
 * @param style This is the style of the button (optional)
 * 
 * @returns {JSX.Element} The button component
 */
export default function Button(props: Props) {
    const type = props.type ? props.type : ButtonType.Primary;
    const typeClass = type ? "Button " + type : "Button primary" + props.className ? " " + props.className : "";

    return (
        <button id={props.id} className={typeClass} style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    );
}