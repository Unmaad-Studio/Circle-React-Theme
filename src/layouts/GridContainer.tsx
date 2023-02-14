// Grid container props
type Props = {
    id?: string; // The id to apply to the container - [optional]
    children: React.ReactNode; // The children to render
    className?: string; // The class name to apply to the container - [optional]
    style?: React.CSSProperties; // The style to apply to the container - [optional]
}

/**
 * Grid container component, used to wrap items in a grid layout.
 * 
 * @param id The id to apply to the container.
 * @param children The children to render.
 * @param className The class name to apply to the container.
 * @param style The style to apply to the container.
 * 
 * @returns The grid container component.
 */
export default function GridContainer(props: Props) {
    return (
        <div id={props.id} className={`GridContainer ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
}