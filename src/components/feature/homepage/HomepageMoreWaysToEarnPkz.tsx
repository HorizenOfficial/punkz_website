import React from "react"
import TwitterLogoSmall from "../../global/Icon/TwitterLogoSmall"
import WhiteCheck from "../../global/Icon/WhiteCheck"
import { H2, Body1 } from "../../global/Typography"

const HomepageMoreWaysToEarnPkz: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props} id="airdrops">
            <div className="grid grid-cols-1 lg:grid-cols-[35fr,65fr]">
                <div className="bg-primary-light py-10 px-6 md:px-12 lg:pl-8 lg:pt-[88px] lg:pr-[72px] lg:text-right">
                    <H2 className="text-left lg:max-w-[300px] lg:text-right lg:ml-auto">
                        MORE WAYS TO EARN $PKZ
                    </H2>
                </div>
                <div className="bg-secondary-dark px-6 pt-10 pb-12 md:px-12 lg:pt-[88px] lg:pr-8 lg:pl-[45px] lg:pb-[100px]">
                    <div className="lg:max-w-[730px]">
                        <Body1 className="font-bold">
                            The initial airdrop was completed in September 2022.
                        </Body1>
                        <Body1 className="mt-6 font-light">
                            It is for anyone who has their wallet address
                            pre-approved and meets other set requirements to
                            receive Punkz airdrops.
                        </Body1>
                        <Body1 className="italic text-gray mt-6">
                            Details about how to get on to the Punkz Droplist
                            are coming soon.
                        </Body1>
                        <Body1 className="mt-6 font-thin">
                            <TwitterLogoSmall className="w-[26px] h-[21px] mr-5 inline-block -mt-1" />
                            Follow Punkz on
                            <a
                                className="underline transition-colors hover:text-primary-light mx-2 inline-block"
                                target="_blank"
                                href="https://twitter.com/Punkz_Token"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                            for the latest updates.
                        </Body1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepageMoreWaysToEarnPkz
