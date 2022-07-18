import React from "react"
import DiscordLogoSmall from "./Icon/DiscordLogoSmall"
import Logo from "./Icon/Logo"
import TwitterLogoSmall from "./Icon/TwitterLogoSmall"
import { ContentContainer, SectionContainer } from "./Layout"
import { Link1, Small1 } from "./Typography"

const Footer = () => {
    return (
        <footer>
            <SectionContainer>
                <div className="bg-punkz-black-1">
                    <ContentContainer>
                        <div className="flex items-center py-[48px] gap-y-[30px] flex-col md:flex-row md:py-[86px]">
                            <a href="/">
                                <Logo />
                            </a>

                            <div className="flex flex-col gap-y-[14px] text-center justify-center md:flex-row md:ml-[60px] md:gap-x-[50px]">
                                <Link1 href="#airdrops">Airdrops</Link1>
                                <Link1 href="#get-started">Get Started</Link1>
                                <Link1 href="#about-punkz">About Punkz</Link1>
                            </div>

                            <div className="flex items-center gap-x-[30px] md:ml-auto">
                                <a
                                    href="https://twitter.com/Punkz_Token"
                                    target="_blank"
                                    className="group"
                                    rel="noreferrer"
                                >
                                    <TwitterLogoSmall className="transition-colors group-hover:fill-punkz-pink-2" />
                                </a>
                                <a
                                    href="https://horizen.io/invite/discord"
                                    target="_blank"
                                    className="group"
                                    rel="noreferrer"
                                >
                                    <DiscordLogoSmall className="transition-colors group-hover:fill-punkz-pink-2" />
                                </a>
                            </div>
                        </div>
                    </ContentContainer>
                </div>
                <div className="bg-punkz-pink-2 text-center py-[8px]">
                    <ContentContainer>
                        <Small1 className="block m-auto max-w-[180px] md:max-w-none">
                            © 2022 Punkz Token. All Rights Reserved.
                        </Small1>
                    </ContentContainer>
                </div>
            </SectionContainer>
        </footer>
    )
}

export default Footer
