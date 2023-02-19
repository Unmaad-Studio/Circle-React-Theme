import "./Testimonial.css";

type Props = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    name: string;
    designation: string;
    content: string;
    image: string;
};

export default function Testimonial(props: Props): JSX.Element {
    // Class Names
    const classNames = "Testimonial" + (props.className ? " " + props.className : "");

    return (
        <div
            id={props.id}
            className={classNames}
            style={props.style}
        >
            <div className="Testimonial__Content">
                <p>{props.content}</p>
            </div>

            <div className="Testimonial__Person">
                <div className="Testimonial__Person__Image">
                    <img src={props.image} alt="Testimonial" />
                </div>
                <h4>{props.name}</h4>
                <p>{props.designation}</p>
            </div>
        </div>
    );
}