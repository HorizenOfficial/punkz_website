import React from "react"
import { twMerge } from "tailwind-merge"
import ButtonPrimary from "../../global/Button/ButtonPrimary"
import CheckMarkGrafiti from "../../global/Icon/CheckMarkGrafiti"
import { Body1, H2 } from "../../global/Typography"

const OptInSuccessPageBody: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className, ...props }) => {
    return (
        <section
            className={twMerge(
                "px-6 md:px-12 lg:px-8 h-[65vh] md:h-[calc(100vh-374px)] lg:h-[calc(100vh-462px)] flex flex-col justify-center items-center",
                className
            )}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            <CheckMarkGrafiti />
            <H2 className="mt-7">Thank you</H2>
            <Body1 className="mt-2 text-gray">You are now subscribed!</Body1>
            <ButtonPrimary href="/" target="_self" className="mt-14">
                Back to Homepage
            </ButtonPrimary>
        </section>
    )
}

export default OptInSuccessPageBody
