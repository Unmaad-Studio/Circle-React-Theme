// Props for page container
type Props = {
    id?: string; // The id to apply to the container - [optional]
    children: React.ReactNode; // The children to render
    className?: string; // The class name to apply to the container - [optional]
    style?: React.CSSProperties; // The style to apply to the container - [optional]
};


/**
 * Page container component, used to wrap items in a page layout.
 * 
 * @param id The id to apply to the container.
 * @param children The children to render.
 * @param className The class name to apply to the container.
 * @param style The style to apply to the container.
 * 
 * @returns The page container component.
 */
export default function PageContainer(props: Props) {
    // Class names
    const classNames = `PageContainer ${props.className}`;

    return (
        <div id={props.id} className={classNames} style={props.style}>
            <div className="PageInnerContainer">
                {props.children}
            </div>
        </div>
    );
}