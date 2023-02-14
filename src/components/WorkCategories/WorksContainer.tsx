import React from "react";
import WorkCategories from "./WorkCategories";
import WorkCategory, { WorkCategoryItem } from "./WorkCategoryItem";
import GridContainer from "../../layouts/GridContainer";
import Spacer from "../../widgets/Spacer/Spacer";
import Card, { CardStyle } from "../Card/Card";

export type WorkCardData = {
    id?: string; // ID of the work card - [Optional]
    className?: string; // Class of the work card - [Optional]
    title: string; // Title of the work card
    categoryId: string; // ID of the category of the work card
    image: string; // Image of the work card
    link: string; // Link to the work card
    style?: React.CSSProperties; // Style of the work card - [Optional]
    centerContent?: boolean; // Whether to center the content of the work card - [Optional]
};

interface Props {
    categories: WorkCategoryItem[];
    cardsData: WorkCardData[];
};

interface State {
    activeCategory: string;
};

export default class WorksContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeCategory: "web-development"
        };
    }

    render() {
        return (
            <>
                <WorkCategories
                    activeCategory="web-development"
                >
                    {/* All category */}
                    <WorkCategory
                        active={this.state.activeCategory === "all"}
                        categoryId="all"
                        icon={<></>}
                        title="All"
                        onClick={() => {
                            this.setState({
                                activeCategory: "all"
                            });
                        }}
                    />

                    {/* Rest of categories */}
                    {
                        this.props.categories.map((category, index) => {
                            return (
                                <WorkCategory
                                    key={index}
                                    active={this.state.activeCategory === category.categoryId}
                                    categoryId={category.categoryId}
                                    icon={category.icon}
                                    title={category.title}
                                    onClick={() => {
                                        this.setState({
                                            activeCategory: category.categoryId
                                        });
                                    }}
                                />
                            );
                        })
                    }
                </WorkCategories>

                <Spacer height={32} />

                <GridContainer>
                    {
                        this.props.cardsData.map((child, index) => {
                            if (child.categoryId !== this.state.activeCategory && this.state.activeCategory !== "all") return (<></>);
                            return (
                                <Card cardImage={child.image} cardStyle={CardStyle.ContentOverlay}>
                                    <h3>{child.title}</h3>
                                </Card>
                            );
                        })
                    }
                </GridContainer>
            </>
        );
    }
}