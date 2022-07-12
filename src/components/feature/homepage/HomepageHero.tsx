import React from "react"
import HomepageHeroFrame from "../../global/Icon/HomepageHeroFrame"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import heroImg from "../../../assets/images/hero.png"
import HomepageHeroLogo from "../../global/Icon/HomepageHeroLogo"
import HomepageHeroLinkBox from "../../global/Icon/HomepageHeroLinkBox"
import HomepageHeroLinkArrow from "../../global/Icon/HomepageHeroLinkArrow"

const HomepageHero = () => {
    const renderLinks = (): JSX.Element[] => {
        const elements: JSX.Element[] = []
        const links = [
            {
                text: "About Punkz",
                href: "/",
            },
            {
                text: "Get Started",
                href: "/",
            },
            {
                text: "Airdrops",
                href: "/",
            },
        ]

        links.forEach((link) =>
            elements.push(
                <a href={link.href} className="group w-[160px]" key={link.text}>
                    <span className="font-proxima font-bold text-[18px] transition-all group-hover:ml-2 flex gap-5 items-center text-[#B4BBCC] hover:text-white">
                        <HomepageHeroLinkArrow className="transition-colors stroke-[#B4BBCC] group-hover:stroke-punkz-pink-2" />
                        {link.text}
                    </span>
                </a>
            )
        )
        return elements
    }

    return (
        <section className="-mt-[80px] z-0 relative">
            <SectionContainer>
                <img
                    src={heroImg}
                    alt="hero-img"
                    className="m-auto w-full max-h-[min(90vh,900px)] object-fill"
                />

                <div className="absolute grid grid-cols-2 inset-0">
                    <div className="bg-punkz-black-1/50" />
                    <div />
                </div>

                <ContentContainer className="absolute inset-0">
                    <div className="absolute inset-0">
                        <HomepageHeroFrame
                            width="100%"
                            className="absolute inset-x-auto top-[55px] z-10 px-[80px] xl:px-0"
                        />
                        <HomepageHeroFrame
                            width="100%"
                            className="absolute rotate-180 inset-x-auto bottom-[55px] z-10 px-[80px] xl:px-0"
                        />

                        <div className="absolute inset-0 grid gap-[100px] grid-cols-2 items-center justify-items-center px-[120px] xl:px-[80px]">
                            <div className="flex flex-col items-center">
                                <HomepageHeroLogo className="max-w-[456px] h-full w-full" />
                                <p className="font-proxima text-punkz-white-1 font-bold mt-[20px] text-[22px] xl:text-[26px]">
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
                </ContentContainer>
            </SectionContainer>
        </section>
    )
}

export default HomepageHero
