import "./WorkCategories.css";

// Props for the WorkCategories component
type Props = {
    id?: string; // ID of the component (optional)
    className?: string; // Class name of the component (optional)
    activeCategory: string; // ID of the active category
    children: React.ReactNode; // Children of the component
    style?: React.CSSProperties; // Style of the component (optional)
};

/**
 * WorkCategories component shows a list of categories for the works section.
 * 
 * @param id ID of the component - [Optional]
 * @param className Class name of the component - [Optional]
 * @param activeCategory ID of the active category
 * @param children Children of the component
 * @param style Style of the component - [Optional]
 * 
 * @returns {JSX.Element} The WorkCategories component
 */
export default function WorkCategories(props: Props) {
    return (
        <div className="WorkCategories">
            <div className="WorkCategoriesList">
                {props.children}
            </div>
        </div>
    );
}