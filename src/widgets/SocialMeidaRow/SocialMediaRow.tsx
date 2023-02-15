import "./SocialMediaRow.css";

type SocialMediaItemProps = {
    id?: string;
    className?: string;
    icon: React.ReactNode;
    link: string;
    style?: React.CSSProperties;
};

export function SocialMediaItem(props: SocialMediaItemProps) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            {props.icon}
        </a>
    );
}

type Props = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
};

export default function SocialMediaRow(props: Props) {
    return (
        <div className="SocialMediaRow">
            {props.children}
        </div>
    );
}