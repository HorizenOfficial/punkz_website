import React from "react"
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
                <div className="bg-punkz-dark-blue-1 py-[73px]">
                    <ContentContainer>
                        <a
                            href="https://horizen.io/invite/discord"
                            className="flex flex-col justify-center items-center"
                        >
                            <DiscordLogo />
                            <H2 className="!text-5xl mt-[18px]">
                                Join the Punkz
                            </H2>
                        </a>
                    </ContentContainer>
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageDiscord
