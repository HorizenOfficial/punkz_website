import React from "react"
import DiscordLogoSmall from "./Icon/DiscordLogoSmall"
import Logo from "./Icon/Logo"
import TwitterLogoSmall from "./Icon/TwitterLogoSmall"
import { Link1, Small1 } from "./Typography"

const Footer = () => {
    return (
        <footer>
            <div className="bg-black">
                <div className="px-6 md:px-12 lg:px-8">
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
                                <TwitterLogoSmall className="transition-colors group-hover:fill-primary-light" />
                            </a>
                            <a
                                href="https://discord.gg/QSKMpzYDrJ"
                                target="_blank"
                                className="group"
                                rel="noreferrer"
                            >
                                <DiscordLogoSmall className="transition-colors group-hover:fill-primary-light" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block border-b-primary-light -mt-[25px] border-b-[25px] border-x-[20px] border-x-transparent w-[424px] mx-auto" />
            <div className="bg-primary-light text-center py-[8px]">
                <div className="px-6 md:px-12 lg:px-8">
                    <Small1 className="block m-auto max-w-[180px] md:max-w-none">
                        © 2022 Punkz Token. All Rights Reserved.
                    </Small1>
                </div>
            </div>
        </footer>
    )
}

export default Footer
