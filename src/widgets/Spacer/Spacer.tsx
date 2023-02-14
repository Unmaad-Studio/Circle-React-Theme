// Props for Spacer
type Props = {
    height?: number;
    width?: number;
};

/**
 * Spacer component. This component is responsible for adding space between
 * other components.
 * 
 * @param props.height The height of the spacer
 * @param props.width The width of the spacer
 * 
 * @returns The spacer component
 */
export default function Spacer(props: Props) {
    const width = props.width ? props.width : 1;
    const height = props.height ? props.height : 1;
    const display = props.height || props.width ? "block" : "inline-block";

    return (
        <div style={{ height: height, width: width, display: display }}></div>
    );
}