// Props for TypographyContainer
type Props = {
    id?: string; // ID for the TypographyContainer - (optional)
    className?: string; // Class for the TypographyContainer - (optional)
    children: React.ReactNode; // The content to be wrapped
    style?: React.CSSProperties; // Style for the TypographyContainer - (optional)
}

/**
 * TypographyContainer is used to wrap the content of a text section.
 * It styles the text to be more readable.
 * 
 * @param children - The content to be wrapped.
 * 
 * @returns {JSX.Element} - The TypographyContainer component.
 */
export default function TypographyContainer(props: Props) {
    // Class Name
    const className = props.className ? props.className + " TypographyContainer" : "TypographyContainer";

    return (
        <div
            id={props.id}
            className={className}
            style={props.style}
        >
            {props.children}
        </div>
    );
}