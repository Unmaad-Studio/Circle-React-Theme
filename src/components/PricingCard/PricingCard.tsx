import { HiCheck } from "react-icons/hi";
import Spacer from "../../widgets/Spacer/Spacer";
import Card from "../Card/Card";
import "./PricingCard.css";

type Props = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    title: string;
    price: string;
    features: string[];
    actions?: React.ReactNode;
};

/**
 * Pricing Card Component
 * @param props The props of the component
 * @returns {JSX.Element}
 */
// TODO:: Add a prop to highlight the card
export default function PricingCard(props: Props): JSX.Element {
    return (
        <Card className="PricingCard">
            <div className="PricingCard__header">
                {
                    props.icon && (
                        <>
                            <Spacer height={8} />
                            <div className="PricingCard__icon">
                                {props.icon}
                            </div>
                            <Spacer height={16} />
                        </>
                    )
                }
                <h2 className="PricingCard__title">{props.title}</h2>
                <p className="PricingCard__price">{props.price}</p>
            </div>

            <Spacer height={32} />

            <div className="PricingCard__content">
                <ul className="PricingCard__list">
                    {
                        props.features.map((feature, index) => (
                            <li key={index} className="PricingCard__list-item">
                                <HiCheck />
                                {feature}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <Spacer height={32} />

            <div className="PricingCard__footer">
                {props.actions}
            </div>
        </Card>
    );
}