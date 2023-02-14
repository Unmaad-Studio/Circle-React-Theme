import "./CtaBox.css";

type Props = {
    id?: string;
    className?: string;
    title: string;
    description: string;
    image: string;
    button: JSX.Element;
    style?: React.CSSProperties;
}

/**
 * CTA Box Component
 * @param props The props of the component
 * @returns {JSX.Element}
 */
export default function CtaBox(props: Props): JSX.Element {
    // Class Name
    const classNames = "CtaBox" + (props.className ? " " + props.className : "");

    return (
        <div className={classNames}>
            <div className="CtaBox-Content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                {props.button}
            </div>
            <div className="CtaBox-Image">
                <img src={props.image} alt="CTA" />
            </div>
        </div>
    );
}