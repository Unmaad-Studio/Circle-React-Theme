// Props for page section
type Props = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    lightBackground?: boolean; // Depends on the theme property - [--background-light]. Background can also be changed using the style property.
    style?: React.CSSProperties;
};

/**
 * Page section component, used to wrap items in a page layout.
 * @param props The props for the page section component.
 * @returns {JSX.Element}
 */
export default function PageSection(props: Props): JSX.Element {
    return (
        <section
            id={props.id}
            className={`PageSection ${props.className}`}
            style={{
                ...props.style,
                backgroundColor: props.lightBackground ? 'var(--color-background-light)' : 'var(--color-background)',
            }}
        >
            {props.children}
        </section>
    );
}