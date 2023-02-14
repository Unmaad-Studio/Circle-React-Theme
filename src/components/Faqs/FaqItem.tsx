import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

// Props for FaqItem
type Props = {
    id?: string; // This is the id of the FAQ item (optional)
    className?: string; // This is the class name of the FAQ item (optional)
    question: string; // This is the question of the FAQ item
    answer: string; // This is the answer of the FAQ item
    style?: React.CSSProperties; // This is the style of the FAQ item (optional)
};

/**
 * FaqItem component. This component is responsible for rendering a FAQ item.
 * 
 * @param id This is the id of the FAQ item (optional)
 * @param className This is the class name of the FAQ item (optional)
 * @param question This is the question of the FAQ item
 * @param answer This is the answer of the FAQ item
 * @param style This is the style of the FAQ item (optional)
 * 
 * @returns {JSX.Element} The FAQ item component
 */
export default function FaqItem(props: Props) {
    // Class Name
    const className = props.className ? "FaqItem " + props.className : "FaqItem";

    // Check if expanded
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div id={props.id} className={className} style={props.style}>
            <div
                className="FaqItem__question"
                onClick={() => setExpanded(!expanded)}
            >
                <h3>{props.question}</h3>
                <button>
                    <HiOutlineChevronDown
                        style={{
                            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                    />
                </button>
            </div>
            <div
                className="FaqItem__answer"
                style={{
                    transform: expanded ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                    opacity: expanded ? 1 : 0,
                    height: expanded ? "initial" : 0,
                }}
            >
                <p>{props.answer}</p>
            </div>
        </div>
    );
}