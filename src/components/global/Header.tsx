import React from "react"
import Logo from "./Icon/Logo"
import LogoSmall from "./Icon/LogoSmall"
import { ContentContainer, SectionContainer } from "./Layout/index"

const Header = () => {
    return (
        <header className="relative z-10">
            <SectionContainer>
                <hr className="hidden lg:block border-t-[8px] border-primary-light" />
                <ContentContainer>
                    <div className="h-[80px] lg:h-[160px] flex justify-center items-center">
                        <a href="/" className="mx-auto flex justify-center">
                            <Logo className="hidden lg:block max-w-[80px] lg:max-w-[130px]" />
                            <LogoSmall className="block lg:hidden" />
                        </a>
                    </div>
                </ContentContainer>
            </SectionContainer>
        </header>
    )
}

export default Header
