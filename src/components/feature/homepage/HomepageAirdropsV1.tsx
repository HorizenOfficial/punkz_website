import React from "react"
import { SectionContainer } from "../../global/Layout"
import { Body1, H2 } from "../../global/Typography"

interface BoxProps {
    children: React.ReactNode
    className: string
    innerClassName: string
}

const PinkBox: React.FC<BoxProps> = ({
    children,
    className,
    innerClassName,
}) => {
    return (
        <div className={`bg-punkz-pink-2 py-[40px] lg:py-[85px] ${className}`}>
            <div
                className={`flex max-w-[750px] flex-col gap-7 ${innerClassName}`}
            >
                {children}
            </div>
        </div>
    )
}

const BlackBox: React.FC<BoxProps> = ({
    children,
    className,
    innerClassName,
}) => {
    return (
        <div
            className={`bg-punkz-black-1 pb-[40px] pt-[65px] lg:pt-[85px] ${className}`}
        >
            <H2 className={`lg:max-w-[300px] ${innerClassName}`}>{children}</H2>
        </div>
    )
}

const HomepageAirdropsV1: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    const paddingsLeft = "px-6 md:px-12 lg:pl-8 xl:pl-2"
    const paddingsRight = "px-6 md:px-12 lg:pr-8 xl:pr-2"

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props} id="airdrops">
            <SectionContainer>
                <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr] lg:mb-[62px]">
                    <BlackBox
                        className={`lg:pr-[77px] ${paddingsLeft}`}
                        innerClassName="ml-auto lg:text-right"
                    >
                        Initial Airdrops
                    </BlackBox>

                    <PinkBox
                        className={`lg:pl-[47px] ${paddingsRight}`}
                        innerClassName="lg:mr-auto"
                    >
                        <Body1 className="font-bold">
                            TZNY and TCAKE holders as of July 5th 00:00am EST
                            will get a Punkz Token airdrop.
                        </Body1>
                        <Body1>
                            Details about the initial airdrops and schedule are
                            coming soon.
                        </Body1>
                        <Body1>
                            Follow Punkz on Twitter for the latest updates
                        </Body1>
                    </PinkBox>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[65fr,35fr]">
                    <PinkBox
                        className={`lg:pr-[47px] order-2 lg:order-1 ${paddingsLeft}`}
                        innerClassName="lg:ml-auto"
                    >
                        <Body1 className="font-bold">
                            Not TZNY or TCAKE holders? The Punkz Droplist is for
                            you!
                        </Body1>
                        <Body1>
                            It is for anyone who has their wallet address
                            pre-approved and meets other set requirements to
                            receive Punkz airdrops.
                        </Body1>
                        <Body1>
                            Details about how to get on to the Punkz Droplist
                            are coming soon
                        </Body1>
                    </PinkBox>

                    <BlackBox
                        className={`order-1 lg:order-2 lg:pl-[77px] ${paddingsRight}`}
                        innerClassName="lg:mr-auto"
                    >
                        Punkz Droplist
                    </BlackBox>
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageAirdropsV1
