import React from "react"
import Brushstroke from "../../global/Icon/Brushstroke"
import DiscordLogo from "../../global/Icon/DiscordLogo"
import { H2 } from "../../global/Typography"

const HomepageDiscord: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props}>
            <div className="sm:py-[50px] lg:py-[100px]">
                <div className="px-6 md:px-12 lg:px-8">
                    <div className="max-w-[500px] h-[225px] m-auto">
                        <a
                            href="https://discord.gg/QSKMpzYDrJ"
                            target="_blank"
                            className="flex flex-col items-center relative group"
                            rel="noreferrer"
                        >
                            <Brushstroke className="absolute w-full z-0 group-hover:fill-primary" />
                            <DiscordLogo className="relative z-10" />
                            <H2 className="!text-5xl lg:mt-[12px] relative z-10">
                                Join the Punkz
                            </H2>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepageDiscord
