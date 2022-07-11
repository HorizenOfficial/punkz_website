import React from "react"
import Logo from "./Icon/Logo"
import { ContentContainer } from "./Layout/index"

const Header = () => {
    return (
        <header>
            <hr className="border-[4px] border-punkz-pink-1 md:border-[8px]" />
            <ContentContainer>
                <div>
                    <a
                        href="/"
                        className="mx-auto py-[20px] flex justify-center md:py-[40px]"
                    >
                        <Logo className="max-w-[80px] md:max-w-[130px]" />
                    </a>
                </div>
            </ContentContainer>
        </header>
    )
}

export default Header
