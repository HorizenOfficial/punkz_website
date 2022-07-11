import React from "react"
import HomepageHeroFrame from "../../global/Icon/HomepageHeroFrame"
import { ContentContainer, SectionContainer } from "../../global/Layout"
import heroImg from "../../../assets/images/hero.png"
import HomepageHeroLogo from "../../global/Icon/HomepageHeroLogo"

const HomepageHero = () => {
    return (
        <header className="relative ">
            <SectionContainer className="relative">
                <img
                    src={heroImg}
                    alt="hero-img"
                    className="max-h-[70vh] m-auto w-full object-fill"
                />
                <HomepageHeroFrame
                    width="100%"
                    className="absolute inset-x-auto -top-[14px] w-full px-[90px] z-10"
                />
                <HomepageHeroFrame
                    width="100%"
                    className="rotate-180 absolute inset-x-auto -bottom-[14px] w-full px-[90px] z-10"
                />
                <div className="absolute h-full left-0 right-1/2 top-0 bg-punkz-black-1/50 flex flex-col justify-center items-center">
                    <div className="pl-[40px] max-w-[450px]">
                        <HomepageHeroLogo className="max-w-full" />
                        <p className="font-proxima text-punkz-white-1 font-bold text-[26px]">
                            Punkz Token (PKZ) is a meme token for all cypherpunk
                            rockstars in the galaxy.
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </header>
    )
}

export default HomepageHero
