// Props for Spacer
type Props = {
    height?: number;
    width?: number;
};

/**
 * Spacer component. This component is responsible for adding space between
 * other components.
 * @param props The props for the spacer component
 * @returns {JSX.Element}
 */
export default function Spacer(props: Props): JSX.Element {
    const width = props.width ? props.width : 1;
    const height = props.height ? props.height : 1;
    const display = props.height || props.width ? "block" : "inline-block";

    return (
        <div style={{ height: height, width: width, display: display }}></div>
    );
}