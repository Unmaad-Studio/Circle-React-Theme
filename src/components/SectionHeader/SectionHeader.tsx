import React from "react";
import "./SectionHeader.css";

type Props = {
    id?: string;
    className?: string;
    heading: string;
    subHeading?: string;
    actionUrl?: string;
    actionText?: string;
    centerContent?: boolean;
    style?: React.CSSProperties;
};

/**
 * SectionHeader - A component that displays a section header with an optional action button.
 * @param props The props of the component.
 * @returns {JSX.Element}
 */
export default function SectionHeader(props: Props): JSX.Element {
    const headerClass = props.centerContent ? "SectionHeader CenterContent" : "SectionHeader";

    return (
        <div id={props.id} className={headerClass} style={props.style}>
            <div className="Left">
                <h2 className="SectionHeaderTitle">{props.heading}</h2>
                {
                    props.subHeading &&
                    <p className="SectionHeaderSubtitle">{props.subHeading}</p>
                }
            </div>
            <div className="Right">
                {
                    props.actionUrl &&
                    <a href={props.actionUrl} className="SectionHeaderAction">
                        {props.actionText || "View More"}
                    </a>
                }
            </div>
        </div>
    );
}