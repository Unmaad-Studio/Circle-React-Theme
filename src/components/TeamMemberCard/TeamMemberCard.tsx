import "./TeamMemberCard.css"

type Props = {
    id?: string; // ID of the element
    className?: string; // Class of the element
    name: string; // Name of the team member
    title: string; // Title of the team member
    image: string; // Image of the team member
    description: string; // Description of the team member
    style?: React.CSSProperties; // Style of the element
    centerContent?: boolean; // Center the content
}

/**
 * TeamMemberCard component for displaying a team member in a card format.
 * 
 * @param id ID of the element - [Optional]
 * @param className Class of the element - [Optional]
 * @param name Name of the team member
 * @param title Title of the team member
 * @param image Image of the team member
 * @param description Description of the team member
 * @param style Style of the element - [Optional]
 * @param centerContent Center the content - [Optional]
 * 
 * @returns The TeamMemberCard component
 */
export default function TeamMemberCard(props: Props) {
    // Class name
    const className = "TeamMemberCard " + (props.className ? props.className : "") + (props.centerContent ? " CenterContent" : "");

    return (
        <div className={className}>
            <div className="TeamMemberCardImageContainer">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="TeamMemberCardTextContainer">
                <h3>{props.name}</h3>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}