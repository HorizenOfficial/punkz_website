import React from "react"
import PunkZGameImg from "../../../assets/images/punkz-play-and-earn.png"
import { H2, Body1 } from "../../global/Typography"
import { ButtonPrimary } from "../../global/Button"
import PipeflareLogo from "../../global/Icon/PipeflareLogo"
import TokenmintLogo from "../../global/Icon/TokenmintLogo"

const HomepagePlayAndEarn: React.FC<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <section {...props} id="get-started">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 xl:gap-16">
                <div className="flex flex-col px-6 md:pl-12 justify-center order-2 md:order-1">
                    <img
                        src={PunkZGameImg}
                        alt="PunkZ game"
                        className="h-auto lg:h-[250px] xl:h-[334px] md:object-contain"
                    />

                    <div className="flex justify-center gap-16 mt-7">
                        <div>
                            <Body1 className="text-gray mb-2 text-center text-lg lg:text-xl">
                                Powered by
                            </Body1>
                            <TokenmintLogo className="max-w-full" />
                        </div>
                        <div>
                            <Body1 className="text-gray text-center text-lg lg:text-xl">
                                Developed
                            </Body1>
                            <PipeflareLogo className="max-w-full" />
                        </div>
                    </div>
                </div>
                <div className="px-6 md:px-12 md:pl-0 md:mt-[60px] lg:mt-[130px] w-full order-1 md:order-2">
                    <H2>
                        Play and
                        <br />
                        earn $pkz
                    </H2>

                    <ul className="pl-4 mt-[40px]">
                        <li className="list-disc marker:text-white">
                            <Body1>Weekly leaderboard rewards</Body1>
                        </li>
                        <li className="list-disc marker:text-white">
                            <Body1>Instant withdraw</Body1>
                        </li>
                    </ul>

                    <div className="flex flex-col md:flex-row items-center gap-y-8 gap-x-5 lg:gap-x-16 mt-[40px]">
                        <ButtonPrimary
                            href="https://pipeflare.io/game/punkz-hero"
                            className="block"
                        >
                            Play Now
                        </ButtonPrimary>

                        <a
                            className="text-primary hover:text-primary-light hover:underline transition-colors min-w-fit"
                            href="https://blog.pipeflare.io/how-to-download-cobalt-wallet-and-withdraw-pkz-tokens-on-pipeflare/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Player’s Guide
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepagePlayAndEarn
