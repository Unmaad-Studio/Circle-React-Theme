import "./Faqs.css"

// Props for Faqs
type Props = {
    id?: string; // This is the id of the FAQs (optional)
    className?: string; // This is the class name of the FAQs (optional)
    children: React.ReactNode; // This is the content for the FAQs
    style?: React.CSSProperties; // This is the style of the FAQs (optional)
};

/**
 * Faqs component. This component is responsible for rendering the FAQs.
 * Important Note: Faqs component only works with Faq Items as children.
 * 
 * @param id This is the id of the FAQs (optional)
 * @param className This is the class name of the FAQs (optional)
 * @param children This is the content for the FAQs
 * @param style This is the style of the FAQs (optional)
 * 
 * @returns {JSX.Element} The FAQs component
 */
export default function Faqs(props: Props) {
    // Class name
    const className = props.className ? "Faqs " + props.className : "Faqs";

    return (
        <div id={props.id} className={className} style={props.style}>
            {props.children}
        </div>
    );
}