import React from "react"
import Logo from "./Icon/Logo"
import { ContentContainer, SectionContainer } from "./Layout/index"

const Header = () => {
    return (
        <header className="relative z-10">
            <SectionContainer>
                <hr className="border-t-[8px] border-punkz-pink-1" />
                <ContentContainer>
                    <div className="h-[160px] flex justify-center items-center">
                        <a href="/" className="mx-auto flex justify-center">
                            <Logo className="max-w-[80px] lg:max-w-[130px]" />
                        </a>
                    </div>
                </ContentContainer>
            </SectionContainer>
        </header>
    )
}

export default Header
