import "./Card.css";

export enum CardStyle {
    Default = "Default",
    ContentOverlay = "ContentOverlay",
    ContentOverlayVisible = "ContentOverlay Visible",
}

type Props = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    cardImage?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    cardStyle?: CardStyle;
};

/**
 * Card Component
 * @param props The props of the component
 * @returns {JSX.Element}
 */
// TODO:: Add 'CenterContent' prop
// TODO:: Add 'DisableHover' prop
export default function Card(props: Props): JSX.Element {
    // Card Style
    const cardStyle = props.cardStyle ? props.cardStyle : CardStyle.Default;

    // Class Name
    const classNames = "Card" + (props.className ? " " + props.className : "") + " " + cardStyle;

    return (
        <div
            id={props.id}
            className={classNames}
            onClick={props.onClick}
        >
            {/* Card Image */}
            {props.cardImage && (
                <div className="CardImage">
                    <img src={props.cardImage} alt="Card" />
                </div>
            )}

            {/* Overlay */}
            <div className="CardOverlay" />

            {/* Content */}
            <div className="CardContent">
                {props.children}
            </div>
        </div>
    );
}