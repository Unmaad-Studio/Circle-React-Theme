// Work Category Item to be used in Work Categories Container
type WorkCategoryItem = {
    categoryId: string; // ID of the category
    icon: JSX.Element; // Icon of the category
    title: string; // Title of the category
}

// Props for the WorkCategory component
type Props = {
    id?: string; // ID of the component (optional)
    className?: string; // Class name of the component (optional)
    categoryId: string; // ID of the category
    active?: boolean; // Is the category active? 
    icon: JSX.Element; // Icon of the category
    title: string; // Title of the category
    onClick?: () => void; // On click function
    style?: React.CSSProperties; // Style of the component (optional)
};

/**
 * WorkCategory component shows a category for the works section.
 * 
 * @param id ID of the component - [Optional]
 * @param className Class name of the component - [Optional]
 * @param categoryId ID of the category
 * @param active Is the category active? - [Optional]
 * @param icon Icon of the category
 * @param title Title of the category
 * @param onClick On click function - [Optional]
 * @param style Style of the component - [Optional]
 * 
 * @returns {JSX.Element} The WorkCategory component
 */
function WorkCategory(props: Props) {
    return (
        <div
            id={props.id}
            className={"WorkCategoriesItem " + (props.className ? props.className : "") + (props.active ? " active" : "")}
            style={props.style}
            onClick={() => {
                if (props.onClick) {
                    props.onClick();
                }
            }}
        >
            {props.icon}
            <p>{props.title}</p>
        </div>
    );
}

export default WorkCategory;
export type { WorkCategoryItem };