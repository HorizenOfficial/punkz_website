import React from "react"
import HomepageHeroFrame from "../../global/Icon/HomepageHeroFrame"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import heroImg from "../../../assets/images/hero.png"
import heroSmallImg from "../../../assets/images/hero-small.png"
import HomepageHeroLogo from "../../global/Icon/HomepageHeroLogo"
import HomepageHeroLinkBox from "../../global/Icon/HomepageHeroLinkBox"
import HomepageHeroLinkArrow from "../../global/Icon/HomepageHeroLinkArrow"
import { Body1 } from "../../global/Typography"

const HomepageHero = () => {
    const renderLinks = (): JSX.Element[] => {
        const links = [
            {
                text: "Airdrops",
                href: "#airdrops",
            },
            {
                text: "Get Started",
                href: "#get-started",
            },
            {
                text: "About Punkz",
                href: "#about-punkz",
            },
        ]

        return links.map((link) => (
            <a
                href={link.href}
                key={link.text}
                className="group w-[160px] transition-all lg:hover:ml-2 flex items-center flex-col lg:flex-row lg:gap-x-5"
            >
                <HomepageHeroLinkArrow className="transition-colors stroke-primary-light rotate-90 lg:rotate-0 lg:stroke-[#B4BBCC] group-hover:stroke-primary-light" />
                <span className="font-proxima font-bold text-[18px] text-white lg:text-[#B4BBCC] hover:text-white">
                    {link.text}
                </span>
            </a>
        ))
    }

    return (
        <section>
            <SectionContainer>
                <div className="hidden -mt-[80px] z-0 relative lg:block">
                    <img
                        src={heroImg}
                        alt="hero-img"
                        className="m-auto w-full max-h-[min(90vh,900px)] object-fill"
                    />

                    <div className="absolute grid grid-cols-2 inset-0">
                        <div className="bg-black/50 backdrop-blur-[7px]" />
                        <div />
                    </div>

                    <div className="absolute inset-0">
                        <HomepageHeroFrame
                            width="100%"
                            className="absolute inset-x-auto top-[55px] z-10 px-6 md:px-12 lg:px-8 xl:px-2"
                        />
                        <HomepageHeroFrame
                            width="100%"
                            className="absolute rotate-180 inset-x-auto bottom-[55px] z-10 px-6 md:px-12 lg:px-8 xl:px-2"
                        />

                        <div className="absolute inset-0 grid gap-[100px] grid-cols-2 items-center justify-items-center max-w-screen-xl mx-auto px-6 md:px-12 lg:px-8 xl:px-14">
                            <div className="flex flex-col items-center max-w-[456px] pl-[40px] xl:pl-0">
                                <HomepageHeroLogo className="h-full w-full" />
                                <p className="font-proxima text-white font-bold mt-[20px] text-[22px] xl:text-[26px]">
                                    Punkz Token (PKZ) is a meme token for all
                                    cypherpunk rockstars in the galaxy.
                                </p>
                            </div>

                            <div className="h-[223px] w-[330px]">
                                <HomepageHeroLinkBox className="absolute inset z-0" />
                                <div className="relative z-1 h-full flex flex-col gap-[30px] justify-center items-center ">
                                    {renderLinks()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden">
                    <ContentContainer>
                        <div className="flex flex-col items-center justify-center">
                            <HomepageHeroFrame className="w-full flex" />
                            <HomepageHeroLogo className="w-[240px] h-[137px] relative z-10 mt-[15px] md:mt-[100px]" />
                            <Body1 className="font-bold max-w-[400px] text-center mt-4 relative z-10">
                                Punkz Token (PKZ) is a meme token for all
                                cypherpunk rockstars in the galaxy.
                            </Body1>
                            <div className="relative max-w-[100vw] w-[100vw] -mt-7 z-0 md:-mt-[280px]">
                                <img
                                    src={heroImg}
                                    alt="hero-img"
                                    className="hidden md:block max-h-[400px] object-fill w-full opacity-80"
                                />
                                <img
                                    src={heroSmallImg}
                                    alt="hero-img"
                                    className="block md:hidden max-h-[400px] object-fill w-full"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-9 relative z-10 gap-5 md:flex-row">
                                {renderLinks()}
                            </div>
                            <HomepageHeroFrame className="rotate-180 w-full mt-11" />
                        </div>
                    </ContentContainer>
                </div>
            </SectionContainer>
        </section>
    )
}

export default HomepageHero
