import "./Seperator.css";

type Props = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    height?: number;
    spacing?: number;
};

export default function Seperator(props: Props) {
    // Get the height
    const height = props.height ? props.height : 1;

    // Get the spacing
    const spacing = props.spacing ? props.spacing : 0;

    // Generate classNames
    const classNames = `seperator ${props.className ? props.className : ""}`;

    return (
        <div
            id={props.id}
            className={classNames}
            style={{
                ...props.style,
                height: `${height}px`,
                marginTop: `${spacing}px`,
                marginBottom: `${spacing}px`
            }}
        />
    );
}