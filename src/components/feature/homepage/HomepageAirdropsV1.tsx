import React from "react"
import TwitterLogoSmall from "../../global/Icon/TwitterLogoSmall"
import { SectionContainer } from "../../global/Layout"
import { Body1, H2 } from "../../global/Typography"
import { BigBox, SmallBox } from "./HomepageAirdropsV1Boxes"
import { BottomCut, TopCut } from "./HomepageAirdropsV1Cuts"

const HomepageAirdropsV1: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    const paddingsLeft = "px-6 md:px-12 lg:pl-8 xl:pl-2"
    const paddingsRight = "px-6 md:px-12 lg:pr-8 xl:pr-2"

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props} id="airdrops">
            <SectionContainer>
                <div className="relative lg:h-[440px] bg-punkz-dark-blue-1 grid grid-cols-1 lg:grid-cols-[35fr,65fr]">
                    <TopCut className="hidden lg:block absolute top-0 left-0 w-[20%]" />
                    <SmallBox
                        className={`lg:pr-[77px] bg-punkz-pink-2 ${paddingsLeft}`}
                    >
                        <H2 className="lg:max-w-[300px] lg:ml-auto lg:text-right">
                            Initial Airdrops
                        </H2>
                    </SmallBox>
                    <BigBox
                        className={`lg:pl-[47px] ${paddingsRight}`}
                        innerClassName="lg:mr-auto"
                    >
                        <Body1 className="font-bold">
                            TZNY and TCAKE holders as of July 5th 00:00am EST
                            will get a Punkz Token airdrop.
                        </Body1>
                        <Body1 className="italic text-punkz-gray-1">
                            Details about the initial airdrops and schedule are
                            coming soon.
                        </Body1>
                        <Body1>
                            <TwitterLogoSmall className="w-[26px] h-[21px] mr-5 inline-block -mt-1" />
                            Follow Punkz on
                            <a
                                className="underline transition-colors hover:text-punkz-pink-2 mx-2 inline-block"
                                target="_blank"
                                href="https://twitter.com/Punkz_Token"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                            for the latest updates.
                        </Body1>
                    </BigBox>
                    <BottomCut className="hidden lg:block absolute right-0 bottom-0 w-[calc(80%+28px)]" />
                </div>
                <div className="relative lg:h-[440px] bg-punkz-dark-blue-1 grid grid-cols-1 lg:grid-cols-[65fr,35fr]">
                    <TopCut className="hidden lg:block absolute top-0 left-0 w-[calc(80%+28px)]" />
                    <BigBox
                        className={`lg:pr-[47px] order-2 lg:order-1 ${paddingsLeft}`}
                        innerClassName="lg:ml-auto"
                    >
                        <Body1 className="font-bold">
                            Not TZNY or TCAKE holders?
                            <br />
                            The Punkz Droplist is for you!
                        </Body1>
                        <Body1>
                            It is for anyone who has their wallet address
                            pre-approved and meets other set requirements to
                            receive Punkz airdrops.
                        </Body1>
                        <Body1 className="italic text-punkz-gray-1">
                            Details about how to get on to the Punkz Droplist
                            are coming soon
                        </Body1>
                    </BigBox>
                    <SmallBox
                        className={`order-1 lg:order-2 lg:pl-[77px] bg-punkz-blue-1 ${paddingsRight}`}
                    >
                        <H2 className="lg:max-w-[300px] lg:mr-auto text-punkz-black-1">
                            Punkz Droplist
                        </H2>
                    </SmallBox>
                    <BottomCut className="hidden lg:block absolute right-0 bottom-0 w-[20%]" />
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageAirdropsV1
