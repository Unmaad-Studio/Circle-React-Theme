import React, { useEffect } from "react";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import IconButton from "../../widgets/IconButton/IconButton";
import Spacer from "../../widgets/Spacer/Spacer";
import "./Testimonial.css";

type Props = {
    id?: string;
    backgroundImage?: string;
    className?: string;
    header?: React.ReactNode;
    children: React.ReactNode;
    showIndicators?: boolean;
    style?: React.CSSProperties;
};

export default function TestimonialContainer(props: Props): JSX.Element {
    // Class Names
    const classNames = "TestimonialContainer" + (props.className ? " " + props.className : "");

    // State
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        // Animate the testimonial
        const testimonial = document.querySelector(".TestimonialContainer__Content .Active");
        if (testimonial !== null) {
            setTimeout(() => {
                // Remove the animation class from all testimonials
                const testimonials = document.querySelectorAll(".TestimonialContainer__Content .Testimonial");
                testimonials.forEach((testimonial) => {
                    testimonial.classList.remove("Animate");
                });

                testimonial.classList.add("Animate");
            }, 100);
        }
    }, [activeIndex]);

    return (
        <div
            id={props.id}
            className={classNames}
            style={{
                ...props.style,
                backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : undefined
            }}
        >
            {/* Header */}
            {props.header && (
                <div className="TestimonialContainer__Header">
                    {props.header}
                </div>
            )}

            {/* Content */}
            <div className="TestimonialContainer__Content">
                {
                    React.Children.map(props.children, (child, index) => {
                        if (index === activeIndex) {
                            return React.cloneElement(child as React.ReactElement, {
                                className: "Active"
                            });
                        }
                        return child;
                    })
                }
            </div>

            {/* Buttons */}
            {
                React.Children.count(props.children) > 1 && (
                    <div className="TestimonialContainer__Buttons">
                        <IconButton
                            onClick={() => {
                                if (activeIndex === 0) {
                                    setActiveIndex(React.Children.count(props.children) - 1);
                                } else {
                                    setActiveIndex(activeIndex - 1);
                                }
                            }}
                        >
                            <HiArrowLeft />
                        </IconButton>
                        <Spacer width={16} />
                        <IconButton onClick={() => {
                            if (activeIndex === React.Children.count(props.children) - 1) {
                                setActiveIndex(0);
                            } else {
                                setActiveIndex(activeIndex + 1);
                            }
                        }}>
                            <HiArrowRight />
                        </IconButton>
                    </div>
                )
            }

            {/* Indicators */}
            {
                React.Children.count(props.children) > 1 && props.showIndicators && (
                    <div className="TestimonialContainer__Indicators">
                        {
                            React.Children.map(props.children, (child, index) => {
                                return (
                                    <div
                                        className={"Indicator" + (index === activeIndex ? " Active" : "")}
                                        onClick={() => setActiveIndex(index)}
                                    />
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
    );
}