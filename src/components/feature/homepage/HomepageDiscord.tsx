import React from "react"
import Brushstroke from "../../global/Icon/Brushstroke"
import DiscordLogo from "../../global/Icon/DiscordLogo"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import { H2 } from "../../global/Typography"

const HomepageDiscord: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props}>
            <SectionContainer>
                <div className="sm:py-[50px] lg:py-[100px]">
                    <ContentContainer>
                        <div className="max-w-[500px] h-[225px] m-auto">
                            <a
                                href="https://horizen.io/invite/discord"
                                target="_blank"
                                className="flex flex-col justify-center items-center relative group"
                                rel="noreferrer"
                            >
                                <Brushstroke className="absolute w-full z-0 group-hover:fill-punkz-pink-3" />
                                <DiscordLogo className="relative z-10" />
                                <H2 className="!text-5xl mt-[18px] relative z-10">
                                    Join the Punkz
                                </H2>
                            </a>
                        </div>
                    </ContentContainer>
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageDiscord
