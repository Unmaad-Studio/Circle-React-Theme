// Props for page section
type Props = {
    id?: string; // The id to apply to the container - [optional]
    className?: string; // The class name to apply to the container - [optional]
    children: React.ReactNode; // The children to render
    style?: React.CSSProperties; // The style to apply to the container - [optional]
};

/**
 * Page section component, used to wrap items in a page layout.
 * 
 * @param id The id to apply to the container.
 * @param children The children to render.
 * @param className The class name to apply to the container.
 * @param style The style to apply to the container.
 * 
 * @returns The page section component.
 */
export default function PageSection(props: Props) {
    return (
        <section
            id={props.id}
            className={`PageSection ${props.className}`}
            style={props.style}
        >
            {props.children}
        </section>
    );
}